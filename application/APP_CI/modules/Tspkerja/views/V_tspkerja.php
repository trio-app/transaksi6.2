
<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Tspkerja.controller.C_tspkerja'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_tspkerja',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/1,
                    padding: '5',
                    items:[{xtype: 'TAB_tspkerja'}]
                    }]
                
            });
        }
});    

</script>
<div id="ID_tspkerja"></div>