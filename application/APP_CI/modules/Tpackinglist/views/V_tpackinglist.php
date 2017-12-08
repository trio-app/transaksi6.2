
<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Tpackinglist.controller.C_tpackinglist'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_tpackinglist',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/1,
                    padding: '5',
                    items:[{xtype: 'TAB_tpackinglist'}]
                    }]
                
            });
        }
});    

</script>
<div id="ID_tpackinglist"></div>