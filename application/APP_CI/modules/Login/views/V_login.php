<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!-- application title -->
        <title><?php echo app_title() . ' - ' . strip_tags(app_ver()); ?></title>
        <!-- included file -->
        <link  href="<?php echo extjs_url().'build/classic/theme-classic/resources/theme-classic-all.css'; ?>" rel="stylesheet" />
         <script src="<?php echo extjs_url().'build/ext-all-debug.js'; ?>"></script>
         <script src="<?php echo extjs_url().'build/classic/theme-classic/theme-classic.js'; ?>"></script>
        
    <script type="text/javascript">    
        // base variable        
        var base_url = '<?php echo base_url(); ?>';
        var extjs_url = '<?php echo extjs_url(); ?>';
 
    </script>   
    <script type="text/javascript">
        // function run when ready
        Ext.onReady(function(){
            Ext.create('Ext.container.Viewport', {
                    layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                    },
                    items: [
                        Ext.create('Ext.form.Panel', {
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            id: 'formLogin',
                            title : '<?php echo app_title() . ' - ' . app_ver();  ?>',
                            titleAlign : 'center',
                            height: 200,
                            width: 320,
                            bodyPadding: '20',
                            defaultType: 'textfield',
                            frame: true,
                            items: [
                                {
                                    fieldLabel: 'User Name',
                                    id: 'user',
                                    name: 'userid',
                                    width: '100%',
                                    allowBlank: false,
                                    tabIndex: 1,
                                    listeners: {
                                        afterrender: function(me){
                                            me.focus(true);
                                        }
                                    }
                                },
                                {
                                    fieldLabel: 'Password',
                                    name: 'userpass',
                                    width: '100%',
                                    allowBlank: false,
                                    inputType: 'password',
                                    tabIndex: 2
                                }
                            ],
                            buttons: [{
                                text: 'Login',
                                formBind:true,	
                                handler: function(me) {
                                        var form = me.up('form').getForm();
                                        console.log(form);
                                        form.submit({
                                                url: base_url + 'Login/Signin',
                                                waitMsg: 'Please Wait',
                                                success: function(fp, o){
                                                        Ext.toast({
                                                            html: o.result.msg,
                                                            title: 'Notification',
                                                            width: 200,
                                                            align: 'tr'
                                                        });
                                                        window.location.assign(base_url + 'Home');
        //										Ext.MessageBox.alert('Status', o.result.msg, function(){
        //											window.location.assign(base_url + 'Home');
        //										});
                                                },
                                                failure: function(fp, o){
                                                        Ext.toast({
                                                            html: o.result.msg,
                                                            title: 'Notification',
                                                            width: 200,
                                                            align: 'tr'
                                                        });
                                                }
                                        });

                                }
                            }]                              
			})
                    ]
            });
        });
        
    </script>
    </head>
    <body>
        <div id="toolbar"></div>
    </body>
</html>