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
