const hotelsLoaded = (newHotels) => {
    return {
        type: 'FETCH_HOTELS_SUCCESS',
        payload: newHotels
    }
}

const hotelsRequested = () => {
    return {
        type: 'FETCH_HOTELS_REQUEST',
    }
}

const hotelsError = (err) => {
    return {
        type:'FETCH_HOTELS_FAILURL',
        payload: err
    }
}

const fetchHotels = (data) => {
    return {
        type: 'FETCH_HOTELS',
        payload: data
    }
}

const addedLocation = (value) => {
    return{
        type: 'ADD_LOCATION',
        payload: value
    }
}

const addedCheckIn = (value) => {
    return{
        type: 'ADD_CHECK_IN',
        payload: value
    }
}

const addedCheckOut = (value1, value2) => {
    return{
        type: 'ADD_CHECK_OUT',
        payload: [value1, value2]
    }
}

const addedToFavorites = (value) => {
    return{
        type: 'ADD_TO_FAVORITES',
        payload: value
    }
}

const removedFromFavorites = (value) => {
    return{
        type:'REMOVE_FROM_FAVORITES',
        payload: value
    }
}

const setSortType = (value) => {
    return{
        type: 'SET_SORT_TYPE',
        payload: value
    }
}

const sortedHotels = () => {
    return{
        type: 'SORT_HOTELS'
    }
}

export {
    hotelsLoaded,
    hotelsRequested,
    hotelsError,
    fetchHotels,
    addedLocation,
    addedCheckIn,
    addedCheckOut,
    addedToFavorites,
    removedFromFavorites,
    setSortType,
    sortedHotels
}