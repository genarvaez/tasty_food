$(document).ready(function(){
  $.ajax({
    url: "https://developers.zomato.com/api/v2.1/search?entity_id=83&entity_type=city",
    beforeSend: function( req ) {
      req.setRequestHeader('user-key','ca35cc550fe071a39f8a293be54b11ed');
    },
    type: 'GET',
    datatype: 'JSON',
  })

  .done(function(response){
    console.log(response);
    response.restaurants.forEach(function(e){
      console.log(e);
      var precio = e.restaurant.average_cost_for_two;
      console.log(precio);
      var name = e.restaurant.name;
      var usd = e.restaurant.currency;
      var cocina = e.restaurant.cuisines;
      var img = e.restaurant.featured_image;
      console.log(name);
      console.log(usd);
      console.log(cocina);
      console.log(img);

      var localidad = e.restaurant.location.locality_verbose;
      var address = e.restaurant.location.address;
      var rating = e.restaurant.user_rating.aggregate_rating;

      console.log(localidad);
      console.log(address);
      console.log(rating);
      $(".info-rest").append("<div class='col s12 m12 info'><h4>" + name + "</h4><i class='small material-icons'>favorite_border</i><div class='direccion'><h5>Address</h5><p>"+address+ "</p></div><div class='precio'><h5>Price</h5><p>"+usd+ precio+ "</p></div><div class='rating'><h5>Rating</h5>"+ rating+"</div></div>")
    });
  })

  .fail(function(error){
    console.log("error");
  })
  
});


