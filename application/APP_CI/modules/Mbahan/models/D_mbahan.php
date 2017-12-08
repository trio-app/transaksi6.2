<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mbahan extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('bahan_id', $dtrows['bahan_id']);
                $this->db->delete('m_bahan');
                
                if(file_exists("./system/img/upload/".$old) && !empty($old)){
                    unlink("./system/img/upload/".$old);
                }
            }
            
}
