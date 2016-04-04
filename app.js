document.getElementById('search').addEventListener('click', function(){
  var query = document.getElementById('query').value;

  var imgRequest = new XMLHttpRequest();
  imgRequest.addEventListener('load', render);
  imgRequest.open('GET',"https://api.gettyimages.com/v3/search/images?phrase=" + query);

  imgRequest.send();

});

function render(){

  var images = JSON.parse(this.responseText).images;

  images.forEach(function(element){
    var imgURL = element.display_sizes[0].uri;
  });

}