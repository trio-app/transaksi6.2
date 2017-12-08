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
        controllers: ['Almindo.Rpcustomer.controller.C_rpcustomer'],
        launch: function(){
               Ext.create('Ext.container.Container', {
               overflowY: 'auto',
               layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_rpcustomer',
               defaultType: 'container',
               items: [{
                    //columnWidth: 1/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rpcustomer.view.FRM_rpcustomer',{
                            id: 'FRM_rpcustomer'
                        })
                    ]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rpcustomer.view.GRID_rpcustomer',{
                            id: 'GRID_rpcustomer',
                            store: Ext.create('Almindo.Rpcustomer.store.ST_rpcustomer')
                        })
                    ]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rpcustomer.view.GRIDS_rpcustomer',{
                            id: 'GRIDS_rpcustomer',
                            store: Ext.create('Almindo.Rpcustomer.store.STS_rpcustomer')
                        })
                    ]
                    }]
                
            });
                
            }
        }
    );    
//});

</script>
<div id="ID_rpcustomer"></div>