<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_mbahan extends CI_Model {

function updateDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'bahan_nama' => $dtrows['bahan_nama'],
                        'bahan_jenis' => $dtrows['bahan_jenis'],
                        'bahan_merk' => $dtrows['bahan_merk'],
                        'bahan_gap' => $dtrows['bahan_gap'],
                        'bahan_bentuk' => $dtrows['bahan_bentuk'],
                        'bahan_glasin' => $dtrows['bahan_glasin'],
                        'bahan_ukuranP' => $dtrows['bahan_ukuranP'],
                        'bahan_ukuranL' => $dtrows['bahan_ukuranL'],
                        'bahan_porporasi' => $dtrows['bahan_porporasi'],
                        'bahan_mataperbaris' => $dtrows['bahan_mataperbaris'],
                        'bahan_matapisau' => $dtrows['bahan_matapisau'],
                        'bahan_warnacetakan' => $dtrows['bahan_warnacetakan'],
                        'bahan_qtyname' => $dtrows['bahan_qtyname'],
                        'bahan_totalname' => $dtrows['bahan_totalname'],
                        'bahan_core' => $dtrows['bahan_core'],
                        'bahan_arahgulungan' => $dtrows['bahan_arahgulungan'],
                        'bahan_sensor' => $dtrows['bahan_sensor']
                );
                $this->db->where('bahan_id', $dtrows['bahan_id']);
                $this->db->update('m_bahan', $data);
                
            }
            
    function add_img($id, $old, $file){
        $data = array(
            'bahan_gambar' => $file
        );
        
        $this->load->database();
        $this->db->where('bahan_id', $id);
        $this->db->update('m_bahan', $data);
        
        if(file_exists("./system/img/upload/".$old) && !empty($old)){
            unlink("./system/img/upload/".$old);
        }
    }
    
}
