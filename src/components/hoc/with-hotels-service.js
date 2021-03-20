import React, {useContext} from 'react'
import {HotelsServiceContect} from '../hotels-service-context'

const withHotelsService = () => (Wrapped) => {
    return (props) => {
        const hotelsService = useContext(HotelsServiceContect)

        return(
            <Wrapped {...props} hotelsService={hotelsService} />
        )
    }
}

export default withHotelsService