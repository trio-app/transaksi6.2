		Ext.define('Almindo.Rtoutdate.controller.C_rtoutdate',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Rtoutdate.view.GRID_rtoutdate',
                                'Almindo.Rtoutdate.view.GRIDS_rtoutdate',
				'Almindo.Rtoutdate.view.FRM_rtoutdate'
			],
			stores  : [
				//'Almindo.Mwarnaglasin.store.ST_rtoutdate'
			],
			refs: [{
				ref: 'FRM_rtoutdate',
				xtype: 'FRM_rtoutdate',
				selector: 'FRM_rtoutdate',
				autoCreate: true
			},{
				ref: 'GRID_rtoutdate',
				xtype: 'GRID_rtoutdate',
				selector: 'GRID_rtoutdate',
				autoCreate: true
			},{
				ref: 'GRIDS_rtoutdate',
				xtype: 'GRIDS_rtoutdate',
				selector: 'GRIDS_rtoutdate',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_rtoutdate > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'GRIDS_rtoutdate > toolbar > button[action=export]': {
                                            click: this.exportDetail
                                        },
                                        'FRM_rtoutdate button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'GRID_rtoutdate': {
                                            itemclick: this.getData
                                        }
				});
			},
			filterasset: function (btn) {
                            var grid = Ext.getCmp('GRID_rtoutdate');
                            var store = grid.getStore();
                            var form = Ext.getCmp('FRM_rtoutdate');
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
                            var grid = this.getGRIDS_rtoutdate();
                            var store = grid.getStore();
                                
                            Ext.Ajax.request({
                                url: base_url + 'Rtoutdate/getGrid',
                                params: {receiptout_doc: record.data.receiptout_doc},
                                method: 'POST',
                                fields: ['receiptout_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                        exportTransaksi : function(){
                            var grid = Ext.getCmp('GRID_rtoutdate');
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

                            JSONToCSVConvertor(data, "Report Tanda Terima OUT By Date", true);

                        },
                        exportDetail : function(){
                            var grid = Ext.getCmp('GRIDS_rtoutdate');
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

                            JSONToCSVConvertor(data, "Report Tanda Terima OUT Detail By Date", true);

                        }
						
		});