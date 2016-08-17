### 
Prototype introduce module for presentation Theme
- White

@auther threeword (dev@threeword.com)
@since 2016.07.07
@version 0.2
###

{IntroTheme} = require "IntroTheme"
class IntroThemeWhite extends IntroTheme
	# CSS
	_cssFont = "@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); font-family: 'Noto Sans KR', serif, sans-serif;"
	Utils.insertCSS(_cssFont)

	# Constructor
	constructor: ->
		super 
			# Theme name
			name: 'white'
			# Project title
			title: 
				style:
					color: "#333"
					, font: "100 160px/100px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.7"
			# Project subtitle
			subTitle: 
				style:
					color: "#333"
					, font: "500 130px/100px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.6" 
			# Project detail
			details: 
				style: 
					color: "#333"
					, font: "200 50px/80px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.8"
			# Copyright
			copyright: brightness: 100, saturate: 100, hueRotate: 0, contrast: 100, invert: 0, grayscale: 0, sepia: 0
			# Framer logo
			logo: brightness: 100, saturate: 100, hueRotate: 0, contrast: 100, invert: 0, grayscale: 0, sepia: 0
			# Background :: color
			background: { backgroundColor: 'white' }
	
exports.IntroThemeWhite = IntroThemeWhite