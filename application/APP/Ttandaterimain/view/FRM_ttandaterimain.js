Ext.define('Almindo.Ttandaterimain.view.FRM_ttandaterimain',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_ttandaterimain',
    id: 'FRM_ttandaterimain',
    //frame: true,
    margin: '10 10 0 10',
    config: {
        recordIndex: 0,
        action: ''
    },   
    items: [{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 5 5 5'
        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                flex : 1,
                name: 'receipt_doc',
                id: 'receipt_doc',
                xtype: 'textfield',
                fieldLabel: 'No. Document',
                emptyText: 'Auto Number',
                readOnly: true,
                labelWidth:120,
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                allowBlank: false
            },{
                margin: '0 0 0 10',
                action: 'btn_document',
                xtype: 'button',
                tooltip: 'Klik untuk melihat Nomor Document',
                icon: extjs_url + 'resources/ext-theme-classic/images/grid/refresh.gif',
            }]
        },{
            xtype: 'datefield',
            fieldLabel: 'Document Date ',
            name:'receipt_date',
            labelWidth:120,
            format: 'Y-m-d',
            value: new Date(),
            allowBlank: false
        },{
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Tujuan ',
            name: 'receipt_from',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            value: 'ALMINDO PRATAMA CV.',
            allowBlank: false
            
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
        },
        items: [{
            name: 'customer_id',
            margin: '5 5 5 5',
            readOnly: true,
            xtype: 'hidden',
        },{
            name: 'customer_nama',
            allowBlank: false,
            margin: '5 5 5 5',
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Dikirim Dari',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '5 10'
        },
        items: [{
            xtype: 'box',
            flex: 1
        },{
            icon: extjs_url + 'resources/ext-theme-classic/images/grid/group-by.gif',
            xtype: 'button',
            text: 'View List Data Tanda Terima IN',
            handler: function(){
                var tab = Ext.getCmp('TAB_ttandaterimain');
                tab.setActiveTab(1);
            }
        },{
            icon: base_url + 'system/img/user_add.gif',
            xtype: 'button',
            action: 'add_cust',
            text: 'Pilih Customer'
        }]
    }]
});