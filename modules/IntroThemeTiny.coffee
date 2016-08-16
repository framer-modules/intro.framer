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
			# 이름
			name: 'tiny'
			# 장치의 중심으로 부터 x위치
			deviceXPos: 400
			# 설명의 중심으로 부터 위치 
			descriptionXPos: -550, descriptionYPos: -80
			# 프로젝트 제목
			title: 
				style:
					color: "#333"
					, font: "100 100px/100px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.7"
			# 프로젝트 세부 제목
			subTitle: 
				y: Align.top(140)
				style:
					color: "#333"
					, font: "500 70px/80px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.6" 
			# 상세 정보
			details: 
				y: Align.top(300)
				style: 
					color: "#333"
					, font: "200 35px/80px Noto Sans KR"
					, textAlign: "center"
					, opacity: "0.8"
			# 메이커 CI
			copyright: brightness: 100, saturate: 100, hueRotate: 0, contrast: 100, invert: 0, grayscale: 0, sepia: 0
			# 프레이머 로고
			logo: brightness: 100, saturate: 100, hueRotate: 0, contrast: 100, invert: 0, grayscale: 0, sepia: 0
			# 배경
			background: { backgroundColor: 'white' }
	
exports.IntroThemeTiny = IntroThemeTiny