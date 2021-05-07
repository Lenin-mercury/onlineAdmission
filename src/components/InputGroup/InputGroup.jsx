import React from 'react';
import './inputgroup.scss';

const InputGroup = (props) => {
    return (
        <section className="inputgroup">

            <div className="inputgroup__form--group">
                <label htmlFor={props.name}> {props.label} <span className="inputgroup__form--req" >{props.required}</span> </label>
                <input type="text" className="inputgroup__form--input" name={props.name} placeholder={props.placeholder}/>
            </div>
      </section>
    );
};

export default InputGroup;