//alert('test') // use in every js, makes sure no errors, will load when ok
// my (our) key = 03e4633e2d85874a921380e47cac705d

$('#search').submit(function(e){		// e and e.preventDefault = do not submit the form
	e.preventDefault();

	var song = $('#song').val(); 		// not giving anything
	var url = `https://api.soundcloud.com/tracks/?q=${song}&client_id=03e4633e2d85874a921380e47cac705d`;
																			
	$('#Reset').val(''); 			// set value back to nothing
	$('#searchResults').html(''); 		// gets rid of old data
		

$.ajax({url: url, 
	success: function(response){
		console.log(response)
			response.forEach(function(song){
				var image = "https://www.zeldadungeon.net/wp-content/uploads/2012/11/Ript404.jpg";
				if(song.artwork_url!==null)			// if song does not have artwork, replace song.artwork_url with the var image (dog pic link)
				{
					image = song.artwork_url;		
				}
				console.log(song)					// .append keeps adding data
				    $("#searchResults").append(` 		
				    <div class="col-md-4 song">
					   	<div class="col-md-12 bgImage" style="background-image:url(${image})">
					    	
					    </div>
					    <div class="col-md-12">
					    	<h2>${song.title}</h2>
					    	<button data-id="${song.id}">PLAY</button>
					    </div>
					</div>
				    `);
			})					// boatstrap within div 
	}})							
})



$("body").on("click","button",function(){
 	var id = $(this).data('id');
 	var string = `http://api.soundcloud.com/tracks/${id}/stream?client_id=03e4633e2d85874a921380e47cac705d`
 	$('audio').attr('src',string);
 })

// $ pulling from html in the body when we on click button, perform function
// var (song) id = get $ THIS particular button (from above) with the data - id
// var string = is from the link
// $ pulling from html audio section, attribute replace src with the (var) string