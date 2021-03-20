import React from 'react'

import classes from './error-indicator.css'

const ErrorIndicator = () => {
  return(
    <div className={classes.errorIndicator}>
        <h4>Произошла ошибка!</h4>
        <p>Что-то пошло не так! Перезагрузите страницу или попробуйте позжу.</p>
    </div>
  )
}

export default ErrorIndicator