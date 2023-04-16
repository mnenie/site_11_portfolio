$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    items: 3,
    startPosition: 1,
    margin:30,
    responsive:{
      0:{
        items:2,
        margin:10,
        startPosition: 0,
        center: false,
      },
      460: {
        items: 3,
        margin:10,
        startPosition: 0,
        center: false,
      },
      810:{
        items: 3,
        margin:10,
        startPosition: 0,
        center: false,
      },
      850:{
        startPosition: 0,
        margin: 20,
        center: false,
      },
      1000:{
          margin: 30,
      }
  }
    // autoplay:true,
    // autoplayTimeout:5000,
   
  });
});
// owl.on('mousewheel', '.owl-stage', function (e) {
//   if (e.deltaY>0) {
//       owl.trigger('next.owl');
//   } else {
//       owl.trigger('prev.owl');
//   }
//   e.preventDefault();
// });

const menu = document.querySelector('.a-header_after')
const closemenu = document.querySelector('.a-header_afterclickmobile')
const mobile = document.querySelector('.mobile')

menu.onclick = function() {
  mobile.classList.remove('none')
}
closemenu.onclick = function() {
  mobile.classList.add('none')
}
const owl = $('.owl-carousel');
$('.img-first-arrow').click(function () {
	owl.trigger('prev.owl.carousel');
});

