Ext.define('Almindo.Mmerk.model.M_mmerk',{
        extend: 'Ext.data.Model',
        fields: ['merk_id', 'merk_nama','merk_desc']
});

Ext.define('Almindo.Mmerk.store.ST_mmerk',{
        extend: 'Ext.data.Store',
        model: 'Almindo.Mmerk.model.M_mmerk',
        autoLoad: true,
        autoSync: true,
                pageSize: 20,
        proxy: {
		type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
		api: {
			create: base_url + 'MMerk/create',
                        read: base_url + 'MMerk/read',
                        update: base_url + 'MMerk/update',
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
