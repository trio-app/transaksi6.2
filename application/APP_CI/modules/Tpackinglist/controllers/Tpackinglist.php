<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Tpackinglist extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){            
            $this->load->view('V_tpackinglist');
	}
        
        
        public function autoNum(){
            $this->load->model('R_tpackinglist');
            
            $month = date('m');
            $year = date('Y');
            $num = $this->R_tpackinglist->autoNum();
            $code = sprintf("%04s", $num);
            $doc = $month . '.' . $code . '/AP/PL/' . $year;
            echo $doc;
            return $doc;
        }        
        
        public function customer(){
            $this->load->model('R_tpackinglist');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_tpackinglist->load_customer($start,$limit,$filter));          
        }
        
        public function item(){
            $this->load->model('R_tpackinglist');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_tpackinglist->load_item($start,$limit,$filter));             
        }
        
        public function read(){
            $this->load->model('R_tpackinglist');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_tpackinglist->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");   
            $data = explode(',||,',$jsonData);
            $this->load->model('C_tpackinglist');
            $doc = $this->autoNum();
            $num = $this->C_tpackinglist->insertDT(json_decode($data[0],true), $doc);
            $this->C_tpackinglist->insertGrid(json_decode($data[1],true),$num);
            $this->C_tpackinglist->autoNum();

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");     
            $data = explode(',||,',$jsonData);
            $this->load->model('U_tpackinglist');
            $num = $this->U_tpackinglist->updateDT(json_decode($data[0],true));
            $this->U_tpackinglist->deleteOld($num);
            $this->U_tpackinglist->updateGrid(json_decode($data[1],true),$num);
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");   
            $data = explode(',||,',$jsonData);
            $this->load->model('D_tpackinglist');
            $this->D_tpackinglist->deleteDT(json_decode($data[0],true));
        }
        
        public function updateGrid(){
            $jsonData =  file_get_contents("php://input");
            $this->load->model('U_tpackinglist');
            $this->U_tpackinglist->updateGrid(json_decode($jsonData,true));
            //print_r(json_decode($jsonData));
        }
        
        public function getGrid(){
            $jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('transaksi_doc');
            $this->load->model('R_tpackinglist');
            header('Content-type: application/json');
            print_r($this->R_tpackinglist->getGrid($doc));
        }        

        public function print_file($id = NULL){
              ob_start();
                        $this->load->model('R_tpackinglist');
                        $transaksi = $this->R_tpackinglist->reportPreview($id);

                        $data['tr_nomor'] = $transaksi['transaksi_doc'];
                        $data['tr_customer'] = $transaksi['customer_nama'];
                        $data['tr_supplier'] = $transaksi['transaksi_supplier'];
                        $data['tr_tanggal'] = date_format(date_create($transaksi['transaksi_date']), 'd F Y');

                        $data['tr_detail'] = $this->R_tpackinglist->reportDetail($data['tr_nomor']);

                        //print_r($this->Rpacking_list->reportPreview($id));
                        $this->load->view('V_tprint', $data);
                        $html = ob_get_contents();
               ob_end_clean();

                        require_once('./system/html2pdf/html2pdf.class.php');
                        $pdf = new HTML2PDF('L','Legal','en');
                        $pdf->writeHTML($html);
                        $pdf->Output();	        
        }
}
