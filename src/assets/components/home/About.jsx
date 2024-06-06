import React from 'react';
import { useState } from 'react';

const About = () => {
    let [myObj, setObjet] = useState({
        one: '1',
        two: '2',
        three: '3',
    });
    let change = () => {
        setObjet({
            one: '...1',
            two: '..2',
            three: '..3',
        })
    }
    return (
        <div>
            <h1>{ JSON.stringify(myObj) }</h1>
            <button onClick={change}>click</button>
        </div>
    );
};

export default About;