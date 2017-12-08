<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!-- application title -->
        <title><?php echo app_title() . ' - ' . strip_tags(app_ver()); ?></title>
        <!-- included file -->
        <link  href="<?php echo extjs_url().'build/classic/theme-classic/resources/theme-classic-all.css'; ?>" rel="stylesheet" />
        <script src="<?php echo extjs_url().'build/ext-all.js'; ?>"></script>
        <script src="<?php echo extjs_url().'build/classic/theme-classic/theme-classic.js'; ?>"></script>
        <script src="<?php echo base_url().'system/exportexcel.js'; ?>"></script>
        
    <script type="text/javascript">    
        // base variable        
        var base_url = '<?php echo base_url(); ?>';
        var extjs_url = '<?php echo extjs_url(); ?>';
 
    </script>   
    <script type="text/javascript">
        // function run when ready
        Ext.onReady(function(){
            // container
        var dttransaction = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true
            },
            proxy: {
                type: 'ajax',
                url: base_url + 'Home/menujs'
            }
        });
        var treeMenu = Ext.create('Ext.tree.Panel', {
            itemId: 'tree-panel',
            rootVisible: false,
            xtype: 'treepanel',
            border:0,
            height: 500,
            autoScroll : true,
            store: dttransaction
        }); 
        treeMenu.getSelectionModel().on('select', function(selModel, record) {
                var isfolder = false;
                var thisTab = Ext.getCmp(record.data.id);
                isfolder = record.data.leaf;

                if(isfolder == true){
                    if(!thisTab){
                            var newtab = Ext.getCmp('contentTAB').add({
                                    title: record.data.text,
                                    id : record.data.id,
                                    // closable: true,
                                    closeAction: 'hide',
                                    autoDestroy:false,
                                    maximizable:true,
                                    layout:'fit',
                                    width:'100%',
                                    loader:{
                                        autoLoad:true,
                                        url:base_url + record.data.id,
                                        scripts:true
                                    }
                                    });
                            Ext.getCmp('contentTAB').updateLayout();
                            Ext.getCmp('contentTAB').setActiveTab(newtab);
                                // console.log("buat baru" + record.internalId);
                    }else{
                        Ext.getCmp('contentTAB').updateLayout();
                        Ext.getCmp('contentTAB').setActiveTab(thisTab);
                    }
                }


            });             
            
            Ext.create('Ext.container.Viewport',{
                layout : 'border',
                items: [{
                    // top/north position
                    region: 'north',
                    margin: '5',
                    items: [
                        // top toolbar
                        Ext.create('Ext.toolbar.Toolbar',{
                            items: [{
                                xtype: 'box',
                                html: '<span style="font-size:14pt;"><?php echo app_title(); ?></span> <?php echo app_ver(); ?>',
                                padding: '0 10'
                            },'->',{
                                
                            },{
                                xtype: 'button',
                                scale: 'large',
                                text: '&nbsp;',
                                icon: base_url + 'system/img/gear.ico',
                                menu : [{
                                    text: 'Reload Application',
                                    icon: base_url + 'system/img/refresh.ico',
                                    handler: function(){
                                        refresh();
                                    }                                        
                                },{
                                    icon: base_url + 'system/img/info.ico',
                                    text : 'About',
                                    handler: function(){
                                        Ext.MessageBox.show({
                                           title: 'About',
                                           msg: '<?php echo app_title(); ?><br/><?php echo app_ver(); ?><br/>Copyright &copy; 2017',
                                           buttons: Ext.MessageBox.OK,
                                           icon: 'info'
                                       });                                        
                                    }
                                },{
                                    icon: base_url + 'system/img/info.ico',
                                    text : 'Update Detail',
                                    handler: function(){
                                        Ext.MessageBox.show({
                                           title: 'Update Detail',
                                           msg: '<?php echo app_upgrade(); ?>',
                                           buttons: Ext.MessageBox.OK
                                       });                                        
                                    }
                                },'-',{
                                    text: 'Logout',
                                    icon: base_url + 'system/img/logout.ico',
                                    handler: function(){
                                        sysLogout();
                                    }
                                }]
                            }]
                        })
                    ]
                },{
                    // left/west position
                    region: 'west',
                    collapsible: true,
                    title: 'Navigation',
                    width: 200,
                    rootVisible: false,
                    margins: '0 5 5 5',
                    autoScroll: true,
                    items: [treeMenu]
                },{
                    // center position
                    region: 'center',
                    xtype: 'tabpanel',
                    id: 'contentTAB',
                    margins: '0 5 5 0', // Atas - kanan - bawah - kiri,
                    items: {
                            layout: {
                                    type: 'fit',
                                    align: 'stretch'
                            },
                            id:'Home/dashboard',
                            title: 'Dashboard',
                            closable: false,
                            closeAction: 'hide',
                            maximizable:true,
                            autoWidth: true,
                            autoHeight: true,
                            autoScroll: true,
                            autoLoad:{url:base_url + 'Home/dashboard' ,scripts:true}
                    }
                },{
                    // bottom/south position
                    region: 'south',
                    margin: '0 5 5',
                    items: [
                        // bottom toolbar / info detail
                        Ext.create('Ext.toolbar.Toolbar',{
                            items: [
                                // user account
                                {xtype: 'displayfield', fieldLabel: 'User Account ', value: '<span style="color:green; "><?php echo $this->session->user_name; ?></span>',margins: '0 5'},
                                '-',
                                // usser group
                                {xtype: 'displayfield', fieldLabel: 'User Group ', value: '<span style="color:green; "><?php echo $this->session->user_group; ?></span>',margins: '0 5'},
                                '-',
                                // server name
                                {xtype: 'displayfield', fieldLabel: 'Server Name ', value: '<span style="color:green; "><?php echo $this->db->hostname; ?></span>',margins: '0 5'},
                                '-',
                                // server access
                                {xtype: 'displayfield', fieldLabel: 'Server Access ', value: '<span style="color:green; "><?php echo $this->db->database; ?></span>',margins: '0 5'},
                                '-','->',
                                // Refresh Button
                                {
                                    text: 'Reload App',
                                    icon: base_url + 'system/img/refresh.ico',
                                    iconAlign: 'right',
                                    handler: function(){
                                        refresh();
                                    }
                                },                                
                                // logout button
                                {
                                    text: 'Logout',
                                    icon: base_url + 'system/img/logout.ico',
                                    iconAlign: 'right',
                                    handler: function(){
                                        sysLogout();
                                    }
                                }
                            ]          
                        })
                    ]
                }]
            });
                    
            
            function sysLogout(){
                Ext.MessageBox.confirm('Confirmation', 'System Logout. Are you sure?', redirect);
            };

            function redirect(btn){
                if(btn == "yes"){
                     window.location.assign(base_url + 'Login/Signout');
                }
            }; 
            
            function refresh(){
                Ext.Msg.confirm('Reload Application', 'Are you sure?', function (button) {
                    if (button == 'yes') {
                        location.reload()
                    }
                }, this);                
            };           
        });
        
    </script>
    </head>
    <body>
        <div id="toolbar"></div>
    </body>
</html>