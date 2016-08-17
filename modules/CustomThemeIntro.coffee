### 
Prototype introduce module for presentation Theme
- Customize theme sample

@auther threeword (dev@threeword.com)
@since 2016.08.17
@version 0.1
###

{IntroTheme} = require "IntroTheme"
class CustomThemeIntro extends IntroTheme
	# CSS
	_cssFont = "@import url('https://fonts.googleapis.com/css?family=Roboto'); font-family: 'Roboto', serif, sans-serif;"
	Utils.insertCSS(_cssFont)

	# Constructor
	constructor: ->
		super 
			# Theme name
			name: 'custom'
			# Project title
			title: 
				style:
					color: "#FFF"
					, font: "100 160px/100px Roboto"
					, textAlign: "center"
					, opacity: "0.9"
			# Project subtitle
			subTitle: 
				style:
					color: "#FFF"
					, font: "500 130px/100px Roboto"
					, textAlign: "center"
					, opacity: "0.6" 
			# Project detail
			details: 
				style: 
					color: "#FFF"
					, font: "200 50px/80px Roboto"
					, textAlign: "center"
					, opacity: "0.8"
			# Copyright
			copyright: brightness: 200, saturate: 0, color: "rgba(255,255,255,0.6)"
			# Framer logo
			logo: brightness: 200, saturate: 0
			# Background :: image
			background: image: Utils.randomImage(Framer.Device.background), blur: 3, opacity: 0.2

		# 
		# Framer.Device.background.props = backgroundColor: "rgba(255,255,255,1)"
	
exports.CustomThemeIntro = CustomThemeIntro