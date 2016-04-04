document.getElementById('search').addEventListener('click', function(){
  var query = document.getElementById('query').value;

  var imgRequest = new XMLHttpRequest();
  imgRequest.addEventListener('load', render);
  imgRequest.open('GET',"https://api.gettyimages.com/v3/search/images?phrase=" + query);
  imgRequest.setRequestHeader('Api-key', key);
  imgRequest.send();

});

function render(){
  document.getElementById('feed').innerHTML = "";

  var images = JSON.parse(this.responseText).images;
  var temp = document.createDocumentFragment();

  images.forEach(function(element){
    var imgURL = element.display_sizes[0].uri;
    var img = document.createElement('img');
    img.src = imgURL;
    temp.appendChild(img);

  });

  document.getElementById('feed').appendChild(temp);

}