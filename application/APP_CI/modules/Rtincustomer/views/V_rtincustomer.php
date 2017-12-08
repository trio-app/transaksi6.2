<script>
/*Ext.onReady(function () {
    Ext.Loader.setConfig({
                    enabled: true,
                    disableCaching: false,
                    paths: {
                        'Ext.ux.exporter': 'system/extjs/src/ux/exporter'
                    }
                });  */          
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Rtincustomer.controller.C_rtincustomer'],
        launch: function(){
               Ext.create('Ext.container.Container', {
               overflowY: 'auto',
               layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_rtincustomer',
               defaultType: 'container',
               items: [{
                    //columnWidth: 1/4,
                    width: '500',
                    items:[
                            Ext.create('Almindo.Rtincustomer.view.FRM_rtincustomer',{
                                id: 'FRM_rtincustomer'
                            })
                    ]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[
                            Ext.create('Almindo.Rtincustomer.view.GRID_rtincustomer',{
                                id: 'GRID_rtincustomer',
                                store: Ext.create('Almindo.Rtincustomer.store.ST_rtincustomer')
                            })
                    ]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[
                            Ext.create('Almindo.Rtincustomer.view.GRIDS_rtincustomer',{
                                id: 'GRIDS_rtincustomer',
                                store: Ext.create('Almindo.Rtincustomer.store.STS_rtincustomer')
                            })
                    ]
                    }]
                });
                
            }
        }
    );    
//});

</script>
<div id="ID_rtincustomer"></div>