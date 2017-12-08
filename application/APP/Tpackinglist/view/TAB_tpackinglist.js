Ext.define('Almindo.Tpackinglist.view.TAB_tpackinglist',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TAB_tpackinglist',
    id: 'TAB_tpackinglist',
    activeTab: 0,
    tabBar: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
    defaults: { flex: 1 }
    },
    items: [{
        title: 'FORM INPUT PACKING LIST',
        layout: 'anchor',
        items: [{
            xtype: 'FRM_tpackinglist'
        },{
            xtype: 'GRID_tpackinglist_mat',
        }],
        buttons: [{
            text: 'Save',
            action: 'add'
        },{
            text: 'Reset',
            handler: function(){
                var frm = Ext.getCmp('FRM_tpackinglist');
                var grid = Ext.getCmp('GRID_tpackinglist_mat');
                frm.setAction('add'); 
                frm.getForm().reset(); 
                grid.store.reload();
            }
        }]
    }, {
        title: 'LIST DATA PACKING LIST',
        layout: 'anchor',
        items: [{
                xtype: 'GRID_tpackinglist',
                store: Ext.create('Almindo.Tpackinglist.store.ST_tpackinglist')
        }]
    }]
})