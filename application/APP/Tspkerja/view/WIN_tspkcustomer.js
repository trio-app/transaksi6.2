Ext.define('Almindo.Tspkerja.view.WIN_tspkcustomer',{
    extend: 'Ext.window.Window',
    alias: 'widget.WIN_tspkcustomer',
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