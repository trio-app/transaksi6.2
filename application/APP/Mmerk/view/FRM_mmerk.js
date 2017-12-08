Ext.define('Almindo.Mmerk.view.FRM_mmerk',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_mmerk',
    frame: true,
    height: 400,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Merk</p>',
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
            name: 'merk_id',
            fieldLabel: 'ID'
        },{
            name: 'merk_nama',
            flex: 1,
            fieldLabel: 'Nama Merk ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'merk_desc',
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