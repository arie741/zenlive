var ZNET = {
  common: {
    init: function() {
      console.log('common init');
      /*----------------------------------------------------
             *  Search box expand Section
             *----------------------------------------------------*/
      jQuery(".search-text-box").focus(function() {
        jQuery("ul.social").animate({
          marginLeft: "10px"
        }, 450, "easeInSine")
      });

      /*----------------------------------------------------
             *  slicknav mobile section
             *----------------------------------------------------*/

      $('#menu').slicknav({
        prependTo: '#mobilemenu'
      });

      $('.slicknav_menu').prepend('<div id="search-form" class="visible-xs search-form-mobile pull-left"> <form action="#" method="get"> <input type="text" placeholder="Kode Konten" class="search-text-box"> </form> </div>');

      /*----------------------------------------------------
             *  Superfish Mainmenu Section
             *----------------------------------------------------*/

      jQuery(function() {
        jQuery('ul.sf-menu').stop().superfish({
          delay: 50
        });
      });

      /*----------------------------------------------------*/
      /*  Tootltip Initialize
/*----------------------------------------------------*/

      jQuery("[data-toggle='tooltip']").tooltip();


      /*----------------------------------------------------*/
      /*  Sticky Menu
/*----------------------------------------------------*/

      jQuery(".main-header").sticky({
        topSpacing: 0
      });

      /*----------------------------------------------------*/
      /*  Scroll To Top Section
/*----------------------------------------------------*/
      jQuery(document).ready(function() {

        jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollup').fadeIn();
          } else {
            jQuery('.scrollup').fadeOut();
          }
        });

        jQuery('.scrollup').click(function() {
          jQuery("html, body").animate({
            scrollTop: 0
          }, 600);
          return false;
        });

      });

      /*----------------------------------------------------*/
      /*  Tabs Control Section


    jQuery(document).ready(function() {
        jQuery("#horizontal-tabs").tytabs({
            tabinit: "1",
            fadespeed: "fast"
        });
        jQuery("#horizontal-tabs.two").tytabs({
            tabinit: "1",
            prefixtabs: "tab_two",
            prefixcontent: "content_two",
            fadespeed: "fast"
        });
        jQuery("#horizontal-tabs.three").tytabs({
            tabinit: "1",
            prefixtabs: "tab_three",
            prefixcontent: "content_three",
            fadespeed: "fast"
        });
        jQuery("#horizontal-tabs.four").tytabs({
            tabinit: "1",
            prefixtabs: "tab_four",
            prefixcontent: "content_four",
            fadespeed: "fast"
        });
        jQuery("#horizontal-tabs.five").tytabs({
            tabinit: "1",
            prefixtabs: "tab_five",
            prefixcontent: "content_five",
            fadespeed: "fast"
        });
        jQuery("#vertical-tabs").tytabs({
            tabinit: "1",
            prefixtabs: "tab_v",
            prefixcontent: "content_v",
            fadespeed: "fast"
        });
        jQuery("#vertical-tabs.two").tytabs({
            tabinit: "1",
            prefixtabs: "tab_v_two",
            prefixcontent: "content_v_two",
            fadespeed: "fast"
        });
        jQuery("#vertical-tabs.three").tytabs({
            tabinit: "1",
            prefixtabs: "tab_v_three",
            prefixcontent: "content_v_three",
            fadespeed: "fast"
        });
        jQuery("#vertical-tabs.four").tytabs({
            tabinit: "1",
            prefixtabs: "tab_v_four",
            prefixcontent: "content_v_four",
            fadespeed: "fast"
        });
        jQuery("#vertical-tabs.five").tytabs({
            tabinit: "1",
            prefixtabs: "tab_v_five",
            prefixcontent: "content_v_five",
            fadespeed: "fast"
        });
        jQuery(".hideit").click(function() {
            e(this).fadeOut(600)
        });
        jQuery("#toggle-view li h4").click(function() {
            var t = e(this).siblings("div.panel");
            if (t.is(":hidden")) {
                t.slideDown("200");
                e(this).siblings("span").html("-")
            } else {
                t.slideUp("200");
                e(this).siblings("span").html("+")
            }
        });

        jQuery(function(jQuery) {
            jQuery("#example").popover();
            jQuery("#example_left").popover({
                placement: 'left'
            });
            jQuery("#example_top").popover({
                placement: 'top'
            });
            jQuery("#example_bottom").popover({
                placement: 'bottom'
            });
        });
    });
    /*----------------------------------------------------*/





      /*----------------------------------------------------*/
      /*  Accordion Section
/*----------------------------------------------------*/

      jQuery('.accordionMod').each(function(index) {
        var thisBox = jQuery(this).children(),
            thisMainIndex = index + 1;
        jQuery(this).attr('id', 'accordion' + thisMainIndex);
        thisBox.each(function(i) {
          var thisIndex = i + 1,
              thisParentIndex = thisMainIndex,
              thisMain = jQuery(this).parent().attr('id'),
              thisTriggers = jQuery(this).find('.accordion-toggle'),
              thisBoxes = jQuery(this).find('.accordion-inner');
          jQuery(this).addClass('panel');
          thisBoxes.wrap('<div id=\"collapseBox' + thisParentIndex + '_' + thisIndex + '\" class=\"panel-collapse collapse\" />');
          thisTriggers.wrap('<div class=\"panel-heading\" />');
          thisTriggers.attr('data-toggle', 'collapse').attr('data-parent', '#' + thisMain).attr('data-target', '#collapseBox' + thisParentIndex + '_' + thisIndex);
        });
        jQuery('.accordion-toggle').prepend('<span class=\"icon\" />');
        jQuery("div.accordion-item:first-child .accordion-toggle").addClass("current");
        jQuery("div.accordion-item:first-child .icon").addClass("iconActive");
        jQuery("div.accordion-item:first-child .panel-collapse").addClass("in");
        jQuery('.accordionMod .accordion-toggle').click(function() {
          if (jQuery(this).parent().parent().find('.panel-collapse').is('.in')) {
            jQuery(this).removeClass('current');
            jQuery(this).find('.icon').removeClass('iconActive');
          } else {
            jQuery(this).addClass('current');
            jQuery(this).find('.icon').addClass('iconActive');
          }
          jQuery(this).parent().parent().siblings().find('.accordion-toggle').removeClass('current');
          jQuery(this).parent().parent().siblings().find('.accordion-toggle > .icon').removeClass('iconActive');
        });
      });

      /*-------------
    *CUSTOM ACCORDION SETTINGS
    * ----------------*/
      $('.accordion-toggle').removeClass('current');
      $('.accordion-toggle').addClass('collapsed');
      $('.panel-collapse').removeClass('in');
      $('.panel-collapse').addClass('collapse');
      $('.icon').removeClass('iconActive');

      /*-------------
    *CUSTOM  SETTINGS
    * ----------------*/
      var number = location.href.split("#")[1] || "";
      if(number === "membership"){
        number=3;
      }
      $("#horizontal-tabs").tytabs({
        tabinit:number,
        fadespeed:"fast"
      });




    },
    finalize: function() {}
  }
};


ZNET.UTIL = {

  fire: function(func, funcname, args) {

    var namespace = ZNET; // indicate your obj literal namespace here

    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function') {
      console.log('UITL.fire is calling ZNET.' + func + '.' + funcname);
      namespace[func][funcname](args);
    }

  },

  loadEvents: function() {
    console.log('call loadEvents');
    var bodyId = document.body.id;

    // hit up common first.
    ZNET.UTIL.fire('common');

    // do all the classes too.
    $.each(document.body.className.split(/\s+/), function(i, classnm) {
      ZNET.UTIL.fire(classnm);
      ZNET.UTIL.fire(classnm, bodyId);
    });

    ZNET.UTIL.fire('common', 'finalize');

  }

};

// kick it all off here
$(document).ready(ZNET.UTIL.loadEvents);
