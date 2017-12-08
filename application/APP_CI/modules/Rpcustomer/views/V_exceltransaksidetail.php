<?php
// Fungsi header dengan mengirimkan raw data excel
header("Content-type: application/vnd-ms-excel");
 
// Mendefinisikan nama file ekspor "hasil-export.xls"
$title = '[EXPORT]_REPORT-PACKINGLIST-DETAIL-by_CUSTOMER' . date("Y-m-d");
header("Content-Disposition: attachment; filename=". $title .".xls");

?>

<table border="1">
	<tr>
		<th>No. SJ</th>
		<th>Item</th>
		<th>PO.</th>
		<th>Date</th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Berat</th>
                <th>Pack</th>
	</tr>
	<?php
	//koneksi ke database
	foreach($query as $key => $data){
		echo '
		<tr>
			<td>'.$data['trdetail_sjap'].'</td>
			<td>'.$data['item_nama'].'</td>
			<td>'.$data['trdetail_po'].'</td>
			<td>'.$data['trdetail_date'].'</td>
                        <td>'.$data['trdetail_qty'].'</td>
                        <td>'.$data['trdetail_unit'].'</td>
                        <td>'.$data['trdetail_price'].'</td>
                        <td>'.$data['trdetail_amount'].'</td>
                        <td>'.$data['trdetail_weight'].'</td>
                        <td>'.$data['trdetail_pack'].'</td>
		</tr>
		';
    
}
	?>
</table>