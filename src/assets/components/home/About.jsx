import React, { useRef } from 'react';
import Test from './Test';

const About = () => {
    let headRemove = useRef();
    const removeBtn = () => {
        headRemove.current.style.display = "none";
        // alert('remove');
    }
    return (
        <div>
            <h1 ref={headRemove}>testing....</h1>
            <Test remove={ removeBtn } />
        </div>
    );
};

export default About;