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
        controllers: ['Almindo.Rtoutdate.controller.C_rtoutdate'],
        launch: function(){
               Ext.create('Ext.container.Container', {
               overflowY: 'auto',
               layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_rtoutdate',
               defaultType: 'container',
               items: [{
                    //columnWidth: 1/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rtoutdate.view.FRM_rtoutdate',{
                            id: 'FRM_rtoutdate'
                        })
                    ]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rtoutdate.view.GRID_rtoutdate',{
                            id: 'GRID_rtoutdate',
                            store: Ext.create('Almindo.Rtoutdate.store.ST_rtoutdate')
                        })
                    ]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[
                        Ext.create('Almindo.Rtoutdate.view.GRIDS_rtoutdate',{
                            id: 'GRIDS_rtoutdate',
                            store: Ext.create('Almindo.Rtoutdate.store.STS_rtoutdate')
                        })
                    ]
                    }]
                });
                
            }
        }
    );    
//});

</script>
<div id="ID_rtoutdate"></div>