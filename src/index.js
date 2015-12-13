import React, { Component } from 'react';
import { render } from 'react-dom';
import { Panel, Character, Balloon, Strip } from './Komik';

let Comic = (props) => (
    <Strip title="React Komik!" column="2">
        <Panel fill="#c8eafb">
            <Character
                image="char1.png"
                scale="0.5">
                <Balloon 
                    left="-80" 
                    height="120" 
                    image="chat_left.svg"
                    text="Have You heard about ReactJS? You can write HTML in JS..."/>
            </Character>
        </Panel>
        <Panel fill="#c8eafb">
            <Character
                image="char2.png"
                scale="0.48">
                <Balloon
                    height="146"
                    left="40"
                    image="chat_right.svg"
                    text="Yeah it's pretty cool. You can use JSX syntax to write web, mobile, even TV app"
                    />
            </Character>
        </Panel>
        <Panel fill="#c8eafb">
            <Character
                image="char1_hype.png"
                scale="0.45">
                <Balloon
                    height="130"
                    left="-70"
                    image="chat_left.svg"
                    text="Hey look! It's React Komik! We can create this comic strip with ReactJS!"
                    />
            </Character>
            <Character
                image="logo_small.png"
                top="20"
                left="130"
                scale="1"
                />
        </Panel>
        <Panel background="magic.jpg" />
    </Strip>
);

render(<Comic />, document.getElementById('root'));

