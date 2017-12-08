<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit ('No direct script access allowed');

class Rpdate extends MX_Controller{



	public function index(){
		$this->load->view('V_rpdate');
	}
	public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $this->load->model('R_rpdate');
            $doc = $this->input->post('transaksi_doc');
            header('Content-type: application/json');
             print_r( $this->R_rpdate->getGrid($doc));
        }   

	public function read(){
		$this->load->model('R_rpdate');
		$start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_rpdate->load_default($start,$limit,$filter));

	}

	public function exportTransaksi(){
            $this->load->model('R_rpcustomer');
            $data['query'] = $this->R_rpcustomer->exportData();
            $this->load->view('V_exceltransaksi', $data);
        }

	public function exportDetail(){
            $this->load->model('R_rpcustomer');
            $data['query'] = $this->R_rpdate->exportDetail();
            $this->load->view('v_exceltransaksidetail', $data);
        }

}