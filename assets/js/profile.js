
$(document).ready(function(){
	$(".button-collapse").sideNav();
});


$(function(){
	$("#profile_image").change(function(e){
		var img = URL.createObjectURL(e.target.files[0]);
		$(".responsive-img").attr("src",img);
	})
})