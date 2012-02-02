var get_table = function() {
	$.ajax({
			type: "GET",
			url: 'php/get_songs.php',
			success: function(data) {
				$('#main_table').append(data);
				$('tbody tr').hover(
					function() {
						$(this).addClass('odd');
					},
					function() {
						$(this).removeClass('odd');
					}
				);
				$(".tooltip").poshytip({
					className: 'tip-yellowsimple',
					bgImageFrameSize:11,
					offsetX: -25
				});
				$('#first_table').tablesorter();
				$("table").stickyTableHeaders();
			}
		});
		
};

$(document).ready(
	function() {		
		get_table();
		
		/*
		$('#left-side-bar').click(
			function() {
				$('#main_table').empty();
				get_table();
			}
		);
		*/
		//$('#first_table').jScroll();
		/*
		$(window).scroll(function() {
			position = $(window).scrollTop();
			if(position >= 170) alert('hi');
		});
		*/
		
		//$('.header_stay').clone().prependTo('#container');
	}  
);