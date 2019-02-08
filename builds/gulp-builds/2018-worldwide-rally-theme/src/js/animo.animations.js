/*
  Block Animations
  Uses Animo Javascript Library
*/

if ($(window).width() > 1024) {
  (function () {
    var mywebsite;

    mywebsite = (function () {
      function mywebsite() {
        this.init();
        return;
      }

      mywebsite.prototype.init = function () {
        this.initBlocks();
      };


      mywebsite.prototype.initBlocks = function () {
        this.animateWelcome();
        this.animateAbout();
        this.animateRegister();
        this.animateHotel();
        this.animateAgenda();
        this.animateBlog();
        this.animateFaq();
        this.animateContact();
      };

      mywebsite.prototype.animateWelcome = function () {
        var _this = this;
        return jQuery("#home .welcome_block").waypoint(function () {
          return new Animo({
            el: jQuery("#home .welcome_block h1"),
            duration: 200,
            easing: "easeOutBack",
            delay: 500,
            template: {
              scale: [0, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#home .welcome_block h3"),
            duration: 600,
            easing: "easeOutBack",
            delay: 500,
            template: {
              scale: [0, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#home .left_effect"),
            duration: 600,
            delay: 500,
            template: {
              left: [-50, 0, "px"],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#home .right_effect"),
            duration: 600,
            delay: 500,
            template: {
              right: [-50, 0, "px"],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#home .or"),
            duration: 600,
            delay: 1600,
            template: {
              scale: [2, 1],
              opacity: [0, 1]
            }
          });
        }, {
          triggerOnce: true,
          offset: 200
        });
      };

      mywebsite.prototype.animateAbout = function () {
        var _this = this;
        return jQuery("#about").waypoint(function () {
          return new Animo({
            el: jQuery("#about .section-header"),
            duration: 600,
            delay: 100,
            template: {
              scale: [2, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#about .content-block"),
            easing: "easeOutElastic",
            duration: 2000,
            delay: 800,
            gap: -80,
            template: {
              opacity: [0, 1],
              translateY: [20, 0, "%"]
            }
          });
        }, {
          triggerOnce: true,
          offset: 800
        });
      };

      mywebsite.prototype.animateRegister = function () {
        var _this = this;
        return jQuery("#register").waypoint(function () {
          return new Animo({
            el: jQuery("#register .section-header"),
            duration: 600,
            delay: 100,
            template: {
              scale: [2, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#register .content-block"),
            easing: "easeOutElastic",
            duration: 2000,
            delay: 800,
            gap: -80,
            template: {
              opacity: [0, 1],
              translateY: [20, 0, "%"]
            }
          });
        }, {
          triggerOnce: true,
          offset: 800
        });
      };

      mywebsite.prototype.animateHotel = function () {
        var _this = this;
        return jQuery("#hotel").waypoint(function () {
          return new Animo({
            el: jQuery("#hotel .section-header"),
            duration: 600,
            delay: 100,
            template: {
              scale: [2, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#hotel .content-block"),
            easing: "easeOutElastic",
            duration: 2000,
            delay: 800,
            gap: -80,
            template: {
              opacity: [0, 1],
              translateY: [20, 0, "%"]
            }
          });
        }, {
          triggerOnce: true,
          offset: 800
        });
      };

      mywebsite.prototype.animateAgenda = function () {
        var _this = this;
        return jQuery("#agenda").waypoint(function () {
          return new Animo({
            el: jQuery("#agenda .section-header"),
            duration: 600,
            delay: 100,
            template: {
              scale: [2, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#agenda .span4"),
            easing: "easeOutElastic",
            duration: 1000,
            delay: 500,
            gap: -80,
            template: {
              scale: [0, 1],
              opacity: [0, 1]
            }
          });
        }, {
          triggerOnce: true,
          offset: 800
        });
      };

      mywebsite.prototype.animateBlog = function () {
        var _this = this;
        return jQuery("#blog").waypoint(function () {
          return new Animo({
            el: jQuery("#blog .section-header"),
            duration: 600,
            delay: 100,
            template: {
              scale: [2, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#blog .blog_block"),
            easing: "easeOutElastic",
            duration: 2000,
            delay: 800,
            gap: -80,
            template: {
              opacity: [0, 1],
              translateY: [20, 0, "%"]
            }
          });
        }, {
          triggerOnce: true,
          offset: 800
        });
      };

      mywebsite.prototype.animateFaq = function () {
        var _this = this;
        return jQuery("#faq").waypoint(function () {
          return new Animo({
            el: jQuery("#faq .section-header"),
            duration: 600,
            delay: 100,
            template: {
              scale: [2, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#faq .content-block"),
            easing: "easeOutElastic",
            duration: 2000,
            delay: 800,
            gap: -80,
            template: {
              opacity: [0, 1],
              translateY: [20, 0, "%"]
            }
          });
        }, {
          triggerOnce: true,
          offset: 800
        });
      };

      mywebsite.prototype.animateContact = function () {
        var _this = this;
        return jQuery("#contact").waypoint(function () {
          return new Animo({
            el: jQuery("#contact .section-header"),
            duration: 600,
            delay: 100,
            template: {
              scale: [2, 1],
              opacity: [0, 1]
            }
          }, {
            el: jQuery("#contact .content-block"),
            easing: "easeOutElastic",
            duration: 2000,
            delay: 800,
            gap: -80,
            template: {
              opacity: [0, 1],
              translateY: [20, 0, "%"]
            }
          });
        }, {
          triggerOnce: true,
          offset: 800
        });
      };


      return mywebsite;

    })();

    jQuery(function () {
      mywebsite = new mywebsite;
    });

  }).call(this);
};
