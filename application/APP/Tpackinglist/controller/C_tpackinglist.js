Ext.define('Almindo.Tpackinglist.controller.C_tpackinglist',{
    extend: 'Ext.app.Controller',
    views: [
        'Almindo.Tpackinglist.view.TAB_tpackinglist',
        'Almindo.Tpackinglist.view.FRM_tpackinglist',
        'Almindo.Tpackinglist.view.GRID_tpackinglist',
        'Almindo.Tpackinglist.view.GRID_tpackinglist_mat',
        'Almindo.Tpackinglist.view.WIN_tpcustomer',
        'Almindo.Tpackinglist.view.WIN_tpitem',
        
        
        'Almindo.Mcustomer.view.GRID_mcustomer',
        'Almindo.Mitem.view.GRID_mitem'
    ],
    stores: [
    ],
    refs: [{
        ref: 'FRM_tpackinglist',
        xtype: 'FRM_tpackinglist',
        selector: 'FRM_tpackinglist',
        autoCreate: true
    },{
        ref: 'WIN_tpcustomer',
        xtype: 'WIN_tpcustomer',
        selector: 'WIN_tpcustomer',
        autoCreate: true
    },{
        ref: 'WIN_tpitem',
        xtype: 'WIN_tpitem',
        selector: 'WIN_tpitem',
        autoCreate: true
    },{
        ref: 'GRID_tpackinglist_mat',
        xtype: 'GRID_tpackinglist_mat',
        selector: 'GRID_tpackinglist_mat',
        autoCreate: true
    },{
        ref: 'GRID_tpackinglist',
        xtype: 'GRID_tpackinglist',
        selector: 'GRID_tpackinglist',
        autoCreate: true
    }],
    init: function(){
            this.control({
                    'FRM_tpackinglist button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_tpackinglist button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_tpcustomer > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'GRID_tpackinglist_mat button[action=add_material]': {
                        click: this.showMaterial
                    },
                    'GRID_tpackinglist > toolbar > textfield[itemId=searchData]': {
                        specialkey: this.searchData
                    },
                    'WIN_tpitem > GRID_mitem': {
                        itemdblclick: this.addMaterial
                    },
                    'TAB_tpackinglist button[action=add]': {
                        click: this.doSaveform
                    },
                    'TAB_tpackinglist GRID_tpackinglist': {
                        itemdblclick: this.onRowdblclick,
                        removeitem: this.deleteItem,
                        print_file: this.print_file
                    }
                    
            });
    },
    searchData:function (f,e) {
        //var store = Ext.getStore('Almindo.Mwarnaglasin.store.ST_mwarnaglasin');//Ext.getStore('Almindo.Mwarnaglasin.store.ST_mwarnaglasin');//
        var grid = this.getGRID_tpackinglist();
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
        var win = this.getWIN_tpcustomer();
        win.show();
    },
    showDocument: function(){
        Ext.Ajax.request({
            url: base_url + 'Tpackinglist/autoNum',
            method: 'POST',
            success: function(transport){
                Ext.getCmp('transaksi_doc').setValue(transport.responseText);
            }
        }); 
    },
    onRowdblclick: function(me, record, item, index){
        var form = this.getFRM_tpackinglist();
        
        var grid = this.getGRID_tpackinglist_mat();
        grid.store.reload();
        var box = Ext.MessageBox.wait('Proses Memuat Data Harap Tunggu.', 'Harap Tunggu');
        Ext.Ajax.request({
            url: base_url + 'Tpackinglist/getGrid',
            params: {transaksi_doc: record.data.transaksi_doc},
            method: 'POST',
            fields: ['trdetailitem_id','trdetail_doc','trdetail_item','trdetail_po','trdetail_date','trdetail_sjap','trdetail_qty','trdetail_unit','trdetail_price','trdetail_amount','trdetail_weight','trdetail_pack'],
            success: function(transport){
                form.setAction('edit');
                form.setRecordIndex(index);
                form.getForm().setValues(record.getData());
                Ext.getCmp('TAB_tpackinglist').setActiveTab(0);
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
    getCustomer: function(me, record, item, index){
        var win = this.getWIN_tpcustomer();
        var form = this.getFRM_tpackinglist();
        form.getForm().setValues(record.getData());
        win.close();
    },
    showMaterial: function(){
        var win = this.getWIN_tpitem();
        win.show();
    },
    addMaterial: function(me, record, item, index){
        var grid = this.getGRID_tpackinglist_mat();
        var win = this.getWIN_tpitem();
        var recordIndex = grid.store.findBy(function(data, id){
           //console.log(data.get('mat_sapcode')); 
        if(record.data.item_id == data.get('trdetailitem_id')){
            return true;
        }
           return false;
        });
        if(recordIndex != -1){
            Ext.MessageBox.confirm('Confirmation', 'Material / Item sudah Ada. Ingin menambahkan kembali ?', function(btn){
               if(btn == 'yes'){
                    grid.store.add({
                       trdetailitem_id : record.data.item_id,
                       trdetail_sjap :'-',
                       trdetail_item : record.data.item_kode + ' - ' + record.data.item_nama,
                       trdetail_po : '-',
                       trdetail_date : Ext.Date.format(new Date(), 'Y-m-d'),
                       trdetail_qty : 1,
                       trdetail_unit: record.data.item_unit,
                       trdetail_price: record.data.item_harga,
                       trdetail_amount: '',
                       trdetail_weight: record.data.item_weight,
                       trdetail_weighttotal: '',
                       trdetail_upp: record.data.item_upp,
                       trdetail_pack: ''
                   });
                win.close();
               }
            });
        }else{
            grid.store.add({
               trdetailitem_id : record.data.item_id,
               trdetail_sjap :'-',
               trdetail_item : record.data.item_kode + ' - ' + record.data.item_nama,
               trdetail_po : '-',
               trdetail_date : Ext.Date.format(new Date(), 'Y-m-d'),
               trdetail_qty : 1,
               trdetail_unit: record.data.item_unit,
               trdetail_price: record.data.item_harga,
               trdetail_amount: '',
               trdetail_weight: record.data.item_weight,
               trdetail_weighttotal: '',
               trdetail_upp: record.data.item_upp,
               trdetail_pack: ''
           });
           win.close();
        }

    },
    doSaveform: function(){
        var form = this.getFRM_tpackinglist();
        var values = form.getValues();
        var action = form.getAction();
        var recValue = Ext.create('Almindo.Tpackinglist.model.M_tpackinglist', values);
        console.log(action);

        var grid = this.getGRID_tpackinglist_mat();
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
    },
    doProsesCRUD : function (inAction,record,data){
        var form = this.getFRM_tpackinglist();
        var grid = this.getGRID_tpackinglist_mat();
        var grid2 = this.getGRID_tpackinglist();
        var store = grid.getStore();
        var store2 = grid2.getStore();
        var box = Ext.MessageBox.wait('Sedang Memproses Data...', 'Harap Tunggu');
        Ext.Ajax.request({
                    url: base_url + 'Tpackinglist/' +  inAction,
                    method: 'POST',
                    type:'json',
                    params: [JSON.stringify(record.data),'||',JSON.stringify(data)],
                    success: function(response){
                        switch(inAction) {
                            case 'delete':
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Delete Packinglist', 'Delete Data Success', 'success');
                                    //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                break;
                            case 'create' :
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Insert Packinglist', 'Insert Data Success', 'success');
                                break;
                            case 'update' :
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Update Packinglist', 'Update Data Success', 'success');
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
    print_file: function(record){
        var previewPrint = Ext.create('Ext.window.Window', {
            title: 'Print Preview',
            width: 1000,
            height: 600,
            modal   : true,
            closeAction: 'hide',
            items: [{ 
                     xtype: 'component',
                     html : '<iframe src="'+ base_url +'Tpackinglist/print_file/'+ record.data.transaksi_id +'" width="100%" height="550px"></iframe>',
                  }]
        });
        previewPrint.show();
    }
});