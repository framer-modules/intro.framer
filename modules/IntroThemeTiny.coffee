### 
소개 테마 - Tiny
@auther ho.s
@since 2016.07.12
@version 0.1
###

{IntroTheme} = require "IntroTheme"
class IntroThemeTiny extends IntroTheme
	# CSS
	_cssFont = "@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); font-family: 'Noto Sans KR', serif, sans-serif;"
	Utils.insertCSS(_cssFont)

	# 생성자
	constructor: ->
		super 
			# Theme Name
			name: 'tiny'
			# X position of device from the center position
			deviceXPos: 400
			# X,Y position of description from the center position
			descriptionXPos: -550, descriptionYPos: -80
			# Project title
			title: 
				style:
					color: "#333"
					, font: "100 100px/100px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.7"
			# Project subtitle
			subTitle: 
				y: Align.top(140)
				style:
					color: "#333"
					, font: "500 70px/80px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.6" 
			# Project detail
			details: 
				y: Align.top(300)
				style: 
					color: "#333"
					, font: "200 35px/80px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.8"
			# Copyright
			copyright: brightness: 100, saturate: 100, hueRotate: 0, contrast: 100, invert: 0, grayscale: 0, sepia: 0
			# Framer logo
			logo: brightness: 100, saturate: 100, hueRotate: 0, contrast: 100, invert: 0, grayscale: 0, sepia: 0
			# Background :: color
			background: { backgroundColor: 'white' }
	
exports.IntroThemeTiny = IntroThemeTiny