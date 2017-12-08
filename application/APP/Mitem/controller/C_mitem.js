Ext.define('Almindo.Mitem.controller.C_mitem',{
        extend: 'Ext.app.Controller',
        views: [
                'Almindo.Mitem.view.GRID_mitem',
                'Almindo.Mitem.view.FRM_mitem'
        ],
        stores  : [
                //'Almindo.Mitem.store.ST_mitem'
        ],
        refs: [{
                ref: 'FRM_mitem',
                xtype: 'FRM_mitem',
                selector: 'FRM_mitem',
                autoCreate: true
        },{
                ref: 'GRID_mitem',
                xtype: 'GRID_mitem',
                selector: 'GRID_mitem',
                autoCreate: true
        }],
        init: function(){
                this.control({										
                        'GRID_mitem' :{
                                itemdblclick: this.onRowdblclick,
                                removeitem: this.deleteItem
                        },
                        'FRM_mitem button[action=add]':{
                                click: this.doSaveform
                        },
                });
        },
        onRowdblclick: function(me, record, item, index){							
               var form = Ext.getCmp('FRM_mitem').down('form');
               form.up().setActions('edit');
               form.getForm().setValues(record.getData());
        },
        deleteItem:function (record) {
                Ext.Msg.confirm('Delete Data','Delete <b>' + record.data.item_nama + '</b>.<br> Are you sure?', function (button) {
                        if (button == 'yes') {
                                this.doProsesCRUD('delete',record);
                        }
                }, this);
        },
        doProsesCRUD : function (inAction,record){
                var grid = Ext.getCmp('GRID_mitem');
                var form = Ext.getCmp('FRM_mitem');
                var store = grid.getStore();//Ext.getStore('ScontactStore');
                Ext.Ajax.request({
                        url: base_url + 'Mitem/' +  inAction,
                        method: 'POST',
                        //type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response, o){
                                switch(inAction) {
                                        case 'delete':
                                            console.log(o);
                                                store.load();
                                                Ext.toast({
                                                    html: 'Delete Item Success',
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
                                                    html: 'Create Item Success',
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
                                                    html: 'Update Item Success',
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
                var form = Ext.getCmp('FRM_mitem').down('form');
                var values = form.getValues();
                var record = form.getRecord();
                var action = form.up().getActions();
                var recValue = Ext.create('Almindo.Mitem.model.M_mitem', values);
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