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
	entity_type: 'city'	
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
