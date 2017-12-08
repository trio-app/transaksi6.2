<?php

class R_login extends CI_Model {

	function Signin($data){
		$where = array(
			'user_login' => $data['userid'],
			'user_password' => md5($data['userpass'])
			);

		$this->db->select('*');
		$this->db->from('cp_user');
		$this->db->where($where);
		$query	= $this->db->get();
		$row	= $query->result_array();
                
		return $row;


	}
}