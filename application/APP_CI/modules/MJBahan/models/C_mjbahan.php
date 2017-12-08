<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mjbahan extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'jbahan_nama' => $dtrows['jbahan_nama'],
                        'jbahan_desc' => $dtrows['jbahan_desc']
                );

                $this->db->insert('m_jbahan', $data);
                
            }
    
}
