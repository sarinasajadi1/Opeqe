import React from 'react'
import './Footer.css'
import footrImg from '../../assets/images/footer.svg'


const footer = (props) =>{
    return(
        
    <div className="footer">
        <div class="MuiGrid-root footer-l1 MuiGrid-container MuiGrid-justify-xs-center">
            <div class="image-l2">
                <div class="MuiGrid-root image-container MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-xs-center MuiGrid-grid-xs-12 MuiGrid-grid-sm-8">
                    <img src={footrImg} alt="decorative" className="footerDecoration" />
                </div>
            </div>
            <div class="MuiGrid-root top-l2 MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-xs-space-between MuiGrid-grid-xs-11 MuiGrid-grid-sm-11 MuiGrid-grid-md-10 MuiGrid-grid-lg-9 MuiGrid-grid-xl-9">
                <div class="app">
                    <a class="apple" href=""></a>
                    <a class="google" href=""></a>
                </div>
                <div class="links">
                    <a class="link-l2 inline link" href="">About</a>
                    <a class="link-l2 inline link" href="">Services</a>
                    <a class="link-l2 inline link" href="">Support</a>                  
                    <a class="link-l2 inline link" href="">Gallery</a>
                    <a class="link-l2 inline link" href="">Terms</a>
                    <a class="link-l2 inline link" href="/locations">Locations</a>
                </div>
            </div>
            <div class="MuiGrid-root middle-l2 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-11 MuiGrid-grid-sm-11 MuiGrid-grid-md-10 MuiGrid-grid-lg-9 MuiGrid-grid-xl-9">
                <div class="MuiGrid-root links MuiGrid-container MuiGrid-item">
                    <div class="link-group-l2">
                        <div class="header">Main Menu</div>
                        <div class="body">
                            <a class="link-l2" href="">Pickup</a
                            ><a class="link-l2" href="">Delivery</a>
                        </div>
                    </div>
                    <div class="link-group-l2">
                        <div class="header">Orders</div>
                        <div class="body">
                            <a class="link-l2" href="/order-history">Upcoming Orders</a>
                            <a class="link-l2" href="/location/order-history/recent">Recent Orders</a>
                        </div>
                    </div>
                    <div class="link-group-l2">
                        <div class="header">Reservation</div>
                        <div class="body">
                            <a class="link-l2" href="/location/opeqe-san-francisco/reservation">Recent Reservation</a>
                            <a class="link-l2" href="/location/opeqe-san-francisco/reservation/new/details/waitlist">Wait To Be Seated</a>
                        </div>
                    </div>
                    <div class="link-group-l2">
                        <div class="header">Profile</div>
                        <div class="body">
                            <a class="link-l2" href="/profile/promo">Promos &amp; Credits</a>
                            <a class="link-l2" href="/profile/promo">Rewards</a>
                        </div>
                    </div>
                    <div class="link-group-l2">
                        <div class="header">Support</div>
                        <div class="body">
                            <a class="link-l2" href="/locations/opeqe-san-francisco">Contact Us</a>
                            <a class="link-l2" href="">Live Chat</a>
                        </div>
                    </div>
                </div>
                <div class="link-group-l2">
                    <div class="header">Special Offers</div>
                    <div class="body">
                        <a class="link-l2" href="">Happy Hour (Egg Burger with Truffle Mayo)</a>
                        <a class="link-l2" href="">Happy Hour (California Chicken Salad)</a>
                        <a class="link-l2" href="">Happy Hour (Pad Thai)</a>
                        <a class="link-l2" href="">Happy Hour (Quarter Dark and Leg)</a>
                    </div>
                </div>
            </div>
            <div class="MuiGrid-root bottom-l2 MuiGrid-container MuiGrid-item MuiGrid-justify-xs-center MuiGrid-grid-xs-11 MuiGrid-grid-sm-11 MuiGrid-grid-md-10 MuiGrid-grid-lg-9 MuiGrid-grid-xl-9">
                <div class="description">
                    <div class="title">Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.</div>
                    <div class="text">Opeqe is reliable, fast and commission free all-in-one ordering solutions for multi-location or single location restaurants.</div>
                </div>
                <div class="MuiGrid-root others MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-xs-space-between">
                    <div class="links">
                        <span class="copy-right">©2019 OPEQE INC</span>|
                        <a class="link-l2 inline" href="/termsAndConditions">Terms &amp; Conditions</a>|<a class="link-l2 inline" href="/privacyPolicy">Privacy Policy</a>
                    </div>
                    <div class="social">
                        <a class="MuiButtonBase-root MuiIconButton-root" tabindex="0" aria-disabled="false" href="https://instagram.com/opeqeinc/" target="_blank">
                            <span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                            </span>
                            <span class="MuiTouchRipple-root"></span>
                        </a>
                        <a class="MuiButtonBase-root MuiIconButton-root" tabindex="0" aria-disabled="false" href="https://twitter.com/opeqeinc" target="_blank">
                            <span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg></span>
                            <span class="MuiTouchRipple-root"></span>
                        </a>
                        <a class="MuiButtonBase-root MuiIconButton-root" tabindex="0" aria-disabled="false" href="https://facebook.com/opeqe" target="_blank"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path></svg></span>
                            <span class="MuiTouchRipple-root"></span>
                        </a>
                        <a class="MuiButtonBase-root MuiIconButton-root" tabindex="0" aria-disabled="false" href="https://youtube.com/opeqe" target="_blank"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg></span>
                            <span class="MuiTouchRipple-root"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

</div>
    )

};

export default footer;

