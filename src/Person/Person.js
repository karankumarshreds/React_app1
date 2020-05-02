import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
    <div className="Person">
        <h3>My name is {props.name} and I'm {props.age} years old.</h3>
        <h3 onClick={props.func}>{props.children}</h3> 
        <input type="text" onChange={props.func2} value={props.name}/>
    </div>
    );
};

export default Person;