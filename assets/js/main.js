$('select').material_select();
 $(".button-collapse").sideNav();
 $(".more-information").hide();
var ciudad;
$(".select-city").on("change", function(){

  if($(this).val() == 1){
    ciudad = 83
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
  
  $.ajax({
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
        $(".restaurant-box").append("<div class='col s4 m4 img-box'><img src='../dist/img/imagen-no-disponible.gif' class='responsive-img' onclick='ver_detalle(" + element.restaurant.id + ")'><div class='row info-rest'><div class='col s6 m6 '><p>"+element.restaurant.name+
        "</p></div><div class='col s4 m4 text-info'><p>"+element.restaurant.location.locality+ "  <i class='small material-icons'>local_dining</i></p></div></div></div>")
      }
      else{
      $(".restaurant-box").prepend("<div class='col s4 m4 img-box'><img src='"+element.restaurant.featured_image+
        "' class='responsive-img' onclick='ver_detalle(" + element.restaurant.id + ")'><div class='row info-rest'><div class='col s5 m5 '><p>"+element.restaurant.name+
        "</p></div><div class='col s7 m7 text-info'><p>"+element.restaurant.location.locality+ "   <i class='small material-icons'>local_dining</i></p></div></div></div>")
      }
      
      $(".more-information").show();
    })  
  })
  .fail(function() {
    console.log("error");
  })
})

function ver_detalle(id){

$.ajax({
    url: "https://developers.zomato.com/api/v2.1/restaurant?res_id=" + id,
    beforeSend: function( req ) {
      req.setRequestHeader('user-key','dced529441fdc0169b85c82a8c296a5b');
    },
    type: 'GET',
    datatype: 'JSON',
  })
.done(function(response){
    console.log(response);
     $(".info-rest").append("<div class='col s12 m12 info'><h4>" + response.name + "</h4><i class='small material-icons'>favorite_border</i><div class='direccion'><h5>Address</h5><p>"+response.location.address+ "</p></div><div class='precio'><h5>Price</h5><p>"+response.currency+ response.average_cost_for_two + "</p></div><div class='rating'><h5>Rating</h5>"+ response.user_rating.aggregate_rating +"</div></div>");
  });

}






