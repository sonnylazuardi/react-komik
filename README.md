# React Komik!

ReactJS based comic strip creator using [fabric.js](http://fabricjs.com/) canvas rendering. It's like [spectacle](https://github.com/FormidableLabs/spectacle) but for comic. You can edit (positioning, scaling, coloring) the comic after rendering. Reactify anything, reactify comic.

![react-komik](http://sonnylazuardi.github.io/react-komik/dist/logo_big.png)

# Usage

## NPM modules

Just install it from npm

	npm install react-komik

You can use the component by require it and bundle it with webpack or browserify.
Don't forget to import React, ReactDOM, and use Babel/JSX transformer with ES2015 (recommended)

```language-javascript
	import React from 'react';
	import { render } from 'react-dom';
	import { Strip, Panel, Character, Balloon } from 'react-komik';

	let Comic = (props) => (
		<Strip title="Your title here" column="1">
			<Panel>
				<Character
					image="char.png">
					<Balloon 
						text="Reactify Comic!" />
				</Character>
			</Panel>
		</Strip>
	);

	render(<Comic />, document.getElementById('root'));
```

## UMD Browser

Download or include the [komik.js](http://sonnylazuardi.github.io/react-komik/dist/komik.js) file to your HTML. 
Don't forget to include React, ReactDOM and JSX transformer/Babel.
Please use NPM modules instead for production.

```language-html
	<script src="http://sonnylazuardi.github.io/react-komik/dist/komik.js"></script>
	<script>
		let { Strip, Panel, Character, Balloon } = Komik;

		class Comic extends React.Component {
			render() {
				return (
					<Strip title="Your title here" column="1">
						<Panel>
							<Character
								image="char.png">
								<Balloon 
									text="Reactify Comic!" />
							</Character>
						</Panel>
					</Strip>
				);
			}
		}

		ReactDOM.render(<Comic />, document.getElementById('root'));
	</script>
```

# Demo

This demo is using UMD browser, hosted on codepen and jsbin.

http://codepen.io/sonnylazuardi/pen/JGKmGE

http://jsbin.com/zaxabi/edit?html,js,output

# Components

There are four main components:

## Strip

Attribute | Value Type | Default | Description
--------- | ---------- | ------- | -----------
title | String | "Comic Title" | Your comic title
column | Integer | 2 | Number of comic's column
padding | Integer | 0 | Comic padding
width | Integer | 500 | Comic's width
height | Integer | 500 | Comic's height
top | Integer | 0 | Comic's top position
left | Integer | 0 | Comic's left position
fill | String (Color) | 'white' | Comic's background color
stroke | String (Color) | 'black' | Comic's stroke color
strokeWidth | Integer | 0 | Comic's stroke width
fontFamily | String (Font Name) | "Arial" | Comic's font family
fontSize | Integer | 13 | Comic's font size
upperCase | Boolan | false | Comic's text upper case

## Panel

Attribute | Value Type | Default | Description
--------- | ---------- | ------- | -----------
height | Integer | 180 | Panel's height
padding | Integer | 20 | Panel's padding
fill | String (Color) | 'white' | Panel's background color
stroke | Integer | 'black' | Panel's stroke color
strokeWidth | Integer | 3 | Panel's stroke width
background | String (Image URL) | null | Panel's background image

## Character

Attribute | Value Type | Default | Description
--------- | ---------- | ------- | -----------
image | String (Image URL) | 'char1.png' | Character's image
scale | Decimal (0 - 1) | 1 | Character's image scale
align | String ('center', 'right', 'left') | 'center' | Character's align position
left | Integer | null | Character's left position (will overwrite align)
bottom | Integer | 0 | Character's bottom position 
top | Integer | null | Character's top position (will overwrite bottom position)

## Balloon

Attribute | Value Type | Default | Description
--------- | ---------- | ------- | -----------
text | String | 'Hi Bro!' | Balloon's text
image | String (SVG URL) | 'chat_right.svg' | Chat balloon SVG images
left | Integer | null | Balloon's left position
bottom | Integer (from Character's top) | -70 | Balloon's bottom position
top | Integer | null | Balloon's top position (will overwrite bottom)
scale | Decimal (0 - 1) | 0.8 | Balloon's image scale
align | String ('center', 'left', 'right') | 'left' | Balloon's align from character
padding | Integer | 12 | Balloon's text padding
height | Integer | 150 | Balloon's height
textAlign | String ('center', 'left', 'right') | 'center' | Balloon's text align
fontFamily | String (Font Name) | (The same with Strip's fontFamily) | Balloon's font family
fontSize | Integer | (The same with Strip's fontSize) | Balloon's font size

# Contributing

Ideas, issues, and PRs are welcomed. You can also directly shoot me an email at sonnylazuardi@gmail.com.

# JS Comic

This project is actually an effort to write comic easier for [JS Comic](http://jscomic.net). Please follow [@jscomicnet](https://twitter.com/jscomicnet) or like [JS Comic FB page](https://facebook.com/jscomicnet).

# License

MIT @sonnylazuardi