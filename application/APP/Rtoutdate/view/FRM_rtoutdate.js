Ext.define('Almindo.Rtoutdate.view.FRM_rtoutdate',{
    extend: 'Ext.form.Panel',
    title: 'Report Tanda Terima Out By Date',
    alias: 'widget.FRM_rtoutdate',
    border : '1',
    layout: {
            type: 'vbox',
            align: 'stretch'
    },
    padding: '0 0 10px',
    items: [{
            html: '<p>Report Tanda Terima Out Berdasarkan Tanggal Transaksi</p>',
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
                margin : '5 0',
                items :[{    
                            padding: '0 10 0 0',
                            xtype:'datefield',
                            name:'from_date',
                            fieldLabel: 'From',
                            editable: false,
                            format:'Y-m-d',
                            allowBlank: 'false'

                },{    
                            padding: '0 10 0 0',
                            xtype:'datefield',
                            name:'to_date',
                            fieldLabel: 'To',
                            editable: false,
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