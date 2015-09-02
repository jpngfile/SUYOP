/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Portfolio


$( document ).ready( function() {
  // init Isotope
  var $container = $('.mosaic').isotope({
    itemSelector: '.mosaic-item',
    layoutMode: 'masonry',
  });
  
  $container.imagesLoaded().progress (function(){
  $container.isotope ('layout');
  });
  
  var filters ={};
  // bind filter button click
  $('.filters').on( 'click', 'button', function() {
  var $this = $(this);
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr ('data-filter-group');
  
  filters [filterGroup] = $this.attr('data-filter');
  var filterValue = concatValues (filters);
    $container.isotope({ filter: filterValue });
  });


  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });
  
});

$(".dropdown-menu li button").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group-vertical').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});
	
//helper function
function concatValues (obj) {
var value = '';
for (var prop in obj) {
value+=obj[prop];
}
return value;
}
// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
