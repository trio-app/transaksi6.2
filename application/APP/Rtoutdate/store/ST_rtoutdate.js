                Ext.define('Almindo.Rtoutdate.model.M_rtoutdate',{
			extend: 'Ext.data.Model',
			fields: ['Price','receiptout_id', 'receiptout_to', 'receiptout_date', 'receiptout_doc', 'customer_nama','recdetailout_price']
		});
                
                Ext.define('Almindo.Rtoutdate.store.ST_rtoutdate',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rtoutdate.model.M_rtoutdate',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rtoutdate/read'
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
                