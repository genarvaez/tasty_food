/*$(document).ready(function(){
  $.ajax({
    url: "https://developers.zomato.com/api/v2.1/search?entity_id=83&entity_type=city",
    beforeSend: function( req ) {
      req.setRequestHeader('user-key','dced529441fdc0169b85c82a8c296a5b');
    },
    type: 'GET',
    datatype: 'JSON',
  })

  .done(function(response){
    response.restaurants.forEach(function(e){
      var precio = e.restaurant.average_cost_for_two;
      var name = e.restaurant.name;
      var usd = e.restaurant.currency;
      var cocina = e.restaurant.cuisines;
      var img = e.restaurant.featured_image;
      var localidad = e.restaurant.location.locality_verbose;
      var address = e.restaurant.location.address;
      var rating = e.restaurant.user_rating.aggregate_rating;

      //Despliegue de info de cada restaurant al apretar la foto principal
      //$(".responsive-img").on("click", function(){
      $(".info-rest").append("<div class='col s12 m12 info'><h4>" + name + "</h4><i class='small material-icons'>favorite_border</i><div class='direccion'><h5>Address</h5><p>"+address+ "</p></div><div class='precio'><h5>Price</h5><p>"+usd+ precio+ "</p></div><div class='rating'><h5>Rating</h5>"+ rating+"</div></div>")
    });

$(".historial").click(function(){
        $(".send").empty();
        $(".actual-profile").attr('src', $(this).children('div').children("img").attr("src"));
        console.log($(this).children('div').children(".bold").text())
        $(".actual-nick").html($(this).children('div').children(".bold").text())
        $("span").html(miHora());
    })

      //Comparación dos restaurants
      $(".small").on("click", function(){
      $(".info-rest").append("<div class='col s4 m4 comp'><h5>Cuisine</h5><h5>Cost for two</h5><h5>Rate</h5></div><div class='col s4 m4 res1'><h4>"+ name+ "</h4><p>"+cocina+ "</p><p>"+usd+ precio+"</p><p>"+rating+ "</p></div><div class='col s4 m4 res2'><h4>"+name+"</h4><p>"+cocina+ "</p><p>"+usd+ precio+"</p><p>"+rating+ "</p></div")
      });
});
  })

  .fail(function(error){
    console.log("error");
  })
  
});*/


