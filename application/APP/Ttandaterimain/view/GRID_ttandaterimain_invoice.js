    Ext.define('Almindo.Ttandaterimain.view.GRID_ttandaterimain_invoice',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_ttandaterimain_invoice',
    id: 'GRID_ttandaterimain_invoice',
    height: 240,
    //frame: true,
    margin: '0 10',
    store: Ext.create('Ext.data.ArrayStore',{
        fields: [
            'recdetail_doc',
            'recdetail_invoice',
            'recdetail_delivery',
            'recdetail_faktur',
            'recdetail_po', 
            {name: 'recdetail_date', type: 'date',
                convert: function(val, row){
                    return Ext.Date.format(val, 'Y-m-d')
                }
            },
            {name : 'recdetail_price', type : 'float'},
        ],
        autoLoad: true,
        proxy: {
            type: 'memory'
        }
    }),
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToMoveEditor: 1,
                autoCancel: false,
                listeners: {
                    edit: function(editor, e){
                        //e.record.commit();
                    }
                }
        })                            
    ],
    viewConfig : {
        listeners : {
        'itemkeydown' : function(view, record, item, index, key) {
            if (key.getKey() == 46) {//the delete button
                var selection = this.getSelectionModel().getSelection();
                var grid = this.up('grid');
                grid.store.remove(selection);
                //delete records
                }  
            }

        },
    },                        
    initComponent: function(){
        this.tbar= [{
            text: 'Tambah Invoice',
            action: 'add_invoice',
            icon: extjs_url + 'resources/ext-theme-classic/images/dd/drop-add.gif',
        }];
        this.columns= [
            { xtype: 'rownumberer' },
            { header: 'NO Invoice', dataIndex: 'recdetail_invoice', flex: 1,
                editor: {
                    allowBlank: false
                }
            },    
            { header: 'NO Surat Jalan', dataIndex: 'recdetail_delivery', flex: 1,
                editor: {
                    allowBlank: false
                }
            },
            { header: 'NO Faktur Pajak', dataIndex: 'recdetail_faktur', flex: 1,
                editor: {
                    allowBlank: false
                }
            },
            { header: 'PO.', dataIndex: 'recdetail_po', flex: 1,
                editor: {
                    allowBlank: false
                }            
            },    
            { header: 'TGL Invoice', dataIndex: 'recdetail_date', xtype: 'datecolumn', flex: 1,
                editor: {
                  xtype: 'datefield',
                  format: 'Y-m-d'
                },
                renderer : Ext.util.Format.dateRenderer('Y-m-d')
            },       
            { header: 'Nominal', dataIndex: 'recdetail_price', xtype: 'numbercolumn', flex: 1,
                editor: {
                    xtype: 'numberfield',                    
                    allowBlank: false
                } , 
            },     
        ];

        this.addEvents('removeitem');
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Invoice',
                handler: function () {
                    this.store.remove(this.getSelected());
                    //this.fireEvent('removeitem', this.getSelected())
                },
                scope: this,
                icon: extjs_url + 'resources/css/icons/delete.gif',
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                this.actions.removeitem
            ]
        });
        this.on({
            itemcontextmenu: function (view, rec, node, index, e) {
                e.stopEvent();
                contextMenu.showAt(e.getXY());
                return false;
            }
        });                
        this.callParent(arguments);
    },
    getSelected: function () {
         var sm = this.getSelectionModel();
         var rs = sm.getSelection();
         if (rs.length) {
             return rs[0];
         }
         return null;
     }                        
})