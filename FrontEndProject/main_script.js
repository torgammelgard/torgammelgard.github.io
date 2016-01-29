$(document).ready(function() {
  init_footer();
  init_image_infos();
  init_listeners();
  init_form();
});

var image_info_div_bottom = {bottom: '-150px'};

/* Creates an sliding effect (upwards) on the footer */
function init_footer() {
  $('footer').animate({height: '25px'}, {duration: 1000});
}

function init_image_infos() {
  $('.image-info-textarea').css(image_info_div_bottom);
  $('.image-info-textarea').css({opacity: '0.25'});
}
/* Adds event listeners to some elements for effect etc */
function init_listeners() {

  // Footer
  $('#footer').on('mouseover', function() {
    $(this).stop();
    $(this).animate({height: '125px', opacity: 1}, {duration: 800});
  });
  $('#footer').on('mouseleave', function() {
    $(this).stop();
    $(this).animate({height: '25px', opacity: 0.5}, {duration: 800});
  });

  // Navigation
  $('nav').find('li').on('mouseover', function() {
    $('nav').find('li').removeClass('color-nav-hover');
    $(this).addClass('color-nav-hover');
    var index = $(this).data('index');
    $("div[class^=\"menu-dropdown\"]").hide();
    $(".menu-dropdown-" + $(this).data('index')).show();
  });
  $('nav').find('li').on('mouseleave', function() {
    var index = $(this).data('index');
    if (!$('.menu-dropdown-' + index).is(':hover')) {
      $(this).toggleClass('color-nav-hover');
      $(".menu-dropdown-" + $(this).data('index')).hide();
    }
  });
  $("div[class^=\"menu-dropdown\"]").on('mouseleave', function() {
    $(this).hide();
    $('nav').find('li').removeClass('color-nav-hover');
  });

  // Form
  $('#favorite_form').submit(function(event) {
    event.preventDefault();
    console.log($('#planet_selection').text());
  });

  // image information items
  $('.image-info-item').hover(function() {
    $(this).find('.image-info-textarea').animate({bottom: '0px', opacity: '1'});
  }, function() {
    $(this).find('.image-info-textarea').animate($.extend(image_info_div_bottom, {opacity: '0.25'}));
  });
}

/* Data - Planet information */
var planets = [
    {name: 'Mercury', radius: 2440},
    {name: 'Venus', radius: 6052},
    {name: 'Earth', radius: 6378},
    {name: 'Mars', radius: 3397},
    {name: 'Jupiter', radius: 71492},
    {name: 'Saturn', radius: 60268},
    {name: 'Uranus', radius: 25559},
    {name: 'Neptune', radius: 24766}];

/* Fills the selection form with data by appending option tags */
function init_form() {
  var selection = $('#planet_selection');
  for (var planet of planets) {
    $("<option>" + planet.name + "</option>").appendTo(selection);
  }
}
