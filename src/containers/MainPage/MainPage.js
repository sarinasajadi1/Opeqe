import React, { Component } from 'react'

import Aux from '../../hoc/Auxilary/Auxilary'
import HomeSlider from '../../components/HomeSlider/HomeSlider'


class MainPage extends Component{    
    render () {
        return (
             <Aux>
                <HomeSlider />
            </Aux>

             );
            }
        }
        
        
        
export default MainPage;