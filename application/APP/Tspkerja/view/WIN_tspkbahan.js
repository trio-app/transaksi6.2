Ext.define('Almindo.Tspkerja.view.WIN_tspkbahan',{
    extend: 'Ext.window.Window',
    alias: 'widget.WIN_tspkbahan',
    title   : 'Pilih Produk',
    width   : 750,
    layout  : 'fit',
    resizable: false,
    closeAction: 'hide',
    modal   : true,
    items: [
        Ext.create('Almindo.Mbahan.view.GRID_mbahan',{
            id: 'WIN_tspkbahan',
            title: '',
            border: 0,
            store: Ext.create('Almindo.Mbahan.store.ST_mbahan')
        })
    ]
});