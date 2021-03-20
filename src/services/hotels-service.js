import React from 'react'

export default class HotelsService extends React.Component{

    getSearchParams = (props) => {
        const searchParams = new URLSearchParams;
        const {location, checkIn, checkOut} = props
        const params = {location, checkIn, checkOut}
        Object.keys(params).forEach(item => {
            if(params[item].toString() !== '') searchParams.append(item, params[item])
        })
        return searchParams.toString()
    }

    getItems = async(searchParams) => {
        const queryString = `http://engine.hotellook.com/api/v2/cache.json${searchParams}&limit=10&currency=rub`
        const response = await fetch(queryString)
        return await response.json()
    }
}