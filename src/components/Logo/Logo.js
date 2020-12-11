import React from 'react'

import mainLogo from '../../assets/images/opeqe-logo.svg'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <a href="/">
            <img src={mainLogo} alt="Opeqe"/>
        </a>
    </div>
);

export default logo;