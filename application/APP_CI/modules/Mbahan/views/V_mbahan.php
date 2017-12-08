<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/APP',
        controllers: ['Almindo.Mbahan.controller.C_mbahan'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mbahan',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/3,
                    padding: '0 5 5 5',
                    items:[
                        Ext.create('Almindo.Mbahan.view.FRM_mbahan',{
                            id: 'FRM_mbahan',
                        })
                    ]
                    },{
                    columnWidth: 2/3,
                    padding: '0 0 5 5',
                    items:[
                        Ext.create('Almindo.Mbahan.view.GRID_mbahan',{
                            id: 'GRID_mbahan',
                            store: Ext.create('Almindo.Mbahan.store.ST_mbahan')
                        })
                    ]
                    }]
                
            });
        }
});    
//});

</script>
<div id="ID_mbahan"></div>