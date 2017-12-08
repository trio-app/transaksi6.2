
<script>
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Ttandaterimain.controller.C_ttandaterimain'],
        launch: function(){
            Ext.create('Ext.container.Container', {
               layout: 'column',
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_ttandaterimain',
               defaultType: 'container',
               items: [{
                    columnWidth: 1/1,
                    padding: '5',
                    items:[{xtype: 'TAB_ttandaterimain'}]
                    }]
                
            });
        }
});    

</script>
<div id="ID_ttandaterimain"></div>