                Ext.define('Almindo.Rtindate.model.M_rtindate',{
			extend: 'Ext.data.Model',
			fields: ['Price','receipt_id', 'receipt_to', 'receipt_date', 'receipt_doc', 'date_nama','recdetail_price', 'customer_nama']
		});
                
                Ext.define('Almindo.Rtindate.store.ST_rtindate',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rtindate.model.M_rtindate',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rtindate/read'
				},
				reader: {
					type: 'json',
					root: 'Rows',
					totalProperty: 'TotalRows',
					successProperty: 'success'
				},
				writer: {
					type: 'json',
					writeAllFields: false
				}
			}
                });
                