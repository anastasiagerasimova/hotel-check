import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import HotelListItem from '../hotel-list-item'
import {
    removedFromFavorites,  
    addedToFavorites, 
    setSortType, 
    sortedHotels
} from '../../actions'

import classes from './favorites.css'

const Favorites = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const {sortType, favorites} = state
    return(
        <div className={classes.favorites}>
            <h2>Избранное</h2>
            <div 
                className={classes.favoritesSortOptions}
                onClick={(e)=> {
                    if(e.target.name === "sortType") {
                        e.target.checked
                        dispatch(setSortType(e.target.value))
                        dispatch(sortedHotels())
                    }
                }}
            >
                <input 
                    id="stars" 
                    type="radio" 
                    name="sortType" 
                    value="stars" 
                    defaultChecked={sortType == 'stars' ? true: false}
                >
                </input>
                <label htmlFor="stars">Рейтинг</label>
                <input 
                    id="price" 
                    type="radio" 
                    name="sortType" 
                    value="price" 
                    defaultChecked={sortType == 'stars' ? false : true}
                ></input>
                <label htmlFor="price">Цена</label>
            </div>
            <ul>
                {
                    favorites.map(hotel=> {
                            return (
                                <li key={hotel.hotelId}>
                                    <HotelListItem 
                                        hotel={hotel} 
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

export default Favorites