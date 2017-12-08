Ext.define('Almindo.MJBahan.model.M_mjbahan',{
	extend: 'Ext.data.Model',
	fields: ['jbahan_id', 'jbahan_nama','jbahan_desc']
});
        
Ext.define('Almindo.MJBahan.store.ST_mjbahan',{
	extend: 'Ext.data.Store',
	model: 'Almindo.MJBahan.model.M_mjbahan',
	autoLoad: true,
	autoSync: true,
                pageSize: 20,
	proxy: {
		type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
		api: {
			create: base_url + 'MJBahan/create',
                        read: base_url + 'MJBahan/read',
                        update: base_url + 'MJBahan/update',
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