<?php
// Fungsi header dengan mengirimkan raw data excel
header("Content-type: application/vnd-ms-excel");
 
// Mendefinisikan nama file ekspor "hasil-export.xls"
$title = '[EXPORT]_REPORT-PACKINGLIST-by_CUSTOMER' . date("Y-m-d");
header("Content-Disposition: attachment; filename=". $title .".xls");

?>

<table border="1">
	<tr>
		<th>Customer</th>
		<th>Date</th>
		<th>Documenr No.</th>
		<th>Amount</th>
	</tr>
	<?php
	//koneksi ke database
	foreach($query as $key => $data){
		echo '
		<tr>
			<td>'.$data['customer_nama'].'</td>
			<td>'.$data['transaksi_date'].'</td>
			<td>'.$data['transaksi_doc'].'</td>
			<td>'.$data['Amount'].'</td>
		</tr>
		';
    
}
	?>
</table>