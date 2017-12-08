<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Mwarnaglasin.controller.C_mwarnaglasin'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mwarnaglasin',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[
                        Ext.create('Almindo.Mwarnaglasin.view.FRM_mwarnaglasin',{
                            id: 'FRM_mwarnaglasin'
                        })
                    ]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[
                        Ext.create('Almindo.Mwarnaglasin.view.GRID_mwarnaglasin',{
                            id: 'GRID_mwarnaglasin',
                            store: Ext.create('Almindo.Mwarnaglasin.store.ST_mwarnaglasin')
                        })
                    ]
                    }]
                
            });
        }
});

</script>
<div id="ID_mwarnaglasin"></div>