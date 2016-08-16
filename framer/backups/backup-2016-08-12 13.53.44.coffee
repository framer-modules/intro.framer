# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: "Module for preview"
	author: "Jung Ho Song"
	twitter: "@threeword"
	description: "For preview & presentation\n - Fullscreen Supported,\n - Responsive Design,\n - More custom themes (default - Tiny, White, Image)"

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
		, typeName: 'Theme - Tiny'
		, details: ['Fullscreen Supported ','Responsive Design', 'More custom themes']
		, theme: Intro.Theme.Image
	# Initialization
	init()
else init()