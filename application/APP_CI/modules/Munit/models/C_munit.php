<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_munit extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'unit_nama' => $dtrows['unit_nama'],
                        'unit_desc' => $dtrows['unit_desc']
                );

                $this->db->insert('m_unit', $data);
                
            }
    
}
