import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { withHotelsService} from '../hoc'
import countCheckOutDate from '../../utils/count-check-out-date'

import Input from '../input'
import Button from '../button'
import {
    addedLocation,
    addedCheckIn,
    addedCheckOut,
    fetchHotels
} from '../../actions'

import classes from './filter.css'

const Filter = ({hotelsService}) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [location, setLocation] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [days, setDays] = useState('')

    const inputLocation = useRef(null)
    const inputCheckIn = useRef(null)
    const inputDays = useRef(null)
    
    useEffect(() => {
        setLocation(state.location)
        setCheckIn(state.checkIn)
        setDays(state.days)

        dispatch(fetchHotels(state))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        const dateCheckOut = countCheckOutDate(checkIn, days)

        dispatch(addedCheckIn(checkIn))
        dispatch(addedLocation(location))
        dispatch(addedCheckOut(dateCheckOut, days))

        dispatch(fetchHotels({location, checkIn,  checkOut: dateCheckOut}))

        inputLocation.current.value = ''
        inputCheckIn.current.value = ''
        inputDays.current.value = ''
    }

    return (
        <div className={classes.filter}>
            <form onSubmit={submitHandler}>
                <Input 
                    type={"text"} 
                    label={"Локация"} 
                    value={location}
                    ref={inputLocation}
                    onChange={(e) => {
                        e.preventDefault()
                        setLocation(e.target.value);
                    }}
                />
                <Input 
                    type={"date"} 
                    label={"Дата заселения"} 
                    value={checkIn}
                    ref={inputCheckIn}
                    onChange={(e) => {
                        e.preventDefault()
                        setCheckIn(e.target.value)
                    }}
                />
                <Input 
                    type={"number"} 
                    label={"Количество дней"} 
                    value={days}
                    ref={inputDays}
                    onChange={(e) => {
                        e.preventDefault()
                        setDays(e.target.value)
                    }}
                />
                <Button 
                    // onClick={filterHandler}
                >
                    Найти
                </Button>
            </form>

        </div>
    )
}

export default withHotelsService()(Filter)

