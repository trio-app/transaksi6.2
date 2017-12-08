Ext.define('Almindo.MJBahan.view.FRM_mjbahan',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_mjbahan',
    frame: true,
    height: 400,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Jenis Bahan</p>',
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
            name: 'jbahan_id',
            fieldLabel: 'ID'
        },{
            name: 'jbahan_nama',
            flex: 1,
            fieldLabel: 'Nama Jenis Bahan ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'jbahan_desc',
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