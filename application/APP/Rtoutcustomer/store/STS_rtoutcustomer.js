               Ext.define('Almindo.Rtoutcustomer.model.MS_rtoutcustomer',{
			extend: 'Ext.data.Model',
			fields: [
                                 'recdetailout_id',
                                 'recdetailout_doc',
                                 'recdetailout_invoice',
                                 'recdetailout_delivery',
                                 'recdetailout_po',
                                 'recdetailout_date',
                                 'recdetailout_price'
                                 ]
		});
                
                Ext.define('Almindo.Rtoutcustomer.store.STS_rtoutcustomer',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rtoutcustomer.model.MS_rtoutcustomer',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rtoutcustomer/getGrid'
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