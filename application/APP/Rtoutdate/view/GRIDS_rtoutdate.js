Ext.define('Almindo.Rtoutdate.view.GRIDS_rtoutdate',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDS_rtoutdate',
    height: 250,
    border: 2,
    autoscroll:true,
    collapsible: true,
    initComponent: function(){
       this.title = 'Tanda Terima Out Detail';
        this.columns= [
            {header: 'No. Invoice', dataIndex: 'recdetailout_invoice', width:150},
            {header: 'No. Surat Jalan', dataIndex: 'recdetailout_delivery', width:100},
            {header: 'No. PO.', dataIndex: 'recdetailout_po', width:150},
            {header: 'Tanggal Invoice', dataIndex: 'recdetailout_date', width:100, },
            {header: 'Nominal', dataIndex: 'recdetailout_price', width:100, xtype:'numbercolumn', format: '0,000,000.00'}
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