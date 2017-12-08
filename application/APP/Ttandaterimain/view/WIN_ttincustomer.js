Ext.define('Almindo.Ttandaterimain.view.WIN_ttincustomer',{
    extend: 'Ext.window.Window',
    alias: 'widget.WIN_ttincustomer',
    title   : 'Pilih Customer',
    width   : 750,
    layout  : 'fit',
    resizable: false,
    closeAction: 'hide',
    modal   : true,
    items: [
        Ext.create('Almindo.Mcustomer.view.GRID_mcustomer',{
            title: '',
            border: 0,
            store: Ext.create('Almindo.Mcustomer.store.ST_mcustomer')
        })
    ]
});