Ext.define('Almindo.TTterimaout.view.GRID_tterimaout_inv',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.GRID_tterimaout_inv',
	id:'GRID_tterimaout_inv',
	height: 250,
	//farame: true,
	margin: '0 10',
	store: Ext.create('Ext.data.ArrayStore',{
		fields: [
	        'recdetailout_doc',
	        'recdetailout_invoice',
	        'recdetailout_delivery',
                'recdetailout_faktur',
	        'recdetailout_po', 
	        {name: 'recdetailout_date', type: 'date',
                    convert: function(val, row){
                        return Ext.Date.format(new Date(val), 'Y-m-d')
                    }
                },
	        {name : 'recdetailout_price', type: 'float' },        
     	],

     	autoLoad: true,
     	proxy: {
     		type: 'memory'
     	}
	}),
	plugins: [
		Ext.create('Ext.grid.plugin.RowEditing',{
				clicksToMoveEditor : 1,
				autoCancel: false,
				listeners: {
					edit: function(editor, e){
						e.record.commit();
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
		this.tbar = [{
			text: 'Tambah Invoice',
			action: 'add_invoice',
			icon: extjs_url + 'resources/ext-theme-classic/images/dd/drop-add.gif',
		}];

		this.columns = [
            { xtype: 'rownumberer' },
            { header: 'NO Invoice', dataIndex: 'recdetailout_invoice', flex: 1,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            },    
            { header: 'No. Surat Jalan', dataIndex: 'recdetailout_delivery', flex: 1,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }            
            },
            { header: 'No. Faktur Pajak', dataIndex: 'recdetailout_faktur', flex: 1,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }            
            },
            { header: 'PO.', dataIndex: 'recdetailout_po', flex: 1,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }            
            },    
            { header: 'Tgl Invoice', dataIndex: 'recdetailout_date',  flex: 1,
                editor: {
                  xtype: 'datefield',
                  format: 'Y-m-d'
                },
                renderer : Ext.util.Format.dateRenderer('Y-m-d')

            },    
            { header: 'Nominal', dataIndex: 'recdetailout_price', xtype: 'numbercolumn', flex: 1,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    xtype: 'numberfield',                    
                    allowBlank: false
                }
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
});