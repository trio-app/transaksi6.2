               Ext.define('Almindo.Rtoutdate.model.MS_rtoutdate',{
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
                
                Ext.define('Almindo.Rtoutdate.store.STS_rtoutdate',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rtoutdate.model.MS_rtoutdate',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rtoutdate/getGrid'
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