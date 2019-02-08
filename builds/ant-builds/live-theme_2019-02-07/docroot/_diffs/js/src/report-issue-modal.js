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
