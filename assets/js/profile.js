
$(document).ready(function(){
	$(".button-collapse").sideNav();
});


$(function(){
	$("#profile_image").change(function(e){
		var img = URL.createObjectURL(e.target.files[0]);
		$(".responsive-img").attr("src",img);
	})
})

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            
          document.getElementById('list').insertBefore(span, null);
          localStorage.setItem('img', e.target.result);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);


  if(localStorage.img) { 

         var span = document.createElement('span');
          span.innerHTML += ['<img class="thumb" src="', localStorage.img,
                            '" title="test"/>'].join('');

          document.getElementById('list').insertBefore(span, null);
    
    }