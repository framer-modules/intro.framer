# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: "Module for preview"
	author: "threeword"
	twitter: "@threeword"
	description: "For Presentation\n - Fullscreen Supported,\n - Responsive Design,\n - More custom themes\n - "
# 	image.facebook: 
# 	image.twitter: 

Framer.Extras.ShareInfo.enable()

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
		, typeName: 'Theme - Image'
		, details: ['Fullscreen Supported ','Responsive Design', 'More custom themes']
		, theme: Intro.Theme.Image
	# Initialization
	init()
else init()