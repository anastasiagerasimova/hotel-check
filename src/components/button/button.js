import React from 'react'

import classes from './button.css'

const Button = (props) => {
    return(
        <button
            type={props.type}
            onClick={props.onClick}
            className={classes.button}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button 