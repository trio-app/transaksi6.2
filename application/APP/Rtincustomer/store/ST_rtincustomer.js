                Ext.define('Almindo.Rtincustomer.model.M_rtincustomer',{
			extend: 'Ext.data.Model',
			fields: ['Price','receipt_id', 'receipt_to', 'receipt_date', 'receipt_doc', 'customer_nama','recdetail_price']
		});
                
                Ext.define('Almindo.Rtincustomer.store.ST_rtincustomer',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rtincustomer.model.M_rtincustomer',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rtincustomer/read'
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
                