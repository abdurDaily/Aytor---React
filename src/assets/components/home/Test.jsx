import React from 'react';

const Test = (props) => {
    return (
        <div>
           <button onClick={props.remove}>Click</button>
        </div>
    );
};

export default Test;