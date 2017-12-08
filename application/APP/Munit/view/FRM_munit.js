Ext.define('Almindo.Munit.view.FRM_munit',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_munit',
    frame: true,
    border: 0,
    height: 400,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master unit</p>',
        },{
        xtype: 'form',
        bodyStyle: 'background:none;',
        border: 0,
        layout: 'anchor',
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [{
            readOnly: true,
            xtype: 'hidden',
            name: 'unit_id',
            fieldLabel: 'ID'
        },{
            name: 'unit_nama',
            flex: 1,
            fieldLabel: 'Nama unit ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'unit_desc',
            flex: 1,
            fieldLabel: 'Description ',
            labelAlign: 'top',
            //allowBlank: false
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