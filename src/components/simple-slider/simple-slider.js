import React from 'react'
import {connect} from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/swiper.less'
import './simple-slider.less'


const SimpleSlider = ({sliderImages}) => {

    return(
		<Swiper 
			slidesPerView={3.5}
		>
		    {
                sliderImages.map((slide, index) => {
                    return (
						<SwiperSlide key={index} >
							<img src={slide}></img>
						</SwiperSlide>
                    )
                })
            } 
		</Swiper>

    )
}

const mapStateToProps = ({sliderImages}) => {
    return {sliderImages}
}

export default connect(mapStateToProps)(SimpleSlider)

