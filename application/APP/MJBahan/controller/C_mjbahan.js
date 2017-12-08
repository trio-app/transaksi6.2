Ext.define('Almindo.MJBahan.controller.C_mjbahan',{
        extend: 'Ext.app.Controller',
        views: [
                'Almindo.MJBahan.view.GRID_mjbahan',
                'Almindo.MJBahan.view.FRM_mjbahan'
        ],
        stores  : [
                //'Almindo.MJBahan.store.ST_mjbahan'
        ],
        refs: [{
                ref: 'FRM_mjbahan',
                xtype: 'FRM_mjbahan',
                selector: 'FRM_mjbahan',
                autoCreate: true
        },{
                ref: 'GRID_mjbahan',
                xtype: 'GRID_mjbahan',
                selector: 'GRID_mjbahan',
                autoCreate: true
        }],
        init: function(){
                this.control({										
                        'GRID_mjbahan' :{
                                itemdblclick: this.onRowdblclick,
                                removeitem: this.deleteItem
                        },
                        'FRM_mjbahan button[action=add]':{
                                click: this.doSaveform
                        },
                });
        },
        onRowdblclick: function(me, record, item, index){							
               var form = Ext.getCmp('FRM_mjbahan').down('form');
               form.up().setActions('edit');
               form.getForm().setValues(record.getData());
        },
        deleteItem:function (record) {
                Ext.Msg.confirm('Delete Data','Delete <b>' + record.data.jbahan_nama + '</b>.<br> Are you sure?', function (button) {
                        if (button == 'yes') {
                                this.doProsesCRUD('delete',record);
                        }
                }, this);
        },
        doProsesCRUD : function (inAction,record){
                var grid = Ext.getCmp('GRID_mjbahan');
                var form = Ext.getCmp('FRM_mjbahan');
                var store = grid.getStore();//Ext.getStore('ScontactStore');
                Ext.Ajax.request({
                        url: base_url + 'MJBahan/' +  inAction,
                        method: 'POST',
                        //type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response, o){
                                switch(inAction) {
                                        case 'delete':
                                            console.log(o);
                                                store.load();
                                                Ext.toast({
                                                    html: 'Delete Jenis Bahan Success',
                                                    title: 'Notification',
                                                    width: 200,
                                                    align: 'tr',
                                                    icon: base_url + 'system/images/icons/accept.png',
                                                    timeout: 5000
                                                });
                                            break;
                                        case 'create' :
                                                store.load();
                                                Ext.toast({
                                                    html: 'Create Jenis Bahan Success',
                                                    title: 'Notification',
                                                    width: 200,
                                                    align: 'tr',
                                                    icon: base_url + 'system/images/icons/accept.png',
                                                    timeout: 5000
                                                });
                                            break;
                                        case 'update' :
                                                store.load();
                                                Ext.toast({
                                                    html: 'Update Jenis Bahan Success',
                                                    title: 'Notification',
                                                    width: 200,
                                                    align: 'tr',
                                                    icon: base_url + 'system/images/icons/accept.png',
                                                    timeout: 5000
                                                });
                                            break;
                                }
            form.reset();
            form.setActions('');

                        },
                        failure: function(response){
                                Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                        }
                });
        },						
        doSaveform: function(){
                var form = Ext.getCmp('FRM_mjbahan').down('form');
                var values = form.getValues();
                var record = form.getRecord();
                var action = form.up().getActions();
                var recValue = Ext.create('Almindo.MJBahan.model.M_mjbahan', values);
                console.log(action);

                if(action == 'edit'){
                        if(form.isValid()){
                                this.doProsesCRUD('update',recValue);
                        }
                }else{
                        if(form.isValid()){
                                this.doProsesCRUD('create',recValue);
                        }
                }
        }			
});