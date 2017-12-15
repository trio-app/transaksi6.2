Ext.define('Almindo.Tspkerja.controller.C_tspkerja',{
    extend: 'Ext.app.Controller',
    views: [
        'Almindo.Tspkerja.view.TAB_tspkerja',
        'Almindo.Tspkerja.view.FRM_tspkerja',
        'Almindo.Tspkerja.view.GRID_tspkerja',
        'Almindo.Tspkerja.view.WIN_tspkcustomer',
        'Almindo.Tspkerja.view.WIN_tspkbahan',
        
        
//        'Almindo.Mcustomer.view.GRID_mcustomer',
//        'Almindo.Mbahan.view.GRID_mbahan'
        
    ],
    stores: [
    ],
    refs: [{
        ref: 'FRM_tspkerja',
        xtype: 'FRM_tspkerja',
        selector: 'FRM_tspkerja',
        autoCreate: true
    },{
        ref: 'GRID_tspkerja',
        xtype: 'GRID_tspkerja',
        selector: 'GRID_tspkerja',
        autoCreate: true
    },{
        ref: 'WIN_tspkcustomer',
        xtype: 'WIN_tspkcustomer',
        selector: 'WIN_tspkcustomer',
        autoCreate: true 
    },{
        ref: 'WIN_tspkbahan',
        xtype: 'WIN_tspkbahan',
        selector: 'WIN_tspkbahan',
        autoCreate: true 
    }],
    init: function(){
            this.control({
                    'FRM_tspkerja button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_tspkerja button[action=add_bahan]': {
                        click: this.showBahan
                    },
                    'FRM_tspkerja button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_tspkcustomer > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'WIN_tspkbahan > GRID_mbahan': {
                        itemdblclick: this.getBahan
                    },
                    'TAB_tspkerja button[action=save_spk]': {
                        click: this.doSaveform
                    },
                    'TAB_tspkerja GRID_tspkerja': {
                        itemdblclick: this.onRowdblclick,
                        removeitem: this.deleteItem,
                        print_file: this.print_file,
                        PROSES: this.PROSES,
                        FINISH: this.FINISH,
                    },
                    'GRID_ttandaterimain > toolbar > textfield[itemId=searchData]': {
                        specialkey: this.searchData
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
    showCust: function(){
        var win = this.getWIN_tspkcustomer();
        win.show();
    },
    showBahan: function(){
        var win = this.getWIN_tspkbahan();
        win.show();
    },
    showDocument: function(){
        Ext.Ajax.request({
            url: base_url + 'Tspkerja/autoNum',
            method: 'POST',
            success: function(transport){
                Ext.getCmp('spk_doc').setValue(transport.responseText);
            }
        }); 
    },
    getCustomer: function(me, record, item, index){
        var win = this.getWIN_tspkcustomer();
        var form = this.getFRM_tspkerja();
        form.getForm().setValues(record.getData());
        win.close();
    },
    getBahan: function(me, record, item, index){
        var win = this.getWIN_tspkbahan();
        var form = this.getFRM_tspkerja();
        form.getForm().setValues(record.getData());
        Ext.getCmp('bahan_jenis2').setValue(record.data.bahan_jenis);
        win.close();
    },
    doSaveform: function(){
        var form = this.getFRM_tspkerja();
        var store = Ext.getStore('Almindo.Tspkerja.store.ST_tspkerja');
        var values = form.getValues();
        var record = form.getRecord();
        var action = form.getActions();
        var recValue = Ext.create('Almindo.Tspkerja.model.M_tspkerja', values);
        console.log(action);
        console.log(values);

        if(action == 'edit'){
                if(form.isValid()){
                        this.doProsesCRUD('update',recValue);
                }
        }else{
                if(form.isValid()){
                        this.doProsesCRUD('create',recValue);
                }
        }
    },
    doProsesCRUD : function (inAction,record){
            var win = this.getFRM_tspkerja();
            var grid = this.getGRID_tspkerja();
            var store = grid.getStore();//Ext.getStore('ScontactStore');
            Ext.Ajax.request({
                    url: base_url + 'Tspkerja/' +  inAction,
                    method: 'POST',
                    //type:'json',
                    params: JSON.stringify(record.data),
                    success: function(response){
                            switch(inAction) {
                                    case 'delete':
                                                    store.load();
                                                    Ext.toast({
                                                        html: 'Delete SPK Success',
                                                        title: 'Notification',
                                                        width: 200,
                                                        align: 'tr',
                                                        icon: base_url + 'system/images/icons/accept.png',
                                                        timeout: 5000
                                                    }); 
                                            break;
                                    case 'create' :
                                                    Ext.toast({
                                                        html: 'Create SPK Success',
                                                        title: 'Notification',
                                                        width: 200,
                                                        align: 'tr',
                                                        icon: base_url + 'system/images/icons/accept.png',
                                                        timeout: 5000
                                                    }); 
                                            break;
                                    case 'update' :
                                                    store.load();
                                                    Ext.toast({
                                                        html: 'Update SPK Success',
                                                        title: 'Notification',
                                                        width: 200,
                                                        align: 'tr',
                                                        icon: base_url + 'system/images/icons/accept.png',
                                                        timeout: 5000
                                                    }); 
                                            break;
                                    case 'PROSES' :
                                                    store.load();
                                                    Ext.toast({
                                                        html: 'PROSES, Data Sedang Di Proses',
                                                        title: 'Notification',
                                                        width: 200,
                                                        align: 'tr',
                                                        icon: base_url + 'system/images/icons/accept.png',
                                                        timeout: 5000
                                                    }); 
                                            break;
                                    case 'FINISH' :
                                                    store.load();
                                                    Ext.toast({
                                                        html: 'Selesai, Data Telah Selesai',
                                                        title: 'Notification',
                                                        width: 200,
                                                        align: 'tr',
                                                        icon: base_url + 'system/images/icons/accept.png',
                                                        timeout: 5000
                                                    }); 
                                            break;        
                            }
        win.getForm().reset();
        win.setActions('');

                    },
                    failure: function(response){
                            Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                    }
            });
    },
    onRowdblclick: function(me, record, item, index){
        var form = this.getFRM_tspkerja();
            form.setActions('edit');
            form.setRecordIndex(index);
            form.getForm().setValues(record.getData());
            
            Ext.getCmp('TAB_tspkerja').setActiveTab(0);

    },
    deleteItem: function(record){
        Ext.Msg.confirm('Delete Data', 'Are you sure?', function (button) {
            if (button == 'yes') {
                this.doProsesCRUD('delete',record);
            }
        }, this);
    },
    PROSES: function(record){
        Ext.Msg.confirm('PROSES DATA', 'Are you sure?', function (button) {
            if (button == 'yes') {
                this.doProsesCRUD('PROSES',record);
            }
        }, this);
    },
    FINISH: function(record){
        Ext.Msg.confirm('FINISH DATA', 'Are you sure?', function (button) {
            if (button == 'yes') {
                this.doProsesCRUD('FINISH',record);
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
                     html : '<iframe src="'+ base_url +'Tspkerja/print_file/'+ record.data.spk_id +'" width="100%" height="550px"></iframe>',
                  }]
        });
        previewPrint.show();
    }
});