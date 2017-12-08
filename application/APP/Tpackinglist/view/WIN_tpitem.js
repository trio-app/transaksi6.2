Ext.define('Almindo.Tpackinglist.view.WIN_tpitem',{
    extend: 'Ext.window.Window',
    alias: 'widget.WIN_tpitem',
    title   : 'Pilih Material / Item',
    width   : 750,
    layout  : 'fit',
    resizable: false,
    closeAction: 'hide',
    modal   : true,
    items: [
        Ext.create('Almindo.Mitem.view.GRID_mitem',{
            title: '',
            store: Ext.create('Almindo.Mitem.store.ST_mitem')
        })
    ]
});