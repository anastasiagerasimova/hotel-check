import React from 'react'

import classes from './hotel-list-item.css'
import hotelImage from '../../images/card-img.jpg'
import fullStar from  '../../images/full-star-icon.svg'
import emptyStar from '../../images/empty-star-icon.svg'
import convertDateToItemFormat from '../../utils/convert-date-to-item-format'

const HotelListItem = (props) => {
    const {hotel, checkIn, days, removeFromFavorites, addToFavorites, favorites, hasImage} = props
    const {hotelName, priceFrom, stars, hotelId} = hotel

    if(hotel == undefined) return null
  
    const checkInFavorites = (id, favorites=[]) => {
        return favorites.some(item => item.hotelId === id)
    }

    const convertedDate = convertDateToItemFormat(checkIn)

    const image = hasImage ? <div className={classes.cellImg}><img src={hotelImage}/></div> : false

    return(
        <div className={classes.card}>
            {image}
            <div className={classes.cellContent}>
                <h3>{hotelName}</h3>
                <div className={classes.data}>
                    <span>{convertedDate[0]} {convertedDate[1]}, {convertedDate[2]}</span>
                    <span>—</span>
                    <span>{days} день</span>
                </div>
                <div className={classes.cardFooter}>
                    <div className={classes.raitingStars}>
                        {
                            new Array(5).fill('').map((el, index) => {
                                return index<=stars 
                                    ? (<span key={index}><img src={fullStar}/></span>)
                                    : (<span key={index}><img src={emptyStar}/></span>)
                            })
                        }
                    </div>
                    <div className={classes.cardPrice}>
                        <span>Price:</span>
                        <span>{priceFrom.toFixed(0)} ₽</span>
                    </div>
                </div>
            </div>
            <div className={classes.cardFavorite}>
                <button
                    onClick={(e) => { 
                        checkInFavorites(hotelId, favorites) 
                            ? (removeFromFavorites(hotel))
                            :(addToFavorites(hotel))
                    }}
                >
                    {
                    checkInFavorites(hotelId, favorites) 
                        ? <i className="fas fa-heart"></i>
                        :<i className="far fa-heart"></i>
                    }
                </button>
            </div>
        </div>
    )
}

export default HotelListItem