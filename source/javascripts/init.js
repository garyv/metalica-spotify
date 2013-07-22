// fonts
window.onerror = function() {
  return true;
}
setTimeout( function(){
  try {
    Cufon.replace('h3');
  } catch (err) {};
}, 10);

// slider
$( function(){
  $('.slider').bxSlider({
    slideWidth: 220,
    minSlides: 2,
    maxSlides: 4,
    slideMargin: 10
  });
});
