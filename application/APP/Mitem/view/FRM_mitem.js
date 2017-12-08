Ext.define('Almindo.Mitem.view.FRM_mitem',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_mitem',
    height: 400,
    frame: true,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master item</p>',
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
            name: 'item_id',
            fieldLabel: 'ID'
        },{
            name: 'item_kode',
            flex: 1,
            fieldLabel: 'Kode Item ',
            labelAlign: 'top',
            allowBlank: false
        },{
            name: 'item_nama',
            flex: 1,
            fieldLabel: 'Nama Item ',
            labelAlign: 'top',
            allowBlank: false
        },{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'combo',
                name: 'item_category',
                id: 'item_category',
                flex: 1,
                fieldLabel: 'Category ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                displayField: 'category_nama',
                valueField :'category_nama',
                queryMode:'local',
                store: Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: [ 'category_nama'],
                    proxy: {
                        type: 'ajax',
                        actionMethods: 'POST',
                        url: base_url + 'Mcategory/cbolist',
                        waitMsg: 'Please Wait...',
                        reader: {
                            type: 'json'
                        }
                    }
                })
            },{
                id: 'btn_category',
                xtype: 'button',
                margin: '22 0 0 5',
                tooltip: 'Refresh List',
                icon: base_url + 'system/images/icons/refresh.gif',
                handler: function(){
                    Ext.getCmp('item_category').store.reload();
                    Ext.getCmp('item_category').clearValue();
                }
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'combo',
                name: 'item_unit',
                id: 'item_unit',
                flex: 1,
                fieldLabel: 'Unit ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                displayField: 'unit_nama',
                valueField :'unit_nama',
                queryMode:'local',
                store: Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: [ 'unit_nama'],
                    proxy: {
                        type: 'ajax',
                        actionMethods: 'POST',
                        url: base_url + 'Munit/cbolist',
                        waitMsg: 'Please Wait...',
                        reader: {
                            type: 'json'
                        }
                    }
                })
            },{
                id: 'btn_unit',
                xtype: 'button',
                margin: '22 0 0 5',
                tooltip: 'Refresh List',
                icon: base_url + 'system/images/icons/refresh.gif',
                handler: function(){
                    Ext.getCmp('item_unit').store.reload();
                    Ext.getCmp('item_unit').clearValue();
                }
            }]
        },{
            xtype: 'numberfield',
            name: 'item_harga',
            flex: 1,
            minValue: 0,
            fieldLabel: 'Harga Satuan ',
            labelAlign: 'top',
            allowBlank: false
        },{
            xtype: 'numberfield',
            name: 'item_upp',
            flex: 1,
            minValue: 0,
            fieldLabel: 'UPP ',
            labelAlign: 'top',
            allowBlank: false
        },{
            xtype: 'numberfield',
            name: 'item_weight',
            flex: 1,
            decimalPrecision:5,
            minValue: 0,
            fieldLabel: 'Weight / Berat Satuan ',
            labelAlign: 'top',
            allowBlank: false
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