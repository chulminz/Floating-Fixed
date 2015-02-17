## Usage
**Floating-Fixed** is simple to use. Here is an example:

``` html
<div id="container">
	<header></header>
	<section id="center-element"></section>
	<aside id="floating"></aside>
	<footer></footer>
</div>
```

The CSS is specified by the user layout:

``` css
 header {
 	height:200px;
 	background-color:#47A3DA;
 }
 footer {
 	height:100px;
 	background-color:#47A3DA;
 }
 #center-element {
 	width:1000px;
 	height:1500px;
 	margin:0 auto;
 	background-color:#F3F3F3;
 }
 #floating {
 	width:150px;
 	height:200px;
 	background-color:#2995D6;
 }
```

And **Floating-Fixed** javascript execution is as follows:

``` js
$("#floating").fixedFloating();
```


## Config Options

**Floating-Fixed** can take an optional parameter – an object of key/value settings:

- **floatingMargin** String *(default:"0")* - Specifies the margins of the Floating in px. Like CSS Shorthand property

- **fixedDirection** String *(default:"LT")* - Direction of the Floating is fixed. ("LT","RT","LB","RB")

- **limitTop** Integer *(default:0)* - Top margin limit. If the direction of "T".

- **limitBottom** Integer *(default:0)* - Bottom margin limit. If the direction of "B".

- **stickyCenterAlign** Boolean *(default:false)* - Sticky to the center element.

- **centerElement** Selector *(default:"#center-element")* - Selector in the center element.

### Example

``` js

$("#floating").fixedFloating({
	floatingMargin : "20px 20px",
	fixedDirection : "LT",
	limitTop : 200,
	stickyCenterAlign : true,
	centerElement : "#center-element"
});

```

## Required
**Floating-Fixed** requires jQuery version 1.7.0 or higher.

> [Downloading jQuery](http://jquery.com/download/)

## License
Copyright (c) 2015 Hwang Cheolmin. Licensed under the [The MIT License (MIT)](http://opensource.org/licenses/MIT).
