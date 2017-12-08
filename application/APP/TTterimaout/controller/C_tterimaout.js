	Ext.define('Almindo.TTterimaout.controller.C_tterimaout',{
		extend:'Ext.app.Controller',
		views:[ 'Almindo.TTterimaout.view.FRM_tterimaout',
				'Almindo.TTterimaout.view.TAB_tterimaout',
				'Almindo.TTterimaout.view.GRID_tterimaout_inv',
				//'Almindo.TTterimaout.view.WIN_tterimaitem',
				'Almindo.TTterimaout.view.WIN_tterimacust',
				'Almindo.TTterimaout.view.GRID_tterimaout',

				'Almindo.Mcustomer.view.GRID_mcustomer'
		],	
		stores:[
		],

		refs:[{
				ref:'FRM_tterimaout',
				xtype:'FRM_tterimaout',
				selector:'FRM_tterimaout',
				autoCreate: true
			},{
				ref:'GRID_tterimaout',
				xtype:'GRID_tterimaout',
				selector:'GRID_tterimaout',
				autoCreate: true
			},{
				ref:'WIN_tterimacust',
				xtype:'WIN_tterimacust',
				selector:'WIN_tterimacust',
				autoCreate: true
			},{
				ref:'GRID_tterimaout_inv',
				xtype:'GRID_tterimaout_inv',
				selector:'GRID_tterimaout_inv',
				autoCreate: true
			}],
		init: function(){
            this.control({
                    'FRM_tterimaout button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_tterimaout button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_tterimacust > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'GRID_tterimaout_inv button[action=add_invoice]': {
                        click: this.add_invoice
                    },
                    'TAB_tterimaout button[action=save_invoice]': {
                        click: this.doSaveform
                    },
                    'TAB_tterimaout GRID_tterimaout': {
                        itemdblclick: this.onRowdblclick,
                        removeitem: this.deleteItem,
                        print_file: this.print_file
                    },
                    'GRID_tterimaout > toolbar > textfield[itemId=searchData]': {
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
	                                   }]);
	                          }
	     		
	     },
	     showCust: function(){
	     	var win = this.getWIN_tterimacust();
	     	win.show();
	     },
	     showDocument: function(){
	     	Ext.Ajax.request({
	     		url: base_url + 'TTterimaout/autoNum',
	     		method: 'POST',
	     		success: function(transport){
	     			Ext.getCmp('receiptout_doc').setValue(transport.responseText);

	     		}
	     	});
	     },
	     getCustomer: function(me, record, item, index){
	     	var win = this.getWIN_tterimacust();
	     	var form = this.getFRM_tterimaout();
	     	form.getForm().setValues(record.getData());
	     	win.close();
	     },
	     add_invoice: function (me,record, item, index){
	     	var grid = this.getGRID_tterimaout_inv();
	     	grid.store.add({
	     		recdetailout_invoice : '-',
	     		recdetailout_delivery: '-',
	     		recdetailout_po : '-',
	     		recdetailout_date : new Date(),
	     		recdetailout_price: 0,  
	     	});
	     },
	     doSaveform: function(){
	        var form = this.getFRM_tterimaout();
	        var values = form.getValues();
	        var action = form.getAction();
	        var recValue = Ext.create('Almindo.TTterimaout.model.M_tterimaout', values);
	        console.log(action);

	        var grid = this.getGRID_tterimaout_inv();
	        var data = [];
	        grid.store.each(function(rec){
	            data.push(rec.data);
	        });                                  

	        if(action == 'edit'){
	            if(form.isValid() && (grid.store.getCount() > 0)){
	                this.doProsesCRUD('update ',recValue,data);
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
	        var form = this.getFRM_tterimaout();
	        var grid = this.getGRID_tterimaout_inv();
	        var grid2 = this.getGRID_tterimaout();
	        var store = grid.getStore();
	        var store2 = grid2.getStore();
                var box = Ext.MessageBox.wait('Proses Memuat Data Harap Tunggu.', 'Harap Tunggu');
	        Ext.Ajax.request({
                    url: base_url + 'TTterimaout/' +  inAction,
                    method: 'POST',
                    type:'json',
                    params: [JSON.stringify(record.data),'||',JSON.stringify(data)],
                    success: function(response){
                        switch(inAction) {
                            case 'delete':
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Delete Tanda Terima OUT', 'Delete Data Success', 'success');
                                    //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                break;
                            case 'create' :
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Insert Tanda Terima OUT', 'Insert Data Success', 'success');
                                break;
                            case 'update' :
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Update Tanda Terima OUT', 'Update Data Success', 'success');
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
        var form = this.getFRM_tterimaout();
        
        var grid = this.getGRID_tterimaout_inv();
        grid.store.reload();
        var box = Ext.MessageBox.wait('Proses Memuat Data Harap Tunggu.', 'Harap Tunggu');
        Ext.Ajax.request({
            url: base_url + 'TTterimaout/getGrid',
            params: {recdetailout_doc: record.data.receiptout_doc},
            method: 'POST',
            fields: ['recdetailout_id','recdetailout_doc','recdetailout_invoice','recdetailout_delivery','recdetailout_po','recdetailout_date','recdetailout_price'],
            success: function(transport){
                form.setAction('edit');
                form.setRecordIndex(index);
                form.getForm().setValues(record.getData());
                Ext.getCmp('TAB_tterimaout').setActiveTab(0);
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
                     html : '<iframe src="'+ base_url +'TTterimaout/print_file/'+ record.data.receiptout_id +'" width="100%" height="550px"></iframe>',
                  }]
        });
        previewPrint.show();
    }   
    });