import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

import {addedToFavorites, removedFromFavorites} from '../../actions'
import HotelListItem from '../hotel-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import classes from './hotel-list.css'


const HotelList = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const {favorites, hotels} = state

    return(
        <div className={classes.hotelList}>
        <h4>Добавлено в Избранное: <span>{favorites.length}</span> отеля</h4>
        <ul >
           {
                hotels.map((hotel) => {
                    return (
                        <li key={hotel.hotelId}>
                            <HotelListItem 
                                hotel={hotel} hasImage={true} 
                                removeFromFavorites={(hotel) => dispatch(removedFromFavorites(hotel))}  
                                addToFavorites={(hotel) => dispatch(addedToFavorites(hotel))} 
                                {...state}
                            />
                        </li>
                    )
                })
            } 
        </ul>
        </div>
    )
}

const HotelListContainer = (props) => {
    const state = useSelector(state => state)
    const {hotels, loading: hotelsLoading, error: hotelsError} = state 

    const spinner = hotelsLoading ? <Spinner /> : null;
    const content = (!hotelsLoading && !hotelsError) ? <HotelList hotels={hotels} {...state}/> : null;
    const errorMessage = hotelsError ? <ErrorIndicator/> : null;
           
    return(
        <React.Fragment>
            {spinner}
            {content}
            {errorMessage}
        </React.Fragment>
    )

}

export default HotelListContainer
