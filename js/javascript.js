
var wholeMenuWidth ;
var wholeMenuWidthMed ;
//VARIABLES TO SET: CLASS OF LOGO IMAGE, LIST OF BUTTONS, BREAK POINT OFFSET,
// NUMBER OF BREAK POINTS (
// 0 - no hamburger menu,
// 1 - only hamburger,
// 2 - one break point to hamburger,
// 3 - first break point change font to smaller, second break point change menu into hamburger)
var navLogoWidth;
var navButtonsWidth;
var navBreakOffset;
var breakPoint;
var alwaysMobileHamburger;


$(window).load(function(){

   navLogoWidth = $(".image-left").outerWidth(true);
   navButtonsWidth = $(".ul-links").outerWidth(true);
   navBreakOffset = 0;
   breakPoint = 3;
   wholeMenuWidth = navButtonsWidth + navLogoWidth + navBreakOffset;
   alwaysMobileHamburger = true;

   navbarCalcWidth(breakPoint, wholeMenuWidth);
   navbarCalcWidth(breakPoint, wholeMenuWidth);

}),

$(window).resize(function(){

   navbarCalcWidth(breakPoint, wholeMenuWidth);
   navbarCalcWidth(breakPoint, wholeMenuWidth);
   LogAll();
   clearDropdowns();

})

//CALCULATUON WHEN SET BREAK POINTS, breakPoints- How many break points You want(option: 1,2,3)/ menuWidth - total width of menu and logo + offset
function navbarCalcWidth (breakePoints, menuWidth){

   var navbar = $(".navbar-kl");
    if($(window).height()>=$('body').height){
        var windowWidth = $(window).outerWidth();
       console.log("bez scrolla");
    }
    else {
        var windowWidth = $(window).outerWidth() - 17;
       console.log("ze scrollem");
    }
    console.log(windowWidth + " window width z funkcji");


   //BIG MENU
   if(navbar.attr('class').includes("big")){

      if(windowWidth <= menuWidth){

         navbar.removeClass("big-res-nav");

         if(breakePoints==2)

            navbar.addClass("small-res-nav");

         else if (breakePoints==3) {

            navbar.addClass("med-res-nav");
            wholeMenuWidthMed = $(".ul-links").outerWidth() + navLogoWidth + navBreakOffset;
         }

      }

   }

   // MED MENU
   else if (navbar.attr('class').includes("med")){

      if(windowWidth <= wholeMenuWidthMed){

         navbar.removeClass("med-res-nav");
         navbar.addClass("small-res-nav");

      }

      if(windowWidth > menuWidth){

         navbar.removeClass("med-res-nav");
         navbar.addClass("big-res-nav");

      }

   }

   // SMALL MENU
   else if (navbar.attr('class').includes("small")){

      if(windowWidth > menuWidth && breakePoints == 2 || windowWidth > wholeMenuWidthMed && breakePoints == 3 ){

         navbar.removeClass("small-res-nav");

         if(breakePoints==2)

            navbar.addClass("big-res-nav");

         else if (breakePoints==3) {

            navbar.addClass("med-res-nav");

         }

      }

   }

   else{
      console.error("There is problem with kl-navbar navbarCalcWidth function.")
   }

   // console.log(navbar + "  " + windowWidth + " " + menuWidth);

}

//HAMBURGER UNROLL/ROLL FUNCTION

$('#roll-hamburger').click(function() {

   var ul = $('.ul-links');
   var menuHeight = ul.children('li').length * 51;
   if(ul.height() == 0) {
      ul.css({
         'height': menuHeight,
         'min-height': menuHeight,
      });
      setAuto(ul);
   }
   else if (ul.css('height').slice(0, -2) >= menuHeight) {
      setTimeout(function(){
         ul.css({
            'min-height': '0',
            'height': '0'
         });
      }, 50);

      clearDropdowns()
   }
});

$('.dropdown-btn').click(function(e) {

   var thatE = $(this);
   var thatUl = thatE.children('ul');
   var count = thatUl.children('li').length;


   if(thatE.attr("class").includes("dropdown-btn")) {

      thatE.toggleClass("dropdown-btn-focus");

      if (thatE.outerHeight() <= 50) {
         var ulHeight = 50 * count;
         thatE.css('height', 'auto');
         thatUl.css('max-height',ulHeight);
      }
      else {
         thatUl.css('max-height',0);
      }
   }

});

$('.dropdown-btn-click').click(function(e){

   var thatE = $(this);
   var thatUl = thatE.children('ul');
   var count = thatUl.children('li').length;
   ifIsSmall();

   if(thatE.attr("class").includes("dropdown-btn-click")) {

      thatE.toggleClass("dropdown-btn-focus");

      if (thatE.outerHeight() <= 50) {
         var ulHeight = 50 * count;
         thatE.css('height', 'auto');
         thatUl.css('max-height',ulHeight);
      }
      else {
         thatUl.css('max-height',0);
      }
   }

});

function clearDropdowns(){
   $('.dropdown-btn').removeAttr("style");
   $('.dropdown-ul').removeAttr("style");
}

function setAuto(elem){
   setTimeout(function(){elem.css('height','auto')},400);
}

function LogAll(){
   console.log("image: " + navLogoWidth);
   console.log("ul: " + navButtonsWidth);
   console.log("wholeBigMenuWidth: " +  wholeMenuWidth + " _ " + "screenWidth: " +  $(window).outerWidth());
   console.log("wholeMenuWidthSmall: " + wholeMenuWidthMed);
   console.log("offset: " + navBreakOffset);
}

function ifIsSmall(){
   // console.log($(window).outerWidth());
   // console.log($('body').outerWidth());
   // console.log($('body').outerHeight());

}

