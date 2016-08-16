require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"IntroThemeImage":[function(require,module,exports){

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
소개 테마
@auther ho.s
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGhyZWV3b3JkL3RveS9wcm90b3R5cGUvZnJhbWVyanMvZ2l0aHViL2ludHJvLmZyYW1lci9tb2R1bGVzL0ludHJvVGhlbWVJbWFnZS5jb2ZmZWUiLCIvVXNlcnMvdGhyZWV3b3JkL3RveS9wcm90b3R5cGUvZnJhbWVyanMvZ2l0aHViL2ludHJvLmZyYW1lci9tb2R1bGVzL0ludHJvVGhlbWVUaW55LmNvZmZlZSIsIi9Vc2Vycy90aHJlZXdvcmQvdG95L3Byb3RvdHlwZS9mcmFtZXJqcy9naXRodWIvaW50cm8uZnJhbWVyL21vZHVsZXMvSW50cm9UaGVtZVdoaXRlLmNvZmZlZSIsIi9Vc2Vycy90aHJlZXdvcmQvdG95L3Byb3RvdHlwZS9mcmFtZXJqcy9naXRodWIvaW50cm8uZnJhbWVyL21vZHVsZXMvSW50cm9UaGVtZS5jb2ZmZWUiLCIvVXNlcnMvdGhyZWV3b3JkL3RveS9wcm90b3R5cGUvZnJhbWVyanMvZ2l0aHViL2ludHJvLmZyYW1lci9tb2R1bGVzL0ludHJvLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTs7Ozs7Ozs7QUFBQSxJQUFBLDJCQUFBO0VBQUE7OztBQVNDLGFBQWMsT0FBQSxDQUFRLFlBQVIsRUFBZDs7QUFDSztBQUVMLE1BQUE7Ozs7RUFBQSxRQUFBLEdBQVc7O0VBQ1gsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsUUFBaEI7O0VBR2EseUJBQUE7SUFDWixpREFFQztNQUFBLElBQUEsRUFBTSxPQUFOO01BRUEsS0FBQSxFQUNDO1FBQUEsS0FBQSxFQUNDO1VBQUEsS0FBQSxFQUFPLE1BQVA7VUFDRSxJQUFBLEVBQU0sOEJBRFI7VUFFRSxTQUFBLEVBQVcsUUFGYjtVQUdFLE9BQUEsRUFBUyxLQUhYO1NBREQ7T0FIRDtNQVNBLFFBQUEsRUFDQztRQUFBLEtBQUEsRUFDQztVQUFBLEtBQUEsRUFBTyxNQUFQO1VBQ0UsSUFBQSxF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IihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjIFxuUHJvdG90eXBlIGludHJvZHVjZSBtb2R1bGUgZm9yIHByZXNlbnRhdGlvbiBUaGVtZVxuLSBJbWFnZVxuXG5AYXV0aGVyIHRocmVld29yZCAoZGV2QHRocmVld29yZC5jb20pXG5Ac2luY2UgMjAxNi4wNy4wN1xuQHZlcnNpb24gMC4yXG4jIyNcblxue0ludHJvVGhlbWV9ID0gcmVxdWlyZSBcIkludHJvVGhlbWVcIlxuY2xhc3MgSW50cm9UaGVtZUltYWdlIGV4dGVuZHMgSW50cm9UaGVtZVxuXHQjIENTU1xuXHRfY3NzRm9udCA9IFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za3IuY3NzKTsgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzZXJpZiwgc2Fucy1zZXJpZjtcIlxuXHRVdGlscy5pbnNlcnRDU1MoX2Nzc0ZvbnQpXG5cblx0IyBDb25zdHJ1Y3RvclxuXHRjb25zdHJ1Y3RvcjogLT5cblx0XHRzdXBlciBcblx0XHRcdCMgUHJvamVjdCBuYW1lXG5cdFx0XHRuYW1lOiAnaW1hZ2UnXG5cdFx0XHQjIFByb2plY3QgdGl0bGVcblx0XHRcdHRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiXG5cdFx0XHRcdFx0LCBmb250OiBcIjEwMCAxNjBweC8xMDBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuN1wiXG5cdFx0XHQjIFByb2plY3Qgc3VidGl0bGVcblx0XHRcdHN1YlRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiXG5cdFx0XHRcdFx0LCBmb250OiBcIjUwMCAxMzBweC8xMDBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuNlwiIFxuXHRcdFx0IyBQcm9qZWN0IGRldGFpbFxuXHRcdFx0ZGV0YWlsczogXG5cdFx0XHRcdHN0eWxlOiBcblx0XHRcdFx0XHRjb2xvcjogXCIjRkZGXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiMjAwIDUwcHgvODBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuOFwiXG5cdFx0XHQjIENvcHlyaWdodFxuXHRcdFx0Y29weXJpZ2h0OiBicmlnaHRuZXNzOiAyMDAsIHNhdHVyYXRlOiAwLCBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNilcIlxuXHRcdFx0IyBGcmFtZXIgbG9nb1xuXHRcdFx0bG9nbzogYnJpZ2h0bmVzczogMjAwLCBzYXR1cmF0ZTogMFxuXHRcdFx0IyBCYWNrZ291bmQgSW1hZ2Vcblx0XHRcdGJhY2tncm91bmQ6IGltYWdlOiBcImltYWdlcy9pbnRyby90aGVtZS9pbWFnZS9iZy5qcGdcIiwgYmx1cjogMjAsIG9wYWNpdHk6IDAuN1xuXG5cdFx0IyBcblx0XHRGcmFtZXIuRGV2aWNlLmJhY2tncm91bmQucHJvcHMgPSBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwxKVwiXG5cbmV4cG9ydHMuSW50cm9UaGVtZUltYWdlID0gSW50cm9UaGVtZUltYWdlIiwiIyMjIFxu7IaM6rCcIO2FjOuniCAtIFRpbnlcbkBhdXRoZXIgaG8uc1xuQHNpbmNlIDIwMTYuMDcuMTJcbkB2ZXJzaW9uIDAuMVxuIyMjXG5cbntJbnRyb1RoZW1lfSA9IHJlcXVpcmUgXCJJbnRyb1RoZW1lXCJcbmNsYXNzIEludHJvVGhlbWVUaW55IGV4dGVuZHMgSW50cm9UaGVtZVxuXHQjIENTU1xuXHRfY3NzRm9udCA9IFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za3IuY3NzKTsgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzZXJpZiwgc2Fucy1zZXJpZjtcIlxuXHRVdGlscy5pbnNlcnRDU1MoX2Nzc0ZvbnQpXG5cblx0IyDsg53shLHsnpBcblx0Y29uc3RydWN0b3I6IC0+XG5cdFx0c3VwZXIgXG5cdFx0XHQjIOydtOumhFxuXHRcdFx0bmFtZTogJ3RpbnknXG5cdFx0XHQjIOyepey5mOydmCDspJHsi6zsnLzroZwg67aA7YSwIHjsnITsuZhcblx0XHRcdGRldmljZVhQb3M6IDQwMFxuXHRcdFx0IyDshKTrqoXsnZgg7KSR7Ius7Jy866GcIOu2gO2EsCDsnITsuZggXG5cdFx0XHRkZXNjcmlwdGlvblhQb3M6IC01NTAsIGRlc2NyaXB0aW9uWVBvczogLTgwXG5cdFx0XHQjIO2UhOuhnOygne2KuCDsoJzrqqlcblx0XHRcdHRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiXG5cdFx0XHRcdFx0LCBmb250OiBcIjEwMCAxMDBweC8xMDBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuN1wiXG5cdFx0XHQjIO2UhOuhnOygne2KuCDshLjrtoAg7KCc66qpXG5cdFx0XHRzdWJUaXRsZTogXG5cdFx0XHRcdHk6IEFsaWduLnRvcCgxNDApXG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdGNvbG9yOiBcIiMzMzNcIlxuXHRcdFx0XHRcdCwgZm9udDogXCI1MDAgNzBweC84MHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC42XCIgXG5cdFx0XHQjIOyDgeyEuCDsoJXrs7Rcblx0XHRcdGRldGFpbHM6IFxuXHRcdFx0XHR5OiBBbGlnbi50b3AoMzAwKVxuXHRcdFx0XHRzdHlsZTogXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiXG5cdFx0XHRcdFx0LCBmb250OiBcIjIwMCAzNXB4LzgwcHggTm90byBTYW5zIEtSXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjhcIlxuXHRcdFx0IyDrqZTsnbTsu6QgQ0lcblx0XHRcdGNvcHlyaWdodDogYnJpZ2h0bmVzczogMTAwLCBzYXR1cmF0ZTogMTAwLCBodWVSb3RhdGU6IDAsIGNvbnRyYXN0OiAxMDAsIGludmVydDogMCwgZ3JheXNjYWxlOiAwLCBzZXBpYTogMFxuXHRcdFx0IyDtlITroIjsnbTrqLgg66Gc6rOgXG5cdFx0XHRsb2dvOiBicmlnaHRuZXNzOiAxMDAsIHNhdHVyYXRlOiAxMDAsIGh1ZVJvdGF0ZTogMCwgY29udHJhc3Q6IDEwMCwgaW52ZXJ0OiAwLCBncmF5c2NhbGU6IDAsIHNlcGlhOiAwXG5cdFx0XHQjIOuwsOqyvVxuXHRcdFx0YmFja2dyb3VuZDogeyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfVxuXHRcbmV4cG9ydHMuSW50cm9UaGVtZVRpbnkgPSBJbnRyb1RoZW1lVGlueSIsIiMjIyBcblByb3RvdHlwZSBpbnRyb2R1Y2UgbW9kdWxlIGZvciBwcmVzZW50YXRpb24gVGhlbWVcbi0gV2hpdGVcblxuQGF1dGhlciB0aHJlZXdvcmQgKGRldkB0aHJlZXdvcmQuY29tKVxuQHNpbmNlIDIwMTYuMDcuMDdcbkB2ZXJzaW9uIDAuMlxuIyMjXG5cbntJbnRyb1RoZW1lfSA9IHJlcXVpcmUgXCJJbnRyb1RoZW1lXCJcbmNsYXNzIEludHJvVGhlbWVXaGl0ZSBleHRlbmRzIEludHJvVGhlbWVcblx0IyBDU1Ncblx0X2Nzc0ZvbnQgPSBcIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9ub3Rvc2Fuc2tyLmNzcyk7IGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2VyaWYsIHNhbnMtc2VyaWY7XCJcblx0VXRpbHMuaW5zZXJ0Q1NTKF9jc3NGb250KVxuXG5cdCMgQ29uc3RydWN0b3Jcblx0Y29uc3RydWN0b3I6IC0+XG5cdFx0c3VwZXIgXG5cdFx0XHQjIFRoZW1lIG5hbWVcblx0XHRcdG5hbWU6ICd3aGl0ZSdcblx0XHRcdCMgUHJvamVjdCB0aXRsZVxuXHRcdFx0dGl0bGU6IFxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRjb2xvcjogXCIjMzMzXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiMTAwIDE2MHB4LzEwMHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC43XCJcblx0XHRcdCMgUHJvamVjdCBzdWJ0aXRsZVxuXHRcdFx0c3ViVGl0bGU6IFxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRjb2xvcjogXCIjMzMzXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiNTAwIDEzMHB4LzEwMHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC42XCIgXG5cdFx0XHQjIFByb2plY3QgZGV0YWlsXG5cdFx0XHRkZXRhaWxzOiBcblx0XHRcdFx0c3R5bGU6IFxuXHRcdFx0XHRcdGNvbG9yOiBcIiMzMzNcIlxuXHRcdFx0XHRcdCwgZm9udDogXCIyMDAgNTBweC84MHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC44XCJcblx0XHRcdCMgQ29weXJpZ2h0XG5cdFx0XHRjb3B5cmlnaHQ6IGJyaWdodG5lc3M6IDEwMCwgc2F0dXJhdGU6IDEwMCwgaHVlUm90YXRlOiAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgc2VwaWE6IDBcblx0XHRcdCMgRnJhbWVyIGxvZ29cblx0XHRcdGxvZ286IGJyaWdodG5lc3M6IDEwMCwgc2F0dXJhdGU6IDEwMCwgaHVlUm90YXRlOiAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgc2VwaWE6IDBcblx0XHRcdCMgQmFja2dyb3VuZCBjb2xvclxuXHRcdFx0YmFja2dyb3VuZDogeyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfVxuXHRcbmV4cG9ydHMuSW50cm9UaGVtZVdoaXRlID0gSW50cm9UaGVtZVdoaXRlIiwiIyMjIFxu7IaM6rCcIO2FjOuniFxuQGF1dGhlciBoby5zXG5Ac2luY2UgMjAxNi4wNy4wN1xuQHZlcnNpb24gMC4yXG4jIyNcblxuY2xhc3MgSW50cm9UaGVtZSBleHRlbmRzIEZyYW1lci5CYXNlQ2xhc3Ncblx0IyBDb25zdGFudFxuXHRERUZJTkVEID0gXG5cdFx0REVGQVVMVDogXG5cdFx0XHRERVZJQ0VfWF9QT1M6IDUwMCwgXG5cdFx0XHRERVNDUklQVElPTl9YX1BPUzogLTUwMCwgREVTQ1JJUFRJT05fWV9QT1M6IC0xNTAsXG5cdFx0XHRMT0dPX01BUkdJTjogMTBcblxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMgPSB7fSkgLT5cblx0XHRAZGV2aWNlWFBvcyA9IG9wdGlvbnMuZGV2aWNlWFBvc1xuXHRcdEBkZXNjcmlwdGlvblhQb3MgPSBvcHRpb25zLmRlc2NyaXB0aW9uWFBvc1xuXHRcdEBkZXNjcmlwdGlvbllQb3MgPSBvcHRpb25zLmRlc2NyaXB0aW9uWVBvc1xuXHRcdEBsb2dvTWFyZ2luID0gb3B0aW9ucy5sb2dvTWFyZ2luXG5cblx0XHRAbmFtZSA9IG9wdGlvbnMubmFtZVxuXHRcdEB0aXRsZSA9IG9wdGlvbnMudGl0bGVcblx0XHRAc3ViVGl0bGUgPSBvcHRpb25zLnN1YlRpdGxlXG5cdFx0QGRldGFpbHMgPSBvcHRpb25zLmRldGFpbHNcblx0XHRAY29weXJpZ2h0ID0gb3B0aW9ucy5jb3B5cmlnaHRcblx0XHRAbG9nbyA9IG9wdGlvbnMubG9nb1xuXHRcdEBiYWNrZ3JvdW5kID0gb3B0aW9ucy5iYWNrZ3JvdW5kXG5cblx0QGRlZmluZSAnZGV2aWNlWFBvcycsXG5cdFx0Z2V0OiAtPiBAX2RldmljZVhQb3Ncblx0XHRzZXQ6ICh2YWx1ZSA9IERFRklORUQuREVGQVVMVC5ERVZJQ0VfWF9QT1MpIC0+IEBfZGV2aWNlWFBvcyA9IHZhbHVlXG5cblx0QGRlZmluZSAnZGVzY3JpcHRpb25YUG9zJyxcblx0XHRnZXQ6IC0+IEBfZGVzY3JpcHRpb25YUG9zXG5cdFx0c2V0OiAodmFsdWUgPSBERUZJTkVELkRFRkFVTFQuREVTQ1JJUFRJT05fWF9QT1MpIC0+IEBfZGVzY3JpcHRpb25YUG9zID0gdmFsdWVcblxuXHRAZGVmaW5lICdkZXNjcmlwdGlvbllQb3MnLFxuXHRcdGdldDogLT4gQF9kZXNjcmlwdGlvbllQb3Ncblx0XHRzZXQ6ICh2YWx1ZSA9IERFRklORUQuREVGQVVMVC5ERVNDUklQVElPTl9ZX1BPUykgLT4gQF9kZXNjcmlwdGlvbllQb3MgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2xvZ29NYXJnaW4nLFxuXHRcdGdldDogLT4gQF9sb2dvTWFyZ2luXG5cdFx0c2V0OiAodmFsdWUgPSBERUZJTkVELkRFRkFVTFQuTE9HT19NQVJHSU4pIC0+IEBfbG9nb01hcmdpbiA9IHZhbHVlXG5cdFxuXHRAZGVmaW5lICduYW1lJyxcblx0XHRnZXQ6IC0+IEBfbmFtZVxuXHRcdHNldDogKHZhbHVlID0gXCJcIikgLT4gQF9uYW1lID0gdmFsdWVcblxuXHRAZGVmaW5lICd0aXRsZScsXG5cdFx0Z2V0OiAtPiBAX3RpdGxlXG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gQF90aXRsZSA9IHZhbHVlXG5cblx0QGRlZmluZSAnc3ViVGl0bGUnLFxuXHRcdGdldDogLT4gQF9zdWJUaXRsZVxuXHRcdHNldDogKHZhbHVlID0ge30pIC0+IEBfc3ViVGl0bGUgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2RldGFpbHMnLFxuXHRcdGdldDogLT4gQF9kZXRhaWxzXG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gIEBfZGV0YWlscyA9IHZhbHVlXG5cblx0QGRlZmluZSAnY29weXJpZ2h0Jyxcblx0XHRnZXQ6IC0+IEBfY29weXJpZ2h0XG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gIEBfY29weXJpZ2h0ID0gdmFsdWVcblxuXHRAZGVmaW5lICdsb2dvJyxcblx0XHRnZXQ6IC0+IEBfbG9nb1xuXHRcdHNldDogKHZhbHVlID0ge30pIC0+ICBAX2xvZ28gPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2JhY2tncm91bmQnLFxuXHRcdGdldDogLT4gQF9iYWNrZ3JvdW5kXG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gIEBfYmFja2dyb3VuZCA9IHZhbHVlXG5cbmV4cG9ydHMuSW50cm9UaGVtZSA9IEludHJvVGhlbWUiLCIjIyMgXG5Qcm90b3R5cGUgaW50cm9kdWNlIG1vZHVsZSBmb3IgcHJlc2VudGF0aW9uIFxuXG4jIEZlYXR1cmVcbkZ1bGxzY3JlZW4gU3VwcG9ydGVkLlxuUmVzcG9uc2l2ZSBEZXNpZ25cbk1vcmUgY3VzdG9tIHRoZW1lc1xuXG4jIFRoZW1lXG5EZWZhdWx0IHRpbnksIHdoaXRlLCBpbWFnZSB0aGVtZSBzdXBwb3J0ZWQuXG5BdmFpbGFibGUgYWRkIGN1c3RvbSB0aGVtZVxuXG5AYXV0aGVyIHRocmVld29yZCAoZGV2QHRocmVld29yZC5jb20pXG5Ac2luY2UgMjAxNi4wNy4wN1xuQHZlcnNpb24gMC4yXG4jIyNcblxuIyBUaGVtZVxuIyAtIERlZmF1bHQgOiBUaW55LCBXaGl0ZSwgSW1hZ2VcbntJbnRyb1RoZW1lVGlueX0gPSByZXF1aXJlIFwiSW50cm9UaGVtZVRpbnlcIlxue0ludHJvVGhlbWVXaGl0ZX0gPSByZXF1aXJlIFwiSW50cm9UaGVtZVdoaXRlXCJcbntJbnRyb1RoZW1lSW1hZ2V9ID0gcmVxdWlyZSBcIkludHJvVGhlbWVJbWFnZVwiXG5cbmNsYXNzIEludHJvIGV4dGVuZHMgRnJhbWVyLkJhc2VDbGFzc1xuXHRAVGhlbWUgPSBUaW55OiBuZXcgSW50cm9UaGVtZVRpbnksIFdoaXRlOiBuZXcgSW50cm9UaGVtZVdoaXRlLCBJbWFnZTogbmV3IEludHJvVGhlbWVJbWFnZVxuXHRcblx0IyBEZXZpY2UgLSBpUGhvbmUgNnMgR09MRFxuXHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImFwcGxlLWlwaG9uZS02cy1nb2xkXCJcblx0IyBCYWNrZ3JvdW5kKGEuay5hIENhbnZhcylcblx0RnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kLnByb3BzID0geDogQWxpZ24ubGVmdCwgeTogQWxpZ24uYm90dG9tLCBvcmlnaW5YOjAsIG9yaWdpblk6IDBcblx0XG5cdCMgQ29uc3RhbnRcblx0REVGSU5FRCA9IFxuXHRcdFNDQUxFOiAwLjY4OFxuXG5cdCMgVmFyaWFibGVcblx0X29yaWdpblNjYWxlID0gRnJhbWVyLkRldmljZS5oYW5kcy5zY2FsZVxuXHRfcmF0aW8gPSBfb3JpZ2luU2NhbGUgLyBERUZJTkVELlNDQUxFXG5cdFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMgPSB7fSkgLT5cblx0XHRAdGl0bGUgPSBvcHRpb25zLnRpdGxlXG5cdFx0QHN1YlRpdGxlID0gb3B0aW9ucy5zdWJUaXRsZVxuXHRcdEB0eXBlTm8gPSBvcHRpb25zLnR5cGVOb1xuXHRcdEB0eXBlTmFtZSA9IG9wdGlvbnMudHlwZU5hbWVcblx0XHRAZGV0YWlscyA9IG9wdGlvbnMuZGV0YWlsc1xuXHRcdEB0aGVtZSA9IG9wdGlvbnMudGhlbWVcblxuXHRcdEBjcmVhdGUoKVxuXG5cdEBkZWZpbmUgJ3RpdGxlJyxcblx0XHRnZXQ6IC0+IEBfdGl0bGVcblx0XHRzZXQ6ICh2YWx1ZSA9ICcnKSAtPiBAX3RpdGxlID0gdmFsdWVcblxuXHRAZGVmaW5lICdzdWJUaXRsZScsXG5cdFx0Z2V0OiAtPiBAX3N1YlRpdGxlXG5cdFx0c2V0OiAodmFsdWUgPSAnJykgLT4gQF9zdWJUaXRsZSA9IHZhbHVlXG5cblx0QGRlZmluZSAndHlwZU5vJyxcblx0XHRnZXQ6IC0+IHVubGVzcyBAX3R5cGVObyB0aGVuIEBfdHlwZU5vIGVsc2UgXCJUeXBlICN7QF90eXBlTm99Ljxici8+XCJcblx0XHRzZXQ6ICh2YWx1ZSA9ICcnKSAtPiBAX3R5cGVObyA9IHZhbHVlXG5cblx0QGRlZmluZSAndHlwZU5hbWUnLFxuXHRcdGdldDogLT4gQF90eXBlTmFtZVxuXHRcdHNldDogKHZhbHVlID0gJycpIC0+IEBfdHlwZU5hbWUgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2RldGFpbHMnLFxuXHRcdGdldDogLT4gXCI8c3Ryb25nPiN7QHR5cGVOb30je0B0eXBlTmFtZX08L3N0cm9uZz48YnIvPjxici8+I3tAX2RldGFpbHN9XCJcblx0XHRzZXQ6ICh2YWx1ZSA9IFtdKSAtPiAgQF9kZXRhaWxzID0gdW5sZXNzIHZhbHVlLmxlbmd0aCA+IDAgdGhlbiAnJyBlbHNlIHZhbHVlLnJlZHVjZSAoeCwgeSkgLT4geCArIFwiPGJyLz5cIiArIHlcblxuXHRAZGVmaW5lICd0aGVtZScsXG5cdFx0Z2V0OiAtPiBAX3RoZW1lXG5cdFx0c2V0OiAodmFsdWUgPSBJbnRyby5UaGVtZS5UaW55KSAtPiBAX3RoZW1lID0gdmFsdWVcblxuXHQjIOyDneyEsVxuXHRjcmVhdGU6IC0+XG5cdFx0IyBCYWNrZ3JvdW5kXG5cdFx0X2JhY2tncm91bmQgPSBuZXcgTGF5ZXIgbmFtZTogJ2JhY2tncm91bmQnXG5cdFx0XHQsIHg6IC0xMDAsIHk6IC0xMDBcblx0XHRcdCwgd2lkdGg6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZC53aWR0aCArIDIwMCwgaGVpZ2h0OiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmQuaGVpZ2h0ICsgMjAwXG5cdFx0XHQsIGJhY2tncm91bmRDb2xvcjogJydcblx0XHRcdCwgcGFyZW50OiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmRcblx0XHRfYmFja2dyb3VuZC5wcm9wcyA9IEBfdGhlbWUuYmFja2dyb3VuZFxuXG5cdFx0IyBEZXNjcmlwdGlvblxuXHRcdF9kZXNjcmlwdGlvbiA9IG5ldyBMYXllciBuYW1lOiBcImRlc2NyaXB0aW9uXCJcblx0XHRcdCwgeDogQWxpZ24uY2VudGVyKEBfdGhlbWUuZGVzY3JpcHRpb25YUG9zICogX3JhdGlvKSwgeTogQWxpZ24uY2VudGVyKEBfdGhlbWUuZGVzY3JpcHRpb25ZUG9zICogX3JhdGlvKVxuXHRcdFx0LCB3aWR0aDogMTAwMCwgaGVpZ2h0OiA1MDBcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOicnXG5cdFx0XHQsIHBhcmVudDogRnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kXG5cdFx0XHQsIHNjYWxlOiBfb3JpZ2luU2NhbGVcblx0XHRcdCwgb3BhY2l0eTogMFxuXHRcdCMgVGl0bGVcblx0XHRfdGl0bGUgPSBuZXcgTGF5ZXIgbmFtZTogXCJ0aXRsZVwiXG5cdFx0XHQsIHg6IEFsaWduLmNlbnRlciwgeTogQWxpZ24udG9wXG5cdFx0XHQsIHdpZHRoOiAyMDAwLCBoZWlnaHQ6IDIwMFxuXHRcdFx0LCBiYWNrZ3JvdW5kQ29sb3I6Jydcblx0XHRcdCwgcGFyZW50OiBfZGVzY3JpcHRpb25cblx0XHRcdCwgaHRtbDogQHRpdGxlXG5cdFx0X3RpdGxlLnByb3BzID0gQF90aGVtZS50aXRsZVxuXHRcdCMgU3VidGl0bGVcdFxuXHRcdF9zdWJUaXRsZSA9IG5ldyBMYXllciBuYW1lOiBcInN1YlRpdGxlXCJcblx0XHRcdCwgeDogQWxpZ24uY2VudGVyLCB5OiBBbGlnbi50b3AoMjAwKVxuXHRcdFx0LCB3aWR0aDogMjAwMCwgaGVpZ2h0OiA1MDBcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOicnXG5cdFx0XHQsIHBhcmVudDogX2Rlc2NyaXB0aW9uXG5cdFx0XHQsIGh0bWw6IEBzdWJUaXRsZVxuXHRcdF9zdWJUaXRsZS5wcm9wcyA9IEBfdGhlbWUuc3ViVGl0bGVcblx0XHQjIERlc2NyaXB0aW9uXG5cdFx0X2RldGFpbCA9IG5ldyBMYXllciBuYW1lOiBcImRldGFpbFwiXG5cdFx0XHQsIHg6IEFsaWduLmNlbnRlciwgeTogQWxpZ24udG9wKDQ4MClcblx0XHRcdCwgd2lkdGg6IDIwMDAsIGhlaWdodDogNTAwXG5cdFx0XHQsIGJhY2tncm91bmRDb2xvcjonJ1xuXHRcdFx0LCBwYXJlbnQ6IF9kZXNjcmlwdGlvblxuXHRcdFx0LCBodG1sOiBAZGV0YWlsc1xuXHRcdF9kZXRhaWwucHJvcHMgPSBAX3RoZW1lLmRldGFpbHNcblx0XHRcblx0XHQjIENvcHlyaWdodFxuXHRcdF9jb3B5cmlnaHQgPSBuZXcgTGF5ZXIgbmFtZTogXCJjb3B5cmlnaHRcIlxuXHRcdFx0LCB4OiBBbGlnbi5sZWZ0LCB5OiBBbGlnbi5ib3R0b21cblx0XHRcdCwgd2lkdGg6IDEwMDAsXHRoZWlnaHQ6IDEyMFxuXHRcdFx0IyAsIGltYWdlOiBcImltYWdlcy9peGQvaXhkLWNpLnBuZ1wiXG5cdFx0XHQsIHNjYWxlOiAwLjQgKiBfcmF0aW8sIG9yaWdpblg6IDAsIG9yaWdpblk6IDFcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOiAnJ1xuXHRcdFx0LCBwYXJlbnQ6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZFxuXHRcdFx0LCBvcGFjaXR5OiAwXG5cdFx0XHQsIGNvbG9yOiAncmdiYSgwLDAsMCwwLjYpJ1xuXHRcdFx0LCBodG1sOiAnQ29weXJpZ2h0IMKpIDIwMTYgVGhyZWV3b3JkJ1xuXHRcdFx0LCBzdHlsZTogeyBmb250OiBcIjQwMCA0MHB4LzEyMHB4ICN7VXRpbHMuZGV2aWNlRm9udCgpfVwiLCBsZXR0ZXJTcGFjaW5nOiBcIi0ycHhcIiwgcGFkZGluZ0xlZnQ6IFwiNDBweFwiIH1cblx0XHRcdCwgYnJpZ2h0bmVzczogMTAwLCBzYXR1cmF0ZTogMTAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgaHVlUm90YXRlOiAwLCBzZXBpYTogMFxuXHRcdF9jb3B5cmlnaHQucHJvcHMgPSBAX3RoZW1lLmNvcHlyaWdodFxuXG5cdFx0IyBGcmFtZXIgbG9nb1xuXHRcdF9sb2dvID0gbmV3IExheWVyIG5hbWU6IFwiZnJhbWVyX2NpXCJcblx0XHRcdCwgeDogQWxpZ24ucmlnaHQoLUBfdGhlbWUubG9nb01hcmdpbiksIHk6IEFsaWduLnRvcChAX3RoZW1lLmxvZ29NYXJnaW4pXG5cdFx0XHQsIHdpZHRoOiA3NiwgaGVpZ2h0OiA3NlxuXHRcdFx0LCBpbWFnZTogXCJpbWFnZXMvaW50cm8vZnJhbWVyLWNpLnBuZ1wiXG5cdFx0XHQsIHNjYWxlOiBfcmF0aW8sIG9yaWdpblg6IDEsIG9yaWdpblk6IDBcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOiAnJ1xuXHRcdFx0LCBwYXJlbnQ6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZFxuXHRcdFx0LCBvcGFjaXR5OiAwXG5cdFx0XHQsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxLjApJ1xuXHRcdFx0LCBicmlnaHRuZXNzOiAxMDAsIHNhdHVyYXRlOiAxMDAsIGNvbnRyYXN0OiAxMDAsIGludmVydDogMCwgZ3JheXNjYWxlOiAwLCBodWVSb3RhdGU6IDAsIHNlcGlhOiAwXG5cdFx0X2xvZ28ucHJvcHMgPSBAX3RoZW1lLmxvZ29cblxuXHRcdCMgRXZlbnQgTGlzdGVuZXIgOiBSZXNpemVcblx0XHRyZXNpemVMaXN0ZW5lciA9IChldmVudCkgPT5cblx0XHRcdGN1cnJlbnRTY2FsZSA9IEZyYW1lci5EZXZpY2UuaGFuZHMuc2NhbGVcblx0XHRcdF9yYXRpbyA9IGN1cnJlbnRTY2FsZSAvIERFRklORUQuU0NBTEVcblxuXHRcdFx0RnJhbWVyLkRldmljZS5oYW5kcy54ICs9IEBfdGhlbWUuZGV2aWNlWFBvcyAqIF9yYXRpb1xuXHRcdFx0RnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kLnByb3BzID0geDogMCwgeTogMCwgd2lkdGg6IENhbnZhcy53aWR0aCwgaGVpZ2h0OiBDYW52YXMuaGVpZ2h0LCBzY2FsZTogMVxuXG5cdFx0XHRfZGVzY3JpcHRpb24uYW5pbWF0ZSBwcm9wZXJ0aWVzOiB4OiBBbGlnbi5jZW50ZXIoQF90aGVtZS5kZXNjcmlwdGlvblhQb3MgKiBfcmF0aW8pLCB5OiBBbGlnbi5jZW50ZXIoQF90aGVtZS5kZXNjcmlwdGlvbllQb3MgKiBfcmF0aW8pLCBvcGFjaXR5OiAxLCBzY2FsZTogY3VycmVudFNjYWxlXG5cblx0XHRcdF9jb3B5cmlnaHQuYW5pbWF0ZSBwcm9wZXJ0aWVzOiB4OiBBbGlnbi5sZWZ0LCB5OiBBbGlnbi5ib3R0b20sIG9wYWNpdHk6IDEsIHNjYWxlOiAwLjQgKiBfcmF0aW9cblx0XHRcdF9sb2dvLmFuaW1hdGUgcHJvcGVydGllczogeDogQWxpZ24ucmlnaHQoLUBfdGhlbWUubG9nb01hcmdpbiksIHk6IEFsaWduLnRvcChAX3RoZW1lLmxvZ29NYXJnaW4pLCBvcGFjaXR5OiAxLCBzY2FsZTogX3JhdGlvXG5cdFx0XHRcblx0XHRcdF9iYWNrZ3JvdW5kLnByb3BzID0geDogLTEwMCwgeTogLTEwMCwgd2lkdGg6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZC53aWR0aCArIDIwMCwgaGVpZ2h0OiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmQuaGVpZ2h0ICsgMjAwXG5cblx0XHQjIEV2ZW50IDogUmVzaXplXG5cdFx0RXZlbnRzLndyYXAod2luZG93KS5hZGRFdmVudExpc3RlbmVyIFwicmVzaXplXCIsIHJlc2l6ZUxpc3RlbmVyXG5cblx0XHQjIFN0YXJ0XG5cdFx0cmVzaXplTGlzdGVuZXIoKVxuXG5leHBvcnRzLkludHJvID0gSW50cm8iXX0=
