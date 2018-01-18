/*AUI().use(
  'aui-modal',
  function(qlToggle) {
  	var qlToggleContent = qlToggle.one('#ql-toggle-content');
    var qlModal = new qlToggle.Modal(
      {
    	bodyContent: qlToggleContent,
        headerContent: '<h3>Quick Links</h3><p style="font-size: 10px;"><b>TIP:</b> you can use your scroll wheel (mouse) or finger (touch) to scroll up and down</p>',
        modal: true,
        zIndex: 1050,
        render: '#ql-toggle-modal',
        toolbars: {
        	footer: [
        		{
        			label: 'Close',
        			on: {
        				click: function() {
        					qlModal.hide();
        				}
        			}
        		}
        	]
        },
        visible: false,
        position:[center,150],
      }
    ).render();

    qlToggle.one('#ql-toggle-btn').on(
      'click',
      function() {
        qlModal.show();
      }
    );
  }
);
*/

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
                var popUpWindow=Liferay.Util.Window.getWindow(
                    {
                        dialog: {
                        	/*insert custom parameters here, such as width, height, zindex*/
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
