<script>
    Ext.application({
        name :'Almindo',
        appFolder:'application/APP',
        controllers: ['Almindo.Mmerk.controller.C_mmerk'],
        launch: function(){
            Ext.create('Ext.container.Container',{
                layout:'column',
                margin:'5',
                autoScroll:true,
                renderTo:'ID_mmerk',
                defaultType:'container',
                items: [{
                    columnWidth: 1/4,
                    padding: ' 0 5 5 5 ',
                    items:[
                        Ext.create('Almindo.Mmerk.view.FRM_mmerk',{
                            id: 'FRM_mmerk'
                        })
                    ]
            },{
                     columnWidth: 3/4,
                     padding:'0 0 5 5',
                     items:[
                         Ext.create('Almindo.Mmerk.view.GRID_mmerk',{
                             id: 'GRID_mmerk',
                             store: Ext.create('Almindo.Mmerk.store.ST_mmerk')
                         })
                     ]
            }]


            });
        }
});

</script>

<div id="ID_mmerk"></div>