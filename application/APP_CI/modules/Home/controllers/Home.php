<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MX_Controller{
    
    function __construct() {
        parent::__construct();
        $this->load->helper('app_helper');
        if(empty($this->session->userdata('isLogin'))){
            redirect('Login');
        }
    }
    
    public function index(){
        $this->load->view('V_home');
    }
    
    public function menujs(){
        header('Content-type: application/json');        
        $this->load->model('R_home');
        $data =  $this->R_home->menujs();
        print($data);        
    }
}

