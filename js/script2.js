var get_table = function(book) {
	$('#main-home').fadeOut('slow');
	$.ajax({
		type: "GET",
		url: 'php/get_songs.php',
		data: 'book=' + book,
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
					
					if (songname === "N/A") {
						$('#song-title').text('Songs');
						$('#input').val(byartist);
					} else {
					/*
					** ADDED THIS **
					***/
						$('#input').val(songname+" "+byartist);
					}
					/*
					********************/
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
					
					$('#video-container').fadeIn('slow');
					$('#videoPlayer').html('');
					document.getElementById('formbutton').click();
				});
			});
		} // END SUCCESS: function()
			
	});
	setInterval(function() {
		$('#main').fadeIn('slow');
	}, 1000);
	
};

$(document).ready(
	function() {
		$('#video-container').draggable({
			containment: "body",
			scroll:false, 
			handle: "#top-vid-header"
		});
		$('#main').hide();
		$('button').click(function() {
			var book=$(this).attr('id');
			if (book === 'bookone')
				get_table(book);
		});
		
		$('#top-vid-header').click(function() {
			$('#drag').fadeOut();
		});
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