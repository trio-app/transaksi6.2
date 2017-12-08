                Ext.define('Almindo.Rtoutcustomer.model.M_rtoutcustomer',{
			extend: 'Ext.data.Model',
			fields: ['Price','receiptout_id', 'receiptout_to', 'receiptout_date', 'receiptout_doc', 'customer_nama','recdetailout_price']
		});
                
                Ext.define('Almindo.Rtoutcustomer.store.ST_rtoutcustomer',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rtoutcustomer.model.M_rtoutcustomer',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rtoutcustomer/read'
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
                