<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MX_Controller{
    
    function __construct() {
        parent::__construct();
        $this->load->helper('app_helper');
    }
    
    public function index(){
        $this->load->view('V_login');
    }
    
    public function Signin(){
        $data = array(
          'userid' => $this->input->post('userid'),
          'userpass' =>$this->input->post('userpass'),
        );
        
        $this->load->model('R_login');
        $acc = $this->R_login->Signin($data);
        if(!empty($acc)){
            $login = array(
                'user_login' => $acc[0]['user_login'],
                'user_name' => $acc[0]['user_name'],
            );
        }
        
        if(count($acc)==1){
            $this->session->set_userdata('isLogin', TRUE);
            $this->session->set_userdata('app_id', app_id());
            $this->session->set_userdata($login);
                        //print_r($data[0]);
            echo '{"success": 1, "msg": "Login Berhasil. Klik untuk melanjutkan"}';
        }else{
                echo '{"failed": 1, "msg": "Login Gagal. Periksa kembali Username atau Password"}';
        }
    }
    
    
    public function signOut(){
            $session_array = array('user_id', 'user_name', 'user_group');
            $this->session->unset_userdata($session_array);
            $this->session->unset_userdata('isLogin');
            redirect('Login');
    }    
}

