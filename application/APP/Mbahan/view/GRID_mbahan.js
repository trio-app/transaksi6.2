    Ext.define('Almindo.Mbahan.view.GRID_mbahan',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_mbahan',
    title: 'Master Data Produk',
    height: 420,
    frame: true,
    plugins: 'gridfilters',
    //store: Ext.create('Almindo.Mbahan.store.ST_mbahan'),
    initComponent: function () {
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Nama Produk', dataIndex: 'bahan_nama', locked: true, filter: 'string'},
            { header: 'Merk', dataIndex: 'bahan_merk', locked: true, filter: 'string'},
            { header: 'Jenis Bahan', dataIndex: 'bahan_jenis', locked: true, filter: 'string'},
            { header: 'GAP', dataIndex: 'bahan_gap', filter: 'string'},
            { header: 'Bentuk Ukuran', dataIndex: 'bahan_bentuk', filter: 'string'},
            { header: 'Warna Glasin', dataIndex: 'bahan_glasin', filter: 'string'},
            { header: 'Ukuran Panjang', dataIndex: 'bahan_ukuranP', filter: 'string'},
            { header: 'Ukuran Lebar', dataIndex: 'bahan_ukuranL', filter: 'string'},
            { header: 'File Name', dataIndex: 'bahan_gambar', filter: 'string'},
            { header: 'PORPORASI', dataIndex: 'bahan_porporasi', filter: 'string'},
            { header: 'Warna Cetakan', dataIndex: 'bahan_warnacetakan', filter: 'string'},
            { header: 'Qty Name', dataIndex: 'bahan_qtyname', filter: 'string'},
            { header: 'Total Name', dataIndex: 'bahan_totalname', filter: 'string'},
            { header: 'Core', dataIndex: 'bahan_core', flex: 1, filter: 'string'},
            { header: 'Arah Gulungan', dataIndex: 'bahan_arahgulungan', filter: 'string'},
            { header: 'Sensor', dataIndex: 'bahan_sensor', filter: 'string'},
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: this.store,
        displayInfo: true,
        displayMsg: 'Total Data {0} - {1} of {2}',
        emptyMsg: "No Data Display"
        });
        this.actions = {
           /* add_img: Ext.create('Ext.Action', {
                text: 'Update Picture',
                handler: function () { this.fireEvent('add_img', this.getSelected()) },
                scope: this,
                icon: extjs_url + 'resources/css/icons/image_add.png',
            }), */
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Record',
                handler: function () { this.fireEvent('removeitem', this.getSelected()) },
                scope: this,
                icon: base_url + 'system/images/icons/delete.gif',
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                //this.actions.add_img,
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