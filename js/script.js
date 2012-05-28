var get_table = function(book) {
	test = 'apple';
	var whichbook = book;
	$('#main-home').fadeOut('slow');
	$.getJSON('js/novels.json', function(data){
		var table = '';
		var datatest=[];
		$('#tableid').html(table);
		for (var i = 0; i< data[whichbook].length;i++) {
			datatest.push(data[whichbook][i])
			var quotes = data[whichbook][i].Quote;
			var q = Math.floor(Math.random()*quotes.length);
			// add the <tr> and attrs inside it
			table += '<tr id="'+data[whichbook][i].By+'" ' +
					'alt="'+data[whichbook][i].Song+'" class="tooltip" ' +
					'title="&quot;'+quotes[q]+'&quot;">';
			// adding the actual columns
			table += '<td>' + data[whichbook][i].Chapter + '</td>' +
					 '<td>' + data[whichbook][i].Title.toUpperCase() + '</td>' +
					 '<td>' + data[whichbook][i].Character + '</td>' +
					 '<td>' + data[whichbook][i].Song + '</td>' +
					 '<td>' + data[whichbook][i].By + '</td>' + 
					 '<td>' + data[whichbook][i].Pages.toString() + '</td>' +
					 //'<td>' + quotes[q] + '</td>'+
				'</tr>';
		}
		$('#tableid').append(table);

		var counter=0;
		$('#first_table tbody tr').each(function(){
			var quotes = datatest[counter].Quote;
			var q = Math.floor(Math.random()*quotes.length);
			$(this).attr({
				'id'	: 	datatest[counter].By, 
				'title' : 	'"'+quotes[q]+'"',
				'class'	: 	"tooltip",
				'alt'	: 	datatest[counter].Song
			});
			counter+=1;
		});
		$('.thead_headers th:last-child').attr({
			'id': 'pgs',
			'class': '{sorter: false}'
		});

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
		/*$('#first_table').tablesorter();*/

		if (whichbook==="book1")
			$('caption span').text(' Book One ('+datatest.length+' songs)');
		else if (whichbook==="book2")
			$('caption span').text(' Book Two ('+datatest.length+' songs)');
		else if (whichbook==="book3")
			$('caption span').text(' Book Three ('+datatest.length+' songs)');

		$('tbody tr').each(function() {
			$(this).click(function() {
				var songname = $(this).attr('alt');
				var byartist = $(this).attr('id');
				
				$('#song-title').text(songname);
				$('#artist').text(byartist);
				$('#song_note').text('');
				
				if (byartist === "W. C. Handy" && book==="booktwo") {
					if (songname === "N/A") {
						$('#input').val(byartist+" Louis Armstrong Bigard");
						$('#song-title').text('Songs');
					} else {
						$('#input').val(songname+" "+byartist+" Louis Armstrong Bigard");
					}
				} else if (songname === "N/A") {
					$('#song-title').text('Songs');
					$('#input').val(byartist);
				} else if (byartist === "N/A") {
					$('#artist').text('Unspecified');
					$('#input').val(songname);
				} else if (songname === "Sinfonietta" && book==="book2") {
					$('#input').val(songname+" "+byartist+" Seiji Ozawa Chicago Symphony");
					$('#song_note').text('Note: as specified, the results are from Seiji' +
						' Ozawa conducting the Chicago Symphony.');
				} else if (songname === "Violin Concerto" && book==="book3") {
					$('#input').val(songname+" "+byartist+" David Oistrakh");
					$('#song_note').text("Note: as specified, the results are from David Oistrakh's performance.");
				} else {
					$('#input').val(songname+" "+byartist);
				}

				$('#video-container').fadeIn('slow');
				$('#videoPlayer').html('');
				document.getElementById('formbutton').click();
			});
		});
	});
	setInterval(function() {
		$('#main').fadeIn('slow');
	}, 1000);
	
};

$(document).ready(
	function() {
		$('#addSongdiv').append(
			"<button data-bind='click: addSong'>Add this song</button>"
		);
		$('#main').hide();
		$('#buttons-top').hide();


		$('.mainbtn').click(function() {
			var book=$(this).val();
			$('#buttons-top').fadeIn();
			$('#main').hide();
			$('#video-container').hide();
			get_table(book);
		});
		


		$('#top-vid-header').click(function() {
			$('#drag').fadeOut();
		});
		

		$('#close-vid').click(function() {
			$('#video-container').fadeOut();
		});

		var SongModel = function() {
		    this.songList = ko.observableArray([]);
		 
		    this.selectedItems = ko.observableArray([]);
		 
		    this.addSong = function() {
		    	var songToAdd = $('#song-title').text()+", "+$('#artist').text();
		    	for (var i=0;i<this.songList().length;i++) {
		    		if (this.songList()[i]===songToAdd){
		    			return;
		    		} 
		    	}
		        this.songList.push(songToAdd);
		    };
		    this.removeSelected = function () {
		        this.songList.removeAll(this.selectedItems());
		        this.selectedItems([]); // Clear selection
		    };
		    this.play = function() {
		    	if (this.selectedItems().length === 1) {
		    		$('#input').val(this.selectedItems());
		    		$('#song-title').text(this.selectedItems()[0].split(", ")[0]);
		    		$('#artist').text(this.selectedItems()[0].split(", ")[1]);
		    		document.getElementById('formbutton').click();
		    	}
		    };
		 
		};
		 
		ko.applyBindings(new SongModel());
		
	}  
);


// Not too sure what this is from
/*function() {
		
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

}*/