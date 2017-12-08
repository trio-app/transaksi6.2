Ext.define('Almindo.Mmerk.controller.C_mmerk',{
        extend: 'Ext.app.Controller',
        views: [
                'Almindo.Mmerk.view.GRID_mmerk',
                'Almindo.Mmerk.view.FRM_mmerk'
        ],
        stores  : [
                //'Almindo.Mmerk.store.ST_mmerk'
        ],
        refs: [{
                ref: 'FRM_mmerk',
                xtype: 'FRM_mmerk',
                selector: 'FRM_mmerk',
                autoCreate: true
        },{
                ref: 'GRID_mmerk',
                xtype: 'GRID_mmerk',
                selector: 'GRID_mmerk',
                autoCreate: true
        }],
        init: function(){
                this.control({										
                        'GRID_mmerk' :{
                                itemdblclick: this.onRowdblclick,
                                removeitem: this.deleteItem
                        },
                        'FRM_mmerk button[action=add]':{
                                click: this.doSaveform
                        },
                });
        },
        onRowdblclick: function(me, record, item, index){							
               var form = Ext.getCmp('FRM_mmerk').down('form');
               form.up().setActions('edit');
               form.getForm().setValues(record.getData());
        },
        deleteItem:function (record) {
                Ext.Msg.confirm('Delete Data','Delete <b>' + record.data.merk_nama + '</b>.<br> Are you sure?', function (button) {
                        if (button == 'yes') {
                                this.doProsesCRUD('delete',record);
                        }
                }, this);
        },
        doProsesCRUD : function (inAction,record){
                var grid = Ext.getCmp('GRID_mmerk');
                var form = Ext.getCmp('FRM_mmerk');
                var store = grid.getStore();//Ext.getStore('ScontactStore');
                Ext.Ajax.request({
                        url: base_url + 'Mmerk/' +  inAction,
                        method: 'POST',
                        //type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response, o){
                                switch(inAction) {
                                        case 'delete':
                                            console.log(o);
                                                store.load();
                                                Ext.toast({
                                                    html: 'Delete Merk Success',
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
                                                    html: 'Create Merk Success',
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
                                                    html: 'Update Merk Success',
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
                var form = Ext.getCmp('FRM_mmerk').down('form');
                var values = form.getValues();
                var record = form.getRecord();
                var action = form.up().getActions();
                var recValue = Ext.create('Almindo.Mmerk.model.M_mmerk', values);
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