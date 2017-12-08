                    Ext.define('Almindo.Rpdate.view.GRIDS_rpdate',{
                        extend: 'Ext.grid.Panel',
                        alias: 'widget.GRIDS_rpdate',
                        id: 'GRIDS_rpdate',
                        height: 250,
                        //store: 'SRCustomerDetail',
                            initComponent: function(){
                                this.title = 'Packinglist Detail';
                                 this.columns= [
                                    //{xtype: 'rownumberer'},
                                    {header: 'No. SJ', dataIndex: 'trdetail_sjap', width:100},
                                    {header: 'Item', dataIndex: 'item_nama', width:150},
                                    {header: 'PO.', dataIndex: 'trdetail_po', width:250},
                                    {header: 'Date', dataIndex: 'trdetail_date', width:100},
                                    {header: 'QTY', dataIndex: 'trdetail_qty', width:100},
                                    {header: 'Unit', dataIndex: 'trdetail_unit', width:100},
                                    {header: 'Price', dataIndex: 'trdetail_price', width:100},
                                    {header: 'Amount', dataIndex: 'trdetail_amount', width:100, xtype:'numbercolumn', format: '0,000,000.00'},
                                    {header: 'Berat Satuan (KG)', dataIndex: 'trdetail_weight', width:100},
                                    {header: 'Total Weight(KG)', dataIndex: 'trdetail_weight', width:100},
                                    //{header: 'UPP', dataIndex: '', width:100},
                                    {header: 'Total Pack', dataIndex: 'trdetail_pack', width:100},
                                   
                                ];
                                this.callParent(arguments);
                            },
                            getSelected: function () {
                                var sm = this.getSelectionModel();
                                var rs = sm.getSelection();
                                if (rs.length) {
                                    return rs[0];
                                }
                                return null;
                            }                        
                    });