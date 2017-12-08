Ext.define('Almindo.Munit.model.M_munit',{
	extend: 'Ext.data.Model',
	fields: ['unit_id', 'unit_nama', 'unit_desc']
});
        
Ext.define('Almindo.Munit.store.ST_munit',{
	extend: 'Ext.data.Store',
	model: 'Almindo.Munit.model.M_munit',
	autoLoad: true,
	autoSync: true,
                pageSize: 20,
	proxy: {
		type: 'ajax',
        actionMethods: {create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'},
		api: {
			create: base_url + 'Munit/create',
                        read: base_url + 'Munit/read',
                        update: base_url + 'Munit/update',
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