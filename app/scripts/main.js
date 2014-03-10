console.log('You can DO IT!!');

 
$(function(){

	Parse.initialize("pXomYWhXkM6KRovF8EE9WPa2vxzFTRuvmUHcjap1", "LFnPXFI5lj1FEmpmpra5ulMO96X2OXbNAqN7xw9p");

	window.bigfeet = new BigfootCollection();
  	
  	bigfeet.fetch({
  		success: function(){
  			bigfeet.each(function(bf){
  				new ListView({model: bf});
  			})
  		}
  	});
 	
})

$('.upload-button').click(function(){
	var bigfoot = new Bigfoot()

	bigfoot.save({
		name: $('.js-name').val(),
		city: $('.js-city').val(),
		time: $('.js-time').val()

	});

	new ListView({
		model: bigfoot
	})

	$('.js-name').val(''),
	$('.js-city').val(''),
	$('.js-time').val('')

})

// google.maps.event.addListener(map, "click", function (event) {
//     var latitude = event.latLng.lat();
//     var longitude = event.latLng.lng();
//     console.log( latitude + ', ' + longitude );
// });


function initialize() {
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(41.5008195, -99.680902),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

   
    // var flightPath = new google.maps.Polyline({
    //     path: flightPlanCoordinates,
    //     geodesic: true,
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 1.0,
    //     strokeWeight: 2
    // });

    // flightPath.setMap(map);


    google.maps.event.addListener(map, "click", function(event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        console.log(latitude + ', ' + longitude);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
