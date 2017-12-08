		Ext.define('Almindo.Tspkerja.model.M_tspkerja',{
			extend: 'Ext.data.Model',
			fields: ['spk_id', 
                            'spk_doc',
                            'spk_date',
                            'spk_nopo',
                            'spk_delivery',
                            'spk_customer',
                            'spk_bahannama',
                            'customer_id', 
                            'customer_nama', 
                            'spk_jenisbahan', 
                            'spk_glasin',
                            'spk_gap',
                            'spk_bentuk',
                            'spk_merk',
                            'spk_ukuranP', 
                            'spk_ukuranL', 
                            'spk_porporasi', 
                            'spk_mataperbaris',
                            'spk_jumlahpisau',
                            'spk_matapisau',
                            'spk_warnacetakan', 
                            'spk_qtyname', 
                            'spk_totalname', 
                            'spk_qtyorder', 
                            'spk_upporder',
                            'spk_totalorder',
                            'spk_core', 
                            'spk_arahgulungan', 
                            'spk_sensor',
                            'bahan_digunakan',
                            'ukuranP_digunakan',
                            'ukuranL_digunakan',
                            'keterangan_digunakan',
                            'jml_roll',
                            'spk_tglkirim',
                            'spk_nosuratjalan',
                            'total',
                            'total2',
                            'spk_status']
		});
                
                Ext.define('Almindo.Tspkerja.store.ST_tspkerja',{
			extend: 'Ext.data.Store',
			model: 'Almindo.Tspkerja.model.M_tspkerja',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: base_url + 'Tspkerja/read'
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