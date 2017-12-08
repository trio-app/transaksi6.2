		Ext.define('Almindo.Ttandaterimain.model.M_ttandaterimain',{
			extend: 'Ext.data.Model',
			fields: ['receipt_id', 'receipt_doc', 'receipt_date', 'receipt_from', 'receipt_to', 'customer_id', 'customer_nama']
		});
                
                Ext.define('Almindo.Ttandaterimain.store.ST_ttandaterimain',{
			extend: 'Ext.data.Store',
			model: 'Almindo.Ttandaterimain.model.M_ttandaterimain',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: base_url + 'Ttandaterimain/read'
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
                
               