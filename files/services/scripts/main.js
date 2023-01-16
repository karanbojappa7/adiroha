 function openFunction(){
  document.getElementById("menu").style.width="300px";
  document.getElementById("mainbox").style.marginRight="0px";
  document.getElementById("mainbox").innerHTML="";
 }
function closeFunction(){
 document.getElementById("menu").style.width="0px";
 document.getElementById("mainbox").style.marginRight="0px";
 document.getElementById("mainbox").innerHTML="&#9776; ";
}



$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

















