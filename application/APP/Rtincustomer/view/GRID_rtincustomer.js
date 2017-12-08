Ext.define('Almindo.Rtincustomer.view.GRID_rtincustomer', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_rtincustomer',
    autoScroll: true,
    height: 250,
    initComponent: function () {
      this.title = 'Tanda Terima IN ';
      this.columns = [
        { xtype:'rownumberer'},  
        { header: 'Customer',dataIndex:'customer_nama', width:150},
        { header: 'Date',dataIndex:'receipt_date', width:100},
        { header: 'Document No.',dataIndex:'receipt_doc',width:150},
        { header: 'Nominal', dataIndex: 'Price',width:150, xtype:'numbercolumn', format: '0,000,000.00'}
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