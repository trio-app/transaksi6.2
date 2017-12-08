Ext.define('Almindo.Rpdate.controller.C_rpdate',{
	extend : 'Ext.app.Controller',
	views: ['Almindo.Rpdate.view.FRM_rpdate',
                'Almindo.Rpdate.view.GRID_rpdate',
                'Almindo.Rpdate.view.GRIDS_rpdate'
		],
	store : [
                //'Almindo.Rpdate.store.ST_rpdate'
		],
	refs: [{
                ref: 'FRM_rpdate',
                xtype: 'FRM_rpdate',
                selector: 'FRM_rpdate',
                autoCreate: true
        },{
                ref: 'GRID_rpdate',
                xtype: 'GRID_rpdate',
                selector: 'GRID_rpdate',
                autoCreate: true
        },{
                ref: 'GRIDS_rpdate',
                xtype: 'GRIDS_rpdate',
                selector: 'GRIDS_rpdate',
                autoCreate: true
		}],
        init: function (){
                this.control({
                        'GRID_rpdate > toolbar > button[action=export]' : {
                                        click: this.exportTransaksi
                        },
                        'GRIDS_rpdate > toolbar > button[action=export]' : {
                                        click: this.exportDetail
                        },
                        'FRM_rpdate button[itemId=searchfilter]' : {
                                        click: this.filterasset
                        },
                        'GRID_rpdate': {
                                itemclick: this.getData
                        }

                });
        },

        filterasset: function(btn){
            var grid = Ext.getCmp('GRID_rpdate');
            var store = grid.getStore();
            var form = Ext.getCmp('FRM_rpdate');
            var values = form.down('form').getValues();

            store.remoteFilter = false;
            store.clearFilter();
            store.remoteFilter = true;
            store.filter([{
                    property:'filtername',
                    anyMatch: true,
                    value : values
        }]);
        },	

        getData: function(grid, record){
            var grid = this.getGRIDS_rpdate();
            //var grid = Ext.getCmp('InboundCancelSelectedGrid');
            var store = grid.getStore();
            //store.reload();

            Ext.Ajax.request({
                url: base_url + 'Rpdate/getGrid',
                params: {transaksi_doc: record.data.transaksi_doc},
                method: 'POST',
                fields: ['transaksi_doc'],
                success: function(transport){
                    store.loadData(Ext.decode(transport.responseText));
                }
            });
        }	
});

