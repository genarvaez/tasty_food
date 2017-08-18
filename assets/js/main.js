$('select').material_select();

var ciudad;
$(".select-city").on("change", function(){
	ciudad = $(this).val();
})


$.ajax({
  url: "https://developers.zomato.com/api/v2.1/search",
  beforeSend: function( req ) {
    req.setRequestHeader("user-key", "dced529441fdc0169b85c82a8c296a5b");
  },
  type: "GET",
  dataType: 'json',
  data: {
  	entity_id: ciudad,
	entity_type: "city"	
},
})
.done(function(res) {
	console.log("success");
	console.log(res)
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
})


/*COMIENZA SECCION DISCOVER J*/
$(document).ready(function(){
  var miLatitud = [];
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
