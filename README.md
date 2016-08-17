# Introduction for preview (Only desktop)
A Framer Studio module for adding introduction to your project.

[Demo - Image Theme](http://share.framerjs.com/50wic1gr36fv/)

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
## Basic
### Image theme
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
![ScreenShot](https://raw.github.com/framer-modules/intro.framer/master/screenshot-image.jpg)

### White theme
```coffeescript
{Intro} = require "Intro"
intro = new Intro
	title: 'Module for preview'
	subTitle: 'PRESENTATION'
	typeNo: ''
	typeName: 'Theme - White'
	details: ['Fullscreen Supported ','Responsive Design', 'More custom themes']
	theme: Intro.Theme.White
```
![ScreenShot](https://raw.github.com/framer-modules/intro.framer/master/screenshot-white.jpg)

### Tiny theme [Default]
```coffeescript
{Intro} = require "Intro"
intro = new Intro
	title: 'Module for preview'
	subTitle: 'PRESENTATION'
	typeNo: ''
	typeName: 'Theme - Tiny'
	details: ['Fullscreen Supported ','Responsive Design', 'More custom themes']
```
![ScreenShot](https://raw.github.com/framer-modules/intro.framer/master/screenshot-tiny.jpg)

## Customize
```coffeescript
{CustomThemeIntro} = require "CustomThemeIntro"
customTheme = new CustomThemeIntro

{Intro} = require "Intro"
intro = new Intro
	title: 'Module for preview'
	subTitle: 'PRESENTATION'
	typeNo: '1'
	typeName: 'Customize Theme'
	details: ['Change the font', 'Change the title opacity', 'Change the background image', '(Using Utils.randomImage())']
	theme: customTheme
```
![ScreenShot](https://raw.github.com/framer-modules/intro.framer/master/screenshot-custom.jpg)

___

# License
Intro.framer is released under the MIT license. See LICENSE for details.
