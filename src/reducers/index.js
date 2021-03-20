import slide1 from '../images/slide-1.jpg'
import slide2 from '../images/slide-2.jpg'
import slide3 from '../images/slide-3.jpg'
import slide4 from '../images/slide-4.jpg'
import converDateToFormat from '../utils/convert-date-to-format'
import countCheckOutDate from '../utils/count-check-out-date'

const initialState = {
    hotels: [],
    location: 'Moscow', 
    checkIn: converDateToFormat(new Date()), 
    checkOut: countCheckOutDate(converDateToFormat(new Date()), 2),
    days: 2,
    loading: true,
    error: null,
    favorites: [],
    sliderImages: [slide1, slide2, slide3, slide4, slide1, slide2, slide3, slide4],
    sortType: 'stars'
}

const removeFromFavorites = (favorites, item) => {
    const index = favorites.findIndex(favorite => favorite.hotelId === item.hotelId)
    return [...favorites.slice(0, index), ...favorites.slice(index + 1)]
}

const sortHotels = (items,  value) => {
    switch(value){
        case 'stars': {
            return [...items].sort((a, b) => b.stars - a.stars)
        }
        case 'price': {
            return [...items].sort((a, b) => b.priceFrom - a.priceFrom )
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_HOTELS_REQUEST':
            return {
                ...state,
                hotels: [],
                loading: true,
                error: null
            }
        case 'FETCH_HOTELS_SUCCESS':
            return {
                ...state,
                hotels: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_HOTELS_FAILURL':
            return {
                ...state,
                hotels: [],
                loading: false,
                error: action.payload
            }
        case 'ADD_LOCATION':
            return {
                ...state,
                location: action.payload
        }
        case 'ADD_CHECK_IN':
            return {
                ...state,
                checkIn: action.payload
        }
        case 'ADD_CHECK_OUT':
            return {
                ...state,
                checkOut: action.payload[0],
                days: action.payload[1]
        }
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: sortHotels([...state.favorites, action.payload], state.sortType)
                // favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: removeFromFavorites(state.favorites, action.payload)
            }
        case 'SET_SORT_TYPE':
            return{
                ...state,
                sortType: action.payload
            }
        case 'SORT_HOTELS': 
            return{
                 ...state,
                favorites: sortHotels(state.favorites, state.sortType),
            }
        default: 
            return state
    }

}

export default reducer