<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Rtoutcustomer extends CI_Controller {
    
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){
		$this->load->view('V_rtoutcustomer');
	}
        
        public function getGrid(){
            $doc = $this->input->post('receiptout_doc');
            $this->load->model('R_rtoutcustomer');
            header('Content-type: application/json');
            print_r($this->R_rtoutcustomer->getGrid($doc));
        }        

	public function read(){
            $this->load->model('R_rtoutcustomer');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_rtoutcustomer->load_default($start,$limit,$filter));
	}

        
}
