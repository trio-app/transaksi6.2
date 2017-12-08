Ext.define('Almindo.Rtindate.view.GRIDS_rtindate',{
        extend: 'Ext.grid.Panel',
        alias: 'widget.GRIDS_rtindate',
        height: 250,
        border: 2,
        autoscroll:true,
        collapsible: true,
        initComponent: function(){
           this.title = 'Tanda Terima IN Detail';
            this.columns= [
                {header: 'No. Invoice', dataIndex: 'recdetail_invoice', width:150},
                {header: 'No. Surat Jalan', dataIndex: 'recdetail_delivery', width:100},
                {header: 'No. PO.', dataIndex: 'recdetail_po', width:150},
                {header: 'Tanggal Invoice', dataIndex: 'recdetail_date', width:100, },
                {header: 'Nominal', dataIndex: 'recdetail_price', width:100, xtype:'numbercolumn', format: '0,000,000.00'}
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