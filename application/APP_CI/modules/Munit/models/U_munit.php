<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_munit extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                    $data = array(
                            'unit_nama' => $dtrows['unit_nama'],
                            'unit_desc' => $dtrows['unit_desc']
                    );
                    $this->db->where('unit_id', $dtrows['unit_id']);
                    $this->db->update('m_unit', $data);

                }
    
}
