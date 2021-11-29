import React from 'react';

const Toggle = ({onChange})=>(
    <label className="input-wrapper">
        <input type="checkbox" className="toggle" onChange={onChange}/>
        <span className="slider"/>
    </label>
);

export default Toggle;
