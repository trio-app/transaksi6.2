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
        controllers: ['Almindo.Rtindate.controller.C_rtindate'],
        launch: function(){
               Ext.create('Ext.container.Container', {
               overflowY: 'auto',
               layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_rtindate',
               defaultType: 'container',
               items: [{
                    //columnWidth: 1/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rtindate.view.FRM_rtindate',{
                            id: 'FRM_rtindate'
                        })
                    ]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rtindate.view.GRID_rtindate',{
                            id: 'GRID_rtindate',
                            store: Ext.create('Almindo.Rtindate.store.ST_rtindate')
                        })
                    ]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rtindate.view.GRIDS_rtindate',{
                            id: 'GRIDS_rtindate',
                            store: Ext.create('Almindo.Rtindate.store.STS_rtindate')
                        })
                    ]
                    }]
                });
                
            }
        }
    );    
//});

</script>
<div id="ID_rtindate"></div>