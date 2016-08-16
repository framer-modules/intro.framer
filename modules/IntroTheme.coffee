### 
소개 테마
@auther ho.s
@since 2016.07.07
@version 0.2
###

class IntroTheme extends Framer.BaseClass
	# Constant
	DEFINED = 
		DEFAULT: 
			DEVICE_X_POS: 500, 
			DESCRIPTION_X_POS: -500, DESCRIPTION_Y_POS: -150,
			LOGO_MARGIN: 10

	constructor: (options = {}) ->
		@deviceXPos = options.deviceXPos
		@descriptionXPos = options.descriptionXPos
		@descriptionYPos = options.descriptionYPos
		@logoMargin = options.logoMargin

		@name = options.name
		@title = options.title
		@subTitle = options.subTitle
		@details = options.details
		@copyright = options.copyright
		@logo = options.logo
		@background = options.background

	@define 'deviceXPos',
		get: -> @_deviceXPos
		set: (value = DEFINED.DEFAULT.DEVICE_X_POS) -> @_deviceXPos = value

	@define 'descriptionXPos',
		get: -> @_descriptionXPos
		set: (value = DEFINED.DEFAULT.DESCRIPTION_X_POS) -> @_descriptionXPos = value

	@define 'descriptionYPos',
		get: -> @_descriptionYPos
		set: (value = DEFINED.DEFAULT.DESCRIPTION_Y_POS) -> @_descriptionYPos = value

	@define 'logoMargin',
		get: -> @_logoMargin
		set: (value = DEFINED.DEFAULT.LOGO_MARGIN) -> @_logoMargin = value
	
	@define 'name',
		get: -> @_name
		set: (value = "") -> @_name = value

	@define 'title',
		get: -> @_title
		set: (value = {}) -> @_title = value

	@define 'subTitle',
		get: -> @_subTitle
		set: (value = {}) -> @_subTitle = value

	@define 'details',
		get: -> @_details
		set: (value = {}) ->  @_details = value

	@define 'copyright',
		get: -> @_copyright
		set: (value = {}) ->  @_copyright = value

	@define 'logo',
		get: -> @_logo
		set: (value = {}) ->  @_logo = value

	@define 'background',
		get: -> @_background
		set: (value = {}) ->  @_background = value

exports.IntroTheme = IntroTheme