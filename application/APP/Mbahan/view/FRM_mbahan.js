Ext.define('Almindo.Mbahan.view.FRM_mbahan',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_mbahan',
    frame: true,
    border: 0,
    height: 420,
    config: {
            recordIndex: 0,
            action: ''
    },   
   items: [{
        xtype: 'box',
        html: '<p style="font-size: 14pt;">Form Master Produk</p>',
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
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'textfield',
                anchor: '100%'
            },
            items: [{
                readOnly: true,
                xtype: 'hidden',
                name: 'bahan_id',
                fieldLabel: 'ID'
            },{
                name: 'bahan_nama',
                //fieldStyle: 'background-color: #ddd; background-image: none;',
                flex: 2,
                fieldLabel: 'Nama Produk ',
                labelAlign: 'top',
                allowBlank: false,
                
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'combo'
            },
            items: [{
                name: 'bahan_porporasi',
                flex: 1,
                fieldLabel: 'Porporasi ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                store: ['YA', 'TIDAK']
            },{
                xtype: 'numberfield',
                name: 'bahan_gap',
                flex: 1,
                fieldLabel: 'GAP ',
                labelAlign: 'top',
                allowBlank: false,
                margin: '0 0 0 10',
                minValue: 0
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'combo'
            },
            items: [{
                name: 'bahan_bentuk',
                flex: 1,
                fieldLabel: 'Bentuk Ukuran ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                store: ['BULAT', 'OVAL', 'KOTAK']
            },{
                name: 'bahan_merk',
                flex: 1,
                fieldLabel: 'Merk ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                displayField: 'merk_nama',
                valueField :'merk_nama',
                queryMode:'local',
                margin: '0 0 0 10',
                store: Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: [ 'merk_nama'],
                    proxy: {
                        type: 'ajax',
                        actionMethods: 'POST',
                        url: base_url + 'MMerk/cbolist',
                        waitMsg: 'Please Wait...',
                        reader: {
                            type: 'json'
                        }
                    }
                })
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'combo'
            },
            items: [{
                name: 'bahan_jenis',
                flex: 1,
                fieldLabel: 'Jenis Bahan ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                displayField: 'jbahan_nama',
                valueField :'jbahan_nama',
                queryMode:'local',
                store: Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: [ 'jbahan_nama'],
                    proxy: {
                        type: 'ajax',
                        actionMethods: 'POST',
                        url: base_url + 'Mjbahan/cbolist',
                        waitMsg: 'Please Wait...',
                        reader: {
                            type: 'json'
                        }
                    }
                })
            },{
                name: 'bahan_glasin',
                flex: 1,
                fieldLabel: 'Warna Glasin ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                displayField: 'warnaglasin_nama',
                valueField :'warnaglasin_nama',
                queryMode:'local',
                margin: '0 0 0 10',
                store: Ext.create('Ext.data.ArrayStore', {
                    autoLoad:true,
                    fields: [ 'warnaglasin_nama'],
                    proxy: {
                        type: 'ajax',
                        actionMethods: 'POST',
                        url: base_url + 'Mwarnaglasin/cbolist',
                        waitMsg: 'Please Wait...',
                        reader: {
                            type: 'json'
                        }
                    }
                })
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'numberfield',
                minValue: 0
            },
            items: [{
                name: 'bahan_ukuranP',
                fieldLabel: 'Ukuran ( Panjang x Lebar ) ',
                labelAlign: 'top',
                flex: 3
            },{
                xtype: 'box',
                html: '<b>x</b>',
                margin: '17 10 0'
            },{
                name: 'bahan_ukuranL',
                margin: '17 0 0 0',
                labelAlign: 'top',
                flex: 3
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'combo'
            },
            items: [{
                name: 'bahan_qtyname',
                flex: 1,
                fieldLabel: 'Qty Name',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                store: ['ROLL', 'BOX', 'LEMBAR']
            },{
                name: 'bahan_totalname',
                flex: 1,
                fieldLabel: 'Total Name ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                margin: '0 0 0 10',
                store: ['ROLL', 'BOX', 'LEMBAR']
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'combo'
            },
            items: [{
                name: 'bahan_core',
                flex: 1,
                fieldLabel: 'Core ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                store: ['1"', '1,5"', '3"', 'LEMBAR']
            },{
                name: 'bahan_arahgulungan',
                flex: 1,
                fieldLabel: 'Arah Gulungan',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                margin: '0 0 0 10',
                store: ['INSIDE', 'OUTSIDE']
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'combo'
            },
            items: [{
                name: 'bahan_warnacetakan',
                flex: 1,
                fieldLabel: 'Warna Cetakan',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                store: ['1 WARNA', '2 WARNA', '3 WARNA', '4 WARNA', 'POLOS', 'SPARASI']
            },{
                name: 'bahan_sensor',
                flex: 1,
                fieldLabel: 'Sensor ',
                labelAlign: 'top',
                allowBlank: false,
                editable: false,
                margin: '0 0 0 10',
                store: ['GAP','CONTINUES', 'BLACK MARK', 'COAK']
            }]
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