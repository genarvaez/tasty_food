var miLatitud = [];
$(document).ready(function(){
$('select').material_select();
 $(".button-collapse").sideNav();
 $(".more-information").hide();
var ciudad;
$(".select-city").on("change", function(){

	if($(this).val() == 1){
		data = 83
	}
	else if($(this).val() == 2){
		ciudad = 257
	}
	else if($(this).val() == 3){
		ciudad = 280
	}
	else if($(this).val() == 4){
		ciudad = 67
	}
	else if($(this).val() == 5){
		ciudad = 97
	}
	else if($(this).val() == 6){
		ciudad = 73
	}
	
	/*$.ajax({
	  url: "https://developers.zomato.com/api/v2.1/search",
	  beforeSend: function( req ) {
	    req.setRequestHeader("user-key", "dced529441fdc0169b85c82a8c296a5b");
	  },
	  type: "GET",
	  dataType: 'json',
	  data: {
	  	entity_id: ciudad,
		entity_type: "city",
	  },
	})
	.done(function(res){
		console.log("success");
		console.log(res.restaurants)
		$(".restaurant-box").html("");
		res.restaurants.forEach(function(element, i){
			if(element.restaurant.featured_image == ""|| (element.restaurant.featured_image).substr(-3) != "jpg"){
				$(".restaurant-box").append("<div class='col s4 m4 img-box'><img src='../dist/img/imagen-no-disponible.gif' class='responsive-img'><div class='row info-rest'><div class='col s6 m6 '><p>"+element.restaurant.name+
				"</p></div><div class='col s4 m4 text-info'><p>"+element.restaurant.location.locality+ "  <i class='small material-icons'>local_dining</i></p></div></div></div>")
			}
			else{
			$(".restaurant-box").prepend("<div class='col s4 m4 img-box'><img src='"+element.restaurant.featured_image+
				"' class='responsive-img'><div class='row info-rest'><div class='col s5 m5 '><p>"+element.restaurant.name+
				"</p></div><div class='col s7 m7 text-info'><p>"+element.restaurant.location.locality+ "   <i class='small material-icons'>local_dining</i></p></div></div></div>")
			}
			$(".more-information").show();
		})

		
	})
	.fail(function() {
		console.log("error");
	})*/
	
	
})

data[0].restaurants.forEach(function(element){
	if(element.restaurant.featured_image == ""|| (element.restaurant.featured_image).substr(-3) != "jpg"){
		$(".restaurant-box").append("<div class='col s4 m4 img-box'><img src='../dist/img/imagen-no-disponible.gif' class='responsive-img'><div class='row info-rest'><div class='col s6 m6 '><p>"+element.restaurant.name+
		"</p></div><div class='col s4 m4 text-info'><p>"+element.restaurant.location.locality+ "  <i class='small material-icons'>local_dining</i></p></div></div></div>")
	}
	else{
	$(".restaurant-box").prepend("<div class='col s4 m4 img-box'><img src='"+element.restaurant.featured_image+
		"' class='responsive-img'><div class='row info-rest'><div class='col s5 m5 '><p>"+element.restaurant.name+
		"</p></div><div class='col s7 m7 text-info'><p>"+element.restaurant.location.locality+ "   <i class='small material-icons'>local_dining</i></p></div></div></div>")
	}
})

console.log(data[0].restaurants[0].restaurant.name)


/*COMIENZA SECCION DISCOVER J*/

  
  var city;
  $(".j-select").on("change", function(){
    city = 83;
  })
  $.ajax({
    url: "https://developers.zomato.com/api/v2.1/search",
    beforeSend: function( req ) {
      req.setRequestHeader("user-key", "7a3020c872c97e0a5c3589835c28da71");
    },
    type: "GET",
    dataType: 'json',
    data: {
      entity_id: city,
      entity_type: "city"    
    },
  })
  .done(function(res) {
    console.log("success");
    console.log(res)
    res.restaurants.forEach(function(e){
      console.log(e)

      miLatitud.push([e.restaurant.location.latitude + "," + e.restaurant.location.longitude]);
      return miLatitud;
    })  
    console.log(miLatitud)
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  })
});

  //Funcion de geolocalizacion y trazado de ruta
  function initMap(){

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var markers = [];
    for (i = 0; i < miLatitud.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(miLatitud[i][0], miLatitud[i][1]),
        map: map
      });
      markers.push(marker);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
/*TERMINA SECCION DISCOVER J*/


