$(document).ready(
	function() {
		
		$('#first-color').click(function() {
			$('table tbody tr:nth-child(odd)').css({
				'background' : '#d5d5d5' });
			$('table tbody tr').css({
				'background' : '#b6caf4';
			});
			$('tbody tr.odd td').css({
				'background' : '#0f2b69',
				'color' : '#fff'
			});
		});
	
	}
)