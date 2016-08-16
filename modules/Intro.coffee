### 
Prototype introduce module for presentation 

# Feature
Fullscreen Supported.
Responsive Design
More custom themes

# Theme
Default tiny, white, image theme supported.
Available add custom theme

@auther threeword (dev@threeword.com)
@since 2016.07.07
@version 0.2
###

# Theme
# - Default : Tiny, White, Image
{IntroThemeTiny} = require "IntroThemeTiny"
{IntroThemeWhite} = require "IntroThemeWhite"
{IntroThemeImage} = require "IntroThemeImage"

class Intro extends Framer.BaseClass
	@Theme = Tiny: new IntroThemeTiny, White: new IntroThemeWhite, Image: new IntroThemeImage
	
	# Device - iPhone 6s GOLD
	Framer.Device.deviceType = "apple-iphone-6s-gold"
	# Background(a.k.a Canvas)
	Framer.Device.background.props = x: Align.left, y: Align.bottom, originX:0, originY: 0
	
	# Constant
	DEFINED = 
		SCALE: 0.688

	# Variable
	_originScale = Framer.Device.hands.scale
	_ratio = _originScale / DEFINED.SCALE
	
	constructor: (options = {}) ->
		@title = options.title
		@subTitle = options.subTitle
		@typeNo = options.typeNo
		@typeName = options.typeName
		@details = options.details
		@theme = options.theme

		@create()

	@define 'title',
		get: -> @_title
		set: (value = '') -> @_title = value

	@define 'subTitle',
		get: -> @_subTitle
		set: (value = '') -> @_subTitle = value

	@define 'typeNo',
		get: -> unless @_typeNo then @_typeNo else "Type #{@_typeNo}.<br/>"
		set: (value = '') -> @_typeNo = value

	@define 'typeName',
		get: -> @_typeName
		set: (value = '') -> @_typeName = value

	@define 'details',
		get: -> "<strong>#{@typeNo}#{@typeName}</strong><br/><br/>#{@_details}"
		set: (value = []) ->  @_details = unless value.length > 0 then '' else value.reduce (x, y) -> x + "<br/>" + y

	@define 'theme',
		get: -> @_theme
		set: (value = Intro.Theme.Tiny) -> @_theme = value

	# 생성
	create: ->
		# Background
		_background = new Layer name: 'background'
			, x: -100, y: -100
			, width: Framer.Device.background.width + 200, height: Framer.Device.background.height + 200
			, backgroundColor: ''
			, parent: Framer.Device.background
		_background.props = @_theme.background

		# Description
		_description = new Layer name: "description"
			, x: Align.center(@_theme.descriptionXPos * _ratio), y: Align.center(@_theme.descriptionYPos * _ratio)
			, width: 1000, height: 500
			, backgroundColor:''
			, parent: Framer.Device.background
			, scale: _originScale
			, opacity: 0
		# Title
		_title = new Layer name: "title"
			, x: Align.center, y: Align.top
			, width: 2000, height: 200
			, backgroundColor:''
			, parent: _description
			, html: @title
		_title.props = @_theme.title
		# Subtitle	
		_subTitle = new Layer name: "subTitle"
			, x: Align.center, y: Align.top(200)
			, width: 2000, height: 500
			, backgroundColor:''
			, parent: _description
			, html: @subTitle
		_subTitle.props = @_theme.subTitle
		# Description
		_detail = new Layer name: "detail"
			, x: Align.center, y: Align.top(480)
			, width: 2000, height: 500
			, backgroundColor:''
			, parent: _description
			, html: @details
		_detail.props = @_theme.details
		
		# Copyright
		_copyright = new Layer name: "copyright"
			, x: Align.left, y: Align.bottom
			, width: 1000,	height: 120
			# , image: "images/ixd/ixd-ci.png"
			, scale: 0.4 * _ratio, originX: 0, originY: 1
			, backgroundColor: ''
			, parent: Framer.Device.background
			, opacity: 0
			, color: 'rgba(0,0,0,0.6)'
			, html: 'Copyright © 2016 Threeword'
			, style: { font: "400 40px/120px #{Utils.deviceFont()}", letterSpacing: "-2px", paddingLeft: "40px" }
			, brightness: 100, saturate: 100, contrast: 100, invert: 0, grayscale: 0, hueRotate: 0, sepia: 0
		_copyright.props = @_theme.copyright

		# Framer logo
		_logo = new Layer name: "framer_ci"
			, x: Align.right(-@_theme.logoMargin), y: Align.top(@_theme.logoMargin)
			, width: 76, height: 76
			, image: "images/intro/framer-ci.png"
			, scale: _ratio, originX: 1, originY: 0
			, backgroundColor: ''
			, parent: Framer.Device.background
			, opacity: 0
			, color: 'rgba(255,255,255,1.0)'
			, brightness: 100, saturate: 100, contrast: 100, invert: 0, grayscale: 0, hueRotate: 0, sepia: 0
		_logo.props = @_theme.logo

		# Event Listener : Resize
		resizeListener = (event) =>
			currentScale = Framer.Device.hands.scale
			_ratio = currentScale / DEFINED.SCALE

			Framer.Device.hands.x += @_theme.deviceXPos * _ratio
			Framer.Device.background.props = x: 0, y: 0, width: Canvas.width, height: Canvas.height, scale: 1

			_description.animate properties: x: Align.center(@_theme.descriptionXPos * _ratio), y: Align.center(@_theme.descriptionYPos * _ratio), opacity: 1, scale: currentScale

			_copyright.animate properties: x: Align.left, y: Align.bottom, opacity: 1, scale: 0.4 * _ratio
			_logo.animate properties: x: Align.right(-@_theme.logoMargin), y: Align.top(@_theme.logoMargin), opacity: 1, scale: _ratio
			
			_background.props = x: -100, y: -100, width: Framer.Device.background.width + 200, height: Framer.Device.background.height + 200

		# Event : Resize
		Events.wrap(window).addEventListener "resize", resizeListener

		# Start
		resizeListener()

exports.Intro = Intro