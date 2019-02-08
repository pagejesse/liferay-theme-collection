// LIFERAY CLASSIC THEME EXTENSIONS

AUI().ready(
  'liferay-hudcrumbs', 'liferay-navigation-interaction', 'liferay-sign-in-modal',
  function (A) {
    var navigation = A.one('#navigation');

    if (navigation) {
      navigation.plug(Liferay.NavigationInteraction);
    }

    var siteBreadcrumbs = A.one('#breadcrumbs');

    if (siteBreadcrumbs) {
      siteBreadcrumbs.plug(A.Hudcrumbs);
    }

    var signIn = A.one('li.sign-in a');

    if (signIn && signIn.getData('redirect') !== 'true') {
      signIn.plug(Liferay.SignInModal);
    }
  }
);
// STICKY SCRIPT

var stickyNav = document.querySelector('.primary_nav_wrap');
var stickyParent = document.querySelector('body');

if (stickyNav != null) {
  var stuck = false;
  var stickPoint = getDistance();

  function getDistance() {
    var topDist = stickyNav.offsetTop;
    return topDist;
  }

  window.onscroll = function (e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    if ((distance <= 0) && !stuck) {
      stickyParent.className += ' sticky';
      stuck = true;
    } else if (stuck && (offset <= stickPoint)) {
      stickyParent.className = stickyParent.className.replace(/(?:^|\s)sticky(?!\S)/g, '');
      stuck = false;
    }
  }
  console.log('Static navigation present. Load Sticky script.');
} else {
  console.log('Static navigation not present. Abort loading Sticky script.');
}

// LAUNCH QUICK LINKS MODAL

AUI().use(
  'aui-base',
  'aui-io-plugin-deprecated',
  'liferay-util-window',
  'liferay-portlet-url',
  'aui-dialog-iframe-deprecated',
  function (qlToggle) {
    var qlToggleBtn = document.getElementById('ql-toggle-btn');
    if (qlToggleBtn != null) {
      qlToggle.one(qlToggleBtn).on('click',
        function (event) {
          var url = Liferay.PortletURL.createRenderURL();
          url.setPortletId("dominosquicklinks_WAR_dominosquicklinksportlet_INSTANCE_1234");
          url.setWindowState('pop_up');
          url.setPlid("617337");
          var popUpWindow = Liferay.Util.Window.getWindow({
            dialog: {
              width: "90%",
              cssClass: "modal-medium"
            }
          }).plug(
            qlToggle.Plugin.DialogIframe, {
              autoLoad: false,
              iframeCssClass: 'dialog-iframe',
              uri: url.toString()
            }).render();
          popUpWindow.show();
          popUpWindow.titleNode.html("Quick Links<br><p style='font-size:12px; font-style: normal;'><b>TIP:</b> use your mouse wheel or finger to scroll up and down.");
         if (popUpWindow.io != null) {
            popUpWindow.io.start();
          }

        }
      );
    }
  }
);

// LAUNCH REPORT ISSUE MODAL

AUI().use(
  'aui-base',
  'aui-io-plugin-deprecated',
  'liferay-util-window',
  'liferay-portlet-url',
  'aui-dialog-iframe-deprecated',
  function (reportToggle) {
    var reportToggleBtn = document.getElementById('report-issue-btn');
    if (reportToggleBtn != null) {
      reportToggle.one('#report-issue-btn').on('click',
        function (event) {
          var currentUrl = window.location.href;
          console.log("currentUrl: " + currentUrl);
          var reportUrl = Liferay.PortletURL.createRenderURL();
          reportUrl.setPortletId("dpzreportissueportlet_WAR_dpzreportissueportlet");
          reportUrl.setWindowState('pop_up');
          reportUrl.setPlid("12242210");
          reportUrl.setParameter("pageUrl", currentUrl);
          var reportPopUpWindow = Liferay.Util.Window.getWindow({
            dialog: {
              width: "90%",
              cssClass: "modal-medium"
            }
          }).plug(
            reportToggle.Plugin.DialogIframe, {
              autoLoad: false,
              iframeCssClass: 'dialog-iframe',
              uri: reportUrl.toString()
            }).render();
          reportPopUpWindow.show();
          reportPopUpWindow.titleNode.html("Report Issue<br><p style='font-size:12px; font-style: normal;'><b>TIP:</b> use your mouse wheel or finger to scroll up and down.<div id='hiddenURLDiv' style='display:none;'>" + currentUrl + "</div>");
          if (reportPopUpWindow.io != null) {
            reportPopUpWindow.io.start();
          }
        }
      );
    }
  }
);

// INJECT SEARCH INPUT PLACEHOLDER TEXT
if (document.querySelector('.search-custom') != null) {
  var searchField = document
    .querySelector('.search-custom')
    .getElementsByTagName('input')[6];
  searchField.setAttribute('placeholder', searchField.getAttribute('Title'));
}

// LANDING SITE SCRIPT

(function() {
  function checkLandingSite() {
    if (document.querySelector('.site-heading .site-name') !== null) {
      var siteName = document
        .querySelector('.site-heading .site-name')
        .textContent.toLowerCase();

      if (siteName != null) {
        if (
          siteName === ' dlive ' ||
          siteName === ' franchisee ' ||
          siteName === ' store ' ||
          siteName === ' corporate '
        ) {
          console.log(
            'This is the ' +
              siteName +
              ' landing site, proceed to subscriptions portlet check'
          );
          checkSubscriptionsExists();
        } else {
          console.log(
            'Not a landing site, abort checking for subscriptions portlet'
          );
        }
      }
    }
  }

  function checkSubscriptionsExists() {
    if (
      document.getElementById(
        'portlet_dpzsubscriptionsportlet_WAR_dpzsubscriptionsportlet'
      ) !== null
    ) {
      console.log('Subscriptions portlet exists, load landing page script');
      landingPageScript();
    } else {
      console.log(
        'Subscriptions portlet does not exist, abort loading landing page script'
      );
    }
  }

  function landingPageScript() {
    // Single Page Design Template Styling
    var singlePageDesignStyling =
      '.aui #content{padding:0}.aui #content .portlet,.aui #content .portlet-borderless-container,.aui #content .portlet-nested-portlets .portlet-body{padding:3.8em 1.8em;margin:0}.aui #content .portlet-borderless-container .portlet-body,.aui #content .portlet-content,.aui #content .portlet-topper{max-width:960px;margin-left:auto;margin-right:auto;box-sizing:border-box}.aui #content .portlet-content{background-color:#fff;border-radius:0 0 5px 5px}.aui #content .portlet-nested-portlets .portlet{border:none}.aui #content .portlet-nested-portlets .portlet .portlet-body{padding:0!important}.aui #content .portlet-nested-portlets .portlet .portlet-body .portlet,.aui #content .portlet-nested-portlets .portlet .portlet-body .portlet-borderless-container{padding:0!important;background-color:transparent}.aui #content .portlet-nested-portlets .portlet .portlet-body .portlet-title{font-size:18px;line-height:26px}.aui #content .portlet-nested-portlets .portlet-borderless-container .portlet-body,.aui #content .portlet-nested-portlets .portlet-borderless-container .portlet-body .portlet,.aui #content .portlet-nested-portlets .portlet-borderless-container .portlet-body .portlet-borderless-container{padding:0!important}.aui #content .portlet-search .portlet{padding:1.8em!important}.aui #content .portlet-search .portlet .portlet-content,.aui #content .portlet-search .portlet .portlet-topper{max-width:inherit}';

    // Append single page design styling to <style> tag
    document.querySelector('style').innerHTML += singlePageDesignStyling;
  }

  checkLandingSite();
})();
