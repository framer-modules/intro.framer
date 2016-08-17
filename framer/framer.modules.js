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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGhyZWV3b3JkL3RveS9wcm90b3R5cGUvZnJhbWVyanMvZ2l0aHViL2ludHJvLmZyYW1lci9tb2R1bGVzL0N1c3RvbVRoZW1lSW50cm8uY29mZmVlIiwiL1VzZXJzL3RocmVld29yZC90b3kvcHJvdG90eXBlL2ZyYW1lcmpzL2dpdGh1Yi9pbnRyby5mcmFtZXIvbW9kdWxlcy9JbnRyb1RoZW1lSW1hZ2UuY29mZmVlIiwiL1VzZXJzL3RocmVld29yZC90b3kvcHJvdG90eXBlL2ZyYW1lcmpzL2dpdGh1Yi9pbnRyby5mcmFtZXIvbW9kdWxlcy9JbnRyb1RoZW1lVGlueS5jb2ZmZWUiLCIvVXNlcnMvdGhyZWV3b3JkL3RveS9wcm90b3R5cGUvZnJhbWVyanMvZ2l0aHViL2ludHJvLmZyYW1lci9tb2R1bGVzL0ludHJvVGhlbWVXaGl0ZS5jb2ZmZWUiLCIvVXNlcnMvdGhyZWV3b3JkL3RveS9wcm90b3R5cGUvZnJhbWVyanMvZ2l0aHViL2ludHJvLmZyYW1lci9tb2R1bGVzL0ludHJvVGhlbWUuY29mZmVlIiwiL1VzZXJzL3RocmVld29yZC90b3kvcHJvdG90eXBlL2ZyYW1lcmpzL2dpdGh1Yi9pbnRyby5mcmFtZXIvbW9kdWxlcy9JbnRyby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7Ozs7Ozs7O0FBQUEsSUFBQSw0QkFBQTtFQUFBOzs7QUFTQyxhQUFjLE9BQUEsQ0FBUSxZQUFSLEVBQWQ7O0FBQ0s7QUFFTCxNQUFBOzs7O0VBQUEsUUFBQSxHQUFXOztFQUNYLEtBQUssQ0FBQyxTQUFOLENBQWdCLFFBQWhCOztFQUdhLDBCQUFBO0lBQ1osa0RBRUM7TUFBQSxJQUFBLEVBQU0sUUFBTjtNQUVBLEtBQUEsRUFDQztRQUFBLEtBQUEsRUFDQztVQUFBLEtBQUEsRUFBTyxNQUFQO1VBQ0UsSUFBQSxFQUFNLHdCQURSO1VBRUUsU0FBQSxFQUFXLFFB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LENBQUMsS0FBUixHQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIyMgXG5Qcm90b3R5cGUgaW50cm9kdWNlIG1vZHVsZSBmb3IgcHJlc2VudGF0aW9uIFRoZW1lXG4tIEN1c3RvbWl6ZSB0aGVtZSBzYW1wbGVcblxuQGF1dGhlciB0aHJlZXdvcmQgKGRldkB0aHJlZXdvcmQuY29tKVxuQHNpbmNlIDIwMTYuMDguMTdcbkB2ZXJzaW9uIDAuMVxuIyMjXG5cbntJbnRyb1RoZW1lfSA9IHJlcXVpcmUgXCJJbnRyb1RoZW1lXCJcbmNsYXNzIEN1c3RvbVRoZW1lSW50cm8gZXh0ZW5kcyBJbnRyb1RoZW1lXG5cdCMgQ1NTXG5cdF9jc3NGb250ID0gXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpOyBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmLCBzYW5zLXNlcmlmO1wiXG5cdFV0aWxzLmluc2VydENTUyhfY3NzRm9udClcblxuXHQjIENvbnN0cnVjdG9yXG5cdGNvbnN0cnVjdG9yOiAtPlxuXHRcdHN1cGVyIFxuXHRcdFx0IyBUaGVtZSBuYW1lXG5cdFx0XHRuYW1lOiAnY3VzdG9tJ1xuXHRcdFx0IyBQcm9qZWN0IHRpdGxlXG5cdFx0XHR0aXRsZTogXG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdGNvbG9yOiBcIiNGRkZcIlxuXHRcdFx0XHRcdCwgZm9udDogXCIxMDAgMTYwcHgvMTAwcHggUm9ib3RvXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjlcIlxuXHRcdFx0IyBQcm9qZWN0IHN1YnRpdGxlXG5cdFx0XHRzdWJUaXRsZTogXG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdGNvbG9yOiBcIiNGRkZcIlxuXHRcdFx0XHRcdCwgZm9udDogXCI1MDAgMTMwcHgvMTAwcHggUm9ib3RvXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjZcIiBcblx0XHRcdCMgUHJvamVjdCBkZXRhaWxcblx0XHRcdGRldGFpbHM6IFxuXHRcdFx0XHRzdHlsZTogXG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiXG5cdFx0XHRcdFx0LCBmb250OiBcIjIwMCA1MHB4LzgwcHggUm9ib3RvXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjhcIlxuXHRcdFx0IyBDb3B5cmlnaHRcblx0XHRcdGNvcHlyaWdodDogYnJpZ2h0bmVzczogMjAwLCBzYXR1cmF0ZTogMCwgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjYpXCJcblx0XHRcdCMgRnJhbWVyIGxvZ29cblx0XHRcdGxvZ286IGJyaWdodG5lc3M6IDIwMCwgc2F0dXJhdGU6IDBcblx0XHRcdCMgQmFja2dyb3VuZCA6OiBpbWFnZVxuXHRcdFx0YmFja2dyb3VuZDogaW1hZ2U6IFV0aWxzLnJhbmRvbUltYWdlKEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZCksIGJsdXI6IDMsIG9wYWNpdHk6IDAuMlxuXG5cdFx0IyBcblx0XHQjIEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZC5wcm9wcyA9IGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblx0XG5leHBvcnRzLkN1c3RvbVRoZW1lSW50cm8gPSBDdXN0b21UaGVtZUludHJvIiwiIyMjIFxuUHJvdG90eXBlIGludHJvZHVjZSBtb2R1bGUgZm9yIHByZXNlbnRhdGlvbiBUaGVtZVxuLSBJbWFnZVxuXG5AYXV0aGVyIHRocmVld29yZCAoZGV2QHRocmVld29yZC5jb20pXG5Ac2luY2UgMjAxNi4wNy4wN1xuQHZlcnNpb24gMC4yXG4jIyNcblxue0ludHJvVGhlbWV9ID0gcmVxdWlyZSBcIkludHJvVGhlbWVcIlxuY2xhc3MgSW50cm9UaGVtZUltYWdlIGV4dGVuZHMgSW50cm9UaGVtZVxuXHQjIENTU1xuXHRfY3NzRm9udCA9IFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za3IuY3NzKTsgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzZXJpZiwgc2Fucy1zZXJpZjtcIlxuXHRVdGlscy5pbnNlcnRDU1MoX2Nzc0ZvbnQpXG5cblx0IyBDb25zdHJ1Y3RvclxuXHRjb25zdHJ1Y3RvcjogLT5cblx0XHRzdXBlciBcblx0XHRcdCMgUHJvamVjdCBuYW1lXG5cdFx0XHRuYW1lOiAnaW1hZ2UnXG5cdFx0XHQjIFByb2plY3QgdGl0bGVcblx0XHRcdHRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiXG5cdFx0XHRcdFx0LCBmb250OiBcIjEwMCAxNjBweC8xMDBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuN1wiXG5cdFx0XHQjIFByb2plY3Qgc3VidGl0bGVcblx0XHRcdHN1YlRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiXG5cdFx0XHRcdFx0LCBmb250OiBcIjUwMCAxMzBweC8xMDBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuNlwiIFxuXHRcdFx0IyBQcm9qZWN0IGRldGFpbFxuXHRcdFx0ZGV0YWlsczogXG5cdFx0XHRcdHN0eWxlOiBcblx0XHRcdFx0XHRjb2xvcjogXCIjRkZGXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiMjAwIDUwcHgvODBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuOFwiXG5cdFx0XHQjIENvcHlyaWdodFxuXHRcdFx0Y29weXJpZ2h0OiBicmlnaHRuZXNzOiAyMDAsIHNhdHVyYXRlOiAwLCBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNilcIlxuXHRcdFx0IyBGcmFtZXIgbG9nb1xuXHRcdFx0bG9nbzogYnJpZ2h0bmVzczogMjAwLCBzYXR1cmF0ZTogMFxuXHRcdFx0IyBCYWNrZ291bmQgSW1hZ2Vcblx0XHRcdGJhY2tncm91bmQ6IGltYWdlOiBcImltYWdlcy9pbnRyby90aGVtZS9pbWFnZS9iZy5qcGdcIiwgYmx1cjogMjAsIG9wYWNpdHk6IDAuN1xuXG5cdFx0IyBcblx0XHRGcmFtZXIuRGV2aWNlLmJhY2tncm91bmQucHJvcHMgPSBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwxKVwiXG5cbmV4cG9ydHMuSW50cm9UaGVtZUltYWdlID0gSW50cm9UaGVtZUltYWdlIiwiIyMjIFxu7IaM6rCcIO2FjOuniCAtIFRpbnlcbkBhdXRoZXIgaG8uc1xuQHNpbmNlIDIwMTYuMDcuMTJcbkB2ZXJzaW9uIDAuMVxuIyMjXG5cbntJbnRyb1RoZW1lfSA9IHJlcXVpcmUgXCJJbnRyb1RoZW1lXCJcbmNsYXNzIEludHJvVGhlbWVUaW55IGV4dGVuZHMgSW50cm9UaGVtZVxuXHQjIENTU1xuXHRfY3NzRm9udCA9IFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za3IuY3NzKTsgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzZXJpZiwgc2Fucy1zZXJpZjtcIlxuXHRVdGlscy5pbnNlcnRDU1MoX2Nzc0ZvbnQpXG5cblx0IyDsg53shLHsnpBcblx0Y29uc3RydWN0b3I6IC0+XG5cdFx0c3VwZXIgXG5cdFx0XHQjIOydtOumhFxuXHRcdFx0bmFtZTogJ3RpbnknXG5cdFx0XHQjIOyepey5mOydmCDspJHsi6zsnLzroZwg67aA7YSwIHjsnITsuZhcblx0XHRcdGRldmljZVhQb3M6IDQwMFxuXHRcdFx0IyDshKTrqoXsnZgg7KSR7Ius7Jy866GcIOu2gO2EsCDsnITsuZggXG5cdFx0XHRkZXNjcmlwdGlvblhQb3M6IC01NTAsIGRlc2NyaXB0aW9uWVBvczogLTgwXG5cdFx0XHQjIO2UhOuhnOygne2KuCDsoJzrqqlcblx0XHRcdHRpdGxlOiBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiXG5cdFx0XHRcdFx0LCBmb250OiBcIjEwMCAxMDBweC8xMDBweCBOb3RvIFNhbnMgS1JcIlxuXHRcdFx0XHRcdCwgdGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0LCBvcGFjaXR5OiBcIjAuN1wiXG5cdFx0XHQjIO2UhOuhnOygne2KuCDshLjrtoAg7KCc66qpXG5cdFx0XHRzdWJUaXRsZTogXG5cdFx0XHRcdHk6IEFsaWduLnRvcCgxNDApXG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdGNvbG9yOiBcIiMzMzNcIlxuXHRcdFx0XHRcdCwgZm9udDogXCI1MDAgNzBweC84MHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC42XCIgXG5cdFx0XHQjIOyDgeyEuCDsoJXrs7Rcblx0XHRcdGRldGFpbHM6IFxuXHRcdFx0XHR5OiBBbGlnbi50b3AoMzAwKVxuXHRcdFx0XHRzdHlsZTogXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiXG5cdFx0XHRcdFx0LCBmb250OiBcIjIwMCAzNXB4LzgwcHggTm90byBTYW5zIEtSXCJcblx0XHRcdFx0XHQsIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdCwgb3BhY2l0eTogXCIwLjhcIlxuXHRcdFx0IyDrqZTsnbTsu6QgQ0lcblx0XHRcdGNvcHlyaWdodDogYnJpZ2h0bmVzczogMTAwLCBzYXR1cmF0ZTogMTAwLCBodWVSb3RhdGU6IDAsIGNvbnRyYXN0OiAxMDAsIGludmVydDogMCwgZ3JheXNjYWxlOiAwLCBzZXBpYTogMFxuXHRcdFx0IyDtlITroIjsnbTrqLgg66Gc6rOgXG5cdFx0XHRsb2dvOiBicmlnaHRuZXNzOiAxMDAsIHNhdHVyYXRlOiAxMDAsIGh1ZVJvdGF0ZTogMCwgY29udHJhc3Q6IDEwMCwgaW52ZXJ0OiAwLCBncmF5c2NhbGU6IDAsIHNlcGlhOiAwXG5cdFx0XHQjIOuwsOqyvVxuXHRcdFx0YmFja2dyb3VuZDogeyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfVxuXHRcbmV4cG9ydHMuSW50cm9UaGVtZVRpbnkgPSBJbnRyb1RoZW1lVGlueSIsIiMjIyBcblByb3RvdHlwZSBpbnRyb2R1Y2UgbW9kdWxlIGZvciBwcmVzZW50YXRpb24gVGhlbWVcbi0gV2hpdGVcblxuQGF1dGhlciB0aHJlZXdvcmQgKGRldkB0aHJlZXdvcmQuY29tKVxuQHNpbmNlIDIwMTYuMDcuMDdcbkB2ZXJzaW9uIDAuMlxuIyMjXG5cbntJbnRyb1RoZW1lfSA9IHJlcXVpcmUgXCJJbnRyb1RoZW1lXCJcbmNsYXNzIEludHJvVGhlbWVXaGl0ZSBleHRlbmRzIEludHJvVGhlbWVcblx0IyBDU1Ncblx0X2Nzc0ZvbnQgPSBcIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9ub3Rvc2Fuc2tyLmNzcyk7IGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2VyaWYsIHNhbnMtc2VyaWY7XCJcblx0VXRpbHMuaW5zZXJ0Q1NTKF9jc3NGb250KVxuXG5cdCMgQ29uc3RydWN0b3Jcblx0Y29uc3RydWN0b3I6IC0+XG5cdFx0c3VwZXIgXG5cdFx0XHQjIFRoZW1lIG5hbWVcblx0XHRcdG5hbWU6ICd3aGl0ZSdcblx0XHRcdCMgUHJvamVjdCB0aXRsZVxuXHRcdFx0dGl0bGU6IFxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRjb2xvcjogXCIjMzMzXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiMTAwIDE2MHB4LzEwMHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC43XCJcblx0XHRcdCMgUHJvamVjdCBzdWJ0aXRsZVxuXHRcdFx0c3ViVGl0bGU6IFxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRjb2xvcjogXCIjMzMzXCJcblx0XHRcdFx0XHQsIGZvbnQ6IFwiNTAwIDEzMHB4LzEwMHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC42XCIgXG5cdFx0XHQjIFByb2plY3QgZGV0YWlsXG5cdFx0XHRkZXRhaWxzOiBcblx0XHRcdFx0c3R5bGU6IFxuXHRcdFx0XHRcdGNvbG9yOiBcIiMzMzNcIlxuXHRcdFx0XHRcdCwgZm9udDogXCIyMDAgNTBweC84MHB4IE5vdG8gU2FucyBLUlwiXG5cdFx0XHRcdFx0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0XHQsIG9wYWNpdHk6IFwiMC44XCJcblx0XHRcdCMgQ29weXJpZ2h0XG5cdFx0XHRjb3B5cmlnaHQ6IGJyaWdodG5lc3M6IDEwMCwgc2F0dXJhdGU6IDEwMCwgaHVlUm90YXRlOiAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgc2VwaWE6IDBcblx0XHRcdCMgRnJhbWVyIGxvZ29cblx0XHRcdGxvZ286IGJyaWdodG5lc3M6IDEwMCwgc2F0dXJhdGU6IDEwMCwgaHVlUm90YXRlOiAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgc2VwaWE6IDBcblx0XHRcdCMgQmFja2dyb3VuZCA6OiBjb2xvclxuXHRcdFx0YmFja2dyb3VuZDogeyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfVxuXHRcbmV4cG9ydHMuSW50cm9UaGVtZVdoaXRlID0gSW50cm9UaGVtZVdoaXRlIiwiIyMjIFxuUHJvdG90eXBlIGludHJvZHVjZSBtb2R1bGUgZm9yIHByZXNlbnRhdGlvbiBUaGVtZVxuXG5AYXV0aGVyIHRocmVld29yZCAoZGV2QHRocmVld29yZC5jb20pXG5Ac2luY2UgMjAxNi4wNy4wN1xuQHZlcnNpb24gMC4yXG4jIyNcblxuY2xhc3MgSW50cm9UaGVtZSBleHRlbmRzIEZyYW1lci5CYXNlQ2xhc3Ncblx0IyBDb25zdGFudFxuXHRERUZJTkVEID0gXG5cdFx0REVGQVVMVDogXG5cdFx0XHRERVZJQ0VfWF9QT1M6IDUwMCwgXG5cdFx0XHRERVNDUklQVElPTl9YX1BPUzogLTUwMCwgREVTQ1JJUFRJT05fWV9QT1M6IC0xNTAsXG5cdFx0XHRMT0dPX01BUkdJTjogMTBcblxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMgPSB7fSkgLT5cblx0XHRAZGV2aWNlWFBvcyA9IG9wdGlvbnMuZGV2aWNlWFBvc1xuXHRcdEBkZXNjcmlwdGlvblhQb3MgPSBvcHRpb25zLmRlc2NyaXB0aW9uWFBvc1xuXHRcdEBkZXNjcmlwdGlvbllQb3MgPSBvcHRpb25zLmRlc2NyaXB0aW9uWVBvc1xuXHRcdEBsb2dvTWFyZ2luID0gb3B0aW9ucy5sb2dvTWFyZ2luXG5cblx0XHRAbmFtZSA9IG9wdGlvbnMubmFtZVxuXHRcdEB0aXRsZSA9IG9wdGlvbnMudGl0bGVcblx0XHRAc3ViVGl0bGUgPSBvcHRpb25zLnN1YlRpdGxlXG5cdFx0QGRldGFpbHMgPSBvcHRpb25zLmRldGFpbHNcblx0XHRAY29weXJpZ2h0ID0gb3B0aW9ucy5jb3B5cmlnaHRcblx0XHRAbG9nbyA9IG9wdGlvbnMubG9nb1xuXHRcdEBiYWNrZ3JvdW5kID0gb3B0aW9ucy5iYWNrZ3JvdW5kXG5cblx0QGRlZmluZSAnZGV2aWNlWFBvcycsXG5cdFx0Z2V0OiAtPiBAX2RldmljZVhQb3Ncblx0XHRzZXQ6ICh2YWx1ZSA9IERFRklORUQuREVGQVVMVC5ERVZJQ0VfWF9QT1MpIC0+IEBfZGV2aWNlWFBvcyA9IHZhbHVlXG5cblx0QGRlZmluZSAnZGVzY3JpcHRpb25YUG9zJyxcblx0XHRnZXQ6IC0+IEBfZGVzY3JpcHRpb25YUG9zXG5cdFx0c2V0OiAodmFsdWUgPSBERUZJTkVELkRFRkFVTFQuREVTQ1JJUFRJT05fWF9QT1MpIC0+IEBfZGVzY3JpcHRpb25YUG9zID0gdmFsdWVcblxuXHRAZGVmaW5lICdkZXNjcmlwdGlvbllQb3MnLFxuXHRcdGdldDogLT4gQF9kZXNjcmlwdGlvbllQb3Ncblx0XHRzZXQ6ICh2YWx1ZSA9IERFRklORUQuREVGQVVMVC5ERVNDUklQVElPTl9ZX1BPUykgLT4gQF9kZXNjcmlwdGlvbllQb3MgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2xvZ29NYXJnaW4nLFxuXHRcdGdldDogLT4gQF9sb2dvTWFyZ2luXG5cdFx0c2V0OiAodmFsdWUgPSBERUZJTkVELkRFRkFVTFQuTE9HT19NQVJHSU4pIC0+IEBfbG9nb01hcmdpbiA9IHZhbHVlXG5cdFxuXHRAZGVmaW5lICduYW1lJyxcblx0XHRnZXQ6IC0+IEBfbmFtZVxuXHRcdHNldDogKHZhbHVlID0gXCJcIikgLT4gQF9uYW1lID0gdmFsdWVcblxuXHRAZGVmaW5lICd0aXRsZScsXG5cdFx0Z2V0OiAtPiBAX3RpdGxlXG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gQF90aXRsZSA9IHZhbHVlXG5cblx0QGRlZmluZSAnc3ViVGl0bGUnLFxuXHRcdGdldDogLT4gQF9zdWJUaXRsZVxuXHRcdHNldDogKHZhbHVlID0ge30pIC0+IEBfc3ViVGl0bGUgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2RldGFpbHMnLFxuXHRcdGdldDogLT4gQF9kZXRhaWxzXG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gIEBfZGV0YWlscyA9IHZhbHVlXG5cblx0QGRlZmluZSAnY29weXJpZ2h0Jyxcblx0XHRnZXQ6IC0+IEBfY29weXJpZ2h0XG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gIEBfY29weXJpZ2h0ID0gdmFsdWVcblxuXHRAZGVmaW5lICdsb2dvJyxcblx0XHRnZXQ6IC0+IEBfbG9nb1xuXHRcdHNldDogKHZhbHVlID0ge30pIC0+ICBAX2xvZ28gPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2JhY2tncm91bmQnLFxuXHRcdGdldDogLT4gQF9iYWNrZ3JvdW5kXG5cdFx0c2V0OiAodmFsdWUgPSB7fSkgLT4gIEBfYmFja2dyb3VuZCA9IHZhbHVlXG5cbmV4cG9ydHMuSW50cm9UaGVtZSA9IEludHJvVGhlbWUiLCIjIyMgXG5Qcm90b3R5cGUgaW50cm9kdWNlIG1vZHVsZSBmb3IgcHJlc2VudGF0aW9uIFxuXG4jIEZlYXR1cmVcbkZ1bGxzY3JlZW4gU3VwcG9ydGVkLlxuUmVzcG9uc2l2ZSBEZXNpZ25cbk1vcmUgY3VzdG9tIHRoZW1lc1xuXG4jIFRoZW1lXG5EZWZhdWx0IHRpbnksIHdoaXRlLCBpbWFnZSB0aGVtZSBzdXBwb3J0ZWQuXG5BdmFpbGFibGUgYWRkIGN1c3RvbSB0aGVtZVxuXG5AYXV0aGVyIHRocmVld29yZCAoZGV2QHRocmVld29yZC5jb20pXG5Ac2luY2UgMjAxNi4wNy4wN1xuQHZlcnNpb24gMC4yXG4jIyNcblxuIyBUaGVtZVxuIyAtIERlZmF1bHQgOiBUaW55LCBXaGl0ZSwgSW1hZ2VcbntJbnRyb1RoZW1lVGlueX0gPSByZXF1aXJlIFwiSW50cm9UaGVtZVRpbnlcIlxue0ludHJvVGhlbWVXaGl0ZX0gPSByZXF1aXJlIFwiSW50cm9UaGVtZVdoaXRlXCJcbntJbnRyb1RoZW1lSW1hZ2V9ID0gcmVxdWlyZSBcIkludHJvVGhlbWVJbWFnZVwiXG5cbmNsYXNzIEludHJvIGV4dGVuZHMgRnJhbWVyLkJhc2VDbGFzc1xuXHRAVGhlbWUgPSBUaW55OiBuZXcgSW50cm9UaGVtZVRpbnksIFdoaXRlOiBuZXcgSW50cm9UaGVtZVdoaXRlLCBJbWFnZTogbmV3IEludHJvVGhlbWVJbWFnZVxuXHRcblx0IyBEZXZpY2UgLSBpUGhvbmUgNnMgR09MRFxuXHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImFwcGxlLWlwaG9uZS02cy1nb2xkXCJcblx0IyBCYWNrZ3JvdW5kKGEuay5hIENhbnZhcylcblx0RnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kLnByb3BzID0geDogQWxpZ24ubGVmdCwgeTogQWxpZ24uYm90dG9tLCBvcmlnaW5YOjAsIG9yaWdpblk6IDBcblx0XG5cdCMgQ29uc3RhbnRcblx0REVGSU5FRCA9IFxuXHRcdFNDQUxFOiAwLjY4OFxuXG5cdCMgVmFyaWFibGVcblx0X29yaWdpblNjYWxlID0gRnJhbWVyLkRldmljZS5oYW5kcy5zY2FsZVxuXHRfcmF0aW8gPSBfb3JpZ2luU2NhbGUgLyBERUZJTkVELlNDQUxFXG5cdFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMgPSB7fSkgLT5cblx0XHRAdGl0bGUgPSBvcHRpb25zLnRpdGxlXG5cdFx0QHN1YlRpdGxlID0gb3B0aW9ucy5zdWJUaXRsZVxuXHRcdEB0eXBlTm8gPSBvcHRpb25zLnR5cGVOb1xuXHRcdEB0eXBlTmFtZSA9IG9wdGlvbnMudHlwZU5hbWVcblx0XHRAZGV0YWlscyA9IG9wdGlvbnMuZGV0YWlsc1xuXHRcdEB0aGVtZSA9IG9wdGlvbnMudGhlbWVcblxuXHRcdEBjcmVhdGUoKVxuXG5cdEBkZWZpbmUgJ3RpdGxlJyxcblx0XHRnZXQ6IC0+IEBfdGl0bGVcblx0XHRzZXQ6ICh2YWx1ZSA9ICcnKSAtPiBAX3RpdGxlID0gdmFsdWVcblxuXHRAZGVmaW5lICdzdWJUaXRsZScsXG5cdFx0Z2V0OiAtPiBAX3N1YlRpdGxlXG5cdFx0c2V0OiAodmFsdWUgPSAnJykgLT4gQF9zdWJUaXRsZSA9IHZhbHVlXG5cblx0QGRlZmluZSAndHlwZU5vJyxcblx0XHRnZXQ6IC0+IHVubGVzcyBAX3R5cGVObyB0aGVuIEBfdHlwZU5vIGVsc2UgXCJUeXBlICN7QF90eXBlTm99Ljxici8+XCJcblx0XHRzZXQ6ICh2YWx1ZSA9ICcnKSAtPiBAX3R5cGVObyA9IHZhbHVlXG5cblx0QGRlZmluZSAndHlwZU5hbWUnLFxuXHRcdGdldDogLT4gQF90eXBlTmFtZVxuXHRcdHNldDogKHZhbHVlID0gJycpIC0+IEBfdHlwZU5hbWUgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2RldGFpbHMnLFxuXHRcdGdldDogLT4gXCI8c3Ryb25nPiN7QHR5cGVOb30je0B0eXBlTmFtZX08L3N0cm9uZz48YnIvPjxici8+I3tAX2RldGFpbHN9XCJcblx0XHRzZXQ6ICh2YWx1ZSA9IFtdKSAtPiAgQF9kZXRhaWxzID0gdW5sZXNzIHZhbHVlLmxlbmd0aCA+IDAgdGhlbiAnJyBlbHNlIHZhbHVlLnJlZHVjZSAoeCwgeSkgLT4geCArIFwiPGJyLz5cIiArIHlcblxuXHRAZGVmaW5lICd0aGVtZScsXG5cdFx0Z2V0OiAtPiBAX3RoZW1lXG5cdFx0c2V0OiAodmFsdWUgPSBJbnRyby5UaGVtZS5UaW55KSAtPiBAX3RoZW1lID0gdmFsdWVcblxuXHQjIOyDneyEsVxuXHRjcmVhdGU6IC0+XG5cdFx0IyBCYWNrZ3JvdW5kXG5cdFx0X2JhY2tncm91bmQgPSBuZXcgTGF5ZXIgbmFtZTogJ2JhY2tncm91bmQnXG5cdFx0XHQsIHg6IC0xMDAsIHk6IC0xMDBcblx0XHRcdCwgd2lkdGg6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZC53aWR0aCArIDIwMCwgaGVpZ2h0OiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmQuaGVpZ2h0ICsgMjAwXG5cdFx0XHQsIGJhY2tncm91bmRDb2xvcjogJydcblx0XHRcdCwgcGFyZW50OiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmRcblx0XHRfYmFja2dyb3VuZC5wcm9wcyA9IEBfdGhlbWUuYmFja2dyb3VuZFxuXG5cdFx0IyBEZXNjcmlwdGlvblxuXHRcdF9kZXNjcmlwdGlvbiA9IG5ldyBMYXllciBuYW1lOiBcImRlc2NyaXB0aW9uXCJcblx0XHRcdCwgeDogQWxpZ24uY2VudGVyKEBfdGhlbWUuZGVzY3JpcHRpb25YUG9zICogX3JhdGlvKSwgeTogQWxpZ24uY2VudGVyKEBfdGhlbWUuZGVzY3JpcHRpb25ZUG9zICogX3JhdGlvKVxuXHRcdFx0LCB3aWR0aDogMTAwMCwgaGVpZ2h0OiA1MDBcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOicnXG5cdFx0XHQsIHBhcmVudDogRnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kXG5cdFx0XHQsIHNjYWxlOiBfb3JpZ2luU2NhbGVcblx0XHRcdCwgb3BhY2l0eTogMFxuXHRcdCMgVGl0bGVcblx0XHRfdGl0bGUgPSBuZXcgTGF5ZXIgbmFtZTogXCJ0aXRsZVwiXG5cdFx0XHQsIHg6IEFsaWduLmNlbnRlciwgeTogQWxpZ24udG9wXG5cdFx0XHQsIHdpZHRoOiAyMDAwLCBoZWlnaHQ6IDIwMFxuXHRcdFx0LCBiYWNrZ3JvdW5kQ29sb3I6Jydcblx0XHRcdCwgcGFyZW50OiBfZGVzY3JpcHRpb25cblx0XHRcdCwgaHRtbDogQHRpdGxlXG5cdFx0X3RpdGxlLnByb3BzID0gQF90aGVtZS50aXRsZVxuXHRcdCMgU3VidGl0bGVcdFxuXHRcdF9zdWJUaXRsZSA9IG5ldyBMYXllciBuYW1lOiBcInN1YlRpdGxlXCJcblx0XHRcdCwgeDogQWxpZ24uY2VudGVyLCB5OiBBbGlnbi50b3AoMjAwKVxuXHRcdFx0LCB3aWR0aDogMjAwMCwgaGVpZ2h0OiA1MDBcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOicnXG5cdFx0XHQsIHBhcmVudDogX2Rlc2NyaXB0aW9uXG5cdFx0XHQsIGh0bWw6IEBzdWJUaXRsZVxuXHRcdF9zdWJUaXRsZS5wcm9wcyA9IEBfdGhlbWUuc3ViVGl0bGVcblx0XHQjIERlc2NyaXB0aW9uXG5cdFx0X2RldGFpbCA9IG5ldyBMYXllciBuYW1lOiBcImRldGFpbFwiXG5cdFx0XHQsIHg6IEFsaWduLmNlbnRlciwgeTogQWxpZ24udG9wKDQ4MClcblx0XHRcdCwgd2lkdGg6IDIwMDAsIGhlaWdodDogNTAwXG5cdFx0XHQsIGJhY2tncm91bmRDb2xvcjonJ1xuXHRcdFx0LCBwYXJlbnQ6IF9kZXNjcmlwdGlvblxuXHRcdFx0LCBodG1sOiBAZGV0YWlsc1xuXHRcdF9kZXRhaWwucHJvcHMgPSBAX3RoZW1lLmRldGFpbHNcblx0XHRcblx0XHQjIENvcHlyaWdodFxuXHRcdF9jb3B5cmlnaHQgPSBuZXcgTGF5ZXIgbmFtZTogXCJjb3B5cmlnaHRcIlxuXHRcdFx0LCB4OiBBbGlnbi5sZWZ0LCB5OiBBbGlnbi5ib3R0b21cblx0XHRcdCwgd2lkdGg6IDEwMDAsXHRoZWlnaHQ6IDEyMFxuXHRcdFx0IyAsIGltYWdlOiBcImltYWdlcy9peGQvaXhkLWNpLnBuZ1wiXG5cdFx0XHQsIHNjYWxlOiAwLjQgKiBfcmF0aW8sIG9yaWdpblg6IDAsIG9yaWdpblk6IDFcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOiAnJ1xuXHRcdFx0LCBwYXJlbnQ6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZFxuXHRcdFx0LCBvcGFjaXR5OiAwXG5cdFx0XHQsIGNvbG9yOiAncmdiYSgwLDAsMCwwLjYpJ1xuXHRcdFx0LCBodG1sOiAnQ29weXJpZ2h0IMKpIDIwMTYgVGhyZWV3b3JkJ1xuXHRcdFx0LCBzdHlsZTogeyBmb250OiBcIjQwMCA0MHB4LzEyMHB4ICN7VXRpbHMuZGV2aWNlRm9udCgpfVwiLCBsZXR0ZXJTcGFjaW5nOiBcIi0ycHhcIiwgcGFkZGluZ0xlZnQ6IFwiNDBweFwiIH1cblx0XHRcdCwgYnJpZ2h0bmVzczogMTAwLCBzYXR1cmF0ZTogMTAwLCBjb250cmFzdDogMTAwLCBpbnZlcnQ6IDAsIGdyYXlzY2FsZTogMCwgaHVlUm90YXRlOiAwLCBzZXBpYTogMFxuXHRcdF9jb3B5cmlnaHQucHJvcHMgPSBAX3RoZW1lLmNvcHlyaWdodFxuXG5cdFx0IyBGcmFtZXIgbG9nb1xuXHRcdF9sb2dvID0gbmV3IExheWVyIG5hbWU6IFwiZnJhbWVyX2NpXCJcblx0XHRcdCwgeDogQWxpZ24ucmlnaHQoLUBfdGhlbWUubG9nb01hcmdpbiksIHk6IEFsaWduLnRvcChAX3RoZW1lLmxvZ29NYXJnaW4pXG5cdFx0XHQsIHdpZHRoOiA3NiwgaGVpZ2h0OiA3NlxuXHRcdFx0LCBpbWFnZTogXCJpbWFnZXMvaW50cm8vZnJhbWVyLWNpLnBuZ1wiXG5cdFx0XHQsIHNjYWxlOiBfcmF0aW8sIG9yaWdpblg6IDEsIG9yaWdpblk6IDBcblx0XHRcdCwgYmFja2dyb3VuZENvbG9yOiAnJ1xuXHRcdFx0LCBwYXJlbnQ6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZFxuXHRcdFx0LCBvcGFjaXR5OiAwXG5cdFx0XHQsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxLjApJ1xuXHRcdFx0LCBicmlnaHRuZXNzOiAxMDAsIHNhdHVyYXRlOiAxMDAsIGNvbnRyYXN0OiAxMDAsIGludmVydDogMCwgZ3JheXNjYWxlOiAwLCBodWVSb3RhdGU6IDAsIHNlcGlhOiAwXG5cdFx0X2xvZ28ucHJvcHMgPSBAX3RoZW1lLmxvZ29cblxuXHRcdCMgRXZlbnQgTGlzdGVuZXIgOiBSZXNpemVcblx0XHRyZXNpemVMaXN0ZW5lciA9IChldmVudCkgPT5cblx0XHRcdGN1cnJlbnRTY2FsZSA9IEZyYW1lci5EZXZpY2UuaGFuZHMuc2NhbGVcblx0XHRcdF9yYXRpbyA9IGN1cnJlbnRTY2FsZSAvIERFRklORUQuU0NBTEVcblxuXHRcdFx0RnJhbWVyLkRldmljZS5oYW5kcy54ICs9IEBfdGhlbWUuZGV2aWNlWFBvcyAqIF9yYXRpb1xuXHRcdFx0RnJhbWVyLkRldmljZS5iYWNrZ3JvdW5kLnByb3BzID0geDogMCwgeTogMCwgd2lkdGg6IENhbnZhcy53aWR0aCwgaGVpZ2h0OiBDYW52YXMuaGVpZ2h0LCBzY2FsZTogMVxuXG5cdFx0XHRfZGVzY3JpcHRpb24uYW5pbWF0ZSBwcm9wZXJ0aWVzOiB4OiBBbGlnbi5jZW50ZXIoQF90aGVtZS5kZXNjcmlwdGlvblhQb3MgKiBfcmF0aW8pLCB5OiBBbGlnbi5jZW50ZXIoQF90aGVtZS5kZXNjcmlwdGlvbllQb3MgKiBfcmF0aW8pLCBvcGFjaXR5OiAxLCBzY2FsZTogY3VycmVudFNjYWxlXG5cblx0XHRcdF9jb3B5cmlnaHQuYW5pbWF0ZSBwcm9wZXJ0aWVzOiB4OiBBbGlnbi5sZWZ0LCB5OiBBbGlnbi5ib3R0b20sIG9wYWNpdHk6IDEsIHNjYWxlOiAwLjQgKiBfcmF0aW9cblx0XHRcdF9sb2dvLmFuaW1hdGUgcHJvcGVydGllczogeDogQWxpZ24ucmlnaHQoLUBfdGhlbWUubG9nb01hcmdpbiksIHk6IEFsaWduLnRvcChAX3RoZW1lLmxvZ29NYXJnaW4pLCBvcGFjaXR5OiAxLCBzY2FsZTogX3JhdGlvXG5cdFx0XHRcblx0XHRcdF9iYWNrZ3JvdW5kLnByb3BzID0geDogLTEwMCwgeTogLTEwMCwgd2lkdGg6IEZyYW1lci5EZXZpY2UuYmFja2dyb3VuZC53aWR0aCArIDIwMCwgaGVpZ2h0OiBGcmFtZXIuRGV2aWNlLmJhY2tncm91bmQuaGVpZ2h0ICsgMjAwXG5cblx0XHQjIEV2ZW50IDogUmVzaXplXG5cdFx0RXZlbnRzLndyYXAod2luZG93KS5hZGRFdmVudExpc3RlbmVyIFwicmVzaXplXCIsIHJlc2l6ZUxpc3RlbmVyXG5cblx0XHQjIFN0YXJ0XG5cdFx0cmVzaXplTGlzdGVuZXIoKVxuXG5leHBvcnRzLkludHJvID0gSW50cm8iXX0=
