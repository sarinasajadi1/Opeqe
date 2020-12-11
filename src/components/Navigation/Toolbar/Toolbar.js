import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigattionItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={[classes.Logo, classes.DesktopOnly].join(' ')}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigattionItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;