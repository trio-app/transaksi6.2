<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class MMerk extends MX_Controller{
	
	public function index(){

		$this->load->view('V_mmerk');
	}


     public function read(){
        $this->load->model('R_mmerk');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mmerk->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");        
        //print_r(json_decode($jsonData,true));
        $this->load->model('C_mmerk');
        $this->C_mmerk->insertDT(json_decode($jsonData,true));
            
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_mmerk');
        $this->U_mmerk->updateDT(json_decode($jsonData,true));
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_mmerk');
        $this->D_mmerk->deleteDT(json_decode($jsonData,true));
    }
    public function cbolist(){
        $this->load->model('R_mmerk');
        header('Content-type: application/json');
        print_r($this->R_mmerk->cbolist());
    }
    
}
