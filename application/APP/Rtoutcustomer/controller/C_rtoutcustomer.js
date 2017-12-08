		Ext.define('Almindo.Rtoutcustomer.controller.C_rtoutcustomer',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Rtoutcustomer.view.GRID_rtoutcustomer',
                                'Almindo.Rtoutcustomer.view.GRIDS_rtoutcustomer',
				'Almindo.Rtoutcustomer.view.FRM_rtoutcustomer'
			],
			stores  : [
				//'Almindo.Mwarnaglasin.store.ST_rtoutcustomer'
			],
			refs: [{
				ref: 'FRM_rtoutcustomer',
				xtype: 'FRM_rtoutcustomer',
				selector: 'FRM_rtoutcustomer',
				autoCreate: true
			},{
				ref: 'GRID_rtoutcustomer',
				xtype: 'GRID_rtoutcustomer',
				selector: 'GRID_rtoutcustomer',
				autoCreate: true
			},{
				ref: 'GRIDS_rtoutcustomer',
				xtype: 'GRIDS_rtoutcustomer',
				selector: 'GRIDS_rtoutcustomer',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_rtoutcustomer > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'GRIDS_rtoutcustomer > toolbar > button[action=export]': {
                                            click: this.exportDetail
                                        },
                                        'FRM_rtoutcustomer button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'GRID_rtoutcustomer': {
                                            itemclick: this.getData
                                        }
				});
			},
			filterasset: function (btn) {
                            var grid = Ext.getCmp('GRID_rtoutcustomer');
                            var store = grid.getStore();
                            var form = Ext.getCmp('FRM_rtoutcustomer');
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
                            var grid = this.getGRIDS_rtoutcustomer();
                            var store = grid.getStore();
                                
                            Ext.Ajax.request({
                                url: base_url + 'Rtoutcustomer/getGrid',
                                params: {receiptout_doc: record.data.receiptout_doc},
                                method: 'POST',
                                fields: ['receiptout_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                        exportTransaksi : function(){
                            var grid = Ext.getCmp('GRID_rtoutcustomer');
                            var store = grid.getStore();
                            var data = [];
                            store.each(function(rec){
                                    //console.log(rec.data.id);
                                    data.push({
                                        Customer : rec.data.customer_nama,
                                        Date : rec.data.receiptout_date,
                                        Document :rec.data.receiptout_doc,
                                        Nominal :rec.data.Price,
                                    });
                            }); 
                            //console.log(data);

                            JSONToCSVConvertor(data, "Report Tanda Terima OUT By Customer", true);

                        },
                        exportDetail : function(){
                            var grid = Ext.getCmp('GRIDS_rtoutcustomer');
                            var store = grid.getStore();
                            var data = [];
                            store.each(function(rec){
                                    //console.log(rec.data.id);
                                    data.push({
                                       NoInvoice : rec.data.recdetailout_invoice,
                                       NoSuratJalan : rec.data.recdetailout_delivery,
                                       PO   : rec.data.recdetailout_po,
                                       TanggalInvoice : rec.data.recdetailout_date,
                                       Nominal : rec.data.recdetailout_price,
                                    });
                            }); 
                            //console.log(data);

                            JSONToCSVConvertor(data, "Report Tanda Terima OUT Detail By Customer", true);

                        }
						
		});