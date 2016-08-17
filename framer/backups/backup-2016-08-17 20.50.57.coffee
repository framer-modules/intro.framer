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
	# Presentation
	{Intro} = require "Intro"
	intro = new Intro
		title: 'Module for preview'
		, subTitle: 'PRESENTATION'
		, typeNo: ''
		, typeName: 'Theme - Tin'
		, details: ['Fullscreen Supported ','Responsive Design', 'More custom themes']
# 		, theme: Intro.Theme.Tiny
	# Initialization
	init()
else init()