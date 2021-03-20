import AuthPage from '../pages/AuthPage'
import HotelPage from '../pages/HotelsPage'


import {Route, Switch} from 'react-router-dom'

const App = () => {
    return(
        <div>
            <Switch>
                <Route path="/" exact component={AuthPage}/>
                <Route path="/hotels" component={HotelPage}/>
            </Switch> 
        </div>
    )
}

export default App