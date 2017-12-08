<script>
	
Ext.application({
    name: 'Almindo',
    appFolder: 'application/APP',
    controllers: ['Almindo.Rpdate.controller.C_rpdate'],
    launch: function(){
            Ext.create('Ext.container.Container',{
                    overflowY: 'auto',
                    layout: {
                                type: 'fit',
                                align: 'stretch'
                            },
                    margin: '5',
                    autoScroll: true,
                    renderTo: 'ID_rpdate',
                    defaultType: 'container',
                    items: [{
                        //columnWidth: 1/4,
                        width: '100',
                        items:[
                            Ext.create('Almindo.Rpdate.view.FRM_rpdate',{
                                id: 'FRM_rpdate'
                            })
                        ]
                    },{
                        //columnWidth: 3/4,
                        width: '250',
                        items:[
                            Ext.create('Almindo.Rpdate.view.GRID_rpdate',{
                                id: 'GRID_rpdate',
                                store: Ext.create('Almindo.Rpdate.store.ST_rpdate')
                            })
                        ]
                    },{
                        //columnWidth: 3/4,
                        width: '250',
                        items:[
                            Ext.create('Almindo.Rpdate.view.GRIDS_rpdate',{
                                id: 'GRIDS_rpdate',
                                store: Ext.create('Almindo.Rpdate.store.STS_rpdate')
                            })
                        ]
                    }
                    ]
                        });
    }

});

</script>

<div id="ID_rpdate"></div>