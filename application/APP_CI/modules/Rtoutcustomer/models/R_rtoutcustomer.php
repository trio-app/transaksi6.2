<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class R_rtoutcustomer extends CI_Model {
    
function load_default($start,$limit,$filter){
    $dtfilter = json_decode($filter,true);
    
    $customer=$dtfilter[0]['value']['customer_nama'];
    
    $this->load->database();
    $sql = " SELECT SQL_CALC_FOUND_ROWS
                                    tr_receiptout.receiptout_id,
                                    tr_receiptout.receiptout_doc,
                                    tr_receiptout.receiptout_from,
                                    tr_receiptout.receiptout_to,
                                    tr_receiptout.receiptout_date,
                                    m_customer.customer_id,
                                    m_customer.customer_nama,
                                    tr_receiptout_detail.recdetailout_doc,
                                    SUM(tr_receiptout_detail.recdetailout_price) AS Price
                                    FROM
                                    tr_receiptout_detail
                                    INNER JOIN tr_receiptout ON tr_receiptout.receiptout_doc = tr_receiptout_detail.recdetailout_doc
                                    INNER JOIN m_customer ON tr_receiptout.receiptout_to = m_customer.customer_id
                                    WHERE customer_nama LIKE '".$customer."' Group by tr_receiptout_detail.recdetailout_doc ORDER BY receiptout_id ASC 
                                    ";
    
    $query = $this->db->query($sql);
                    //return $db->last_query();
    $rows = $query->result_array();


    $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
    $count = $query2->row('hasil');

    $data = array(
                'TotalRows' => $count,
                    'Rows' => $rows
                 );
    return json_encode($data);   

}

function getGrid($data){
    $this->load->database();
    $this->db->select(' tr_receiptout_detail.*
                    ',FALSE);
    $this->db->join('tr_receiptout', 'tr_receiptout.receiptout_doc= tr_receiptout_detail.recdetailout_doc', 'LEFT');
    $this->db->from('tr_receiptout_detail');
    $this->db->where('tr_receiptout_detail.recdetailout_doc', $data);
    $this->db->order_by('recdetailout_date', 'DESC');
    $query = $this->db->get();
    $rows = $query->result_array();
    return json_encode($rows);            
}

}
