# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: "Module for preview"
	author: "Jungho Song"
	twitter: "@threeword"
	description: "For preview & presentation\n - Fullscreen Supported,\n - Responsive Design,\n - More custom themes (White, Image, Tiny)"
	date: "2016-07-07"

Framer.Extras.ShareInfo.disable()

# Initialization
init = -> 
	new Layer
		width: Screen.width, height: Screen.height
		html: "PROTOTYPE"
		style: { font: "200 100px/#{Screen.height}px #{Utils.deviceFont()}", textAlign: "center"}

# Only Desktop
if Utils.isDesktop()
	# Custom themes
	{CustomThemeIntro} = require "CustomThemeIntro"
	customTheme = new CustomThemeIntro
	# Presentation
	{Intro} = require "Intro"
	intro = new Intro
		title: 'Module for preview'
		, subTitle: 'PRESENTATION'
		, typeNo: '1'
		, typeName: 'Customize Theme'
		, details: ['Change the font', 'Change the title opacity', 'Change the background image and effect', '(Using Utils.randomImage())']
		, theme: customTheme
	# Initialization
	init()
else init()