import React from 'react'
import {withRouter} from 'react-router-dom'

import Auth from '../auth'

const AuthPage = ({history, location} ) => {
    return(
        <Auth 
            passedAuth={() => {history.push('/hotels')}}
        />
    )
}

export default withRouter(AuthPage)