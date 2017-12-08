    Ext.define('Almindo.Tpackinglist.view.GRID_tpackinglist',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_tpackinglist',
    title: 'List Data Packing List',
    height: 400,
    initComponent: function () {
        this.tbar = [
        {
            text: 'Tambah Packing List',
            icon: extjs_url + 'resources/ext-theme-classic/images/dd/drop-add.gif',
            handler: function(){
                var tab = Ext.getCmp('TAB_tpackinglist');
                tab.setActiveTab(0);
            }
        },
          '->',
        {
            xtype: 'textfield',
            itemId:'searchData',
            emptyText: 'Search Data',
            fieldStyle: 'text-align: left;align:right;'
        }    
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'No. Document', dataIndex: 'transaksi_doc', flex: 1 },
            { header: 'Customer', dataIndex: 'customer_nama', flex: 1 },
            { header: 'Date', dataIndex: 'transaksi_date', flex: 1 },
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: this.store,
        displayInfo: true,
        displayMsg: 'Total Data {0} - {1} of {2}',
        emptyMsg: "No Data Display"
        });
        this.addEvents('removeitem');
        this.addEvents('print_file');
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Record',
                handler: function () { this.fireEvent('removeitem', this.getSelected()) },
                scope: this,
                icon: extjs_url + 'resources/css/icons/delete.gif',
            }),
            print_file: Ext.create('Ext.Action', {
                text: 'Print Document',
                handler: function () { this.fireEvent('print_file', this.getSelected()) },
                scope: this,
                icon: extjs_url + 'resources/css/icons/page_copy.png',
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                this.actions.print_file,
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