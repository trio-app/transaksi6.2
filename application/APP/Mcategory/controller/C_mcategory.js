Ext.define('Almindo.Mcategory.controller.C_mcategory',{
        extend: 'Ext.app.Controller',
        views: [
                'Almindo.Mcategory.view.GRID_mcategory',
                'Almindo.Mcategory.view.FRM_mcategory'
        ],
        stores  : [
                //'Almindo.Mcategory.store.ST_mcategory'
        ],
        refs: [{
                ref: 'FRM_mcategory',
                xtype: 'FRM_mcategory',
                selector: 'FRM_mcategory',
                autoCreate: true
        },{
                ref: 'GRID_mcategory',
                xtype: 'GRID_mcategory',
                selector: 'GRID_mcategory',
                autoCreate: true
        }],
        init: function(){
                this.control({										
                        'GRID_mcategory' :{
                                itemdblclick: this.onRowdblclick,
                                removeitem: this.deleteItem
                        },
                        'FRM_mcategory button[action=add]':{
                                click: this.doSaveform
                        },
                });
        },
        onRowdblclick: function(me, record, item, index){							
               var form = Ext.getCmp('FRM_mcategory').down('form');
               form.up().setActions('edit');
               form.getForm().setValues(record.getData());
        },
        deleteItem:function (record) {
                Ext.Msg.confirm('Delete Data','Delete <b>' + record.data.category_nama + '</b>.<br> Are you sure?', function (button) {
                        if (button == 'yes') {
                                this.doProsesCRUD('delete',record);
                        }
                }, this);
        },
        doProsesCRUD : function (inAction,record){
                var grid = Ext.getCmp('GRID_mcategory');
                var form = Ext.getCmp('FRM_mcategory');
                var store = grid.getStore();//Ext.getStore('ScontactStore');
                Ext.Ajax.request({
                        url: base_url + 'Mcategory/' +  inAction,
                        method: 'POST',
                        //type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response, o){
                                switch(inAction) {
                                        case 'delete':
                                            console.log(o);
                                                store.load();
                                                Ext.toast({
                                                    html: 'Delete Category Success',
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
                                                    html: 'Create Category Success',
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
                                                    html: 'Update Category Success',
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
                var form = Ext.getCmp('FRM_mcategory').down('form');
                var values = form.getValues();
                var record = form.getRecord();
                var action = form.up().getActions();
                var recValue = Ext.create('Almindo.Mcategory.model.M_mcategory', values);
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