import React, { Component } from 'react'

import Aux from '../../hoc/Auxilary/Auxilary'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import Slider from '../../components/Slider/Slider'


class MainPage extends Component{ 
    constructor(){
        super()
        this.state={
            sliders: ["Pizza", "Japanese", "Mexican", "Happy Hour", "Lunch & Dinner"]
        }
    }
   
    render () {
        let sliders = []
        for(let i=0; i<this.state.sliders.length; i++){
            sliders.push(
                <Slider name={this.state.sliders[i]} />
            )
        }
        return (
             <Aux>
                <HomeSlider />
                {sliders}
            </Aux>

             );
            }
        }
        
        
        
export default MainPage;