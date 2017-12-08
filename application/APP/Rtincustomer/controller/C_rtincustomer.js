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
                                        'GRIDS_rtincustomer > toolbar > button[action=export]': {
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
                        },
                        getData: function(grid, record){
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
                        },
                        exportTransaksi : function(){
                            var grid = Ext.getCmp('GRID_rtincustomer');
                            var store = grid.getStore();
                            var data = [];
                            store.each(function(rec){
                                    //console.log(rec.data.id);
                                    data.push({
                                        Customer : rec.data.customer_nama,
                                        Date : rec.data.receipt_date,
                                        Document :rec.data.receipt_doc,
                                        Nominal :rec.data.Price,
                                    });
                            }); 
                            //console.log(data);

                            JSONToCSVConvertor(data, "Report Tanda Terima IN By Customer", true);

                        },
                        exportDetail : function(){
                            var grid = Ext.getCmp('GRIDS_rtincustomer');
                            var store = grid.getStore();
                            var data = [];
                            store.each(function(rec){
                                    //console.log(rec.data.id);
                                    data.push({
                                       NoInvoice : rec.data.recdetail_invoice,
                                       NoSuratJalan : rec.data.recdetail_delivery,
                                       PO   : rec.data.recdetail_po,
                                       TanggalInvoice : rec.data.recdetail_date,
                                       Nominal : rec.data.recdetail_price,
                                    });
                            }); 
                            //console.log(data);

                            JSONToCSVConvertor(data, "Report Tanda Terima IN Detail By Customer", true);

                        }
						
		});