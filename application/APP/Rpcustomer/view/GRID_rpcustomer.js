  Ext.define('Almindo.Rpcustomer.view.GRID_rpcustomer', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_rpcustomer',
    //title: 'Report Transaksi By Customer',
    //store: 'SRCustomer',
    autoScroll: true,
    //frame:true,
    height: 250,
    initComponent: function () {
      this.title = 'Packinglist';
      this.columns = [
        { xtype:'rownumberer'},  
        { header: 'Customer',dataIndex:'customer_nama',width:150},
        { header: 'Date',dataIndex:'transaksi_date',width:120},
        { header: 'Document No.',dataIndex:'transaksi_doc',width:150},
        { header: 'Amount',dataIndex:'Amount',width:150, xtype:'numbercolumn', format: '0,000,000.00'},
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