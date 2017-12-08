                Ext.define('Almindo.Rpcustomer.model.M_rpcustomer',{
			extend: 'Ext.data.Model',
			fields: ['Amount','customer_nama', 'transaksi_date', 'transaksi_doc','trdetail_doc','trdetail_amount']
		});
                
                Ext.define('Almindo.Rpcustomer.store.ST_rpcustomer',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rpcustomer.model.M_rpcustomer',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rpcustomer/read'
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
                