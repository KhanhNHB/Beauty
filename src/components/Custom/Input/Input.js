import React from 'react';
import "./Input.css";

function Input({ type, placeholder, value, onHandle }) {
    return (
        <div className="input__container">
            <input
                className="input"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onHandle}
            />
        </div>
    )
}

export default Input;
