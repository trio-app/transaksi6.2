Ext.define('Almindo.Rtindate.view.FRM_rtindate',{
                extend: 'Ext.form.Panel',
                title: 'Report Tanda Terima IN By Date',
                alias: 'widget.FRM_rtindate',
                border : '1',
                layout: {
                        type: 'vbox',
                        align: 'stretch'
                },
                padding: '0 0 10px',
                items: [{
                        html: '<p>Report Tanda Terima Berdasarkan Tanggal Transaksi</p>',
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
                            margin : '5 0',
                            items :[{    
                                        padding: '0 10 0 0',
                                        xtype:'datefield',
                                        name:'from_date',
                                        fieldLabel: 'From',
                                        editable: false,
                                        //vfield:'startDate',
                                        //vtype: 'DateRange',
                                        format:'Y-m-d',
                                        allowBlank: 'false',
                                        //endDateField: 'endDate',
                                        
                            },{    
                                        padding: '0 10 0 0',
                                        xtype:'datefield',
                                        name:'to_date',
                                        fieldLabel: 'To',
                                        editable: false,
                                        //vfield:'endDate',
                                        //vtype: 'DateRange',
                                        //minValue: Ext.Date.add(new Date(), Ext.Date.DAY, -3),
                                        //maxValue: Ext.Date.add(new Date(),Ext.Date.format,'Y-m-d'),
                                        format:'Y-m-d',
                                        allowBlank: 'false',
                                        
                            },{
                                xtype: 'button',
                                itemId: 'searchfilter',
                                text: 'Search',
                                action: 'searchfilter',
                            }]           
			}] 
                    }
                ]
            });