// Avoid `console` errors in browsers that lack a console.

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(function() {
  $('.so-portlet-user-bar').wrap('<div id="wrap" class="wrap" />');

  $('body').addClass('js');

  var $menu = $('.so-portlet-user-bar'),
      $menulink = $('.side-menu-link'),
      $wrap = $('#wrap');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $wrap.toggleClass('active');
    return false;
  });
});
