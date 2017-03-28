//alert('test') // use in every js, makes sure no errors, will load when ok
// my (our) key = 03e4633e2d85874a921380e47cac705d


$('#weather').submit(function(e){		// e and e.preventDefault = do not submit the form
	e.preventDefault();

	var city = $('#Location').val(); 	// not giving anything
	var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+ city +"&cnt=7&units=imperial&APPID=5ce6b83301976eb63b4e1ef9fa75df49"
																			// units=imperial converts to Fahrenheit
	$('#Location').val(''); 			// set value back to nothing
	$('#weatherGoesHere').html(''); 	// gets rid of old data
console.log(url)
										// when submit/hit ENTER run the url, but replace "cincinnati" with the typed in city/zip of the text box


$.ajax({url: url, 
	success: function(response){
		console.log(response)
			response.list.forEach(function(day){
				console.log(day.temp.max)					// .append keeps adding data
				    $("#weatherGoesHere").append(` 		

				    <div class='col-md-1'>
				    	<h2>Conditions: ${day.weather[0].description}</h2>
				    	<h3>High: ${day.temp.max}°</h3>
				    	<h3>Low: ${day.temp.min}°</h3>
				    </div>
				    	`);
			})					// .weather is actually an array inside the object, needs [0]
	}})							// boatstrap within div 
})

