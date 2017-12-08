		Ext.define('Almindo.Rtincustomer.controller.C_rtincustomer',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Rtincustomer.view.GRID_rtincustomer',
                                'Almindo.Rtincustomer.view.GRIDS_rtincustomer',
				'Almindo.Rtincustomer.view.FRM_rtincustomer'
			],
			stores  : [
				//'Almindo.Mwarnaglasin.store.ST_rtincustomer'
			],
			refs: [{
				ref: 'FRM_rtincustomer',
				xtype: 'FRM_rtincustomer',
				selector: 'FRM_rtincustomer',
				autoCreate: true
			},{
				ref: 'GRID_rtincustomer',
				xtype: 'GRID_rtincustomer',
				selector: 'GRID_rtincustomer',
				autoCreate: true
			},{
				ref: 'GRIDS_rtincustomer',
				xtype: 'GRIDS_rtincustomer',
				selector: 'GRIDS_rtincustomer',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_rtincustomer > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'GRIDS_rtincustomer > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },
                                        'FRM_rtincustomer button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'GRID_rtincustomer': {
                                            itemclick: this.getData
                                        }
				});
			},
			filterasset: function (btn) {
                            var grid = Ext.getCmp('GRID_rtincustomer');
                            var store = grid.getStore();
                            var form = Ext.getCmp('FRM_rtincustomer');
                            var values = form.down('form').getValues();
                            
                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    property:'filtername',
                                    anyMatch: true,
                                    value   : values
                                } ]);
                        },getData: function(grid, record){
                            var grid = this.getGRIDS_rtincustomer();
                            var store = grid.getStore();
                                
                            Ext.Ajax.request({
                                url: base_url + 'Rtincustomer/getGrid',
                                params: {receipt_doc: record.data.receipt_doc},
                                method: 'POST',
                                fields: ['receipt_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        }	
						
		});