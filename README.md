# Introduction for preview (Only desktop)
A Framer Studio module for adding introduction to your project.

[Demo - Image Theme](http://share.framerjs.com/50wic1gr36fv/)

# Screenshot
![ScreenShot](https://raw.github.com/framer-modules/intro.framer/master/screenshot.jpg)

___

# Features
- Fullscreen Supported
- Responsive Design
- More custom themes (White, Tiny, Image)

# Theme 
- [ ] White
- [ ] Image
- [x] Tiny (Base on White)

> Defaults is checked.

# Installation
Copy the "module" and "intro" folder (in "image" folder) and paste it into your prototype folder
> More info about modules for Framer Studio: [FramerJS Docs - Modules](http://framerjs.com/docs/#modules.modules)

# Usage
```coffeescript
{Intro} = require "Intro"
intro = new Intro
	title: 'Module for preview'
	subTitle: 'PRESENTATION'
	typeNo: ''
	typeName: 'Theme - Image'
	details: ['Fullscreen Supported ','Responsive Design', 'More custom themes']
	theme: Intro.Theme.Image
```

# License
Intro.framer is released under the MIT license. See LICENSE for details.
