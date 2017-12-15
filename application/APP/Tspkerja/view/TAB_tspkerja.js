Ext.define('Almindo.Tspkerja.view.TAB_tspkerja',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TAB_tspkerja',
    id: 'TAB_tspkerja',
    activeTab: 0,
    tabBar: {
        layout: {
            type: 'hbox',
            align: 'stretch'
            
        },
    defaults: { flex: 1 }
    },
    items: [{
        title: 'FORM INPUT SURAT PERINTAH KERJA',
        layout: 'anchor',
        items: [{
            xtype: 'FRM_tspkerja'
        }],
        buttons: [{
            text: 'Save',
            action: 'save_spk'
        },{
            text: 'Reset',
            handler: function(){
                var frm = Ext.getCmp('FRM_tspkerja');
                frm.setActions('add');
                frm.getForm().reset(); 
            }
        }]
    }, {
        title: 'LIST DATA SURAT PERINTAH KERJA',
        layoust: 'anchor',
        items: [{
            xtype: 'GRID_tspkerja',
            store: Ext.create('Almindo.Tspkerja.store.ST_tspkerja')
        }]
    }]
});