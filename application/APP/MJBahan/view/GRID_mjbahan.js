    Ext.define('Almindo.MJBahan.view.GRID_mjbahan',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_mjbahan',
    title: 'Master Jenis Bahan',
    height: 400,
    frame: true,
    plugins: 'gridfilters',
    //store: Ext.create('Almindo.MJBahan.store.ST_mcategory'),
    initComponent: function () {
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Nama Jenis Bahan ', dataIndex: 'jbahan_nama', filter: 'string'},
            { header: 'Description ', dataIndex: 'jbahan_desc', filter: 'string'},
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