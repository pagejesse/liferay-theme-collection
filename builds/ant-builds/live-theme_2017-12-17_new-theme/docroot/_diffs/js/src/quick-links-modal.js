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
