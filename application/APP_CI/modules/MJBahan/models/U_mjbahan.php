<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_mjbahan extends CI_Model {

    function updateDT($dtrows){

                    $this->load->database();
                   
                    $data = array(
                            'jbahan_nama' => $dtrows['jbahan_nama'],
                            'jbahan_desc' => $dtrows['jbahan_desc']
                    );

                    	$this->db->where('jbahan_id', $dtrows['jbahan_id']);
                    	$this->db->update('m_jbahan', $data);
                }
    
}
