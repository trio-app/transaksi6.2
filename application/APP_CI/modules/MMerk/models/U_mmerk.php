<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_mmerk extends CI_Model {

    function updateDT($dtrows){

                    $this->load->database();
                   
                    $data = array(
                            'merk_nama' => $dtrows['merk_nama'],
                            'merk_desc' => $dtrows['merk_desc']
                    );

                    	$this->db->where('merk_id', $dtrows['merk_id']);
                    	$this->db->update('m_merk', $data);
                }
    
}
