<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mcategory extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'category_nama' => $dtrows['category_nama'],
                        'category_desc' => $dtrows['category_desc']
                );

                $this->db->insert('m_category', $data);
                
            }
    
}
