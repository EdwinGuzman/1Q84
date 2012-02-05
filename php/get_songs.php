<?php
/*
ADD MYSQL CREDENTIALS HERE:

<<<<<<< HEAD
ADD SQL CREDENTIALS HERE

=======
	$dbhost = '';
	$dbuser = '';
	$dbpwd = '';
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpwd) or die ('Error');
	
	$dbname = '';
>>>>>>> 168f2c7193145af602385b229cf9f69c27c18b16
*/

	mysql_select_db($dbname) or die ('error');
	
	/* for accents */
	$names = mysql_query("SET NAMES 'utf8'");
	
	$sql= 'SELECT * FROM songs';
	$result = mysql_query($sql);
	$song_list = '';
	while($row = mysql_fetch_array($result)) {
		$row[1] = strtoupper($row[1]);
		//$row[4] = explode(" ", $row[4]);
		$song_list .= '<tr class="tooltip" title="&quot;'.$row[6].'&quot;">';
		$song_list .= "<td>".$row[0]."</td>".
					"<td>".$row[1]."</td>".
					"<td>".$row[2]."</td>".
					"<td>".$row[3]."</td>".
					"<td>".$row[4]."</td>".
					"<td>".$row[5]."</td>";
		$song_list .= "</tr>";
	}
	echo $song_list;
	
?>