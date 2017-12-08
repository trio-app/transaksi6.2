 Ext.define('Almindo.Rpcustomer.view.FRM_rpcustomer',{
                extend: 'Ext.form.Panel',
                title: 'Report Packinglist By Customer',
                alias: 'widget.FRM_rpcustomer',
                //padding : '5',

                layout: {
                        type: 'vbox',
                        align: 'stretch'
                },
                padding: '0 0 10px',
                items: [{
                        html: '<p>Report Packinglist Berdasarkan Transaksi Customer</p>',
                        padding: '0 5',
                        border: 0
                    },{
                        layout: 'anchor',
                        xtype: 'form',
                        //flex: 1,
			bodyStyle: {
                            border: 0,
                            padding: '5px 5px'
			},
			defaults: {
                            xtype: 'textfield',
                            anchor: '100%'
			},
			items: [{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield', 
                            //margin : '5 0',
                            items :[{      
                                width: 420,
                                labelWidth: 100,
                                xtype: 'combo',
                                padding: '0 10 0 0',
                                fieldLabel: 'Pilih Customer',
                                name:'customer_nama',
                                allowBlank: false,
                                displayField: 'customer_nama',
                                valueField :'customer_nama',
                                queryMode:'local',
                                store: Ext.create('Ext.data.ArrayStore', {
                                    autoLoad:true,
                                    fields: [ 'customer_nama' ],
                                    proxy: {
                                        type: 'ajax',
                                        url: base_url + 'Mcustomer/cbolist',
                                        reader: {
                                            type: 'json'
                                        }
                                    }
                                })
                            },{
                                xtype: 'button',
                                itemId: 'searchfilter',
                                text: 'Search',
                                action: 'searchfilter'
                            }]           
			}]                                                   
                    }
                ]   
            });