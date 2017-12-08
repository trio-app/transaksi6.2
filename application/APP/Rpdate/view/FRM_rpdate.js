 Ext.define('Almindo.Rpdate.view.FRM_rpdate',{
                extend: 'Ext.form.Panel',
                title: 'Report Packinglist By Date',
                alias: 'widget.FRM_rpdate',
                //padding : '5',

                layout: {
                        type: 'vbox',
                        align: 'stretch'
                },
                padding: '0 0 10px',
                items: [{
                        html: '<p>Report Packinglist Berdasarkan Transaksi ByDate</p>',
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
                                    padding: '0 25 0 0',
                                    xtype:'datefield',
                                    name:'from_date',
                                    fieldLabel: 'From',
                                    labelWidth:'5',
                                    editable: false,
                                    format:'Y-m-d',
                                    width:'30%',
                                    allowBlank: 'false',
                            },{    
                                    padding: '0 25 0 0',
                                    xtype:'datefield',
                                    name:'to_date',
                                    fieldLabel: 'To',
                                    labelWidth:'5',
                                    editable: false,
                                    alue: Ext.Date.add(new Date(),Ext.Date.format,'Y-m-d'),
                                    format:'Y-m-d',
                                    width:'30%',
                                    allowBlank: 'false',
                                        
                            },{
                                xtype: 'button',
                                itemId: 'searchfilter',
                                text: 'Search',
                                action: 'searchfilter'
                            }]
                    }]           
			    }]                                                   
                      
        });