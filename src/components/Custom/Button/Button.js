import React from 'react';
import "./Button.css";

function Button({ title, onHandle }) {
    return (
        <button className="button" onClick={onHandle}>
            {title}
        </button>
    )
}

export default Button;
