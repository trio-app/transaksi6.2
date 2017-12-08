Ext.define('Almindo.Ttandaterimain.controller.C_ttandaterimain',{
    extend: 'Ext.app.Controller',
    views: [
        'Almindo.Ttandaterimain.view.TAB_ttandaterimain',
        'Almindo.Ttandaterimain.view.FRM_ttandaterimain',
        'Almindo.Ttandaterimain.view.WIN_ttincustomer',
        'Almindo.Ttandaterimain.view.GRID_ttandaterimain_invoice',
        'Almindo.Ttandaterimain.view.GRID_ttandaterimain',
        
        
        'Almindo.Mcustomer.view.GRID_mcustomer'
        
    ],
    stores: [
    ],
    refs: [{
        ref: 'FRM_ttandaterimain',
        xtype: 'FRM_ttandaterimain',
        selector: 'FRM_ttandaterimain',
        autoCreate: true
    },{
        ref: 'WIN_ttincustomer',
        xtype: 'WIN_ttincustomer',
        selector: 'WIN_ttincustomer',
        autoCreate: true
    },{
        ref: 'GRID_ttandaterimain_invoice',
        xtype: 'GRID_ttandaterimain_invoice',
        selector: 'GRID_ttandaterimain_invoice',
        autoCreate: true
    },{
        ref: 'GRID_ttandaterimain',
        xtype: 'GRID_ttandaterimain',
        selector: 'GRID_ttandaterimain',
        autoCreate: true
    },{
        ref: 'GRID_mcustomer',
        xtype: 'GRID_mcustoemr',
        selector: 'GRID_mcustomer',
        autoCreate: true
    }],
    init: function(){
            this.control({
                    'FRM_ttandaterimain button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_ttandaterimain button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_ttincustomer > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'GRID_ttandaterimain_invoice button[action=add_invoice]': {
                        click: this.add_invoice
                    },
                    'TAB_ttandaterimain button[action=save_invoice]': {
                        click: this.doSaveform
                    },
                    'TAB_ttandaterimain GRID_ttandaterimain': {
                        itemdblclick: this.onRowdblclick,
                        removeitem: this.deleteItem,
                        print_file: this.print_file
                    },
                    'GRID_ttandaterimain > toolbar > textfield[itemId=searchData]': {
                        specialkey: this.searchData
                    },
                    'WIN_ttincustomer GRID_mcustomer > toolbar > textfield[itemId=searchData]': {
                        specialkey: this.searchDataCustomer
                    }
                    
            });
    },
    searchData:function (f,e) {
        var grid = this.getGRID_ttandaterimain();
        var store = grid.getStore();
        if (e.getKey() == e.ENTER) {
            store.remoteFilter = false;
            store.clearFilter();
            store.remoteFilter = true;
            store.filter([{
                    property:'filtername',
                    anyMatch: true,
                    value   : f.value
                } ]);
        }
    },
    searchDataCustomer:function (f,e) {
        var grid = this.getGRID_mcustomer();
        var store = grid.getStore();
        if (e.getKey() == e.ENTER) {
            store.remoteFilter = false;
            store.clearFilter();
            store.remoteFilter = true;
            store.filter([{
                    property:'filtername',
                    anyMatch: true,
                    value   : f.value
                } ]);
        }
    },
    showCust: function(){
        var win = this.getWIN_ttincustomer();
        win.show();
    },
    showDocument: function(){
        Ext.Ajax.request({
            url: base_url + 'Ttandaterimain/autoNum',
            method: 'POST',
            success: function(transport){
                Ext.getCmp('receipt_doc').setValue(transport.responseText);
            }
        }); 
    },
    getCustomer: function(me, record, item, index){
        var win = this.getWIN_ttincustomer();
        var form = this.getFRM_ttandaterimain();
        form.getForm().setValues(record.getData());
        win.close();
    },
    add_invoice: function(me, record, item, index){
        var grid = this.getGRID_ttandaterimain_invoice();
        grid.store.add({
            recdetail_invoice : '-',
            recdetail_delivery : '-',
            recdetail_faktur: '-',
            recdetail_po : '-',
            recdetail_date : '-',
            recdetail_price : 0,
        });

    },
    doSaveform: function(){
        var form = this.getFRM_ttandaterimain();
        var values = form.getValues();
        var action = form.getAction();
        var recValue = Ext.create('Almindo.Ttandaterimain.model.M_ttandaterimain', values);
        console.log(action);

        var grid = this.getGRID_ttandaterimain_invoice();
        var data = [];
        grid.store.each(function(rec){
            data.push(rec.data);
        });                                  

        if(action == 'edit'){
            if(form.isValid() && (grid.store.getCount() > 0)){
                this.doProsesCRUD('update',recValue,data);
                //this.doSaveGrid('updateGrid', data);
            }else{
                Ext.MessageBox.alert('Information', 'Periksa Kembali Data.');
            }
        }else{
            if(form.isValid() && (grid.store.getCount() > 0)){
                this.doProsesCRUD('create',recValue,data);
                //this.doSaveGrid('saveGrid', data);
            }else{
                Ext.MessageBox.alert('Information', 'Periksa Kembali Data.');
            }
        }
    },doProsesCRUD : function (inAction,record,data){
        var form = this.getFRM_ttandaterimain();
        var grid = this.getGRID_ttandaterimain_invoice();
        var grid2 = this.getGRID_ttandaterimain();
        var store = grid.getStore();
        var store2 = grid2.getStore();
        var box = Ext.MessageBox.wait('Proses Memuat Data Harap Tunggu.', 'Harap Tunggu');
        Ext.Ajax.request({
                    url: base_url + 'Ttandaterimain/' +  inAction,
                    method: 'POST',
                    type:'json',
                    params: [JSON.stringify(record.data),'||',JSON.stringify(data)],
                    success: function(response){
                        switch(inAction) {
                            case 'delete':
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Delete Tanda Terima IN', 'Delete Data Success', 'success');
                                    //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                break;
                            case 'create' :
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Insert Tanda Terima IN', 'Insert Data Success', 'success');
                                break;
                            case 'update' :
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Update Tanda Terima IN', 'Update Data Success', 'success');
                                break;
                        }
                        form.setAction('add');
                        box.hide();
                    },
                    failure: function(response){
                        //createAlert('Error ' + response.status, response.responseText, 'error');
                        Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                    }
                });
    },
    onRowdblclick: function(me, record, item, index){
        var form = this.getFRM_ttandaterimain();
        
        var grid = this.getGRID_ttandaterimain_invoice();
        grid.store.reload();
        var box = Ext.MessageBox.wait('Proses Memuat Data Harap Tunggu.', 'Harap Tunggu');
        Ext.Ajax.request({
            url: base_url + 'Ttandaterimain/getGrid',
            params: {recdetail_doc: record.data.receipt_doc},
            method: 'POST',
            fields: ['recdetail_id','recdetail_doc','recdetail_invoice','recdetail_delivery','recdetail_po','recdetail_date','recdetail_price'],
            success: function(transport){
                form.setAction('edit');
                form.setRecordIndex(index);
                form.getForm().setValues(record.getData());
                Ext.getCmp('TAB_ttandaterimain').setActiveTab(0);
                grid.store.loadData(Ext.decode(transport.responseText));
                box.hide();
            }
        });
    },
    deleteItem: function(record){
        Ext.Msg.confirm('Delete Data', 'Are you sure?', function (button) {
            if (button == 'yes') {
                this.doProsesCRUD('delete',record);
            }
        }, this);
    },
    print_file: function(record){
        var previewPrint = Ext.create('Ext.window.Window', {
            title: 'Print Preview',
            width: 1000,
            height: 600,
            modal   : true,
            closeAction: 'hide',
            items: [{ 
                     xtype: 'component',
                     html : '<iframe src="'+ base_url +'Ttandaterimain/print_file/'+ record.data.receipt_id +'" width="100%" height="550px"></iframe>',
                  }]
        });
        previewPrint.show();
    }
});