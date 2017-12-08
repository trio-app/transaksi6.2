<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_tpackinglist extends CI_Model {
    
    function insertDT($dtrows, $doc){
        
        $this->load->database();
        $data = array(
                'transaksi_doc' => $doc,
                'transaksi_date' => $dtrows['transaksi_date'],
                'transaksi_customer' => $dtrows['customer_id'],
                'transaksi_supplier' => $dtrows['transaksi_supplier'],
                'sys_create_user' => $this->session->userdata('user_login'),
                'sys_create_date' => mdate('%Y-%m-%d %H:%i:%s', time()),
        );

        $this->db->insert('tr_packinglist', $data);
        return $doc;
    }
            
    function insertGrid($dtrows,$num){
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
                'sys_create_user' => $this->session->userdata('user_login'),
                'sys_create_date' => mdate('%Y-%m-%d %H:%i:%s', time()),
            );
        };

        $this->load->database();
        $this->db->insert_batch('tr_packinglist_detail', $result);    
    }
            
    function autoNum(){
        $this->load->database();
        $this->db->set('doc_num', 'doc_num+1', FALSE);
        $this->db->where('id', 1);
        $this->db->update('m_autonum');
    }
    
}
