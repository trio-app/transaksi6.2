Ext.define('Almindo.Mcustomer.view.FRM_mcustomer',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_mcustomer',
    frame: true,
    height: 400,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Customer</p>',
        },{
        xtype: 'form',
        border: 0,
        layout: 'anchor',
        bodyStyle: 'background:none;',
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [{
            readOnly: true,
            xtype: 'hidden',
            name: 'customer_id',
            fieldLabel: 'ID'
        },{
            name: 'customer_nama',
            flex: 1,
            fieldLabel: 'Nama Perusahaan ',
            labelAlign: 'top',
            allowBlank: false
        },{
            xtype: 'textarea',
            name: 'customer_alamat',
            flex: 1,
            fieldLabel: 'Alamat ',
            labelAlign: 'top',
            allowBlank: true
        },{
            name: 'customer_telp',
            flex: 1,
            fieldLabel: 'No. Telp ',
            labelAlign: 'top',
            allowBlank: true
        },{
            name: 'customer_cp',
            flex: 1,
            fieldLabel: 'Contact Person ',
            labelAlign: 'top',
            allowBlank: true
        },{
            name: 'customer_email',
            flex: 1,
            fieldLabel: 'Email ',
            labelAlign: 'top',
            allowBlank: true
        }]
}],
    buttons: [{
        text: 'Save',
        action: 'add'
    },{
        text    : 'Reset',
        handler : function () { 
            var frm = this.up('panel');
            frm.down('form').getForm().reset(); 
            frm.setActions('add');
        }
    }] 
});