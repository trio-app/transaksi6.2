<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Munit.controller.C_munit'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_munit',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[
                        Ext.create('Almindo.Munit.view.FRM_munit',{
                            id: 'FRM_munit'
                        })
                    ]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[
                        Ext.create('Almindo.Munit.view.GRID_munit',{
                            id: 'GRID_munit',
                            store: Ext.create('Almindo.Munit.store.ST_munit')
                        })
                    ]
                    }]
                
            });
        }
});

</script>
<div id="ID_munit"></div>