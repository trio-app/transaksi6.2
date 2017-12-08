            Ext.define('Almindo.Rpdate.model.MS_rpdate',{
                    extend: 'Ext.data.Model',
                    fields: [
                             'item_id',
                             'item_kode',
                             'item_nama',
                             'trdetail_id',
                             'trdetail_doc',
                             'trdetail_item',
                             'trdetail_po',
                             'trdetail_date',
                             'trdetail_sjap',
                             'trdetail_qty',
                             'trdetail_unit',
                             'trdetail_price',
                             'trdetail_amount',
                             'trdetail_weight',
                             'trdetail_pack'
                             ]
            });

            Ext.define('Almindo.Rpdate.store.STS_rpdate',{
                    extend: 'Ext.data.Store',
                    model: 'Almindo.Rpdate.model.MS_rpdate',
                    autoLoad: true,
                    autoSync: true,
                    pageSize: 20,

                    proxy: {
                    type: 'ajax',
                    actionMethods: {read: 'POST'},
                        api: {
                                read: base_url + 'Rpdate/getGrid'
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