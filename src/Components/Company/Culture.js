import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import MetaTags from 'react-meta-tags';
import WOW from 'wowjs';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Culture() {

    const [SlideSetting, SetSlideSetting] = useState([]);
    const customeSlider = useRef();
    const gotoNext = () => {
        customeSlider.current.slickNext()
    }
    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }
    useEffect(() => {
        SetSlideSetting({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        })
    }, [])
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    return (
        <>

            <MetaTags>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="SafexPay-a white-label payment gateway provider for your business. With 100+ payment modes, security compliance like PCI DSS,  24x7 support, 99.9% uptime." />
                <title>Safexpay- Payment Gateway Solutions To Transform Any Kind Of Business</title>
            </MetaTags>
            <section class="comparisons-area culture-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="centered">
                                <i>"Great things in business are never done by one person. They're done by a team of people."</i>
                                <div style={{ 'float': 'right' }}>
                                    <p className="culture-bg-name">Aradhana Gupte</p>
                                    <p className="culture-bg-designation">Chief Culture Officer</p>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div class="container wd-70 pa" style={{ "marginLeft": "16%" }}>
                    <div class="row mt-90min center-box">
                        <div class="col-6  p-30 text-center bxs1 bg-col-white" style={{ "borderRadius": "20px 0px 0px 20px" }}>
                            {/* <!--<div class="row">-->
                                <!--<div class="col-md-12">--> */}
                            <div class="section-title mb-0">
                                <h2><span class="blue-col">300+</span></h2>
                            </div>
                            <h3 class="text-center">Ever Growing Team</h3>
                            {/* <!--</div>-->
                                <!--</div>--> */}
                        </div>
                        <div class="col-6 text-center bxs1 culture-ant" >
                            <div class="row">
                                <div class="col-md-12 p-48 res-pad-56">
                                    <h2 class="text-center white-col">Start Applying</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="comparisons-area pb-70 bg-green pt-150">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">Our Values</span></h2>
                    </div>
                    <div class="row mt-40">
                        <div class="col-4">
                            <div class="p-40 pl-0 padd-20-res">
                                <img src="assets/img/neo-banking/Small-Businesses.png" alt="Instantly open a digital zero balance account" />
                                <h5 class="mt-10 blue-col">Innovation</h5>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/neo-banking/MSME.png" alt="Powerful digital business account" />
                                <h5 class="mt-10 blue-col">Customer Centricity</h5>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/neo-banking/corporates.png" alt="Highly scalable solutions with faster integrations" />
                                <h5 class="mt-10 blue-col">Unity in Diversity</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="p-40 padd-20-res pl-0">
                                <img src="assets/img/neo-banking/expenses-analytics.svg" alt="Receive detailed breakdown/analytics of your expenses." />
                                <h5 class="mt-10 blue-col">Agility</h5>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/neo-banking/Utility-bills.png" alt="Pay Utility Bills Anytime, Anywhere." />
                                <h5 class="mt-10 blue-col">Collaboration</h5>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/neo-banking/virtual-card.png" alt="Instantaneous Activation of Virtual card" />
                                <h5 class="mt-10 blue-col">Equality</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area ptb-70">
                <div class="container">
                    <div class="section-title text-left ml-0">
                        <h2><span class="blue-col">Employee Benefits</span></h2>
                    </div>
                    <div class="row flex-wrap-reverse">
                        <div class="col-md-5 col-sm-12">
                            <div class="row">
                                <div class="col-md-2 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/end-to-end.svg" class="img-fluid" alt="end-to-end" />
                                    </div>
                                </div>
                                <div class="col-md-10 mt-40">
                                    <div class="p-5">
                                        <h5 class="mt-10 blue-col">Stock Options</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/end-to-end.svg" class="img-fluid" alt="end-to-end" />
                                    </div>
                                </div>
                                <div class="col-md-10 mt-40">
                                    <div class="p-5">
                                        <h5 class="mt-10 blue-col">Rewards & Recognition</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/end-to-end.svg" class="img-fluid" alt="end-to-end" />
                                    </div>
                                </div>
                                <div class="col-md-10 mt-40">
                                    <div class="p-5">
                                        <h5 class="mt-10 blue-col">5-day Work Week</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/end-to-end.svg" class="img-fluid" alt="end-to-end" />
                                    </div>
                                </div>
                                <div class="col-md-10 mt-40">
                                    <div class="p-5">
                                        <h5 class="mt-10 blue-col">Performance Bonus</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/end-to-end.svg" class="img-fluid" alt="end-to-end" />
                                    </div>
                                </div>
                                <div class="col-md-10 mt-40">
                                    <div class="p-5">
                                        <h5 class="mt-10 blue-col">Personal Growth<br /> Development</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/end-to-end.svg" class="img-fluid" alt="end-to-end" />
                                    </div>
                                </div>
                                <div class="col-md-10 mt-40">
                                    <div class="p-5">
                                        <h5 class="mt-10 blue-col">Wellness Program</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--<div class="col-md-1 col-xs-hidden col-sm-hidden"></div>--> */}
                        <div class="col-md-7 col-sm-12 right-stick-comp r-0p pr-0 res-top-25p">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-6">
                                    <div class="square mlr-auto res-mt-0 cultureStyleOne">

                                    </div>
                                </div>
                                <div class="col-md-3"></div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="square mlr-auto cultureStyleTwo" >

                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="square mlr-auto cultureStyleThree" >

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="services-area ptb-70 award-bg  mb-20" style={{ 'backgroundColor': "#1A59B2 !important" }}>
                {/* <!--<div class="container-fluid">--> */}
                <div class="container pb-40">
                    {/* <!--<div class="row text-center">--> */}
                    <div class="section-title">
                        <h2><span class="white-col"># Life @ Safexpay</span></h2>
                    </div>
                    <div class="row ">
                        <div class="col-md-1">
                            <button class="carousel-control-prev" type="button" onClick={() => gotoPrev()} data-bs-target="#demo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                        </div>

                        <div class="col-md-10 col-lg-10">
                            <div id="demo" class="carousel slide" data-bs-ride="carousel">
                                {/* <!-- Indicators/dots --> */}
                                {/* <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                                </div> */}
                                {/* <!-- The slideshow/carousel --> */}
                                <div class="carousel-inner">
                                    <Slider {...SlideSetting} ref={customeSlider}>
                                        <div class="carousel-item">
                                            <div class="row ">

                                                <div class="col-md-12">
                                                    <center>
                                                        <img src="assets/img/culture/culture-1.jpeg" alt="Founder Featured in Forbes India" class="d-block" />
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="row ">
                                                <div class="col-md-12">
                                                    <center>
                                                        <img src="assets/img/culture/culture-2.jpeg" alt="" class="d-block" />
                                                    </center>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="carousel-item">
                                            <div class="row ">
                                                <div class="col-md-12">
                                                    <center>
                                                        <img src="assets/img/culture/culture-3.jpeg" alt="" class="d-block" />
                                                    </center>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="carousel-item">
                                            <div class="row ">
                                                <div class="col-md-12">
                                                    <center>
                                                        <img src="assets/img/culture/culture-4.jpeg" alt="" class="d-block" />
                                                    </center>
                                                </div>
                                            </div>

                                        </div>
                                    </Slider>
                                </div>
                                {/* <!-- Left and right controls/icons --> */}


                            </div>
                        </div>
                        <div class="col-md-1">

                            <button class="carousel-control-next" type="button" onClick={() => gotoNext()} data-bs-target="#demo" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        {/* <!--   </div>-->
                            <!--</div>--> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Culture;