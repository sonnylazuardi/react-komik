import React, { Component } from 'react';
import { render } from 'react-dom';
import { Panel, Character, Balloon, Strip } from './Komik';

let Comic = (props) => (
    <Strip title="React Komik!" column="2" fontFamily="Patrick Hand" fontSize="13" upperCase={true}>
        <Panel>
            <Character
                image="char1.jpg"
                left="70"
                scale="0.65">
                <Balloon 
                    left="-80" 
                    height="120" 
                    image="chat_left.svg"
                    text="Have You heard about ReactJS? You can write HTML in JS..."/>
            </Character>
        </Panel>
        <Panel>
            <Character
                image="char2.jpg"
                left="30"
                scale="0.65">
                <Balloon
                    height="146"
                    left="60"
                    bottom="-80"
                    image="chat_right.svg"
                    text="Yeah it's pretty cool. You can use JSX syntax to write web, mobile app, even presentation"
                    />
            </Character>
        </Panel>
        <Panel>
            <Character
                image="char1_hype.jpg"
                scale="0.9"
                left="30">
                <Balloon
                    height="130"
                    left="-40"
                    image="chat_left.svg"
                    text="Hey look! It's React Komik! We can create this comic strip with ReactJS!"
                    />
            </Character>
        </Panel>
        <Panel>
            <Character
                image="char2_magic.jpg"
                scale="0.65">
                <Balloon
                    height="80"
                    left="80"
                    image="chat_right.svg"
                    text="It's MAGIC"
                    />
            </Character>
        </Panel>
    </Strip>
);

render(<Comic />, document.getElementById('root'));

