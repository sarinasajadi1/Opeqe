import React, { Component } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import food from '../../assets/images/food.jpg';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './Slider.css'

SwiperCore.use([Navigation]);

const swiperParams = {
    spaceBetween: 15,
    slidesPerView: 1.2,
    navigation: true,
    breakpoints: {
        1024: {
          slidesPerView: 3.2
        },
        768: {
          slidesPerView: 2.2
        },
    },
  }

class Slider extends Component {
    render () {
        let swiper = []
        for(let i=0; i<6; i++){
            swiper.push(
                <SwiperSlide>
                    <a href="#" className="img-holder">
                    <div className="countdown">00 : 40 : 17</div>
                    <img src={food} alt="food" />
                    </a>
                    <div className="txt-holder">
                    <h5>Hawaiian Pizza</h5>
                    <a href="#" className="type">Pizza</a>
                    <ul className="types">
                        <li><a href="#">Italian</a></li>
                        <li><a href="#">Main Course</a></li>
                        <li><a href="#">Lunch & Dinner</a></li>
                    </ul>
                    <ul className="spec">
                        <li>30-45 Mins</li>
                        <li>$14.29</li>
                    </ul>
                    <div className="free">Free Pickup</div>
                    </div>
                </SwiperSlide>
            )
        }
        return (
            <div className="slider-content">
                <h5 className="swiper-title">
                    <span>
                    {this.props.name}
                    </span>
                </h5>
                <Swiper {...swiperParams}>
                    {swiper}
                </Swiper>
            </div>
        )
    }

}

export default Slider;