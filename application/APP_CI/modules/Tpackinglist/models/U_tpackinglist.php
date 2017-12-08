<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class U_tpackinglist extends CI_Model {

function updateDT($dtrows){
    $this->load->database();
    $data = array(
        'transaksi_customer' => $dtrows['customer_id'],
        'transaksi_date'=> $dtrows['transaksi_date'],
        'sys_update_user' => $this->session->userdata('user_login'),
        'sys_update_date' => mdate('%Y-%m-%d %H:%i:%s', time()),
    );
        $this->db->where('transaksi_doc', $dtrows['transaksi_doc']);
        $this->db->update('tr_packinglist', $data);

        return $dtrows['transaksi_doc'];

}
                
    function updateGrid($dtrows,$num){
        $result = array();

        foreach ($dtrows as $key => $value){                  

            $result[] = array(
                'trdetail_doc' => $num,
                'trdetail_item' => $value['trdetailitem_id'],
                'trdetail_po' => $value['trdetail_po'],
                'trdetail_date'=> $value['trdetail_date'],
                'trdetail_sjap'=> $value['trdetail_sjap'],
                'trdetail_qty'=> $value['trdetail_qty'],
                'trdetail_unit'=> $value['trdetail_unit'],
                'trdetail_price'=> $value['trdetail_price'],
                'trdetail_amount'=> $value['trdetail_amount'],
                'trdetail_weight'=> $value['trdetail_weighttotal'],
                'trdetail_pack'=> $value['trdetail_pack'],
                'sys_update_user' => $this->session->userdata('user_login'),
                'sys_update_date' => mdate('%Y-%m-%d %H:%i:%s', time()),
            );
        };

        $this->load->database();
        $this->db->insert_batch('tr_packinglist_detail', $result);    
    }                

    function deleteOld($id){
        $this->load->database();
        $this->db->where('trdetail_doc', $id);
        return $this->db->delete('tr_packinglist_detail');    
    }
}
