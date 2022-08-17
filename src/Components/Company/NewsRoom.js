import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import MetaTags from 'react-meta-tags';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewsRoom() {

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
    return (
        <>

            <MetaTags>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Safexpay is UAE's best payment gateway provider. Take a look at our newsroom and check out what the media has to say about our exceptional services." />
                <title>Safexpay's Newsroom- Articles and Media</title>
            </MetaTags>
            <section class="services-area  ptb-70">
                <div class="container">
                    <div class="overview-box nav-tabs">
                        {/* <!--<div class="overview-content">--> */}
                        <div class="content " >
                            <div class="hero-content">
                                <h1 class="lh-65 ptb-70"><span class="blue-col">Newsroom</span>
                                </h1>
                            </div>
                            <div class="row pb-40 res-padding">
                                <div class="col-md-12 px-20 ">
                                    <img src="assets/img/press-media/business-fame.png " class="m-0 img-fluid" alt="The Business Fame" />
                                    <h5 class="mt-20"><span class="blue-col"><b>SafexPay : Offers White-Label payment gateway solutions</b></span> &nbsp;  | &nbsp; April 12, 2022</h5>
                                    <p class="mt-20">SafexPay is a unique payment gateway provider, It delivers disruptive technological solutions like E-Wallet & M-Commerce platform, Prepaid Card Insurance Platform, QR Code Based Platform, and White-Label Platform.</p>
                                    <a href="https://thebusinessfame.com/safexpay-offers-white-label-payment-gateway-solutions/ " class="mt-20  sky-blue-col" target="_blank">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area  pb-70">
                <div class="container">
                    <div class="overview-box nav-tabs">
                        {/* <!--<div class="overview-content">--> */}
                        <div class="content " >
                            <div class="row pb-40 res-padding">
                                <div class="col-md-12 px-20 ">
                                    <img src="assets/img/press-media/ibs2.png " class="m-0 img-fluid" alt="IBS Intelligence Global FinTech Perspectives" />
                                    <h5 class="mt-20"><span class="blue-col"><b>Safexpay, a FinTech startup raises $6mn bringing valuation to $100 million</b></span>  &nbsp; | &nbsp;  April 9, 2022</h5>
                                    <p class="mt-20">Safexpay, a Mumbai-based FinTech start-up has raised $6 million in funding from two investors at a valuation of $ 100 million. </p>
                                    <a href="https://ibsintelligence.com/ibsi-news/safexpay-a-fintech-startup-raises-6mn-bringing-valuation-to-100-million/ " class="mt-20  sky-blue-col" target="_blank">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area  pb-70">
                <div class="container">
                    <div class="overview-box ">
                        {/* <!--<div class="overview-content">--> */}
                        <div class="content " >
                            <div class="row pb-40 res-padding">
                                <div class="col-md-12 px-20 ">
                                    <img src="assets/img/press-media/world-payments.png" class="m-0 img-fluid" alt="World Payments Congress Awards" />
                                    <h5 class="mt-20"><span class="blue-col">Biography</span>   |  March 21, 2022</h5>
                                    <p class="mt-20">Payment expert with 11+years of experience in Payment Gateway, Digital wallet ,lending,Acquiring & E-commerce industry…  </p>
                                    <a href="https://www.asiaretailcongress.com/World_Payment_Congress/ravi_gupta.html " class="mt-20  sky-blue-col" target="_blank">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area ptb-70 bg-col-gray">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">In the media</span></h2>
                    </div>
                    <div class="row ">
                        <div class="col-6 col-md-3   p-40  text-center">
                            <div class="bg-col-white p-30 padd-zero-res">
                                <img src="assets/img/press-media/forbes.png" class="img-fluid" alt="Forbes India" />
                            </div>
                            <h5 class="mt-20 blue-col text-left">“India’s 100 great people Managers 2020”</h5>
                        </div>
                        <div class="col-6 col-md-3 p-40  text-center">
                            <div class="bg-col-white p-30 padd-zero-res">
                                <img src="assets/img/press-media/FTH.png" class="img-fluid" alt="Qatar FinTech Hub" />
                            </div>
                            <h5 class="mt-20  blue-col text-left">“Part of Qatar startup Accelerator”</h5>
                        </div>
                        <div class="col-6 col-md-3 p-40  text-center">
                            <div class="bg-col-white p-30 padd-zero-res">
                                <img src="assets/img/press-media/RISE.png" class="img-fluid" alt="Rise" />
                            </div>
                            <h5 class="mt-20 blue-col text-left">“Showcase Invitation”</h5>
                        </div>
                        <div class="col-6 col-md-3 p-40  text-center">
                            <div class="bg-col-white p-30 padd-zero-res">
                                <img src="assets/img/press-media/Money Asia.png" class="img-fluid" alt="Money Asia 2020" />
                            </div>
                            <h5 class="mt-20 blue-col text-left">“Showcase Invitation”</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-3  p-40 text-center">
                            <div class="bg-col-white p-30 padd-zero-res">
                                <img src="assets/img/press-media/NFA post.png" class="img-fluid" alt="NFA Post" />
                            </div>
                            <h5 class="mt-20 blue-col text-left">“35 Indian B2B startups Shortlist for bridge Canada program”</h5>
                        </div>
                        <div class="col-6 col-md-3 p-40  text-center">
                            <div class="bg-col-white p-30 padd-zero-res">
                                <img src="assets/img/press-media/Silicon india.png" class="img-fluid" alt="Silicon India" />
                            </div>
                            <h5 class="mt-20 blue-col text-left">“35 Selected as top-10 Promising digital wallet Companies in India”</h5>
                        </div>
                        <div class="col-6 col-md-3 p-40  text-center">
                            <div class="bg-col-white p-30 padd-zero-res">
                                <img src="assets/img/press-media/TIEDS-IIT.png" class="img-fluid" alt="Winner of TIEDS" />
                            </div>
                            <h5 class="mt-20 blue-col text-left">“Winner of. TIEDS-IITRoorkee Accelerator Program”</h5>
                        </div>
                    </div>
                </div>
            </section>


            <section class="services-area ptb-70 award-bg">
                {/* <!--<div class="container-fluid">--> */}
                <div class="container pb-40">
                    {/* <!--<div class="row text-center">--> */}
                    <div class="section-title">
                        <h2><span class="blue-col">Awards</span></h2>
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

                                                <div class="col-md-7">
                                                    <center>
                                                        <img src="assets/img/press-media/Award1.png" alt="Founder Featured in Forbes India" class="d-block" />
                                                    </center>
                                                </div>
                                                <div class="col-md-5">
                                                    <center>
                                                        <img src="assets/img/press-media/Award2.png" alt="FinTech Festival India" class="d-block" />
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="row ">
                                                <div class="col-md-7">
                                                    <center>
                                                        <img src="assets/img/press-media/Award3.jpg" alt="" class="d-block" />
                                                    </center>
                                                </div>
                                                <div class="col-md-5">
                                                    <center>
                                                        <img src="assets/img/press-media/Award4.jpg" alt="" class="d-block" />
                                                    </center>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="carousel-item">
                                            <div class="row ">
                                                <div class="col-md-6">
                                                    <center>
                                                        <img src="assets/img/press-media/Award5.jpg" alt="" class="d-block" />
                                                    </center>
                                                </div>
                                                <div class="col-md-6">
                                                    <center>
                                                        <img src="assets/img/press-media/Award6.jpg" alt="" class="d-block" />
                                                    </center>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="carousel-item">
                                            <div class="row ">
                                                <div class="col-md-7">
                                                    <center>
                                                        <img src="assets/img/press-media/Award7.jpg" alt="" class="d-block" />
                                                    </center>
                                                </div>
                                                <div class="col-md-5">
                                                    <center>
                                                        <img src="assets/img/press-media/Award8.jpg" alt="" class="d-block" />
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
export default NewsRoom;