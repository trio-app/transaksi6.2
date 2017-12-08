Ext.define('Almindo.Mcustomer.model.M_mcustomer',{
	extend: 'Ext.data.Model',
	fields: ['customer_id', 'customer_nama','customer_alamat','customer_telp','customer_cp','customer_email']
});
        
Ext.define('Almindo.Mcustomer.store.ST_mcustomer',{
	extend: 'Ext.data.Store',
	model: 'Almindo.Mcustomer.model.M_mcustomer',
	autoLoad: true,
	autoSync: true,
                pageSize: 20,
	proxy: {
		type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
		api: {
			create: base_url + 'Mcustomer/create',
                        read: base_url + 'Mcustomer/read',
                        update: base_url + 'Mcustomer/update',
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