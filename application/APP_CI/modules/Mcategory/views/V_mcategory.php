<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Mcategory.controller.C_mcategory'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_mcategory',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[
                        Ext.create('Almindo.Mcategory.view.FRM_mcategory',{
                            id: 'FRM_mcategory'
                        })
                    ]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[
                        Ext.create('Almindo.Mcategory.view.GRID_mcategory',{
                            id: 'GRID_mcategory',
                            store: Ext.create('Almindo.Mcategory.store.ST_mcategory')
                        })
                    ]
                    }]
                
            });
        }
});

</script>
<div id="ID_mcategory"></div>