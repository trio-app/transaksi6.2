<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MBahan extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){
            $this->load->view('v_mbahan');
	}
        
        public function read(){
            $this->load->model('R_mbahan');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->R_mbahan->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");
            $this->load->model('C_mbahan');
            $this->C_mbahan->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('U_mbahan');
            $this->U_mbahan->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('D_mbahan');
            $this->D_mbahan->deleteDT(json_decode($jsonData,true));
        }
        public function cbolist(){
        $this->load->model('R_mbahan');
        header('Content-type: application/json');
        print_r($this->R_mbahan->cbolist());
    }
    
    public function upload(){
        $id = $this->input->post('bahan_id');
        $old = $this->input->post('bahan_gambar');
        $this->load->model('U_mbahan');
            $status = "";
            $msg = "";
            $file_element_name = 'file';

            if ($status != "error")
            {
                $config['upload_path'] = './system/img/upload';
                $config['allowed_types'] = 'gif|jpg|png|doc|txt';
                $config['max_size'] = 1024 * 8;
                $config['encrypt_name'] = TRUE;

                $this->load->library('upload', $config);

                if (!$this->upload->do_upload($file_element_name))
                {
                    $status = 'error';
                    $msg = $this->upload->display_errors('', '');
                    $ket = true;
                }
                else
                {
                    $data = $this->upload->data();
                    $this->U_mbahan->add_img($id, $old, $data['file_name']);
                    $status = $data['file_name'];
                    $msg = "File successfully uploaded";
                    $ket = true;
                }
                @unlink($_FILES[$file_element_name]);
            }
            //echo json_encode(array('status' => $status, 'msg' => $msg));
            echo '{"success": '. $ket .', "msg": "'.$msg.'"}';
    }
        
}
