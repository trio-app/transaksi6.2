<script>
	
	Ext.application({
		name: 'Almindo',
        appFolder: 'application/APP',
        controllers: ['Almindo.TTterimaout.controller.C_tterimaout'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_tterimaout',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/1,
                    padding: '5',
                    items:[{xtype: 'TAB_tterimaout'}]
                    }]
                
            });
        }
	});
</script>

<div id="ID_tterimaout"></div>