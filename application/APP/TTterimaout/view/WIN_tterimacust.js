Ext.define('Almindo.TTterimaout.view.WIN_tterimacust',{
	extend: 'Ext.window.Window',
	alias: 'widget.WIN_tterimacust',
	title: 'Pilih Customer',
	width: 750,
	layout: 'fit',
	resizeable: false,
	closeAction: 'hide',
	modal: true,
	items: [
		 Ext.create('Almindo.Mcustomer.view.GRID_mcustomer',{
    		title: '',
            border: 0,
            store: Ext.create('Almindo.Mcustomer.store.ST_mcustomer'),

		})	  
	]

})