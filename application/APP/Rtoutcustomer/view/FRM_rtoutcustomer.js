Ext.define('Almindo.Rtoutcustomer.view.FRM_rtoutcustomer',{
    extend: 'Ext.form.Panel',
    title: 'Report Tanda Terima Out By Customer',
    alias: 'widget.FRM_rtoutcustomer',
    layout: {
            type: 'vbox',
            align: 'stretch'
    },
    padding: '0 0 10px',
    items: [{
            html: '<p>Report Tanda Terima Out Berdasarkan Transaksi Customer</p>',
            padding: '0 5',
            border: 0
        },{
            layout: 'anchor',
            xtype: 'form',
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
                            url: base_url + 'MCustomer/cbolist',
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