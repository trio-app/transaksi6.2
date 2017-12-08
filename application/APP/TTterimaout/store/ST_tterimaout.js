		Ext.define('Almindo.TTterimaout.model.M_tterimaout',{
			extend: 'Ext.data.Model',
			fields: ['receiptout_id', 'receiptout_doc', 'receiptout_from', 'receiptout_to', 'receiptout_date', 'customer_id', 'customer_nama']
		});
                
         Ext.define('Almindo.TTterimaout.store.ST_tterimaout',{
			extend: 'Ext.data.Store',
			model: 'Almindo.TTterimaout.model.M_tterimaout',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                          actionMethods: 'POST',
				api: {
					read: base_url + 'TTterimaout/read'
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
                
               