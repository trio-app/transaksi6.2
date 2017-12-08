<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Ttandaterimain extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){            
            $this->load->view('V_ttandaterimain');
	}
        
        
        public function autoNum(){
            $this->load->model('R_ttandaterimain');
            
            $month = date('m');
            $year = date('Y');
            $num = $this->R_ttandaterimain->autoNum();
            $cek = strlen($num);
            
            if($cek == 1){
                $auto = '000' . $num;
            }elseif($cek == 2){
                $auto = '00' . $num;
            }elseif($cek == 3){
                $auto = '0' . $num;
            }else{
                $auto = '' . $num;
            }
            
            $data['date'] = date('Y-m-d');
            $doc = $month. '.' . $auto . '/AP/TTI/' . $year;
            echo $doc;
            return $doc;
        }        
        
        public function read(){
            $this->load->model('R_ttandaterimain');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_ttandaterimain->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");
            $data = explode(',||,',$jsonData);            
            $this->load->model('C_ttandaterimain');
            $doc = $this->autoNum();
            $num = $this->C_ttandaterimain->insertDT(json_decode($data[0],true), $doc);
            $this->C_ttandaterimain->insertGrid(json_decode($data[1],true),$num);
            $this->C_ttandaterimain->autoNum();

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");    
            $data = explode(',||,',$jsonData);
            $this->load->model('U_ttandaterimain');
            $num = $this->U_ttandaterimain->updateDT(json_decode($data[0],true));
            $this->U_ttandaterimain->updateGrid(json_decode($data[1],true),$num);
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");  
            $data = explode(',||,',$jsonData);
            $this->load->model('D_ttandaterimain');
            $this->D_ttandaterimain->deleteDT(json_decode($data[0],true));
        }  
        
    public function getGrid(){
        $jsonData =  file_get_contents("php://input");
        $doc = $this->input->post('recdetail_doc');
        $this->load->model('R_ttandaterimain');
        header('Content-type: application/json');
        print_r($this->R_ttandaterimain->getGrid($doc));
    }

     public function customerTT(){
            $this->load->model('R_ttandaterimain');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_ttandaterimain->load_customerTT($start,$limit,$filter));          
        }        
    
    public function print_file($id = NULL){
          ob_start();
                    $this->load->model('R_ttandaterimain');
                    $rec = $this->R_ttandaterimain->reportPreview($id);
          
                    $data['rec_doc'] = $rec['receipt_doc'];
                    $data['rec_to'] = $rec['customer_nama'];
                    $data['rec_from'] = $rec['receipt_from'];
                    $data['rec_date'] = date_format(date_create($rec['receipt_date']), 'd F Y');
            
                    $data['rec_detail'] = $this->R_ttandaterimain->reportDetail($rec['receipt_doc']);
                    
                    //print_r($this->Rpacking_list->reportPreview($id));
                    $this->load->view('V_tprint', $data);
                    $html = ob_get_contents();
          ob_end_clean();
                    
                    require_once('./system/html2pdf/html2pdf.class.php');
                    $pdf = new HTML2PDF('L',array('215','140'),'en');
                    $pdf->writeHTML($html);
                    $pdf->Output();	        
    }

}
