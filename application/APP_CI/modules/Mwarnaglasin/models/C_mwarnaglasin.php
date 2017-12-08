<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mwarnaglasin extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'warnaglasin_nama' => $dtrows['warnaglasin_nama'],
                        'warnaglasin_desc' => $dtrows['warnaglasin_desc']
                );

                $this->db->insert('m_warnaglasin', $data);
                
            }
    
}
