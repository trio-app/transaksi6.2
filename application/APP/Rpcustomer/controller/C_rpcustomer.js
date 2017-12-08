		Ext.define('Almindo.Rpcustomer.controller.C_rpcustomer',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Rpcustomer.view.GRID_rpcustomer',
                                'Almindo.Rpcustomer.view.GRIDS_rpcustomer',
				'Almindo.Rpcustomer.view.FRM_rpcustomer'
			],
			stores  : [
				//'Almindo.Mwarnaglasin.store.ST_rpcustomer'
			],
			refs: [{
				ref: 'FRM_rpcustomer',
				xtype: 'FRM_rpcustomer',
				selector: 'FRM_rpcustomer',
				autoCreate: true
			},{
				ref: 'GRID_rpcustomer',
				xtype: 'GRID_rpcustomer',
				selector: 'GRID_rpcustomer',
				autoCreate: true
			},{
				ref: 'GRIDS_rpcustomer',
				xtype: 'GRIDS_rpcustomer',
				selector: 'GRIDS_rpcustomer',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_rpcustomer > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'RCustomerSelectedGrid > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },
                                        'FRM_rpcustomer button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'GRID_rpcustomer': {
                                            itemclick: this.getData
                                        }
				});
			},
			filterasset: function (btn) {
                            var grid = Ext.getCmp('GRID_rpcustomer');
                            var store = grid.getStore();
                            var form = Ext.getCmp('FRM_rpcustomer');
                            var values = form.down('form').getValues();
                            
                            
                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter    ([{
                                    property:'filtername',
                                    anyMatch: true,
                                    value   : values
                                } ]);
                        },getData: function(grid, record){
                            var grid = this.getGRIDS_rpcustomer();
                            //var grid = Ext.getCmp('InboundCancelSelectedGrid');
                            var store = grid.getStore();
                            //store.reload();
                                
                            Ext.Ajax.request({
                                url: base_url + 'Rpcustomer/getGrid',
                                params: {transaksi_doc: record.data.transaksi_doc},
                                method: 'POST',
                                fields: ['transaksi_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        }	
						
		});