Ext.define('Almindo.Tspkerja.view.FRM_tspkerja',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_tspkerja',
    id: 'FRM_tspkerja',
    frame: true,
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
                xtype: 'hidden',
                flex : 1,
                name: 'spk_id',
                id: 'spk_id',
                fieldLabel: 'ID',
                emptyText: 'ID',
                readOnly: true,
                labelWidth:120,
                fieldStyle: 'background-color: #ffa144; background-image: none;',
            },{
                flex : 1,
                name: 'spk_doc',
                id: 'spk_doc',
                xtype: 'textfield',
                fieldLabel: 'Document Number',
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
            name:'spk_date',
            labelWidth:120,
            format: 'Y-m-d',
            //value: new Date()
        },{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'box',
                flex: 1
            },{
                xtype: 'button',
                text: 'View List Surat Perintah Kerja',
                icon: extjs_url + 'resources/ext-theme-classic/images/grid/group-by.gif',
                handler: function(){
                    var tab = Ext.getCmp('TAB_tspkerja');
                    tab.setActiveTab(1);
                }
            }]
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 5 5 5'
        },
        items: [{
            fieldLabel: 'PO Number',
            name: 'spk_nopo',
            margin: '5 5 5 5',
            readOnly: false,
            labelWidth: 120,
            xtype: 'textfield',
            flex: 1
        },{
            name: 'spk_delivery',
            readOnly: false,
            xtype: 'datefield',
            fieldLabel: 'Order Date',
            labelWidth: 120,
            flex: 1,
            format: 'Y-m-d',
            //value: new Date()
        },{
            xtype: 'box',
            flex: 1
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '5 5 5 5',
            flex: 1
        },
        items: [{
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    flex: 1
                },
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        flex: 1
                    },
                    items: [{
                        name: 'customer_id',
                        xtype: 'hidden',
                        fieldLabel: 'id'
                    },{
                        name: 'customer_nama',
                        xtype: 'textfield',
                        fieldLabel: 'Customer',
                        fieldStyle: 'background-color: #ffa144; background-image: none;',
                        labelWidth: 120,
                        readOnly: true
                    },{
                        icon: base_url + 'system/img/user_add.gif',
                        xtype: 'button',
                        text: 'Pilih Customer',
                        action: 'add_cust',
                        flex: 0,
                        width: 120,
                        margin: '0 10'
                    }]
                },{
                    xtype: 'container',
                }]
                
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '5 5 5 5',
            flex: 1
        },
        items: [{
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    flex: 1
                },
                items: [{
                        xtype: 'container',
                        layout: 'hbox',
                        defaults: {
                            flex: 1
                        },
                            items: [{
                            xtype: 'textfield',
                            id: 'bahan_nama',
                            name: 'spk_bahannama',
                            fieldStyle: 'background-color: #ffa144; background-image: none;',
                            labelWidth: 120,
                            fieldLabel: 'Produk',
                            allowBlank: 'false',
                            readOnly: true
                        },{
                            xtype: 'button',
                            icon: base_url + 'system/images/icons/produk.png',
                            width: 120,
                            text: 'Pilih Produk',
                            action: 'add_bahan',
                            flex: 0,
                            margin: '0 10'
                }]
                }/*,{
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        flex: 1
                    },
                    items:[{
                        xtype: 'textfield',
                        fieldLabel: 'filename'
                    },{
                        xtype: 'filefield',
                        fieldLabel: 'Gambar Mata Pisau'
                    }]
                }*/]
                
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 5',
        defaults: {
            xtype: 'textfield',
            flex: 1,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
        },
        items: [{
            id: 'bahan_jenis',
            name: 'spk_jenisbahan',
            fieldLabel: 'Jenis Bahan ',
            labelWidth: 120,
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_merk',
            name: 'spk_merk',
            fieldLabel: 'Merk Bahan ',
            margin: '0 5',
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_bentuk',
            name: 'spk_bentuk',
            fieldLabel: 'Bentuk Label ',
            margin: '0 5',
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_porporasi',
            name: 'spk_porporasi',
            fieldLabel: 'Porporasi ',
            margin: '0 0 0 5',
            allowBlank: 'false',
            readOnly: true
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        items: [{
            xtype: 'container',
            layout: 'hbox',
            flex: 1,
            margin: '5 5',
            defaults: {
                flex: 1,
            },
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'box',
                        margin: '5 0',
                        html: 'Ukuran :',
                        width: 120
                    },{
                        xtype: 'numberfield',
                        id: 'bahan_ukuranP',
                        name: 'spk_ukuranP',
                        fieldStyle: 'background-color: #ffa144; background-image: none;',
                        flex: 1,
                        margin: '0 5',
                        allowBlank: 'false',
                        readOnly: true
                    },{
                        xtype: 'box',
                        html: 'x',
                        margin: '0 5'
                    },{
                        xtype: 'numberfield',
                        id: 'bahan_ukuranL',
                        name: 'spk_ukuranL',
                        fieldStyle: 'background-color: #ffa144; background-image: none;',
                        flex: 1,
                        margin: '0 5',
                        allowBlank: 'false',
                        readOnly: true
                    }]
                },{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'numberfield',
                        id: 'spk_matapisau',
                        name: 'spk_matapisau',
                        fieldLabel: 'Baris Mata Pisau',
                        flex: 1,
                        margin: '0 5',
                        allowBlank: 'false',
                        listeners: {
                            change: function(field, newVal, oldVal) {
                                console.log("Calculating");
                                var bahanP = Ext.getCmp('bahan_ukuranP').getValue();
                                var matapisau = Ext.getCmp('spk_matapisau').getValue();
                                var digunakanP = Ext.getCmp('ukuranP_digunakan');
                                
                                var order = Ext.getCmp('spk_qtyorder').getValue();
                                var bahanL = Ext.getCmp('bahan_ukuranL').getValue();
                                var gap = Ext.getCmp('bahan_gap').getValue();
                                var total_all = Ext.getCmp('total');
                                
                                if (bahanP > 0 && matapisau <= 1) {
                                    digunakanP.setValue( 
                                        bahanP + 1
                                    );
                                }
                                else if (bahanP > 0 && matapisau <= 2) {
                                    digunakanP.setValue( 
                                       (bahanP * matapisau)+ 0.5 + 0.5 + 0.5 
                                    );
                                }
                                else if (bahanP > 0 && matapisau <= 3) {
                                    digunakanP.setValue( 
                                       (bahanP * matapisau)+ 0.5 + 0.5 + 0.5 + 0.5
                                    );
                                }
                                else if (bahanP > 0 && matapisau <= 4) {
                                    digunakanP.setValue( 
                                       (bahanP * matapisau)+ 0.5 + 0.5 + 0.5 + 0.5 + 0.5 
                                    );
                                }
                                else if (bahanP > 0 && matapisau <= 5) {
                                    digunakanP.setValue( 
                                       (bahanP * matapisau)+ 0.5 + 0.5 + 0.5 + 0.5 + 0.5 + 0.5
                                    );
                                }
                                total_all.setValue(
                                        (bahanL + gap) * order / 1000 / matapisau
                                    );
                        }  

                      }
                    },{
                        xtype: 'numberfield',
                        id: 'bahan_gap',
                        name: 'spk_gap',
                        fieldLabel: 'GAP',
                        fieldStyle: 'background-color: #ffa144; background-image: none;',
                        flex: 1,
                        margin: '0 0 0 5',
                        allowBlank: 'false',
                        readOnly: true,
                        listeners: {
                            change: function(field, newVal, oldVal) {
                                console.log("Calculating");
                                var order = Ext.getCmp('spk_qtyorder').getValue();
                                var upp = Ext.getCmp('spk_upporder').getValue();
                                var mata_pisau = Ext.getCmp('spk_matapisau').getValue();
                                var total = Ext.getCmp('spk_totalorder');

                                var bahanL = Ext.getCmp('bahan_ukuranL').getValue();
                                var gap = Ext.getCmp('bahan_gap').getValue();
                                var total_all = Ext.getCmp('total');
                                if (order > 0 && upp > 0 && mata_pisau > 0) {
                                    total.setValue( 
                                         order / upp
                                    );
                                    total_all.setValue(
                                        (bahanL + gap) * order / 1000 / mata_pisau
                                    );
                                }

                        }  

                    }
                    }]
                }]
            }]
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 5',
        defaults: {
            flex: 1,
            xtype: 'numberfield'
        },
        items: [{
            id: 'spk_mataperbaris',
            name: 'spk_mataperbaris',
            labelWidth: 120,
            fieldLabel: 'Baris LINE ',
            allowBlank: 'false',
            /* listeners: {
                    change: function(field, newVal, oldVal) {
                        console.log("Calculating");
                        var order = Ext.getCmp('spk_qtyorder').getValue();
                        var upp = Ext.getCmp('spk_upporder').getValue();
                        var order_baris = Ext.getCmp('spk_mataperbaris').getValue();
                        var total = Ext.getCmp('spk_totalorder');
                        
                        var bahanL = Ext.getCmp('bahan_ukuranL').getValue();
                        var gap = Ext.getCmp('bahan_gap').getValue();
                        var total_all = Ext.getCmp('total');
                        if (order > 0 && upp > 0 && order_baris > 0) {
                            total.setValue( 
                                (order_baris / upp) * order
                            );
                            total_all.setValue(
                                (bahanL + gap) * order / 1000
                            );
                        }
                        
                }  

            } */
        },{
            name: 'spk_jumlahpisau',
            margin: '0 5',
            fieldLabel: 'Total Mata Pisau ',
            allowBlank: 'false',
        },{
            margin: '0 5',
            xtype: 'box',
            flex: 2
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5',
        defaults: {
            xtype: 'textfield',
            flex: 1,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
        },
        items: [{
            id: 'bahan_warnacetakan',
            name: 'spk_warnacetakan',
            fieldLabel: 'Warna Cetakan ',
            labelWidth: 120,
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_arahgulungan',
            name: 'spk_arahgulungan',
            fieldLabel: 'Arah Gulungan ',
            margin: '0 5',
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_sensor',
            name: 'sensor',
            fieldLabel: 'Sensor ',
            margin: '0 5',
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_core',
            name: 'spk_core',
            fieldLabel: 'Core ',
            margin: '0 0 0 5',
            allowBlank: 'false',
            readOnly: true
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5',
        defaults: {
            flex: 1,
            listeners: {
                    change: function(field, newVal, oldVal) {
                        console.log("Calculating");
                        var order = Ext.getCmp('spk_qtyorder').getValue();
                        var upp = Ext.getCmp('spk_upporder').getValue();
                        var mata_pisau = Ext.getCmp('spk_matapisau').getValue();
                        var total = Ext.getCmp('spk_totalorder');
                        
                        var bahanL = Ext.getCmp('bahan_ukuranL').getValue();
                        var gap = Ext.getCmp('bahan_gap').getValue();
                        var total_all = Ext.getCmp('total');
                        if (order > 0 && upp > 0 && mata_pisau > 0) {
                            total.setValue( 
                                 order / upp
                            );
                            total_all.setValue(
                                (bahanL + gap) * order / 1000 / mata_pisau
                            );
                        }
                        
                }  

            }
        },
        items: [{
            id: 'spk_qtyorder',
            name: 'spk_qtyorder',
            xtype: 'numberfield',
            labelWidth: 120,
            fieldLabel: 'Qty Order ',
            allowBlank: 'false',
        },{
            id: 'spk_upporder',
            name: 'spk_upporder',
            xtype: 'numberfield',
            fieldLabel: 'Qty UPP ',
            margin: '0 5',
            allowBlank: 'false',
        },{
            id: 'spk_totalorder',
            name: 'spk_totalorder',
            xtype: 'numberfield',
            fieldLabel: 'Qty Total ',
            margin: '0 5',
            allowBlank: 'false',
        },{
            margin: '0 0 0 5',
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                flex: 1,
                labelWidth: 65
            },
            items: [{
                id: 'bahan_qtyname',
                name: 'spk_qtyname',
                xtype: 'textfield',
                fieldLabel: 'Qty',
                allowBlank: 'false',
                readOnly: true
            },{
                id: 'bahan_totalname',
                name: 'spk_totalname',
                xtype: 'textfield',
                margin: '0 0 0 5',
                fieldLabel: 'Total',
                allowBlank: 'false',
                readOnly: true
            }]
        }]
    },{
        xtype: 'box',
        flex: 1,
        margin: '0 5',
        html: '<h4>BAHAN BAKU YANG DIGUNAKAN</h4>'
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'textfield',
            id: 'bahan_jenis2',
            name: 'bahan_digunakan',
            margin: '0 5',
            fieldLabel: 'Jenis Bahan ',
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            allowBlank: 'false',
            readOnly: true
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                flex: 1
            },
            items: [{
                xtype: 'box',
                margin: '5',
                html: 'Ukuran :',
                flex: 0
            },{
                xtype: 'numberfield',
                id: 'ukuranP_digunakan',
                name:'ukuranP_digunakan',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                margin: '0 5',
                width: 120,
                allowBlank: 'false',
                readOnly: true
            },{
                xtype: 'box',
                margin: '5',
                html: 'x',
                flex: 0
            },{
                xtype: 'numberfield',
                name: 'ukuranL_digunakan',
                id: 'ukuranL_digunakan',
                //fieldStyle: 'background-color: #ffa144; background-image: none;',
                width: 120,
                margin: '0 0 0 5',
                allowBlank: 'false',
                value: '1000',
                listeners: {
                    change: function(field, newVal, oldVal) {
                        console.log("Calculating");
                        var roll = Ext.getCmp('jml_roll');
                        var total_luas = Ext.getCmp('total2');
                        var total_all = Ext.getCmp('total').getValue();
                        var digunakanP = Ext.getCmp('ukuranP_digunakan').getValue();
                        var digunakanL = Ext.getCmp('ukuranL_digunakan').getValue();

                        if (total_all > 0 && digunakanL > 0 ) {
                                roll.setValue(
                                    Math.ceil(total_all / digunakanL)
                                );

                                total_luas.setValue(
                                    (digunakanP / 1000) * total_all 
                                );
                        }
                    }
                }
            }]
        },{
            xtype: 'box',
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5 0',
        defaults: {
            flex: 1                                          
        },
        items: [{
            xtype: 'container',
            margin: '0 5',
            layout: 'vbox',
            defaults: {
                listeners: {
                    change: function(field, newVal, oldVal) {
                        console.log("Calculating");
                        var roll = Ext.getCmp('jml_roll');
                        var total_luas = Ext.getCmp('total2');
                        var total_all = Ext.getCmp('total').getValue();
                        var digunakanP = Ext.getCmp('ukuranP_digunakan').getValue();
                        var digunakanL = Ext.getCmp('ukuranL_digunakan').getValue();
                        
                        if (total_all > 0 && digunakanL > 0) {
                                roll.setValue(
                                    Math.ceil(total_all / digunakanL)
                                );

                                total_luas.setValue(
                                    (digunakanP / 1000) * total_all 
                                );
                        }
                    }
                }
            },
            items: [{
                xtype: 'numberfield',
                id: 'jml_roll',
                name:'jml_roll',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Jumlah Roll ',
                allowBlank: 'false',
                readOnly: true
            },{
                xtype: 'numberfield',
                id: 'total',
                name: 'total',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Total M',
                allowBlank: 'false',
                readOnly: true,
            },{
                xtype: 'numberfield',
                id: 'total2',
                name: 'total2',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Total M<sup>2</sup> ',
                allowBlank: 'false',
                readOnly: true
            }]
        },{
            xtype: 'container',
            layout: 'vbox',
            margin: '0 5',
            items: [{
                xtype: 'datefield',
                name: 'spk_tglkirim',
                fieldLabel: 'Tanggal Kirim ',
                format: 'Y-m-d',
                //value: new Date()
            },{
                xtype: 'textfield',
                name: 'spk_nosuratjalan',
                fieldLabel: 'No. Surat Jalan'
            }]
        },{
            xtype: 'textarea',
            name: 'keterangan_digunakan',
            fieldLabel: 'Keterangan ',
        }]
    }]
});