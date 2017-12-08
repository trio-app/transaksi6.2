Ext.define('Almindo.TTterimaout.view.TAB_tterimaout',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TAB_tterimaout',
    id: 'TAB_tterimaout',
    activeTab: 0,
    tabBar: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
    defaults: { flex: 1 }
    },
    items: [{
        title: 'FORM INPUT TANDA TERIMA OUT',
        layout: 'anchor',
         items: [{
            xtype: 'FRM_tterimaout'
        },{
            xtype: 'GRID_tterimaout_inv'
        }],
        buttons: [{
            text: 'Save',
            action: 'save_invoice'
        },{
            text: 'Reset',
            handler: function(){
                var frm = Ext.getCmp('FRM_tterimaout');
                var grid = Ext.getCmp('GRID_tterimaout_inv');
                frm.setAction('add');
                frm.getForm().reset(); 
                grid.store.reload();
            }
        }]
    }, {
        title: 'LIST DATA TANDA TERIMA OUT',
        layout: 'anchor',
       items: [{
            xtype: 'GRID_tterimaout',
                store: Ext.create('Almindo.TTterimaout.store.ST_tterimaout')
        }]
    }]
});