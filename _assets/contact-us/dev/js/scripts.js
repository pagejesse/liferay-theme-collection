$('#_145_dockbar').find('a').click(function() {
  if($('body').hasClass('is-handheld-nav-visible')) {
    $('body').removeClass('is-handheld-nav-visible');
  } else {
    $('body').addClass('is-handheld-nav-visible');  
  }
});

$('.site-nav__untoggle-overlay').click(function() {
  $('body').removeClass('is-handheld-nav-visible');
  $('#navigation').removeClass('open');
});