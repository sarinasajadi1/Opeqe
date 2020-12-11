import React from 'react'
import HomePage from '../../assets/images/slider.jpg'
import './HomeSlider.css'


const homeSlider = (props) =>{
    return(
        <div className="slider">
            <div className="sliderComponent">
                <div className="sliderBg">
                    <img src={HomePage} />
                </div>
            </div>
        
        </div>
    );

};

export default homeSlider;