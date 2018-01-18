AUI().use(
    'aui-base',
    'aui-io-plugin-deprecated',
    'liferay-util-window',
    'liferay-portlet-url',
    'aui-dialog-iframe-deprecated',
    function(qlToggle) {
        qlToggle.one('#ql-toggle-btn').on('click',
            function(event){
                var url =Liferay.PortletURL.createRenderURL();
                url.setPortletId("dominosquicklinks_WAR_dominosquicklinksportlet_INSTANCE_1234")  //Quick Links Portlet
                url.setWindowState('pop_up');
                url.setPlid("30724");
                var popUpWindow=Liferay.Util.Window.getWindow(
                    {
                        dialog: {
                        	/*insert custom parameters here, such as width, height, zindex*/
                          width: "90%",
                          cssClass: "quick-links-modal"
                        }
                    }
                ).plug(
                    qlToggle.Plugin.DialogIframe,
                        {
                            autoLoad: false,
                            iframeCssClass: 'dialog-iframe',
                            uri:url.toString()
                        }).render();
                popUpWindow.show();
                popUpWindow.titleNode.html("Quick Links<br><p style='font-size:12px; font-style: normal;'><b>TIP:</b> use your mouse wheel or finger to scroll up and down.");
                popUpWindow.io.start();

            }
        );
    }
);
