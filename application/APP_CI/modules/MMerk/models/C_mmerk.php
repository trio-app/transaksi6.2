<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mmerk extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'merk_nama' => $dtrows['merk_nama'],
                        'merk_desc' => $dtrows['merk_desc']
                );

                $this->db->insert('m_merk', $data);
                
            }
    
}
