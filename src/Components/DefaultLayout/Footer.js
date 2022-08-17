import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer class="footer-area footer-x">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12">
                        <div class="single-footer-widget">
                            <div class="logo">
                                <NavLink exact to="/">
                                    <img src="assets/img/logo/footer-logo.png" alt="Safexpay Logo" class="img-fluid" />
                                </NavLink>
                                <p>To build digital platform infrastructure that will transform the payment and banking needs for every business across the globe.</p>
                            </div>
                            <ul class="social-links">
                                <li><img src="assets/img/footer-img/bg-map.png" class="img-fluid" alt="logo" /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-3 col-4">
                        <div class="single-footer-widget">
                            <h3>PRODUCTS</h3>
                            <ul class="list">
                                <li><NavLink exact to="/payment-gateway">Payment Gateway </NavLink></li>
                                <li><NavLink exact to="/neo-banking">Neo Banking</NavLink></li>
                                <li><NavLink exact to="/payouts">Payouts</NavLink></li>
                                <li><NavLink exact to="/white-label">White Label Platform</NavLink></li>
                                <li><NavLink exact to="/partner-program">Partner Program</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-4">
                        <div class="single-footer-widget">
                            <h3>COMPANY</h3>
                            <ul class="list">
                                <li><NavLink exact to="/about-us">About us</NavLink></li>
                                <li><NavLink exact to="/company-policy">Corporate Policy</NavLink></li>
                                <li><NavLink exact to="/news-room">Newsroom</NavLink></li>
                                <li><NavLink exact to="/faq">FAQ</NavLink></li>
                                <li><NavLink exact to="/culture">Culture</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="copyright-area copy-right">
                    <p class="white-col">Copyright @ 2022 Safexpay All Rights Reserved</p>
                    <ul class="lstn df">
                        <li><a href="https://www.facebook.com/safexpay/" target="_blank" class="white-col footer-social-padd"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/safexpay/" target="_blank" class="white-col footer-social-padd"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://in.linkedin.com/company/safexpay" target="_blank" class="white-col footer-social-padd"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;