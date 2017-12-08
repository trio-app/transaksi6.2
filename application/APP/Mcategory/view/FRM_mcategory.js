Ext.define('Almindo.Mcategory.view.FRM_mcategory',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_mcategory',
    frame: true,
    height: 400,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Category</p>',
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
            name: 'category_id',
            fieldLabel: 'ID'
        },{
            name: 'category_nama',
            flex: 1,
            fieldLabel: 'Nama Category ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'category_desc',
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