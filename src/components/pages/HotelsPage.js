import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Filter from '../filter'
import HotelList from '../hotel-list'
import Favorites from '../favorites'
import SimpleSlider from '../simple-slider'

import classes from './hotels-page.css'
import convertDateToItemFormat from '../../utils/convert-date-to-item-format'


const HotelPage = ({location, checkIn}) => {
    const convertedDate = convertDateToItemFormat(checkIn)
    return(
        <div className={classes.hotels}>
            <div className={classes.hotelsHeader}>
                <h2>Simple Hotel Check</h2>
                <Link to="/" className={classes.hotelsExit}>Выйти</Link>
            </div>
            <div className={classes.hotelsWrapper}>
                <div className={classes.hotelsPanel}>
                    <Filter />
                    <Favorites />
                </div>
                <div className={classes.hotelsMain}>
                    <div className={classes.hotelInfo}>
                        <div className={classes.hotelLocation}>
                            <span>Отели</span><span>{location}</span>
                        </div>
                        <div className={classes.hotelDate}>{convertedDate[0]} {convertedDate[1]} {convertedDate[2]}</div>
                    </div>
                    <SimpleSlider />
                    <HotelList />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({location, checkIn}) => {
    return{
        location,
        checkIn
    }
}

export default connect(mapStateToProps)(HotelPage)