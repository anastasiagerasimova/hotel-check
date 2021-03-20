import React from 'react'
import Input from '../input'
import Button from '../button'
import is from 'is_js'

import classes from './auth.css'

class Auth extends React.Component{
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Логин',
                errorMessage: 'Некорректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email:true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Пароль должен содержать не мене 8 символов',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 8
                }
            }
        }
    }
    loginHandler = () =>{
      this.props.passedAuth()
    }
    submitHandler = (e) => {
        e.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
          return true
        }
    
        let isValid = true
    
        if (validation.required) {
          isValid = value.trim() !== '' && isValid
        }
    
        if (validation.email) {
          isValid = is.email(value) && isValid
        }
    
        if (validation.minLength) {
          isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }
    
    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }
    
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
    
        formControls[controlName] = control
    
        let isFormValid = true
    
        Object.keys(formControls).forEach(name => {
          isFormValid = formControls[name].valid && isFormValid
        })
    
        this.setState({
          formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
          const control = this.state.formControls[controlName]
          return (
            <Input
              key={controlName + index}
              type={control.type}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              label={control.label}
              shouldValidate={!!control.validation}
              errorMessage={control.errorMessage}
              onChange={event => this.onChangeHandler(event, controlName)}
            />
          )
        })
    }
    
    render(){
        return(
            <div className={classes.auth}>
                <div className={classes.form}>
                    <h2>Simple Hotel Check</h2>
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <Button 
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth