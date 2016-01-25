$(document).ready(function() {
  init_footer();
  $('#footer').on('mouseover', function() {
    $(this).stop();
    $(this).animate({height: '125px', opacity: 1}, {duration: 800});
  });
  $('#footer').on('mouseleave', function() {
    $(this).stop();
    $(this).animate({height: '25px', opacity: 0.5}, {duration: 800});
  });
  $('nav').find('li').hover(function() {
    $(this).closest('ul').toggleClass('color-nav-hover');
  });
});

function init_footer() {
  $('footer').animate({height: '25px'}, {duration: 1000});
}
