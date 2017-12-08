<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_mcategory extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                    $data = array(
                            'category_nama' => $dtrows['category_nama'],
                            'category_desc' => $dtrows['category_desc']
                    );
                    $this->db->where('category_id', $dtrows['category_id']);
                    $this->db->update('m_category', $data);

                }
    
}
