<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mwarnaglasin extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){
            $this->load->view('V_mwarnaglasin');
	}
        
        public function read(){
            $this->load->model('R_mwarnaglasin');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_mwarnaglasin->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('C_mwarnaglasin');
            $this->C_mwarnaglasin->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('U_mwarnaglasin');
            $this->U_mwarnaglasin->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('D_mwarnaglasin');
            $this->D_mwarnaglasin->deleteDT(json_decode($jsonData,true));
        }
        public function cbolist(){
        $this->load->model('R_mwarnaglasin');
        header('Content-type: application/json');
        print_r($this->R_mwarnaglasin->cbolist());
    }
        
}
