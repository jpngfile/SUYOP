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

/*
//This function is kind of hard to test
//would have to set up a local server
function loadData (file, callback){
  var rawFile = new XMLHttpRequest ();
  rawFile.overrideMimeType ("application/json");
  rawFile.open ("GET",file, true);
  rawFile.onreadystatechange = function (){
    if (rawFile.readyState === 4 && rawFile.status == "200"){
      callback (rawFile.responseText);
    }
  }
  rawFile.send (null);
}*/

var myData;
var allButtons = ["All types","General","All prices","All times","All durations","All regions"];
//Portfolio

$( document ).ready( function() {
  var elem = document.getElementById("mosaic");
  elem.innerHTML = '';
  var listMosaic = document.getElementById("list-mosaic");
  //listMosaic.innerHTML = '';

  //var listwrapper = document.createElement(""div");
    //listwrapper.className = "wrapper";"

  var list = document.getElementById("table-ish"); //document.createElement ("div");
 // list.className = "table-ish";

  //creating a list header 
  //var header = document.createElement("div");
  /*
  header.className = "table-row header green";

  var nameHead = document.createElement("div");
  nameHead.className = "cell";
  nameHead.innerHTML = "Name";
  var typeHead = document.createElement("div");
  typeHead.className = "cell";
  typeHead.innerHTML = "Type";
  var timeHead = document.createElement("div");
  timeHead.className = "cell";
  timeHead.innerHTML = "Time";
  var costHead = document.createElement("div");
  costHead.className = "cell";
  costHead.innerHTML = "Cost";
  var ageHead = document.createElement("div");
  ageHead.className = "cell";
  ageHead.innerHTML = "Age";
  var websiteHead = document.createElement("div");
  websiteHead.className = "cell";
  websiteHead.innerHTML = "Website";
  header.appendChild (nameHead);
  header.appendChild (typeHead);
  header.appendChild (timeHead);
  header.appendChild (costHead);
  header.appendChild (ageHead);
  header.appendChild (websiteHead); 
  list.appendChild (header); */


  myData = programData;
  for (var i = myData.length - 1; i >= 0; i--) {

    //Making the content modal
    var contentModal = document.createElement ('div');
    contentModal.className = "portfolio-modal modal fade";
    contentModal.id = "portfolioModal" + i;
    contentModal.tabindex = "-1";
    contentModal.role = "dialog";
    contentModal.setAttribute ("aria-hidden","true");

    var modalContent = document.createElement ('div');
    modalContent.className = "modal-content";

    var closeModal = document.createElement ('div');
    closeModal.setAttribute("data-dismiss","modal");
    closeModal.className = "close-modal";
    var lr = document.createElement ('div');
    lr.className = "lr";
    var rl = document.createElement ('div');
    rl.className = "rl";
    lr.appendChild (rl);
    closeModal.appendChild (lr);

    var container = document.createElement ('div');
    var row = document.createElement ('div');
    var col = document.createElement ('div');
    col.className = "col-lg-8 col-lg-offset-2";

    var modalBody = document.createElement ('div');
    var name = document.createElement ('h2');
    name.innerHTML = myData[i].name;
    var starDivide = document.createElement ('hr');
    starDivide.setAttribute ("class", "star-primary");

    var image = document.createElement ('img');
    image.src = "img/portfolio/" + myData[i].photoName + "CoverPhoto" + myData[i].photoType; //The type of image file might change
    image.className = "img-responsive img-centered";
    image.alt = myData[i].name;

    var desc = [];
    for (var j = 0;j < myData[i].description.length; j++) {
      var descTemp = document.createElement ('p');
      descTemp.innerHTML = myData[i].description[j];
      desc.push (descTemp);
    };
    
    var details = document.createElement ('ul');
    details.className = "item-details";
    var location = document.createElement('li');
    location.innerHTML = "Location: <strong>" + myData[i].location + "</strong>";
    var time = document.createElement('li');
    time.innerHTML = "Time: <strong>" + myData[i].time + "</strong>";
    var cost = document.createElement('li');
    cost.innerHTML = "Cost: <strong>" + myData[i].cost + "</strong>";
    var age = document.createElement('li');
    age.innerHTML = "Age: <strong>" + myData[i].age + "</strong>";
    var requirements = document.createElement('li');
    requirements.innerHTML = "Requirements: <strong>" + myData[i].requirements + "</strong>";
    var applicPeriod = document.createElement('li');
    applicPeriod.innerHTML = "Application Period: <strong>" + myData[i].applicPeriod + "</strong>";
    var website = document.createElement('li');
    var link = document.createElement ('a');
    link.href = myData[i].link;
    link.target = "_blank";
    link.innerHTML = "<strong>" + myData[i].cleanLink + "</strong>";
    website.innerHTML = "Website: "
    website.appendChild (link);

    var closeButton = document.createElement ("button");
    closeButton.type = "button";
    closeButton.className = "btn btn-default";
    closeButton.setAttribute ("data-dismiss", "modal");
    closeButton.innerHTML = "<i class = \"fa fa-times\"></i>Close";

    details.appendChild (location);
    details.appendChild (time);
    details.appendChild (cost);
    details.appendChild (age);
    details.appendChild (requirements);
    details.appendChild (applicPeriod);
    details.appendChild (website);

    modalBody.appendChild (name);
    modalBody.appendChild (starDivide);
    modalBody.appendChild (image);
    for (var j = 0; j < desc.length; j++) {
      //console.log (desc[j]);
        modalBody.appendChild (desc[j]);
    };
    modalBody.appendChild (details);
    modalBody.appendChild (closeButton);

    col.appendChild (modalBody);
    row.appendChild (col);
    container.appendChild (row);

    modalContent.appendChild (closeModal);
    modalContent.appendChild (container);

    contentModal.appendChild (modalContent);

    document.body.appendChild (contentModal);

    //Making the program grid box
    
    var filters = "";
    for (var j = 0; j < myData[i].attributes.length; j++) {
      filters += myData[i].attributes[j] + " ";
    };

    var programLink = document.createElement ('a');
    programLink.href = "#portfolioModal" + i;
    //console.log (programLink.href);
    programLink.className = "portfolio-link";
    programLink.setAttribute ("data-toggle", "modal");

    var caption = document.createElement ('div');
    caption.className = "caption";
    var captionContent = document.createElement ('div');
    captionContent.className = "caption-content";
    var captionName = document.createElement ('h4');
    captionName.innerHTML = myData[i].name;
    var captionIcon = document.createElement ('i');
    captionIcon.className = "fa fa-search-plus fa-3x";
    captionContent.appendChild (captionName);
    captionContent.appendChild (captionIcon);
    caption.appendChild (captionContent);

    var gridImage = document.createElement ('img');
    gridImage.src = "img/portfolio/" + myData[i].photoName + "CoverPhoto" + myData[i].photoType;//could be different kind of file type
    gridImage.className = "img-responsive";
    gridImage.alt = myData[i].name;

    programLink.appendChild (caption);
    programLink.appendChild (gridImage);

    var mosaicItem = document.createElement ('div');
    mosaicItem.appendChild (programLink);
    mosaicItem.className = "mosaic-item portfolio-item " + filters;
    //console.log (mosaicItem.className);

    elem.appendChild (mosaicItem);

    //making the list-mosaic
    var tableItem = document.createElement ("div");
    tableItem.className = "table-row program-row " + filters;


    //This could be replaced with a for loop through an array
    var listName = document.createElement ('div');
    listName.className = "name cell";
    listName.innerHTML = myData[i].name;
    tableItem.appendChild (listName);
    var listType = document.createElement ('div');
    listType.className = "type cell";
    listType.innerHTML = myData[i].type;
    tableItem.appendChild (listType);
    var listTime = document.createElement ('div');
    listTime.className = "time cell";
    listTime.innerHTML = myData[i].time;
    tableItem.appendChild (listTime);
    var listCost = document.createElement ('div');
    listCost.className = "cost cell";
    listCost.innerHTML = myData[i].cost;
    tableItem.appendChild (listCost);
    var listAge = document.createElement ('div');
    listAge.className = "age cell";
    listAge.innerHTML = myData[i].age;
    tableItem.appendChild (listAge);
    var listWebsite = document.createElement ('div');
    listWebsite.className = "website cell";
    var listLink = document.createElement ('a');
    listLink.href = myData[i].link;
    listLink.target = "_blank";
    listLink.innerHTML = myData[i].cleanLink;
    listWebsite.appendChild (listLink);
    tableItem.appendChild (listWebsite);

    list.appendChild (tableItem);
  };
  //listwrapper.appendChild (list);
  //listMosaic.appendChild (listwrapper);

  // init Isotope
  var $container = $('.mosaic').isotope({
    itemSelector: '.mosaic-item',
    layoutMode: 'masonry'
  });

  /*var $list = $('.list-mosaic').isotope({
    itemSelector: '.program-row',
    layoutMode: 'vertical'
  }) */
  
  $container.imagesLoaded().progress (function(){
  $container.isotope ('layout');
  });

/*
   $list.imagesLoaded().progress (function(){
  $list.isotope ('layout');
  });
*/
  
  var filters ={};
  // bind filter button click
  $('.filters').on( 'click', 'button', function() {
  var $this = $(this);
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr ('data-filter-group');
  
  filters [filterGroup] = $this.attr('data-filter');
  var filterValue = concatValues (filters);
    $container.isotope({ filter: filterValue });
   // $list.isotope({filter : filterValue});
  });

//only difference is 'button' and 'a'. Why is this?
  $('.filters').on( 'click', 'a', function() {
  var $this = $(this);
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr ('data-filter-group');
  
  filters [filterGroup] = $this.attr('data-filter');
  var filterValue = concatValues (filters);
    $container.isotope({ filter: filterValue });
   // $list.isotope({filter: filterValue});
  });

  //changing the isotope view
  $('.view').on('click','a', function(){
    var $this = $(this);
    var viewType = $this.attr('view-type');
    console.log ("view pressed");
    if (viewType === ".list"){
      //set display to none or default depending on what the value is
      //listMosaic.style.display = "relative";
      listMosaic.style.display = 'block';
      elem.style.display = 'none';
    }
    else{
      elem.style.display = 'block';
      listMosaic.style.display = 'none';
    }
  })

  // change is-checked class on buttons
 $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
      var selText = $(this).text();
    if (inArray(selText)){  
    $(this).parents('.btn-group-vertical').find('.active').removeClass('active');   
    //$( this ).addClass('active');  
    }
    else{
    $(this).parents('.btn-group-vertical').find('.dropdown-toggle').addClass('active');  
    }
    /*else{
      $buttonGroup.find('active').removeClass ('active');
    }*/
    });
  });
});

$(".dropdown-menu li button").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group-vertical').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

$(".dropdown-menu li a").click(function(){
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
function inArray (name){
    for (var i = 0;i < allButtons.length;i++)
    {
      if (name == (allButtons[i]) || name == (allButtons[i] +' <span class="caret"></span>')|| name == (allButtons[i] +'<span class="caret"></span>'))
      return true;
    }
return false;
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
