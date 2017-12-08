<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Tspkerja extends CI_Controller {
	public function __construct(){
		parent::__construct();
                //$this->load->library('dompdf_gen');
	}

	public function index(){            
            $this->load->view('V_tspkerja');
	}
        
        
        public function autoNum(){
            $this->load->model('R_tspkerja');
            
            $month = date('m');
            $year = date('Y');
            $num = $this->R_tspkerja->autoNum();
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
            
            echo 'SPK'. '/'. 'ALM'. '/'. $year . '/' . $auto ;
        }        
        
        public function read(){
            $this->load->model('R_tspkerja');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_tspkerja->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");
            $data = explode(',||,',$jsonData);            
            $this->load->model('C_tspkerja');
            $num = $this->C_tspkerja->insertDT(json_decode($data[0],true));
            //$this->Cspkerja->insertGrid(json_decode($data[1],true));
            $this->C_tspkerja->autoNum();

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");    
            $data = explode(',||,',$jsonData);
            $this->load->model('U_tspkerja');
            $this->U_tspkerja->updateDT(json_decode($jsonData,true));
            //print_r($data);
            //$this->Uspkerja->updateGrid(json_decode($data[1],true),$num);
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");  
            $data = explode(',||,',$jsonData);
            $this->load->model('D_tspkerja');
            $this->D_tspkerja->deleteDT(json_decode($data[0],true));
        }
        public function PROSES(){
            $jsonData =  file_get_contents("php://input");  
            $data = explode(',||,',$jsonData);
            $this->load->model('U_tspkerja');
            $this->U_tspkerja->updatePROSES(json_decode($data[0],true));
        }
        public function FINISH(){
            $jsonData =  file_get_contents("php://input");  
            $data = explode(',||,',$jsonData);
            $this->load->model('U_tspkerja');
            $this->U_tspkerja->updateFINISH(json_decode($data[0],true));
        }
        
        public function getGrid(){
            $jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('spkdetail_doc');
            $this->load->model('R_tspkerja');
            header('Content-type: application/json');
            print_r($this->R_tspkerja->getGrid($doc));
        }
        
        public function print_file($id = NULL){
             ob_start();
                        $this->load->model('R_tspkerja');
                        $rec = $this->R_tspkerja->reportPreview($id);

                        $data['spk_doc'] = $rec['spk_doc'];
                        $data['spk_nopo'] = $rec['spk_nopo'];
                        $data['spk_customer'] = $rec['customer_nama'];
                        $data['spk_date'] = date_format(date_create($rec['spk_date']), 'd F Y');
                        $data['spk_delivery'] = date_format(date_create($rec['spk_delivery']), 'd F Y');
                        $data['spk_tglkirim'] = date_format(date_create($rec['spk_delivery']), 'd F Y');
                        $data['value']= $this->R_tspkerja->reportPreview($id);

                        //$data['recout_detail'] = $this->Rspkerja->reportDetail($rec['receiptout_doc']);

                        //print_r($this->Rpacking_list->reportPreview($id));
                        $this->load->view('V_tprint', $data);
                        $html = ob_get_contents();
               ob_end_clean();

                        require_once('./system/html2pdf/html2pdf.class.php');
                        $pdf = new HTML2PDF('P','Legal','en');
                        $pdf->writeHTML($html);
                        $pdf->Output();	        
                        }

}
