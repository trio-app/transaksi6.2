<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Mitem.controller.C_mitem'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mitem',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[
                        Ext.create('Almindo.Mitem.view.FRM_mitem',{
                            id: 'FRM_mitem'
                        })
                    ]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[Ext.create('Almindo.Mitem.view.GRID_mitem',{
                            id: 'GRID_mitem',
                            store: Ext.create('Almindo.Mitem.store.ST_mitem')
                        })
                    ]
                    }]
                
            });
        }
});

</script>
<div id="ID_mitem"></div>