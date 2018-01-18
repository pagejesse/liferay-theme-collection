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
