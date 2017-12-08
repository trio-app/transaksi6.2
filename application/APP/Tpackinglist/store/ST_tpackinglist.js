		Ext.define('Almindo.Tpackinglist.model.M_tpackinglist',{
			extend: 'Ext.data.Model',
			fields: ['transaksi_id', 'transaksi_doc', 'transaksi_date','trdetail_date', 'customer_id', 'customer_nama', 'customer_cp', 'customer_email', 'customer_telp', 'customer_alamat', 'transaksi_supplier']
		});
                
                Ext.define('Almindo.Tpackinglist.store.ST_tpackinglist',{
			extend: 'Ext.data.Store',
			model: 'Almindo.Tpackinglist.model.M_tpackinglist',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: base_url + 'Tpackinglist/read'
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
                
               