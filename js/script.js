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
				$('#first-color').click(function() {
					
					$('table tbody tr').css({
						'background' : '#b6caf4'
					});
					$('table tbody tr:nth-child(odd)').css({
						'background' : '#d5d5d5' });
				});
				$('#second-color').click(function() {
					
					$('table tbody tr').css({
						'background' : '#6b8fd4',
						'color': '#fff'
					});
					$('table tbody tr:nth-child(odd)').css({
						'background' : '#14a',
						'color': '#fff'
					});
				});
				$('#third-color').click(function() {
					
					$('table tbody tr').css({
						'background' : '#bacaea',
						'color': '#fff'
					});
					$('table tbody tr:nth-child(odd)').css({
						'background' : '#6b8fd4',
						'color': '#fff'
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
					if($(this).scrollTop() > 200 && $(this).width() >= 1340) {
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
			//alert($(window).width());
			if ($(window).width() <= 1340)
				$('#back-top').fadeOut();
			else {
				//if(!$('#back-top:visible'))
					$('#back-top').fadeIn();
			}
		});
		
		$('#close-vid').click(function() {
			$('#video-container').fadeOut();
		});
		
	}  
);