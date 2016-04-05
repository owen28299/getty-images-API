function Page(){
  this.pageNum = 1;
  this.history = [];
}

window.onload = function(){
  var weatherRequest = new XMLHttpRequest();
  var weather = "sunny";
  var city = "honolulu, us";
  var page = new Page();
  page.history = localStorage.getItem('history').split(",");
  appendHistory();

  weatherRequest.addEventListener('load', function(){
    weather = JSON.parse(this.responseText).list[0].weather[0].main;
    document.getElementById('query').value = weather;
    imgXML(weather);
  });
  weatherRequest.open('GET',"http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&mode=JSON&appid=" + weatherKey);
  weatherRequest.send();

function imgXML(query){
  var imgRequest = new XMLHttpRequest();
  imgRequest.addEventListener('load', render);
  imgRequest.open('GET',"https://api.gettyimages.com/v3/search/images?page=" + page.pageNum + "&phrase=" + query);
  imgRequest.setRequestHeader('Api-key', key);
  imgRequest.send();
}

document.getElementById('search').addEventListener('click', function(event){
  event.preventDefault();
  var query = document.getElementById('query').value;
  document.getElementById('feed').innerHTML = "";
  imgXML(query);

  page.history.push(query);
  localStorage.setItem('history', page.history);

});

function render(){
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

function testScroll(event){

  event.preventDefault();

  console.log(localStorage.getItem('history'));

  if(window.innerHeight + window.scrollY > document.body.offsetHeight){
    page.pageNum += 1;
    var query = document.getElementById('query').value;
    imgXML(query);
  }
}

window.onscroll = testScroll;

function appendHistory(){
  var selectH = document.getElementById('dropdown');

  page.history.forEach(function(element){

    var option = document.createElement('option');
    option.value = element;
    option.innerHTML = element;

    selectH.appendChild(option);
  });

}

};