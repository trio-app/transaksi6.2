<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MJBahan extends MX_Controller {

    public function index(){
       $this->load->view('V_mjbahan');
    }
    
    public function read(){
        $this->load->model('R_mjbahan');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mjbahan->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");        
        //print_r(json_decode($jsonData,true));
        $this->load->model('C_mjbahan');
        $this->C_mjbahan->insertDT(json_decode($jsonData,true));
            
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_mjbahan');
        $this->U_mjbahan->updateDT(json_decode($jsonData,true));
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_mjbahan');
        $this->D_mjbahan->deleteDT(json_decode($jsonData,true));
    }
    public function cbolist(){
        $this->load->model('R_mjbahan');
        header('Content-type: application/json');
        print_r($this->R_mjbahan->cbolist());
    }
            
}
