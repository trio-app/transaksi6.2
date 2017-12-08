<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/APP',
        controllers: ['Almindo.MJBahan.controller.C_mjbahan'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mjbahan',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[
                        Ext.create('Almindo.MJBahan.view.FRM_mjbahan',{
                            id: 'FRM_mjbahan'
                        })
                    ]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[
                        Ext.create('Almindo.MJBahan.view.GRID_mjbahan',{
                            id: 'GRID_mjbahan',
                            store: Ext.create('Almindo.MJBahan.store.ST_mjbahan')
                        })
                    ]
                    }]
                
            });
        }
});

</script>
<div id="ID_mjbahan"></div>