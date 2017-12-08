               Ext.define('Almindo.Rtindate.model.MS_rtindate',{
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
                
                Ext.define('Almindo.Rtindate.store.STS_rtindate',{
                            extend: 'Ext.data.Store',
                            model: 'Almindo.Rtindate.model.MS_rtindate',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: {read: 'POST'},
				api: {
					read: base_url + 'Rtindate/getGrid'
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