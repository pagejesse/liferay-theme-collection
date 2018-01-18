//---------- Alloy Slide-out Toggler ----------//

AUI().use(
  'aui-toggler',
  function(Y) {
    new Y.TogglerDelegate(
      {
        animated: true,
        closeAllOnExpand: true,
        container: '#myToggler',
        content: '.alloy-toggler-content',
        expanded: false,
        header: '.alloy-toggler-header',
        transition: {
          duration: 0.2,
          easing: 'cubic-bezier(0, 0.1, 0, 1)'
        }
      }
    );
  }
);