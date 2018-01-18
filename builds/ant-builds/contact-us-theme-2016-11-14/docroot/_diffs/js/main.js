AUI().ready(
	'liferay-hudcrumbs', 'liferay-navigation-interaction', 'liferay-sign-in-modal',
	function(A) {
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