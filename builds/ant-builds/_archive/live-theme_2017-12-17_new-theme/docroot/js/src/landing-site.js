// LANDING SITE SCRIPT

(function () {
  var siteName = document.querySelector('.site-heading .site-name').textContent.toLowerCase();

  function checkLandingSite() {
    if(siteName != null) {
      if (siteName === " dlive " || siteName === " franchisee " || siteName === " store " || siteName === " corporate ") {
        console.log('This is the ' + siteName + ' landing site, proceed to subscriptions portlet check');
        checkSubscriptionsExists();
      } else {
        console.log('Not a landing site, abort checking for subscriptions portlet');
      }
    }
  }

  function checkSubscriptionsExists() {
    if (document.getElementById("portlet_dpzsubscriptionsportlet_WAR_dpzsubscriptionsportlet") !== null) {
      console.log('Subscriptions portlet exists, load landing page script');
      landingPageScript();
    } else {
      console.log('Subscriptions portlet does not exist, abort loading landing page script');
    }
  }

  function landingPageScript() {
    // Single Page Design Template Styling
    var singlePageDesignStyling = '.aui #content{padding:0}.aui #content .portlet,.aui #content .portlet-borderless-container,.aui #content .portlet-nested-portlets .portlet-body{padding:3.8em 1.8em;margin:0}.aui #content .portlet-borderless-container .portlet-body,.aui #content .portlet-content,.aui #content .portlet-topper{max-width:960px;margin-left:auto;margin-right:auto;box-sizing:border-box}.aui #content .portlet-content{background-color:#fff;border-radius:0 0 5px 5px}.aui #content .portlet-nested-portlets .portlet{border:none}.aui #content .portlet-nested-portlets .portlet .portlet-body{padding:0!important}.aui #content .portlet-nested-portlets .portlet .portlet-body .portlet,.aui #content .portlet-nested-portlets .portlet .portlet-body .portlet-borderless-container{padding:0!important;background-color:transparent}.aui #content .portlet-nested-portlets .portlet .portlet-body .portlet-title{font-size:18px;line-height:26px}.aui #content .portlet-nested-portlets .portlet-borderless-container .portlet-body,.aui #content .portlet-nested-portlets .portlet-borderless-container .portlet-body .portlet,.aui #content .portlet-nested-portlets .portlet-borderless-container .portlet-body .portlet-borderless-container{padding:0!important}.aui #content .portlet-search .portlet{padding:1.8em!important}.aui #content .portlet-search .portlet .portlet-content,.aui #content .portlet-search .portlet .portlet-topper{max-width:inherit}';
    
    // Append single page design styling to <style> tag
    document.querySelector('style').innerHTML += singlePageDesignStyling;

//    // Create bouncingArrow HTML
//    var bouncingArrow = '<div class="bouncingArrow" id="bouncingArrow"><a href="#portlet_dpzsubscriptionsportlet_WAR_dpzsubscriptionsportlet"><div class="arrowSvg"><svg viewBox="0 0 26 16"><text font-family="PizzaPress, Arial" font-size="7" fill="white" y="25" x="6" class="svgHeading">more</text><polyline fill="none" stroke="white" stroke-width="3" points="24.9,1.5 13,13.4 1.1,1.5"/></svg></div></a></div>';
//
//    // Append bouncingArrow to div with ID of "#wrapper"
//    document.getElementById('wrapper').innerHTML += bouncingArrow;
//
//    if (document.URL.indexOf("search") > -1) {
//      document.getElementById("bouncingArrow").setAttribute("style", "display: none");
//    }
//
//    // Hide bouncingArrow on on scroll down
//    var didScroll;
//    var lastScrollTop = 0;
//    var delta = 5;
//
//    $(window).scroll(function (event) {
//      didScroll = true;
//    });
//
//    setInterval(function () {
//      if (didScroll) {
//        hasScrolled();
//        didScroll = false;
//      }
//    }, 250);
//
//    //Run hasScrolled
//    function hasScrolled() {
//      var st = $(this).scrollTop();
//
//      // Make sure they scroll more than delta
//      if (Math.abs(lastScrollTop - st) <= delta)
//        return;
//
//      // If they scrolled down, add class .hideBouncingArrow.
//      if (st > lastScrollTop) {
//        // Scroll Down
//        $('.bouncingArrow').addClass('hideBouncingArrow');
//      } else {
//        // Scroll Up
//        if (st < ($(window).height()) / 2) {
//          $('.bouncingArrow').removeClass('hideBouncingArrow');
//        }
//      }
//
//      lastScrollTop = st;
//    }
//
//    //Enable smooth scroll for all links in "section" elements. 
//    //Can apply to ID, class, other elements.  
//    $(function smoothScroll() {
//      $('.bouncingArrow').find('a').click(function () {
//        var customEventLabel = "Scroll for More --" + siteName;
//        ga('send', {
//          hitType: 'event',
//          eventCategory: 'Interactives',
//          eventAction: 'click',
//          eventLabel: customEventLabel
//        });
//        
//        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//          var target = $(this.hash);
//          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//          if (target.length) {
//            $('html, body').animate({
//              scrollTop: target.offset().top
//            }, 1000);
//            return false;
//          }
//        }
//      });
//    });
//
//    // Additional GA click event listeners
//    $('.tile-wrapper').find('a').click(function () {
//      var linkClass = $(this)[0].className;
//      var customEventLabel = $(this)[0].href + " --" + siteName;
//      if (linkClass == "tile tile-1" || linkClass == "tile tile-2" || linkClass == "tile tile-3" || linkClass == "tile tile-4") {
//        ga('send', {
//          hitType: 'event',
//          eventCategory: 'Hero Tiles',
//          eventAction: 'click',
//          eventLabel: customEventLabel
//        });
//      }
//    });
//
//    $('#portlet_dpzsubscriptionsportlet_WAR_dpzsubscriptionsportlet').find('a').click(function () {
//      var linkClass = $(this)[0].className;
//      var customEventLabel = $(this)[0].innerText + " --" + siteName;
//      if (linkClass == "tab-label tab-content") {
//        ga('send', {
//          hitType: 'event',
//          eventCategory: 'Subscriptions',
//          eventAction: 'click',
//          eventLabel: customEventLabel
//        });
//      }
//    });
//
//    $("button").click(function () {
//      
//      if ($(this)[0].className == "dpzSocialWidgetLike") {
//        var customEventLabel = "Widget Like --" + siteName;
//        ga('send', {
//          hitType: 'event',
//          eventCategory: 'Social',
//          eventAction: 'click',
//          eventLabel: customEventLabel
//        });
//      }
//    });
//
//    $("div").click(function () {
//      if ($(this)[0].id == "p_p_id_56_INSTANCE_y0cNkc0T5HrV_") {
//        var customEventLabel = "More DPZ Social --" + siteName;
//        ga('send', {
//          hitType: 'event',
//          eventCategory: 'Social',
//          eventAction: 'click',
//          eventLabel: customEventLabel
//        });
//      } else if ($(this)[0].id == "p_p_id_dpzsocialwidgetportlet_WAR_dpzsocialwidgetportlet_") {
//        var customEventLabel = "DPZ Social Widget --" + siteName;
//        ga('send', {
//          hitType: 'event',
//          eventCategory: 'Social',
//          eventAction: 'click',
//          eventLabel: customEventLabel
//        });
//      }
//    });
  }

  checkLandingSite();
}());
