import React from 'react'

import classes from './input.css'

const Input = React.forwardRef((props, ref) => {
    const cls = [classes.input] 
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    const isInvalid = ({valid, touched, shouldValidate}) =>{
        return !valid && touched && shouldValidate
    }
    isInvalid(props) ? <span>{props.errorMassage}</span> : null
    if(isInvalid(props)){
        cls.push(classes.invalid)
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor} style={props.style}>{props.label}</label>
            <input
                id={htmlFor}
                name={props.name}
                type={inputType}
                defaultValue={props.value}
                min={props.min}
                placeholder={props.placeholder}
                checked={props.checked}
                defaultChecked={props.defaultChecked}
                onChange={props.onChange}
                // className={props.className}
                // className={classes.input}
                ref={ref}
                disabled={props.disabled}
            >
            </input>

            {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
        </div>
    )
})

export default Input
