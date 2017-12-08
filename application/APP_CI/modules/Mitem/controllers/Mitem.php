<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mitem extends MX_Controller {

    public function index(){
       $this->load->view('V_mitem');
    }
    
    public function read(){
        $this->load->model('R_mitem');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mitem->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");        
        //print_r(json_decode($jsonData,true));
        $this->load->model('C_mitem');
        $this->C_mitem->insertDT(json_decode($jsonData,true));
            
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_mitem');
        $this->U_mitem->updateDT(json_decode($jsonData,true));
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_mitem');
        $this->D_mitem->deleteDT(json_decode($jsonData,true));
    }
    public function cbolist(){
        $this->load->model('Rmitem');
        header('Content-type: application/json');
        print_r($this->Rmitem->cbolist());
    }
            
}
