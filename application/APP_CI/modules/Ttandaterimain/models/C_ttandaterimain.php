<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class C_ttandaterimain extends CI_Model {



function insertDT($dtrows, $doc)

            {

                $this->load->database();

                $data = array(

                        'receipt_doc' => $doc,

                        'receipt_date' => $dtrows['receipt_date'],

                        'receipt_from' => $dtrows['receipt_from'],

                        'receipt_to' => $dtrows['customer_id'],

                        'sys_create_user' => $this->session->userdata('user_login'),
                        
                        'sys_create_date' => mdate('%Y-%m-%d %H:%i:%s', time()),
                );



                $this->db->insert('tr_receipt', $data);

                return $doc;

            }

            

function insertGrid($dtrows,$num){

                $result = array();

                

                foreach ($dtrows as $key => $value){

                    $result[] = array(

                        'recdetail_doc' => $num,

                        'recdetail_invoice' => $value['recdetail_invoice'],

                        'recdetail_delivery' => $value['recdetail_delivery'],
                        
                        'recdetail_faktur' => $value['recdetail_faktur'],

                        'recdetail_po'=> $value['recdetail_po'],

                        'recdetail_date'=> $value['recdetail_date'],

                        'recdetail_price'=> $value['recdetail_price'],
                        
                        'sys_create_user' => $this->session->userdata('user_login'),
                        
                        'sys_create_date' => mdate('%Y-%m-%d %H:%i:%s', time()),

                    );

                };

    

                $this->load->database();

                $this->db->insert_batch('tr_receipt_detail', $result);  



    

}



            

function autoNum(){

                $this->load->database();

                $this->db->set('rec_num', 'rec_num+1', FALSE);

                $this->db->where('id', 1);

                $this->db->update('m_autonum');

}

}

