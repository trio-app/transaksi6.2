<?php
// Fungsi header dengan mengirimkan raw data excel
header("Content-type: application/vnd-ms-excel");
 
// Mendefinisikan nama file ekspor "hasil-export.xls"
$title = '[EXPORT]_REPORT-TANDA_TERIMA-IN-DETAIL-by_CUSTOMER' . date("Y-m-d");
header("Content-Disposition: attachment; filename=". $title .".xls");

?>

<table border="1">
	<tr>
		<th>No Invoice</th>
		<th>No Surat Jalan</th>
		<th>No PO</th>
		<th>Tanggal Invoice</th>
                <th>Nominal</th>
	</tr>
	<?php
	//koneksi ke database
	foreach($query as $key => $data){
		echo '
		<tr>
			<td>'.$data['recdetail_invoice'].'</td>
			<td>'.$data['recdetail_delivery'].'</td>
			<td>'.$data['recdetail_po'].'</td>
			<td>'.$data['recdetail_date'].'</td>
			<td>'.$data['recdetail_price'].'</td>
		</tr>
		';
    
}
	?>
</table>