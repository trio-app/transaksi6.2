Ext.define('Almindo.TTterimaout.view.FRM_tterimaout',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_tterimaout',
    id:'FRM_tterimaout',
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
                name: 'receiptout_doc',
                id: 'receiptout_doc',
                xtype: 'textfield',
                fieldLabel: 'No. Document',
                emptyText: 'Auto Number',
                readOnly: true,
                labelWidth:120,
                fieldStyle: 'background-color: #ffa144; background-image: none;',
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
            name:'receiptout_date',
            labelWidth:120,
            format: 'Y-m-d',
            value: new Date()
        },{
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Dari ',
            name: 'receiptout_from',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            value: 'ALMINDO PRATAMA CV.'
            
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
            fieldLabel: 'Tujuan ',
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
            text: 'View List Data Tanda Terima OUT',
            handler: function(){
                var tab = Ext.getCmp('TAB_tterimaout');
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