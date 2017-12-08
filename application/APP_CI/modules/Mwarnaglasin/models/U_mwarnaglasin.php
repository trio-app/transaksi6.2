<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_mwarnaglasin extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                    $data = array(
                            'warnaglasin_nama' => $dtrows['warnaglasin_nama'],
                            'warnaglasin_desc' => $dtrows['warnaglasin_desc']
                    );
                    $this->db->where('warnaglasin_id', $dtrows['warnaglasin_id']);
                    $this->db->update('m_warnaglasin', $data);

                }
    
}
