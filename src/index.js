import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// import {BrowserRouter as Router} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import {HotelsServiceContect} from './components/hotels-service-context'
import HotelsService from './services/hotels-service'
import store from './store'

const hotelsService = new HotelsService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <HotelsServiceContect.Provider value={hotelsService}>
                <HashRouter>
                    <App />
                </HashRouter>
            </HotelsServiceContect.Provider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById('root')
)
