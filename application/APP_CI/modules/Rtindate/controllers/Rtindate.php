<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Rtindate extends CI_Controller {
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){            
            $this->load->view('V_rtindate');
	}
        
        public function read(){
            $this->load->model('R_rtindate');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_rtindate->load_default($start,$limit,$filter));

        }     
        
       public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('receipt_doc');
            $this->load->model('R_rtindate');
            header('Content-type: application/json');
            print_r($this->R_rtindate->getGrid($doc));
        }        

        public function exportTransaksi(){
        $this->load->model('R_rtindate');
        $data['query'] = $this->R_rtindate->exportTransaksi();
        $this->load->view('vexceltransaksi', $data);
    } 

      
}
