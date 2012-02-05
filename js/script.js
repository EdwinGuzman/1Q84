var get_table = function() {
	$.ajax({
			type: "GET",
			url: 'php/get_songs.php',
			//data: 'book=' + book,
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
				$('tr').each(function() {
					$(this).click(function() {
						var songname = $(this).attr('alt');
						var byartist = $(this).attr('id');
						
						$('#song-title').text(songname);
						$('#artist').text(byartist);
						/*
						if(songname.indexOf('N/A') != -1)
							alert(byartist);
						else
							alert(songname + " " + byartist);
						**********************
						if($(this).next().hasClass('slideIt')) {
							$(this).next().slideUp().removeClass('slideIt');
						} else {
							$('.under:visible').slideUp();
							$(this).next().slideDown().addClass('slideIt');
						}
						*/
						
						//$('#video-container').fadeIn('slow');
						
					});
				});
				
			} // END SUCCESS: function()
			
		});
		
};

$(document).ready(
	function() {
		//$('button').click(function() {
		//	var book=$(this).attr('id');
		get_table();
		//});
		
				
		$('#back-top').hide();
		$(function() {
			$(window).scroll(
				function() {
					if($(this).scrollTop() > 200 && $(this).width() >= 1320) {
						$('#back-top').fadeIn();
					} else {
						$('#back-top').fadeOut();
					}
				}
			);
			
			$('#back-top a').click(
				function() {
					$('body, html').animate({
						scrollTop: 0 },
						800);
					return false;
				}
			);
		});
		
		$(window).resize(function() {
			if ($(window).width() <= 1320)
				$('#back-top').fadeOut();
			else {
				if(!$('#back-top:visible'))
					$('#back-top').fadeIn();
			}
		});
		
		$('#close-vid').click(function() {
			$('#video-container').fadeOut();
		});
		
	}  
);