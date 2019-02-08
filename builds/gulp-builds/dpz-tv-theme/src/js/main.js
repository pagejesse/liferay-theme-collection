AUI().ready(

  /*
  This function gets loaded when all the HTML, not including the portlets, is
  loaded.
  */

  function () {}
);

Liferay.Portlet.ready(

  /*
  This function gets loaded after each and every portlet on the page.

  portletId: the current portlet's id
  node: the Alloy Node object of the current portlet
  */

  function (portletId, node) {}
);

Liferay.on(
  'allPortletsReady',

  /*
  This function gets loaded when everything, including the portlets, is on
  the page.
  */

  function () {}
);

function ticker() {

  var tomove = $(".ticker li:first-child");

  $(tomove).animate({
    height: 0
  }, 400, function () {
    $('.ticker').append(this);
    $(this).animate({
      height: 25 + "%"
    }, 400);
  });
};

setInterval(ticker, 4000);
