               Ext.define('Almindo.Rtincustomer.model.MS_rtincustomer',{
			extend: 'Ext.data.Model',
			fields: [
                                 'recdetail_id',
                                 'recdetail_doc',
                                 'recdetail_invoice',
                                 'recdetail_delivery',
                                 'recdetail_po',
                                 'recdetail_date',
                                 'recdetail_price'
                                 ]
		});
                
                Ext.define('Almindo.Rtincustomer.store.STS_rtincustomer',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rtincustomer.model.MS_rtincustomer',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rtincustomer/getGrid'
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