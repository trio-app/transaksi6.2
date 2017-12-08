Ext.define('Almindo.Mcustomer.controller.C_mcustomer',{
        extend: 'Ext.app.Controller',
        views: [
                'Almindo.Mcustomer.view.GRID_mcustomer',
                'Almindo.Mcustomer.view.FRM_mcustomer'
        ],
        stores  : [
                //'Almindo.Mcustomer.store.ST_mcustomer'
        ],
        refs: [{
                ref: 'FRM_mcustomer',
                xtype: 'FRM_mcustomer',
                selector: 'FRM_mcustomer',
                autoCreate: true
        },{
                ref: 'GRID_mcustomer',
                xtype: 'GRID_mcustomer',
                selector: 'GRID_mcustomer',
                autoCreate: true
        }],
        init: function(){
                this.control({
                        'GRID_mcustomer > toolbar > textfield[itemId=searchData]': {
                                specialkey: this.searchData
                        },										
                        'GRID_mcustomer' :{
                                itemdblclick: this.onRowdblclick,
                                removeitem: this.deleteItem
                        },
                        'FRM_mcustomer button[action=add]':{
                                click: this.doSaveform
                        },
                });
        },
        searchData:function (f,e) {
                //var store = Ext.getStore('Almindo.Mcustomer.store.ST_mcustomer');//Ext.getStore('Almindo.Mcustomer.store.ST_mcustomer');//
                var grid = this.getGRID_mcustomer();
                var store = grid.getStore();
                if (e.getKey() == e.ENTER) {
                        store.remoteFilter = false;
                        store.clearFilter();
                        store.remoteFilter = true;
                        store.filter([{
                                property:'filtername',
                                anyMatch: true,
                                value   : f.value
                        } ]);
                }

        },
        onRowdblclick: function(me, record, item, index){							
               var form = Ext.getCmp('FRM_mcustomer').down('form');
               form.up().setActions('edit');
               form.getForm().setValues(record.getData());
        },
        deleteItem:function (record) {
                Ext.Msg.confirm('Delete Data','Delete <b>' + record.data.customer_nama + '</b>.<br> Are you sure?', function (button) {
                        if (button == 'yes') {
                                this.doProsesCRUD('delete',record);
                        }
                }, this);
        },
        doProsesCRUD : function (inAction,record){
                var grid = Ext.getCmp('GRID_mcustomer');
                var form = Ext.getCmp('FRM_mcustomer');
                var store = grid.getStore();//Ext.getStore('ScontactStore');
                Ext.Ajax.request({
                        url: base_url + 'Mcustomer/' +  inAction,
                        method: 'POST',
                        //type:'json',
                        params: JSON.stringify(record.data),
                        success: function(response, o){
                                switch(inAction) {
                                        case 'delete':
                                            console.log(o);
                                                store.load();
                                                Ext.toast({
                                                    html: 'Delete Customer Success',
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
                                                    html: 'Create Customer Success',
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
                                                    html: 'Update Customer Success',
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
                var form = Ext.getCmp('FRM_mcustomer').down('form');
                var values = form.getValues();
                var record = form.getRecord();
                var action = form.up().getActions();
                var recValue = Ext.create('Almindo.Mcustomer.model.M_mcustomer', values);
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