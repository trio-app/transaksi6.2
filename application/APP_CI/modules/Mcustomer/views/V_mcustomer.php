<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Mcustomer.controller.C_mcustomer'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mcustomer',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[
                        Ext.create('Almindo.Mcustomer.view.FRM_mcustomer',{
                            id: 'FRM_mcustomer'
                        })
                    ]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[
                        Ext.create('Almindo.Mcustomer.view.GRID_mcustomer',{
                            id: 'GRID_mcustomer',
                            store: Ext.create('Almindo.Mcustomer.store.ST_mcustomer')
                        })
                    ]
                }]
                
            });
        }
});

</script>
<div id="ID_mcustomer"></div>