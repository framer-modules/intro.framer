require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"CustomThemeIntro":[function(require,module,exports){

/* 
Prototype introduce module for presentation Theme
- Customize theme sample

@auther threeword (dev@threeword.com)
@since 2016.08.17
@version 0.1
 */
var CustomThemeIntro, IntroTheme,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

IntroTheme = require("IntroTheme").IntroTheme;

CustomThemeIntro = (function(superClass) {
  var _cssFont;

  extend(CustomThemeIntro, superClass);

  _cssFont = "@import url('https://fonts.googleapis.com/css?family=Roboto'); font-family: 'Roboto', serif, sans-serif;";

  Utils.insertCSS(_cssFont);

  function CustomThemeIntro() {
    CustomThemeIntro.__super__.constructor.call(this, {
      name: 'custom',
      title: {
        style: {
          color: "#FFF",
          font: "100 160px/100px Roboto",
          textAlign: "center",
          opacity: "0.9"
        }
      },
      subTitle: {
        style: {
          color: "#FFF",
          font: "500 130px/100px Roboto",
          textAlign: "center",
          opacity: "0.6"
        }
      },
      details: {
        style: {
          color: "#FFF",
          font: "200 50px/80px Roboto",
          textAlign: "center",
          opacity: "0.8"
        }
      },
      copyright: {
        brightness: 200,
        saturate: 0,
        color: "rgba(255,255,255,0.6)"
      },
      logo: {
        brightness: 200,
        saturate: 0
      },
      background: {
        image: Utils.randomImage(Framer.Device.background),
        blur: 3,
        opacity: 0.2
      }
    });
  }

  return CustomThemeIntro;

})(IntroTheme);

exports.CustomThemeIntro = CustomThemeIntro;


},{"IntroTheme":"IntroTheme"}],"IntroThemeImage":[function(require,module,exports){

/* 
Prototype introduce module for presentation Theme
- Image

@auther threeword (dev@threeword.com)
@since 2016.07.07
@version 0.2
 */
var IntroTheme, IntroThemeImage,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

IntroTheme = require("IntroTheme").IntroTheme;

IntroThemeImage = (function(superClass) {
  var _cssFont;

  extend(IntroThemeImage, superClass);

  _cssFont = "@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); font-family: 'Noto Sans KR', serif, sans-serif;";

  Utils.insertCSS(_cssFont);

  function IntroThemeImage() {
    IntroThemeImage.__super__.constructor.call(this, {
      name: 'image',
      title: {
        style: {
          color: "#FFF",
          font: "100 160px/100px Noto Sans KR",
          textAlign: "center",
          opacity: "0.7"
        }
      },
      subTitle: {
        style: {
          color: "#FFF",
          font: "500 130px/100px Noto Sans KR",
          textAlign: "center",
          opacity: "0.6"
        }
      },
      details: {
        style: {
          color: "#FFF",
          font: "200 50px/80px Noto Sans KR",
          textAlign: "center",
          opacity: "0.8"
        }
      },
      copyright: {
        brightness: 200,
        saturate: 0,
        color: "rgba(255,255,255,0.6)"
      },
      logo: {
        brightness: 200,
        saturate: 0
      },
      background: {
        image: "images/intro/theme/image/bg.jpg",
        blur: 20,
        opacity: 0.7
      }
    });
    Framer.Device.background.props = {
      backgroundColor: "rgba(0,0,0,1)"
    };
  }

  return IntroThemeImage;

})(IntroTheme);

exports.IntroThemeImage = IntroThemeImage;


},{"IntroTheme":"IntroTheme"}],"IntroThemeTiny":[function(require,module,exports){

/* 
소개 테마 - Tiny
@auther ho.s
@since 2016.07.12
@version 0.1
 */
var IntroTheme, IntroThemeTiny,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

IntroTheme = require("IntroTheme").IntroTheme;

IntroThemeTiny = (function(superClass) {
  var _cssFont;

  extend(IntroThemeTiny, superClass);

  _cssFont = "@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); font-family: 'Noto Sans KR', serif, sans-serif;";

  Utils.insertCSS(_cssFont);

  function IntroThemeTiny() {
    IntroThemeTiny.__super__.constructor.call(this, {
      name: 'tiny',
      deviceXPos: 400,
      descriptionXPos: -550,
      descriptionYPos: -80,
      title: {
        style: {
          color: "#333",
          font: "100 100px/100px Noto Sans KR",
          textAlign: "center",
          opacity: "0.7"
        }
      },
      subTitle: {
        y: Align.top(140),
        style: {
          color: "#333",
          font: "500 70px/80px Noto Sans KR",
          textAlign: "center",
          opacity: "0.6"
        }
      },
      details: {
        y: Align.top(300),
        style: {
          color: "#333",
          font: "200 35px/80px Noto Sans KR",
          textAlign: "center",
          opacity: "0.8"
        }
      },
      copyright: {
        brightness: 100,
        saturate: 100,
        hueRotate: 0,
        contrast: 100,
        invert: 0,
        grayscale: 0,
        sepia: 0
      },
      logo: {
        brightness: 100,
        saturate: 100,
        hueRotate: 0,
        contrast: 100,
        invert: 0,
        grayscale: 0,
        sepia: 0
      },
      background: {
        backgroundColor: 'white'
      }
    });
  }

  return IntroThemeTiny;

})(IntroTheme);

exports.IntroThemeTiny = IntroThemeTiny;


},{"IntroTheme":"IntroTheme"}],"IntroThemeWhite":[function(require,module,exports){

/* 
Prototype introduce module for presentation Theme
- White

@auther threeword (dev@threeword.com)
@since 2016.07.07
@version 0.2
 */
var IntroTheme, IntroThemeWhite,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

IntroTheme = require("IntroTheme").IntroTheme;

IntroThemeWhite = (function(superClass) {
  var _cssFont;

  extend(IntroThemeWhite, superClass);

  _cssFont = "@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); font-family: 'Noto Sans KR', serif, sans-serif;";

  Utils.insertCSS(_cssFont);

  function IntroThemeWhite() {
    IntroThemeWhite.__super__.constructor.call(this, {
      name: 'white',
      title: {
        style: {
          color: "#333",
          font: "100 160px/100px Noto Sans KR",
          textAlign: "center",
          opacity: "0.7"
        }
      },
      subTitle: {
        style: {
          color: "#333",
          font: "500 130px/100px Noto Sans KR",
          textAlign: "center",
          opacity: "0.6"
        }
      },
      details: {
        style: {
          color: "#333",
          font: "200 50px/80px Noto Sans KR",
          textAlign: "center",
          opacity: "0.8"
        }
      },
      copyright: {
        brightness: 100,
        saturate: 100,
        hueRotate: 0,
        contrast: 100,
        invert: 0,
        grayscale: 0,
        sepia: 0
      },
      logo: {
        brightness: 100,
        saturate: 100,
        hueRotate: 0,
        contrast: 100,
        invert: 0,
        grayscale: 0,
        sepia: 0
      },
      background: {
        backgroundColor: 'white'
      }
    });
  }

  return IntroThemeWhite;

})(IntroTheme);

exports.IntroThemeWhite = IntroThemeWhite;


},{"IntroTheme":"IntroTheme"}],"IntroTheme":[function(require,module,exports){

/* 
Prototype introduce module for presentation Theme

@auther threeword (dev@threeword.com)
@since 2016.07.07
@version 0.2
 */
var IntroTheme,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

IntroTheme = (function(superClass) {
  var DEFINED;

  extend(IntroTheme, superClass);

  DEFINED = {
    DEFAULT: {
      DEVICE_X_POS: 500,
      DESCRIPTION_X_POS: -500,
      DESCRIPTION_Y_POS: -150,
      LOGO_MARGIN: 10
    }
  };

  function IntroTheme(options) {
    if (options == null) {
      options = {};
    }
    this.deviceXPos = options.deviceXPos;
    this.descriptionXPos = options.descriptionXPos;
    this.descriptionYPos = options.descriptionYPos;
    this.logoMargin = options.logoMargin;
    this.name = options.name;
    this.title = options.title;
    this.subTitle = options.subTitle;
    this.details = options.details;
    this.copyright = options.copyright;
    this.logo = options.logo;
    this.background = options.background;
  }

  IntroTheme.define('deviceXPos', {
    get: function() {
      return this._deviceXPos;
    },
    set: function(value) {
      if (value == null) {
        value = DEFINED.DEFAULT.DEVICE_X_POS;
      }
      return this._deviceXPos = value;
    }
  });

  IntroTheme.define('descriptionXPos', {
    get: function() {
      return this._descriptionXPos;
    },
    set: function(value) {
      if (value == null) {
        value = DEFINED.DEFAULT.DESCRIPTION_X_POS;
      }
      return this._descriptionXPos = value;
    }
  });

  IntroTheme.define('descriptionYPos', {
    get: function() {
      return this._descriptionYPos;
    },
    set: function(value) {
      if (value == null) {
        value = DEFINED.DEFAULT.DESCRIPTION_Y_POS;
      }
      return this._descriptionYPos = value;
    }
  });

  IntroTheme.define('logoMargin', {
    get: function() {
      return this._logoMargin;
    },
    set: function(value) {
      if (value == null) {
        value = DEFINED.DEFAULT.LOGO_MARGIN;
      }
      return this._logoMargin = value;
    }
  });

  IntroTheme.define('name', {
    get: function() {
      return this._name;
    },
    set: function(value) {
      if (value == null) {
        value = "";
      }
      return this._name = value;
    }
  });

  IntroTheme.define('title', {
    get: function() {
      return this._title;
    },
    set: function(value) {
      if (value == null) {
        value = {};
      }
      return this._title = value;
    }
  });

  IntroTheme.define('subTitle', {
    get: function() {
      return this._subTitle;
    },
    set: function(value) {
      if (value == null) {
        value = {};
      }
      return this._subTitle = value;
    }
  });

  IntroTheme.define('details', {
    get: function() {
      return this._details;
    },
    set: function(value) {
      if (value == null) {
        value = {};
      }
      return this._details = value;
    }
  });

  IntroTheme.define('copyright', {
    get: function() {
      return this._copyright;
    },
    set: function(value) {
      if (value == null) {
        value = {};
      }
      return this._copyright = value;
    }
  });

  IntroTheme.define('logo', {
    get: function() {
      return this._logo;
    },
    set: function(value) {
      if (value == null) {
        value = {};
      }
      return this._logo = value;
    }
  });

  IntroTheme.define('background', {
    get: function() {
      return this._background;
    },
    set: function(value) {
      if (value == null) {
        value = {};
      }
      return this._background = value;
    }
  });

  return IntroTheme;

})(Framer.BaseClass);

exports.IntroTheme = IntroTheme;


},{}],"Intro":[function(require,module,exports){

/* 
Prototype introduce module for presentation 

 * Feature
Fullscreen Supported.
Responsive Design
More custom themes

 * Theme
Default tiny, white, image theme supported.
Available add custom theme

@auther threeword (dev@threeword.com)
@since 2016.07.07
@version 0.2
 */
var Intro, IntroThemeImage, IntroThemeTiny, IntroThemeWhite,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

IntroThemeTiny = require("IntroThemeTiny").IntroThemeTiny;

IntroThemeWhite = require("IntroThemeWhite").IntroThemeWhite;

IntroThemeImage = require("IntroThemeImage").IntroThemeImage;

Intro = (function(superClass) {
  var DEFINED, _originScale, _ratio;

  extend(Intro, superClass);

  Intro.Theme = {
    Tiny: new IntroThemeTiny,
    White: new IntroThemeWhite,
    Image: new IntroThemeImage
  };

  Framer.Device.deviceType = "apple-iphone-6s-gold";

  Framer.Device.background.props = {
    x: Align.left,
    y: Align.bottom,
    originX: 0,
    originY: 0
  };

  DEFINED = {
    SCALE: 0.688
  };

  _originScale = Framer.Device.hands.scale;

  _ratio = _originScale / DEFINED.SCALE;

  function Intro(options) {
    if (options == null) {
      options = {};
    }
    this.title = options.title;
    this.subTitle = options.subTitle;
    this.typeNo = options.typeNo;
    this.typeName = options.typeName;
    this.details = options.details;
    this.theme = options.theme;
    this.create();
  }

  Intro.define('title', {
    get: function() {
      return this._title;
    },
    set: function(value) {
      if (value == null) {
        value = '';
      }
      return this._title = value;
    }
  });

  Intro.define('subTitle', {
    get: function() {
      return this._subTitle;
    },
    set: function(value) {
      if (value == null) {
        value = '';
      }
      return this._subTitle = value;
    }
  });

  Intro.define('typeNo', {
    get: function() {
      if (!this._typeNo) {
        return this._typeNo;
      } else {
        return "Type " + this._typeNo + ".<br/>";
      }
    },
    set: function(value) {
      if (value == null) {
        value = '';
      }
      return this._typeNo = value;
    }
  });

  Intro.define('typeName', {
    get: function() {
      return this._typeName;
    },
    set: function(value) {
      if (value == null) {
        value = '';
      }
      return this._typeName = value;
    }
  });

  Intro.define('details', {
    get: function() {
      return "<strong>" + this.typeNo + this.typeName + "</strong><br/><br/>" + this._details;
    },
    set: function(value) {
      if (value == null) {
        value = [];
      }
      return this._details = !(value.length > 0) ? '' : value.reduce(function(x, y) {
        return x + "<br/>" + y;
      });
    }
  });

  Intro.define('theme', {
    get: function() {
      return this._theme;
    },
    set: function(value) {
      if (value == null) {
        value = Intro.Theme.Tiny;
      }
      return this._theme = value;
    }
  });

  Intro.prototype.create = function() {
    var _background, _copyright, _description, _detail, _logo, _subTitle, _title, resizeListener;
    _background = new Layer({
      name: 'background',
      x: -100,
      y: -100,
      width: Framer.Device.background.width + 200,
      height: Framer.Device.background.height + 200,
      backgroundColor: '',
      parent: Framer.Device.background
    });
    _background.props = this._theme.background;
    _description = new Layer({
      name: "description",
      x: Align.center(this._theme.descriptionXPos * _ratio),
      y: Align.center(this._theme.descriptionYPos * _ratio),
      width: 1000,
      height: 500,
      backgroundColor: '',
      parent: Framer.Device.background,
      scale: _originScale,
      opacity: 0
    });
    _title = new Layer({
      name: "title",
      x: Align.center,
      y: Align.top,
      width: 2000,
      height: 200,
      backgroundColor: '',
      parent: _description,
      html: this.title
    });
    _title.props = this._theme.title;
    _subTitle = new Layer({
      name: "subTitle",
      x: Align.center,
      y: Align.top(200),
      width: 2000,
      height: 500,
      backgroundColor: '',
      parent: _description,
      html: this.subTitle
    });
    _subTitle.props = this._theme.subTitle;
    _detail = new Layer({
      name: "detail",
      x: Align.center,
      y: Align.top(480),
      width: 2000,
      height: 500,
      backgroundColor: '',
      parent: _description,
      html: this.details
    });
    _detail.props = this._theme.details;
    _copyright = new Layer({
      name: "copyright",
      x: Align.left,
      y: Align.bottom,
      width: 1000,
      height: 120,
      scale: 0.4 * _ratio,
      originX: 0,
      originY: 1,
      backgroundColor: '',
      parent: Framer.Device.background,
      opacity: 0,
      color: 'rgba(0,0,0,0.6)',
      html: 'Copyright © 2016 Threeword',
      style: {
        font: "400 40px/120px " + (Utils.deviceFont()),
        letterSpacing: "-2px",
        paddingLeft: "40px"
      },
      brightness: 100,
      saturate: 100,
      contrast: 100,
      invert: 0,
      grayscale: 0,
      hueRotate: 0,
      sepia: 0
    });
    _copyright.props = this._theme.copyright;
    _logo = new Layer({
      name: "framer_ci",
      x: Align.right(-this._theme.logoMargin),
      y: Align.top(this._theme.logoMargin),
      width: 76,
      height: 76,
      image: "images/intro/framer-ci.png",
      scale: _ratio,
      originX: 1,
      originY: 0,
      backgroundColor: '',
      parent: Framer.Device.background,
      opacity: 0,
      color: 'rgba(255,255,255,1.0)',
      brightness: 100,
      saturate: 100,
      contrast: 100,
      invert: 0,
      grayscale: 0,
      hueRotate: 0,
      sepia: 0
    });
    _logo.props = this._theme.logo;
    resizeListener = (function(_this) {
      return function(event) {
        var currentScale;
        currentScale = Framer.Device.hands.scale;
        _ratio = currentScale / DEFINED.SCALE;
        Framer.Device.hands.x += _this._theme.deviceXPos * _ratio;
        Framer.Device.background.props = {
          x: 0,
          y: 0,
          width: Canvas.width,
          height: Canvas.height,
          scale: 1
        };
        _description.animate({
          properties: {
            x: Align.center(_this._theme.descriptionXPos * _ratio),
            y: Align.center(_this._theme.descriptionYPos * _ratio),
            opacity: 1,
            scale: currentScale
          }
        });
        _copyright.animate({
          properties: {
            x: Align.left,
            y: Align.bottom,
            opacity: 1,
            scale: 0.4 * _ratio
          }
        });
        _logo.animate({
          properties: {
            x: Align.right(-_this._theme.logoMargin),
            y: Align.top(_this._theme.logoMargin),
            opacity: 1,
            scale: _ratio
          }
        });
        return _background.props = {
          x: -100,
          y: -100,
          width: Framer.Device.background.width + 200,
          height: Framer.Device.background.height + 200
        };
      };
    })(this);
    Events.wrap(window).addEventListener("resize", resizeListener);
    return resizeListener();
  };

  return Intro;

})(Framer.BaseClass);

exports.Intro = Intro;


},{"IntroThemeImage":"IntroThemeImage","IntroThemeTiny":"IntroThemeTiny","IntroThemeWhite":"IntroThemeWhite"}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvSW50cm8uY29mZmVlIiwiLi4vbW9kdWxlcy9JbnRyb1RoZW1lLmNvZmZlZSIsIi4uL21vZHVsZXMvSW50cm9UaGVtZVdoaXRlLmNvZmZlZSIsIi4uL21vZHVsZXMvSW50cm9UaGVtZVRpbnkuY29mZmVlIiwiLi4vbW9kdWxlcy9JbnRyb1RoZW1lSW1hZ2UuY29mZmVlIiwiLi4vbW9kdWxlcy9DdXN0b21UaGVtZUludHJvLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyMjIFxuUHJvdG90eXBlIGludHJvZHVjZSBtb2R1bGUgZm9yIHByZXNlbnRhdGlvbiBcblxuIyBGZWF0dXJlXG5GdWxsc2NyZWVuIFN1cHBvcnRlZC5cblJlc3BvbnNpdmUgRGVzaWduXG5Nb3JlIGN1c3RvbSB0aGVtZXNcblxuIyBUaGVtZVxuRGVmYXVsdCB0aW55LCB3aGl0ZSwgaW1hZ2UgdGhlbWUgc3VwcG9ydGVkLlxuQXZhaWxhYmxlIGFkZCBjdXN0b20gdGhlbWVcblxuQGF1dGhlciB0aHJlZXdvcmQgKGRldkB0aHJlZXdvcmQuY29tKVxuQHNpbmNlIDIwMTYuMDcuMDdcbkB2ZXJzaW9uIDAuMlxuIyMjXG5cbiMgVGhlbWVcbiMgLSBEZWZhdWx0IDogVGlueSwgV2hpdGUsIEltYWdlXG57SW50cm9UaGVtZVRpbnl9ID0gcmVxdWlyZSBcIkludHJvVGhlbWVUaW55XCJcbntJbnRyb1RoZW1lV2hpdGV9ID0gcmVxdWlyZSBcIkludHJvVGhlbWVXaGl0ZVwiXG57SW50cm9UaGVtZUltYWdlfSA9IHJlcXVpcmUgXCJJbnRyb1RoZW1lSW1hZ2VcIlxuXG5jbGFzcyBJbnRybyBleHRlbmRzIEZyYW1lci5CYXNlQ2xhc3Ncblx0QFRoZW1lID0gVGlueTogbmV3IEludHJvVGhlbWVUaW55LCBXaGl0ZTogbmV3IEludHJvVGhlbWVXaGl0ZSwgSW1hZ2U6IG5ldyBJbnRyb1RoZW1lSW1hZ2Vcblx0XG5cdCMgRGV2aWNlIC0gaVBob25lIDZzIEdPTERcblx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJhcHBsZS1pcGhvbmUtNnMtZ29sZFwiXG5cdCMgQmFja2dyb3VuZChhLmsuYSBDYW52YXMpXG5cdEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZC5wcm9wcyA9IHg6IEFsaWduLmxlZnQsIHk6IEFsaWduLmJvdHRvbSwgb3JpZ2luWDowLCBvcmlnaW5ZOiAwXG5cdFxuXHQjIENvbnN0YW50XG5cdERFRklORUQgPSBcblx0XHRTQ0FMRTogMC42ODhcblxuXHQjIFZhcmlhYmxlXG5cdF9vcmlnaW5TY2FsZSA9IEZyYW1lci5EZXZpY2UuaGFuZHMuc2NhbGVcblx0X3JhdGlvID0gX29yaWdpblNjYWxlIC8gREVGSU5FRC5TQ0FMRVxuXHRcblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0QHRpdGxlID0gb3B0aW9ucy50aXRsZVxuXHRcdEBzdWJUaXRsZSA9IG9wdGlvbnMuc3ViVGl0bGVcblx0XHRAdHlwZU5vID0gb3B0aW9ucy50eXBlTm9cblx0XHRAdHlwZU5hbWUgPSBvcHRpb25zLnR5cGVOYW1lXG5cdFx0QGRldGFpbHMgPSBvcHRpb25zLmRldGFpbHNcblx0XHRAdGhlbWUgPSBvcHRpb25zLnRoZW1lXG5cblx0XHRAY3JlYXRlKClcblxuXHRAZGVmaW5lICd0aXRsZScsXG5cdFx0Z2V0OiAtPiBAX3RpdGxlXG5cdFx0c2V0OiAodmFsdWUgPSAnJykgLT4gQF90aXRsZSA9IHZhbHVlXG5cblx0QGRlZmluZSAnc3ViVGl0bGUnLFxuXHRcdGdldDogLT4gQF9zdWJUaXRsZVxuXHRcdHNldDogKHZhbHVlID0gJycpIC0+IEBfc3ViVGl0bGUgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ3R5cGVObycsXG5cdFx0Z2V0OiAtPiB1bmxlc3MgQF90eXBlTm8gdGhlbiBAX3R5cGVObyBlbHNlIFwiVHlwZSAje0BfdHlwZU5vfS48YnIvPlwiXG5cdFx0c2V0OiAodmFsdWUgPSAnJykgLT4gQF90eXBlTm8gPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ3R5cGVOYW1lJyxcblx0XHRnZXQ6IC0+IEBfdHlwZU5hbWVcblx0XHRzZXQ6ICh2YWx1ZSA9ICcnKSAtPiBAX3R5cGVOYW1lID0gdmFsdWVcblxuXHRAZGVmaW5lICdkZXRhaWxzJyxcblx0XHRnZXQ6IC0+IFwiPHN0cm9uZz4je0B0eXBlTm99I3tAdHlwZU5hbWV9PC9zdHJvbmc+PGJyLz48YnIvPiN7QF9kZXRhaWxzfVwiXG5cdFx0c2V0OiAodmFsdWUgPSBbXSkgLT4gIEBfZGV0YWlscyA9IHVubGVzcyB2YWx1ZS5sZW5ndGggPiAwIHRoZW4gJycgZWxzZSB2YWx1ZS5yZWR1Y2UgKHgsIHkpIC0+IHggKyBcIjxici8+XCIgKyB5XG5cblx0QGRlZmluZSAndGhlbWUnLFxuXHRcdGdldDogLT4gQF90aGVtZVxuXHRcdHNldDogKHZhbHVlID0gSW50cm8uVGhlbWUuVGlueSkgLT4gQF90aGVtZSA9IHZhbHVlXG5cblx0IyDsg53shLFcblx0Y3JlYXRlOiAtPlxuXHRcdCMgQmFja2dyb3VuZFxuXHRcdF9iYWNrZ3JvdW5kID0gbmV3IExheWVyIG5hbWU6ICdiYWNrZ3JvdW5kJ1xuXHRcdFx0LCB4OiAtMTAwLCB5OiAtMTAwXG5cdFx0XHQsIHdpZHRoOiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmQud2lkdGggKyAyMDAsIGhlaWdodDogRnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kLmhlaWdodCArIDIwMFxuXHRcdFx0LCBiYWNrZ3JvdW5kQ29sb3I6ICcnXG5cdFx0XHQsIHBhcmVudDogRnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kXG5cdFx0X2JhY2tncm91bmQucHJvcHMgPSBAX3RoZW1lLmJhY2tncm91bmRcblxuXHRcdCMgRGVzY3JpcHRpb25cblx0XHRfZGVzY3JpcHRpb24gPSBuZXcgTGF5ZXIgbmFtZTogXCJkZXNjcmlwdGlvblwiXG5cdFx0XHQsIHg6IEFsaWduLmNlbnRlcihAX3RoZW1lLmRlc2NyaXB0aW9uWFBvcyAqIF9yYXRpbyksIHk6IEFsaWduLmNlbnRlcihAX3RoZW1lLmRlc2NyaXB0aW9uWVBvcyAqIF9yYXRpbylcblx0XHRcdCwgd2lkdGg6IDEwMDAsIGhlaWdodDogNTAwXG5cdFx0XHQsIGJhY2tncm91bmRDb2xvcjonJ1xuXHRcdFx0LCBwYXJlbnQ6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZFxuXHRcdFx0LCBzY2FsZTogX29yaWdpblNjYWxlXG5cdFx0XHQsIG9wYWNpdHk6IDBcblx0XHQjIFRpdGxlXG5cdFx0X3RpdGxlID0gbmV3IExheWVyIG5hbWU6IFwidGl0bGVcIlxuXHRcdFx0LCB4OiBBbGlnbi5jZW50ZXIsIHk6IEFsaWduLnRvcFxuXHRcdFx0LCB3aWR0aDogMjAwMCwgaGVpZ2h0OiAyMDBcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOicnXG5cdFx0XHQsIHBhcmVudDogX2Rlc2NyaXB0aW9uXG5cdFx0XHQsIGh0bWw6IEB0aXRsZVxuXHRcdF90aXRsZS5wcm9wcyA9IEBfdGhlbWUudGl0bGVcblx0XHQjIFN1YnRpdGxlXHRcblx0XHRfc3ViVGl0bGUgPSBuZXcgTGF5ZXIgbmFtZTogXCJzdWJUaXRsZVwiXG5cdFx0XHQsIHg6IEFsaWduLmNlbnRlciwgeTogQWxpZ24udG9wKDIwMClcblx0XHRcdCwgd2lkdGg6IDIwMDAsIGhlaWdodDogNTAwXG5cdFx0XHQsIGJhY2tncm91bmRDb2xvcjonJ1xuXHRcdFx0LCBwYXJlbnQ6IF9kZXNjcmlwdGlvblxuXHRcdFx0LCBodG1sOiBAc3ViVGl0bGVcblx0XHRfc3ViVGl0bGUucHJvcHMgPSBAX3RoZW1lLnN1YlRpdGxlXG5cdFx0IyBEZXNjcmlwdGlvblxuXHRcdF9kZXRhaWwgPSBuZXcgTGF5ZXIgbmFtZTogXCJkZXRhaWxcIlxuXHRcdFx0LCB4OiBBbGlnbi5jZW50ZXIsIHk6IEFsaWduLnRvcCg0ODApXG5cdFx0XHQsIHdpZHRoOiAyMDAwLCBoZWlnaHQ6IDUwMFxuXHRcdFx0LCBiYWNrZ3JvdW5kQ29sb3I6Jydcblx0XHRcdCwgcGFyZW50OiBfZGVzY3JpcHRpb25cblx0XHRcdCwgaHRtbDogQGRldGFpbHNcblx0XHRfZGV0YWlsLnByb3BzID0gQF90aGVtZS5kZXRhaWxzXG5cdFx0XG5cdFx0IyBDb3B5cmlnaHRcblx0XHRfY29weXJpZ2h0ID0gbmV3IExheWVyIG5hbWU6IFwiY29weXJpZ2h0XCJcblx0XHRcdCwgeDogQWxpZ24ubGVmdCwgeTogQWxpZ24uYm90dG9tXG5cdFx0XHQsIHdpZHRoOiAxMDAwLFx0aGVpZ2h0OiAxMjBcblx0XHRcdCMgLCBpbWFnZTogXCJpbWFnZXMvaXhkL2l4ZC1jaS5wbmdcIlxuXHRcdFx0LCBzY2FsZTogMC40ICogX3JhdGlvLCBvcmlnaW5YOiAwLCBvcmlnaW5ZOiAxXG5cdFx0XHQsIGJhY2tncm91bmRDb2xvcjogJydcblx0XHRcdCwgcGFyZW50OiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmRcblx0XHRcdCwgb3BhY2l0eTogMFxuXHRcdFx0LCBjb2xvcjogJ3JnYmEoMCwwLDAsMC42KSdcblx0XHRcdCwgaHRtbDogJ0NvcHlyaWdodCDCqSAyMDE2IFRocmVld29yZCdcblx0XHRcdCwgc3R5bGU6IHsgZm9udDogXCI0MDAgNDBweC8xMjBweCAje1V0aWxzLmRldmljZUZvbnQoKX1cIiwgbGV0dGVyU3BhY2luZzogXCItMnB4XCIsIHBhZGRpbmdMZWZ0OiBcIjQwcHhcIiB9XG5cdFx0XHQsIGJyaWdodG5lc3M6IDEwMCwgc2F0dXJhdGU6IDEwMCwgY29udHJhc3Q6IDEwMCwgaW52ZXJ0OiAwLCBncmF5c2NhbGU6IDAsIGh1ZVJvdGF0ZTogMCwgc2VwaWE6IDBcblx0XHRfY29weXJpZ2h0LnByb3BzID0gQF90aGVtZS5jb3B5cmlnaHRcblxuXHRcdCMgRnJhbWVyIGxvZ29cblx0XHRfbG9nbyA9IG5ldyBMYXllciBuYW1lOiBcImZyYW1lcl9jaVwiXG5cdFx0XHQsIHg6IEFsaWduLnJpZ2h0KC1AX3RoZW1lLmxvZ29NYXJnaW4pLCB5OiBBbGlnbi50b3AoQF90aGVtZS5sb2dvTWFyZ2luKVxuXHRcdFx0LCB3aWR0aDogNzYsIGhlaWdodDogNzZcblx0XHRcdCwgaW1hZ2U6IFwiaW1hZ2VzL2ludHJvL2ZyYW1lci1jaS5wbmdcIlxuXHRcdFx0LCBzY2FsZTogX3JhdGlvLCBvcmlnaW5YOiAxLCBvcmlnaW5ZOiAwXG5cdFx0XHQsIGJhY2tncm91bmRDb2xvcjogJydcblx0XHRcdCwgcGFyZW50OiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmRcblx0XHRcdCwgb3BhY2l0eTogMFxuXHRcdFx0LCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMS4wKSdcblx0XHRcdCwgYnJpZ2h0bmVzczogMTAwLCBzYXR1cmF0ZTogMTAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgaHVlUm90YXRlOiAwLCBzZXBpYTogMFxuXHRcdF9sb2dvLnByb3BzID0gQF90aGVtZS5sb2dvXG5cblx0XHQjIEV2ZW50IExpc3RlbmVyIDogUmVzaXplXG5cdFx0cmVzaXplTGlzdGVuZXIgPSAoZXZlbnQpID0+XG5cdFx0XHRjdXJyZW50U2NhbGUgPSBGcmFtZXIuRGV2aWNlLmhhbmRzLnNjYWxlXG5cdFx0XHRfcmF0aW8gPSBjdXJyZW50U2NhbGUgLyBERUZJTkVELlNDQUxFXG5cblx0XHRcdEZyYW1lci5EZXZpY2UuaGFuZHMueCArPSBAX3RoZW1lLmRldmljZVhQb3MgKiBfcmF0aW9cblx0XHRcdEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZC5wcm9wcyA9IHg6IDAsIHk6IDAsIHdpZHRoOiBDYW52YXMud2lkdGgsIGhlaWdodDogQ2FudmFzLmhlaWdodCwgc2NhbGU6IDFcblxuXHRcdFx0X2Rlc2NyaXB0aW9uLmFuaW1hdGUgcHJvcGVydGllczogeDogQWxpZ24uY2VudGVyKEBfdGhlbWUuZGVzY3JpcHRpb25YUG9zICogX3JhdGlvKSwgeTogQWxpZ24uY2VudGVyKEBfdGhlbWUuZGVzY3JpcHRpb25ZUG9zICogX3JhdGlvKSwgb3BhY2l0eTogMSwgc2NhbGU6IGN1cnJlbnRTY2FsZVxuXG5cdFx0XHRfY29weXJpZ2h0LmFuaW1hdGUgcHJvcGVydGllczogeDogQWxpZ24ubGVmdCwgeTogQWxpZ24uYm90dG9tLCBvcGFjaXR5OiAxLCBzY2FsZTogMC40ICogX3JhdGlvXG5cdFx0XHRfbG9nby5hbmltYXRlIHByb3BlcnRpZXM6IHg6IEFsaWduLnJpZ2h0KC1AX3RoZW1lLmxvZ29NYXJnaW4pLCB5OiBBbGlnbi50b3AoQF90aGVtZS5sb2dvTWFyZ2luKSwgb3BhY2l0eTogMSwgc2NhbGU6IF9yYXRpb1xuXHRcdFx0XG5cdFx0XHRfYmFja2dyb3VuZC5wcm9wcyA9IHg6IC0xMDAsIHk6IC0xMDAsIHdpZHRoOiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmQud2lkdGggKyAyMDAsIGhlaWdodDogRnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kLmhlaWdodCArIDIwMFxuXG5cdFx0IyBFdmVudCA6IFJlc2l6ZVxuXHRcdEV2ZW50cy53cmFwKHdpbmRvdykuYWRkRXZlbnRMaXN0ZW5lciBcInJlc2l6ZVwiLCByZXNpemVMaXN0ZW5lclxuXG5cdFx0IyBTdGFydFxuXHRcdHJlc2l6ZUxpc3RlbmVyKClcblxuZXhwb3J0cy5JbnRybyA9IEludHJvIiwiIyMjIFxuUHJvdG90eXBlIGludHJvZHVjZSBtb2R1bGUgZm9yIHByZXNlbnRhdGlvbiBUaGVtZVxuXG5AYXV0aGVyIHRocmVld29yZCAoZGV2QHRocmVld29yZC5jb20pXG5Ac2luY2UgMjAxNi4wNy4wN1xuQHZlcnNpb24gMC4yXG4jIyNcblxuY2xhc3MgSW50cm9UaGVtZSBleHRlbmRzIEZyYW1lci5CYXNlQ2xhc3Ncblx0IyBDb25zdGFudFxuXHRERUZJTkVEID0gXG5cdFx0REVGQVVMVDogXG5cdFx0XHRERVZJQ0VfWF9QT1M6IDUwMCwgXG5cdFx0XHRERVNDUklQVElPTl9YX1BPUzogLTUwMCwgREVTQ1JJUFRJT05fWV9QT1M6IC0xNTAsXG5cdFx0XHRMT0dPX01BUkdJTjogMTBcblxuXHQjIENvbnN0cnVjdG9yXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucyA9IHt9KSAtPlxuXHRcdEBkZXZpY2VYUG9zID0gb3B0aW9ucy5kZXZpY2VYUG9zXG5cdFx0QGRlc2NyaXB0aW9uWFBvcyA9IG9wdGlvbnMuZGVzY3JpcHRpb25YUG9zXG5cdFx0QGRlc2NyaXB0aW9uWVBvcyA9IG9wdGlvbnMuZGVzY3JpcHRpb25ZUG9zXG5cdFx0QGxvZ29NYXJnaW4gPSBvcHRpb25zLmxvZ29NYXJnaW5cblxuXHRcdEBuYW1lID0gb3B0aW9ucy5uYW1lXG5cdFx0QHRpdGxlID0gb3B0aW9ucy50aXRsZVxuXHRcdEBzdWJUaXRsZSA9IG9wdGlvbnMuc3ViVGl0bGVcblx0XHRAZGV0YWlscyA9IG9wdGlvbnMuZGV0YWlsc1xuXHRcdEBjb3B5cmlnaHQgPSBvcHRpb25zLmNvcHlyaWdodFxuXHRcdEBsb2dvID0gb3B0aW9ucy5sb2dvXG5cdFx0QGJhY2tncm91bmQgPSBvcHRpb25zLmJhY2tncm91bmRcblxuXHRAZGVmaW5lICdkZXZpY2VYUG9zJyxcblx0XHRnZXQ6IC0+IEBfZGV2aWNlWFBvc1xuXHRcdHNldDogKHZhbHVlID0gREVGSU5FRC5ERUZBVUxULkRFVklDRV9YX1BPUykgLT4gQF9kZXZpY2VYUG9zID0gdmFsdWVcblxuXHRAZGVmaW5lICdkZXNjcmlwdGlvblhQb3MnLFxuXHRcdGdldDogLT4gQF9kZXNjcmlwdGlvblhQb3Ncblx0XHRzZXQ6ICh2YWx1ZSA9IERFRklORUQuREVGQVVMVC5ERVNDUklQVElPTl9YX1BPUykgLT4gQF9kZXNjcmlwdGlvblhQb3MgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2Rlc2NyaXB0aW9uWVBvcycsXG5cdFx0Z2V0OiAtPiBAX2Rlc2NyaXB0aW9uWVBvc1xuXHRcdHNldDogKHZhbHVlID0gREVGSU5FRC5ERUZBVUxULkRFU0NSSVBUSU9OX1lfUE9TKSAtPiBAX2Rlc2NyaXB0aW9uWVBvcyA9IHZhbHVlXG5cblx0QGRlZmluZSAnbG9nb01hcmdpbicsXG5cdFx0Z2V0OiAtPiBAX2xvZ29NYXJnaW5cblx0XHRzZXQ6ICh2YWx1ZSA9IERFRklORUQuREVGQVVMVC5MT0dPX01BUkdJTikgLT4gQF9sb2dvTWFyZ2luID0gdmFsdWVcblx0XG5cdEBkZWZpbmUgJ25hbWUnLFxuXHRcdGdldDogLT4gQF9uYW1lXG5cdFx0c2V0OiAodmFsdWUgPSBcIlwiKSAtPiBAX25hbWUgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ3RpdGxlJyxcblx0XHRnZXQ6IC0+IEBfdGl0bGVcblx0XHRzZXQ6ICh2YWx1ZSA9IHt9KSAtPiBAX3RpdGxlID0gdmFsdWVcblxuXHRAZGVmaW5lICdzdWJUaXRsZScsXG5cdFx0Z2V0OiAtPiBAX3N1YlRpdGxlXG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gQF9zdWJUaXRsZSA9IHZhbHVlXG5cblx0QGRlZmluZSAnZGV0YWlscycsXG5cdFx0Z2V0OiAtPiBAX2RldGFpbHNcblx0XHRzZXQ6ICh2YWx1ZSA9IHt9KSAtPiAgQF9kZXRhaWxzID0gdmFsdWVcblxuXHRAZGVmaW5lICdjb3B5cmlnaHQnLFxuXHRcdGdldDogLT4gQF9jb3B5cmlnaHRcblx0XHRzZXQ6ICh2YWx1ZSA9IHt9KSAtPiAgQF9jb3B5cmlnaHQgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2xvZ28nLFxuXHRcdGdldDogLT4gQF9sb2dvXG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gIEBfbG9nbyA9IHZhbHVlXG5cblx0QGRlZmluZSAnYmFja2dyb3VuZCcsXG5cdFx0Z2V0OiAtPiBAX2JhY2tncm91bmRcblx0XHRzZXQ6ICh2YWx1ZSA9IHt9KSAtPiAgQF9iYWNrZ3JvdW5kID0gdmFsdWVcblxuZXhwb3J0cy5JbnRyb1RoZW1lID0gSW50cm9UaGVtZSIsIiMjIyBcblByb3RvdHlwZSBpbnRyb2R1Y2UgbW9kdWxlIGZvciBwcmVzZW50YXRpb24gVGhlbWVcbi0gV2hpdGVcblxuQGF1dGhlciB0aHJlZXdvcmQgKGRldkB0aHJlZXdvcmQuY29tKVxuQHNpbmNlIDIwMTYuMDcuMDdcbkB2ZXJzaW9uIDAuMlxuIyMjXG5cbntJbnRyb1RoZW1lfSA9IHJlcXVpcmUgXCJJbnRyb1RoZW1lXCJcbmNsYXNzIEludHJvVGhlbWVXaGl0ZSBleHRlbmRzIEludHJvVGhlbWVcblx0IyBDU1Ncblx0X2Nzc0ZvbnQgPSBcIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9ub3Rvc2Fuc2tyLmNzcyk7IGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2VyaWYsIHNhbnMtc2VyaWY7XCJcblx0VXRpbHMuaW5zZXJ0Q1NTKF9jc3NGb250KVxuXG5cdCMgQ29uc3RydWN0b3Jcblx0Y29uc3RydWN0b3I6IC0+XG5cdFx0c3VwZXIgXG5cdFx0XHQjIFRoZW1lIG5hbWVcblx0XHRcdG5hbWU6ICd3aGl0ZSdcblx0XHRcdCMgUHJvamVjdCB0aXRsZVxuXHRcdFx0dGl0bGU6IFxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRjb2xvcjogXCIjMzMzXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiMTAwIDE2MHB4LzEwMHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC43XCJcblx0XHRcdCMgUHJvamVjdCBzdWJ0aXRsZVxuXHRcdFx0c3ViVGl0bGU6IFxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRjb2xvcjogXCIjMzMzXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiNTAwIDEzMHB4LzEwMHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC42XCIgXG5cdFx0XHQjIFByb2plY3QgZGV0YWlsXG5cdFx0XHRkZXRhaWxzOiBcblx0XHRcdFx0c3R5bGU6IFxuXHRcdFx0XHRcdGNvbG9yOiBcIiMzMzNcIlxuXHRcdFx0XHRcdCwgZm9udDogXCIyMDAgNTBweC84MHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC44XCJcblx0XHRcdCMgQ29weXJpZ2h0XG5cdFx0XHRjb3B5cmlnaHQ6IGJyaWdodG5lc3M6IDEwMCwgc2F0dXJhdGU6IDEwMCwgaHVlUm90YXRlOiAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgc2VwaWE6IDBcblx0XHRcdCMgRnJhbWVyIGxvZ29cblx0XHRcdGxvZ286IGJyaWdodG5lc3M6IDEwMCwgc2F0dXJhdGU6IDEwMCwgaHVlUm90YXRlOiAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgc2VwaWE6IDBcblx0XHRcdCMgQmFja2dyb3VuZCA6OiBjb2xvclxuXHRcdFx0YmFja2dyb3VuZDogeyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfVxuXHRcbmV4cG9ydHMuSW50cm9UaGVtZVdoaXRlID0gSW50cm9UaGVtZVdoaXRlIiwiIyMjIFxu7IaM6rCcIO2FjOuniCAtIFRpbnlcbkBhdXRoZXIgaG8uc1xuQHNpbmNlIDIwMTYuMDcuMTJcbkB2ZXJzaW9uIDAuMVxuIyMjXG5cbntJbnRyb1RoZW1lfSA9IHJlcXVpcmUgXCJJbnRyb1RoZW1lXCJcbmNsYXNzIEludHJvVGhlbWVUaW55IGV4dGVuZHMgSW50cm9UaGVtZVxuXHQjIENTU1xuXHRfY3NzRm9udCA9IFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za3IuY3NzKTsgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzZXJpZiwgc2Fucy1zZXJpZjtcIlxuXHRVdGlscy5pbnNlcnRDU1MoX2Nzc0ZvbnQpXG5cblx0IyDsg53shLHsnpBcblx0Y29uc3RydWN0b3I6IC0+XG5cdFx0c3VwZXIgXG5cdFx0XHQjIFRoZW1lIE5hbWVcblx0XHRcdG5hbWU6ICd0aW55J1xuXHRcdFx0IyBYIHBvc2l0aW9uIG9mIGRldmljZSBmcm9tIHRoZSBjZW50ZXIgcG9zaXRpb25cblx0XHRcdGRldmljZVhQb3M6IDQwMFxuXHRcdFx0IyBYLFkgcG9zaXRpb24gb2YgZGVzY3JpcHRpb24gZnJvbSB0aGUgY2VudGVyIHBvc2l0aW9uXG5cdFx0XHRkZXNjcmlwdGlvblhQb3M6IC01NTAsIGRlc2NyaXB0aW9uWVBvczogLTgwXG5cdFx0XHQjIFByb2plY3QgdGl0bGVcblx0XHRcdHRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiXG5cdFx0XHRcdFx0LCBmb250OiBcIjEwMCAxMDBweC8xMDBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuN1wiXG5cdFx0XHQjIFByb2plY3Qgc3VidGl0bGVcblx0XHRcdHN1YlRpdGxlOiBcblx0XHRcdFx0eTogQWxpZ24udG9wKDE0MClcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiXG5cdFx0XHRcdFx0LCBmb250OiBcIjUwMCA3MHB4LzgwcHggTm90byBTYW5zIEtSXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjZcIiBcblx0XHRcdCMgUHJvamVjdCBkZXRhaWxcblx0XHRcdGRldGFpbHM6IFxuXHRcdFx0XHR5OiBBbGlnbi50b3AoMzAwKVxuXHRcdFx0XHRzdHlsZTogXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiXG5cdFx0XHRcdFx0LCBmb250OiBcIjIwMCAzNXB4LzgwcHggTm90byBTYW5zIEtSXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjhcIlxuXHRcdFx0IyBDb3B5cmlnaHRcblx0XHRcdGNvcHlyaWdodDogYnJpZ2h0bmVzczogMTAwLCBzYXR1cmF0ZTogMTAwLCBodWVSb3RhdGU6IDAsIGNvbnRyYXN0OiAxMDAsIGludmVydDogMCwgZ3JheXNjYWxlOiAwLCBzZXBpYTogMFxuXHRcdFx0IyBGcmFtZXIgbG9nb1xuXHRcdFx0bG9nbzogYnJpZ2h0bmVzczogMTAwLCBzYXR1cmF0ZTogMTAwLCBodWVSb3RhdGU6IDAsIGNvbnRyYXN0OiAxMDAsIGludmVydDogMCwgZ3JheXNjYWxlOiAwLCBzZXBpYTogMFxuXHRcdFx0IyBCYWNrZ3JvdW5kIDo6IGNvbG9yXG5cdFx0XHRiYWNrZ3JvdW5kOiB7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9XG5cdFxuZXhwb3J0cy5JbnRyb1RoZW1lVGlueSA9IEludHJvVGhlbWVUaW55IiwiIyMjIFxuUHJvdG90eXBlIGludHJvZHVjZSBtb2R1bGUgZm9yIHByZXNlbnRhdGlvbiBUaGVtZVxuLSBJbWFnZVxuXG5AYXV0aGVyIHRocmVld29yZCAoZGV2QHRocmVld29yZC5jb20pXG5Ac2luY2UgMjAxNi4wNy4wN1xuQHZlcnNpb24gMC4yXG4jIyNcblxue0ludHJvVGhlbWV9ID0gcmVxdWlyZSBcIkludHJvVGhlbWVcIlxuY2xhc3MgSW50cm9UaGVtZUltYWdlIGV4dGVuZHMgSW50cm9UaGVtZVxuXHQjIENTU1xuXHRfY3NzRm9udCA9IFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za3IuY3NzKTsgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzZXJpZiwgc2Fucy1zZXJpZjtcIlxuXHRVdGlscy5pbnNlcnRDU1MoX2Nzc0ZvbnQpXG5cblx0IyBDb25zdHJ1Y3RvclxuXHRjb25zdHJ1Y3RvcjogLT5cblx0XHRzdXBlciBcblx0XHRcdCMgVGhlbWUgbmFtZVxuXHRcdFx0bmFtZTogJ2ltYWdlJ1xuXHRcdFx0IyBQcm9qZWN0IHRpdGxlXG5cdFx0XHR0aXRsZTogXG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdGNvbG9yOiBcIiNGRkZcIlxuXHRcdFx0XHRcdCwgZm9udDogXCIxMDAgMTYwcHgvMTAwcHggTm90byBTYW5zIEtSXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjdcIlxuXHRcdFx0IyBQcm9qZWN0IHN1YnRpdGxlXG5cdFx0XHRzdWJUaXRsZTogXG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdGNvbG9yOiBcIiNGRkZcIlxuXHRcdFx0XHRcdCwgZm9udDogXCI1MDAgMTMwcHgvMTAwcHggTm90byBTYW5zIEtSXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjZcIiBcblx0XHRcdCMgUHJvamVjdCBkZXRhaWxcblx0XHRcdGRldGFpbHM6IFxuXHRcdFx0XHRzdHlsZTogXG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiXG5cdFx0XHRcdFx0LCBmb250OiBcIjIwMCA1MHB4LzgwcHggTm90byBTYW5zIEtSXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjhcIlxuXHRcdFx0IyBDb3B5cmlnaHRcblx0XHRcdGNvcHlyaWdodDogYnJpZ2h0bmVzczogMjAwLCBzYXR1cmF0ZTogMCwgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjYpXCJcblx0XHRcdCMgRnJhbWVyIGxvZ29cblx0XHRcdGxvZ286IGJyaWdodG5lc3M6IDIwMCwgc2F0dXJhdGU6IDBcblx0XHRcdCMgQmFja2dvdW5kIDo6IGltYWdlXG5cdFx0XHRiYWNrZ3JvdW5kOiBpbWFnZTogXCJpbWFnZXMvaW50cm8vdGhlbWUvaW1hZ2UvYmcuanBnXCIsIGJsdXI6IDIwLCBvcGFjaXR5OiAwLjdcblxuXHRcdCMgXG5cdFx0RnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kLnByb3BzID0gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMSlcIlxuXG5leHBvcnRzLkludHJvVGhlbWVJbWFnZSA9IEludHJvVGhlbWVJbWFnZSIsIiMjIyBcblByb3RvdHlwZSBpbnRyb2R1Y2UgbW9kdWxlIGZvciBwcmVzZW50YXRpb24gVGhlbWVcbi0gQ3VzdG9taXplIHRoZW1lIHNhbXBsZVxuXG5AYXV0aGVyIHRocmVld29yZCAoZGV2QHRocmVld29yZC5jb20pXG5Ac2luY2UgMjAxNi4wOC4xN1xuQHZlcnNpb24gMC4xXG4jIyNcblxue0ludHJvVGhlbWV9ID0gcmVxdWlyZSBcIkludHJvVGhlbWVcIlxuY2xhc3MgQ3VzdG9tVGhlbWVJbnRybyBleHRlbmRzIEludHJvVGhlbWVcblx0IyBDU1Ncblx0X2Nzc0ZvbnQgPSBcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJyk7IGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWYsIHNhbnMtc2VyaWY7XCJcblx0VXRpbHMuaW5zZXJ0Q1NTKF9jc3NGb250KVxuXG5cdCMgQ29uc3RydWN0b3Jcblx0Y29uc3RydWN0b3I6IC0+XG5cdFx0c3VwZXIgXG5cdFx0XHQjIFRoZW1lIG5hbWVcblx0XHRcdG5hbWU6ICdjdXN0b20nXG5cdFx0XHQjIFByb2plY3QgdGl0bGVcblx0XHRcdHRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiXG5cdFx0XHRcdFx0LCBmb250OiBcIjEwMCAxNjBweC8xMDBweCBSb2JvdG9cIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuOVwiXG5cdFx0XHQjIFByb2plY3Qgc3VidGl0bGVcblx0XHRcdHN1YlRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiXG5cdFx0XHRcdFx0LCBmb250OiBcIjUwMCAxMzBweC8xMDBweCBSb2JvdG9cIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuNlwiIFxuXHRcdFx0IyBQcm9qZWN0IGRldGFpbFxuXHRcdFx0ZGV0YWlsczogXG5cdFx0XHRcdHN0eWxlOiBcblx0XHRcdFx0XHRjb2xvcjogXCIjRkZGXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiMjAwIDUwcHgvODBweCBSb2JvdG9cIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuOFwiXG5cdFx0XHQjIENvcHlyaWdodFxuXHRcdFx0Y29weXJpZ2h0OiBicmlnaHRuZXNzOiAyMDAsIHNhdHVyYXRlOiAwLCBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNilcIlxuXHRcdFx0IyBGcmFtZXIgbG9nb1xuXHRcdFx0bG9nbzogYnJpZ2h0bmVzczogMjAwLCBzYXR1cmF0ZTogMFxuXHRcdFx0IyBCYWNrZ3JvdW5kIDo6IGltYWdlXG5cdFx0XHRiYWNrZ3JvdW5kOiBpbWFnZTogVXRpbHMucmFuZG9tSW1hZ2UoRnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kKSwgYmx1cjogMywgb3BhY2l0eTogMC4yXG5cblx0XHQjIFxuXHRcdCMgRnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kLnByb3BzID0gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuXHRcbmV4cG9ydHMuQ3VzdG9tVGhlbWVJbnRybyA9IEN1c3RvbVRoZW1lSW50cm8iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQU1BQTs7QURBQTs7Ozs7Ozs7QUFBQSxJQUFBLDRCQUFBO0VBQUE7OztBQVNDLGFBQWMsT0FBQSxDQUFRLFlBQVIsRUFBZDs7QUFDSztBQUVMLE1BQUE7Ozs7RUFBQSxRQUFBLEdBQVc7O0VBQ1gsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsUUFBaEI7O0VBR2EsMEJBQUE7SUFDWixrREFFQztNQUFBLElBQUEsRUFBTSxRQUFOO01BRUEsS0FBQSxFQUNDO1FBQUEsS0FBQSxFQUNDO1VBQUEsS0FBQSxFQUFPLE1BQVA7VUFDRSxJQUFBLEVBQU0sd0JBRFI7VUFFRSxTQUFBLEVBQVcsUUFGYjtVQUdFLE9BQUEsRUFBUyxLQUhYO1NBREQ7T0FIRDtNQVNBLFFBQUEsRUFDQztRQUFBLEtBQUEsRUFDQztVQUFBLEtBQUEsRUFBTyxNQUFQO1VBQ0UsSUFBQSxFQUFNLHdCQURSO1VBRUUsU0FBQSxFQUFXLFFBRmI7VUFHRSxPQUFBLEVBQVMsS0FIWDtTQUREO09BVkQ7TUFnQkEsT0FBQSxFQUNDO1FBQUEsS0FBQSxFQUNDO1VBQUEsS0FBQSxFQUFPLE1BQVA7VUFDRSxJQUFBLEVBQU0sc0JBRFI7VUFFRSxTQUFBLEVBQVcsUUFGYjtVQUdFLE9BQUEsRUFBUyxLQUhYO1NBREQ7T0FqQkQ7TUF1QkEsU0FBQSxFQUFXO1FBQUEsVUFBQSxFQUFZLEdBQVo7UUFBaUIsUUFBQSxFQUFVLENBQTNCO1FBQThCLEtBQUEsRUFBTyx1QkFBckM7T0F2Qlg7TUF5QkEsSUFBQSxFQUFNO1FBQUEsVUFBQSxFQUFZLEdBQVo7UUFBaUIsUUFBQSxFQUFVLENBQTNCO09BekJOO01BMkJBLFVBQUEsRUFBWTtRQUFBLEtBQUEsRUFBTyxLQUFLLENBQUMsV0FBTixD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LEdBQWU7SUFBeEQsQ0FETDtHQUREOztFQUlBLFVBQUMsQ0FBQSxNQUFELENBQVEsTUFBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUE7SUFBSixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDs7UUFBQyxRQUFROzthQUFPLElBQUMsQ0FBQSxLQUFELEdBQVM7SUFBekIsQ0FETDtHQUREOztFQUlBLFVBQUMsQ0FBQSxNQUFELENBQVEsT0FBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUE7SUFBSixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDs7UUFBQyxRQUFROzthQUFPLElBQUMsQ0FBQSxNQUFELEdBQVU7SUFBMUIsQ0FETDtHQUREOztFQUlBLFVBQUMsQ0FBQSxNQUFELENBQVEsVUFBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUE7SUFBSixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDs7UUFBQyxRQUFROzthQUFPLElBQUMsQ0FBQSxTQUFELEdBQWE7SUFBN0IsQ0FETDtHQUREOztFQUlBLFVBQUMsQ0FBQSxNQUFELENBQVEsU0FBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUE7SUFBSixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDs7UUFBQyxRQUFROzthQUFRLElBQUMsQ0FBQSxRQUFELEdBQVk7SUFBN0IsQ0FETDtHQUREOztFQUlBLFVBQUMsQ0FBQSxNQUFELENBQVEsV0FBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUE7SUFBSixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDs7UUFBQyxRQUFROzthQUFRLElBQUMsQ0FBQSxVQUFELEdBQWM7SUFBL0IsQ0FETDtHQUREOztFQUlBLFVBQUMsQ0FBQSxNQUFELENBQVEsTUFBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUE7SUFBSixDQUFMO0lB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
