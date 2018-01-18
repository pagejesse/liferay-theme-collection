AUI().use(
    'aui-base',
    'aui-io-plugin-deprecated',
    'liferay-util-window',
    'liferay-portlet-url',
    'aui-dialog-iframe-deprecated',
    function(reportToggle) {
        reportToggle.one('#report-issue-btn').on('click',
            function(event) {
                var currentUrl = window.location.href;
                console.log("currentUrl: " + currentUrl);
                var reportUrl = Liferay.PortletURL.createRenderURL();
                reportUrl.setPortletId("dpzreportissueportlet_WAR_dpzreportissueportlet") //Report Issue Portlet
                reportUrl.setWindowState('pop_up');
                reportUrl.setPlid("12242210");
                reportUrl.setParameter("pageUrl", currentUrl);
                var reportPopUpWindow = Liferay.Util.Window.getWindow({
                    dialog: {
                        /*insert custom parameters here, such as width, height, zindex*/
                        width: "90%",
                        cssClass: "report-issue-modal"
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
);