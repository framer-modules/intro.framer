### 
Prototype introduce module for presentation Theme
- Image

@auther threeword (dev@threeword.com)
@since 2016.07.07
@version 0.2
###

{IntroTheme} = require "IntroTheme"
class IntroThemeImage extends IntroTheme
	# CSS
	_cssFont = "@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); font-family: 'Noto Sans KR', serif, sans-serif;"
	Utils.insertCSS(_cssFont)

	# Constructor
	constructor: ->
		super 
			# Theme name
			name: 'image'
			# Project title
			title: 
				style:
					color: "#FFF"
					, font: "100 160px/100px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.7"
			# Project subtitle
			subTitle: 
				style:
					color: "#FFF"
					, font: "500 130px/100px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.6" 
			# Project detail
			details: 
				style: 
					color: "#FFF"
					, font: "200 50px/80px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.8"
			# Copyright
			copyright: brightness: 200, saturate: 0, color: "rgba(255,255,255,0.6)"
			# Framer logo
			logo: brightness: 200, saturate: 0
			# Backgound :: image
			background: image: "images/intro/theme/image/bg.jpg", blur: 20, opacity: 0.7

		# 
		Framer.Device.background.props = backgroundColor: "rgba(0,0,0,1)"

exports.IntroThemeImage = IntroThemeImage