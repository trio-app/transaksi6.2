    Ext.define('Almindo.Mcategory.view.GRID_mcategory',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_mcategory',
    title: 'Master Data Category',
    height: 400,
    frame: true,
    plugins: 'gridfilters',
    //store: Ext.create('Almindo.Mcategory.store.ST_mcategory'),
    initComponent: function () {
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Nama Category ', dataIndex: 'category_nama', filter: 'string'},
            { header: 'Description ', dataIndex: 'category_desc', filter: 'string'},
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: this.store,
        displayInfo: true,
        displayMsg: 'Total Data {0} - {1} of {2}',
        emptyMsg: "No Data Display"
        });
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Record',
                handler: function () { this.fireEvent('removeitem', this.getSelected()) },
                scope: this,
                icon: base_url + 'system/images/icons/delete.gif',
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