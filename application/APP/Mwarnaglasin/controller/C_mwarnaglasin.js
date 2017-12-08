Ext.define('Almindo.Mwarnaglasin.controller.C_mwarnaglasin',{
        extend: 'Ext.app.Controller',
        views: [
                'Almindo.Mwarnaglasin.view.GRID_mwarnaglasin',
                'Almindo.Mwarnaglasin.view.FRM_mwarnaglasin'
        ],
        stores  : [
                //'Almindo.Mwarnaglasin.store.ST_mwarnaglasin'
        ],
        refs: [{
                ref: 'FRM_mwarnaglasin',
                xtype: 'FRM_mwarnaglasin',
                selector: 'FRM_mwarnaglasin',
                autoCreate: true
        },{
                ref: 'GRID_mwarnaglasin',
                xtype: 'GRID_mwarnaglasin',
                selector: 'GRID_mwarnaglasin',
                autoCreate: true
        }],
        init: function(){
                this.control({										
                        'GRID_mwarnaglasin' :{
                                itemdblclick: this.onRowdblclick,
                                removeitem: this.deleteItem
                        },
                        'FRM_mwarnaglasin button[action=add]':{
                                click: this.doSaveform
                        },
                });
        },
        onRowdblclick: function(me, record, item, index){							
               var form = Ext.getCmp('FRM_mwarnaglasin').down('form');
               form.up().setActions('edit');
               form.getForm().setValues(record.getData());
        },
        deleteItem:function (record) {
                Ext.Msg.confirm('Delete Data','Delete <b>' + record.data.warnaglasin_nama + '</b>.<br> Are you sure?', function (button) {
                        if (button == 'yes') {
                                this.doProsesCRUD('delete',record);
                        }
                }, this);
        },
        doProsesCRUD : function (inAction,record){
                var grid = Ext.getCmp('GRID_mwarnaglasin');
                var form = Ext.getCmp('FRM_mwarnaglasin');
                var store = grid.getStore();//Ext.getStore('ScontactStore');
                Ext.Ajax.request({
                        url: base_url + 'Mwarnaglasin/' +  inAction,
                        method: 'POST',
                        //type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response, o){
                                switch(inAction) {
                                        case 'delete':
                                            console.log(o);
                                                store.load();
                                                Ext.toast({
                                                    html: 'Delete Warna Glasin Success',
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
                                                    html: 'Create Warna Glasin Success',
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
                                                    html: 'Update Warna Glasin Success',
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
                var form = Ext.getCmp('FRM_mwarnaglasin').down('form');
                var values = form.getValues();
                var record = form.getRecord();
                var action = form.up().getActions();
                var recValue = Ext.create('Almindo.Mwarnaglasin.model.M_mwarnaglasin', values);
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