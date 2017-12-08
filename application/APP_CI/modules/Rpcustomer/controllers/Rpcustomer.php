<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Rpcustomer extends CI_Controller {
    
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){
		$this->load->view('V_rpcustomer');
	}
        
        public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('transaksi_doc');
            $this->load->model('R_rpcustomer');
            header('Content-type: application/json');
            print_r($this->R_rpcustomer->getGrid($doc));
        }        

	public function read(){
            $this->load->model('R_rpcustomer');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_rpcustomer->load_default($start,$limit,$filter));
	}
        
        public function exportTransaksi(){
        $doc = $this->input->post('transaksi_doc');
        $this->load->model('R_rpcustomer');
        print_r($this->Rrpcustomer->exportTransaksi($doc));
        $data['query'] = $this->Rrpcustomer->exportTransaksi();
        $this->load->view('vexceltransaksi');
        }
    
        public function exportDetail(){
        $this->load->model('Rrpcustomer');
        $data['query'] = $this->Rrpcustomer->exportDetail();
        $this->load->view('vexceldetail', $data);
        }

        
}
