<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Rtincustomer extends CI_Controller {
    
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){
		$this->load->view('V_rtincustomer');
	}
        
        public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('receipt_doc');
            $this->load->model('R_rtincustomer');
            header('Content-type: application/json');
            print_r($this->R_rtincustomer->getGrid($doc));
        }        

	public function read(){
            $this->load->model('R_rtincustomer');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_rtincustomer->load_default($start,$limit,$filter));
	}
        
        public function exportTransaksi(){
        $doc = $this->input->post('transaksi_doc');
        $this->load->model('R_rtincustomer');
        print_r($this->R_rtincustomer->exportTransaksi($doc));
        $data['query'] = $this->R_rtincustomer->exportTransaksi();
        $this->load->view('vexceltransaksi');
        }
    
        public function exportDetail(){
        $this->load->model('R_rtincustomer');
        $data['query'] = $this->R_rtincustomer->exportDetail();
        $this->load->view('vexceldetail', $data);
        }

        
}
