import React, { useState, useEffect, useRef } from 'react';
import OdometerShow from '../Other/Odometer/OdometerShow';
import Slider from "react-slick";
import MetaTags from 'react-meta-tags';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {

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
                <meta name="description" content="SafexPay-a white-label payment gateway provider for your business. With 100+ payment modes, security compliance like PCI DSS,  24x7 support, 99.9% uptime." />
                <title>Safexpay- Payment Gateway Solutions To Transform Any Kind Of Business</title>
            </MetaTags>
            <section class="comparisons-area ptb-70">
                <div class="container">
                    <div class="row m-0 align-items-center pb-40">
                        <div class="section-title">
                            <h1 class="text-center fs-60"><span class="blue-col">The joy of doing our best</span>
                            </h1>
                        </div>
                    </div>
                    <div class="row  text-center pb-40">
                        <div class="col-12">
                            <img src="assets/img/about-us/aboutus-banner.png" alt="About us" class="img-fluid" style={{ 'width': "100%" }} />
                        </div>
                    </div>
                </div>
            </section>

            <section class="funfacts-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div class="funfact">
                                <OdometerShow odometerInitialValue="0000" odometerShowValue="2017" odometerFormat="dd" odometerExtraValue="" />
                                <h5 class="mt-10">Safexpay launched</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div class="funfact">
                                <OdometerShow odometerInitialValue="000" odometerShowValue="250" odometerFormat="dd" odometerExtraValue="+" />
                                <h5 class="mt-10">Employees</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div class="funfact">
                                <OdometerShow odometerInitialValue="0" odometerShowValue="5" odometerFormat="dd" odometerExtraValue="" />
                                <h5 class="mt-10">Global offices</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div class="funfact">
                                <OdometerShow odometerInitialValue="00" odometerShowValue="35" odometerFormat="dd" odometerExtraValue="+" />
                                <h5 class="mt-10">Safexpay users</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ptb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <p>We started our journey by creating payment products that allow businesses to accept payments digitally. Over the time, we realised that with best of our intentions, we will never be able to help all the businesses, owing to the size of the market.               </p>
                            <p>In 2018, this realisation led to us creating a white-labelled payment aggregation platform which could be used by other companies wanting to foray into digital payments across the world.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <p>They could now benefit from our off the shelf platform and the knowledge base of our vastly experienced team. We are now the Leader in this space and multiple companies across the world are happy to use our platform.  </p>
                            <p> In 2019 we started focusing on use case-based product structuring catering to housing societies, payment collection links through Email, SMS & QR, form builder for quick enrolments with merchants, subscription payments etc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area ptb-70 bg-col-gray">
                <div class="container-fluid">
                    <div class="container pb-40">
                        <div class="row">
                            <div class="col-md-6  ">
                                <div class="section-title ">
                                    <h2 class="text-left"><span class="blue-col">Safexpay milestones</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-1 col-lg-1">
                                <button class="carousel-control-prev" type="button" onClick={() => gotoPrev()} data-bs-target="#demo" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                            </div>
                            <div class="col-md-10 col-lg-10">
                                <div id="demo" class="carousel slide ht-200 ht-300" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <Slider {...SlideSetting} ref={customeSlider}>
                                            <div class="carousel-item active" id="one">
                                                <div class="row padd-20">
                                                    <div class="col-md-4">
                                                        <div class="row">
                                                            <div class="col-md-2 col-sm-2 col-lg-2">
                                                                <h3 class="blue-col">2022</h3>
                                                            </div>
                                                            <div class="col-lg-1 col-md-2"></div>
                                                            <div class="col-md-6  col-lg-8  res-none bg-blue-press carousel-css"></div>
                                                        </div>
                                                        <p>Reached 5Lacs+ merchants and becomes the 1st Indian fintech to invest in European company</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row">
                                                            <div class="col-md-2 col-sm-2 col-lg-2">
                                                                <h3 class="blue-col">2021</h3>
                                                            </div>
                                                            <div class="col-lg-1 col-md-2"></div>
                                                            <div class="col-md-6  col-lg-8  res-none bg-blue-press carousel-css"></div>
                                                        </div>
                                                        <p>Reached the milestone of acquiring 4Lac+ merchants</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row">
                                                            <div class="col-md-2 col-sm-2 col-lg-2">
                                                                <h3 class="blue-col">2020</h3>
                                                            </div>
                                                            <div class="col-lg-1 col-md-2"></div>
                                                            <div class="col-md-6  col-lg-8  res-none bg-blue-press carousel-css"></div>
                                                        </div>
                                                        <p>Global Expansion starting with UAE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item padd-15" id="two">
                                                <div class="row padd-20">
                                                    <div class="col-md-4">
                                                        <div class="row">
                                                            <div class="col-md-2 col-sm-2 col-lg-2">
                                                                <h3 class="blue-col">2019</h3>
                                                            </div>
                                                            <div class="col-lg-1 col-md-2"></div>
                                                            <div class="col-md-6  col-lg-8  res-none bg-blue-press carousel-css"></div>
                                                        </div>
                                                        <p>Payout Product Launch</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row">
                                                            <div class="col-md-2 col-sm-2 col-lg-2">
                                                                <h3 class="blue-col">2018</h3>
                                                            </div>
                                                            <div class="col-lg-1 col-md-2"></div>
                                                            <div class="col-md-6  col-lg-8  res-none bg-blue-press carousel-css"></div>
                                                        </div>
                                                        <p>Launched the Whitelabel Platform</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row">
                                                            <div class="col-md-2 col-sm-2 col-lg-2">
                                                                <h3 class="blue-col">2017</h3>
                                                            </div>
                                                            <div class="col-lg-1 col-md-2"></div>
                                                            <div class="col-md-6  col-lg-8  res-none bg-blue-press carousel-css"></div>
                                                        </div>
                                                        <p>Marks the beginning of Safexpay</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-1 col-lg-1">

                                <button class="carousel-control-next" type="button" onClick={() => gotoNext()} data-bs-target="#demo" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6  ptb-70 text-center bg-blue-press">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-6">
                                    <h1 class="text-center lh-65"><span class=" white-col"><b>Our vision</b></span> </h1>
                                    <p class="white-col">To build digital platform infrastructure that will transform the payment and banking needs for every business across the globe.</p>
                                </div>
                                <div class="col-md-3"></div>
                            </div>
                        </div>
                        <div class="col-md-6 text-center bg-blue-press ptb-84">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-6">
                                    <h1 class="text-center lh-65"><span class=" white-col"><b>Our mission</b></span> </h1>
                                    <p class="white-col">Accelerate economic growth of digital platform & design APIs for every business.</p>
                                </div>
                                <div class="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="comparisons-area ptb-70">
                <div class="container wd-77">
                    <div class="section-title">
                        <h2 class="text-center"><span class="blue-col">Safexpay high performance team </span>
                        </h2>
                    </div>
                    <div class="row mb-40">
                        <div class="col-md-12">
                            <div class="row center-box bxs flex-wrap-reverse">
                                <div class="col-md-6 p-40 ">
                                    <div class="">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h3 class=" blue-col">Ravi Gupta </h3>
                                                <h5 class="blue-col">Founder & CEO</h5>
                                                <ul class="lst_none ttm-list-style-icon pl-0 mt-20">
                                                    <li><i class="fas fa-caret-right"></i>Over 12 years of experience in payment gateway, digital wallet, alliances in ecommerce </li>
                                                    <li><i class="fas fa-caret-right"></i>Ex-VP Product & Alliances, EBS-Transactions increased from 800mn a month to INR 3bn a month and grew banking alliances from 18 to 40+ within 20 months.</li>
                                                    <li><i class="fas fa-caret-right"></i> Ex-Product head, Techprocess- Integrated 40+financial institutions, onboarded 5000 + merchants with GTV of INR 25bn
                                                        MBA from ICFAI, Mumbai, B.E from K.N.M.I.E.T
                                                    </li>
                                                </ul>
                                                {/* <!--<p class="mb-8">-->
                                                    <!--   Over 12 years of experience in payment-->
                                                    <!--   gateway, digital wallet, alliances in-->
                                                    <!--   ecommerce<br>-->
                                                        <!--   Ex-VP Product &amp; Alliances, EBS-Transactions-->
                                                        <!--   increased from 800mn a month to INR 3bn-->
                                                        <!--   a month and grew banking alliances from-->
                                                        <!--   18 to 40+ within 20 months.<br>-->
                                                            <!--   Ex-Product head, Techprocess- Integrated-->
                                                            <!--   40+financial institutions, onboarded 5000 +-->
                                                            <!--   merchants with GTV of INR 25bn<br>-->
                                                                <!--   MBA from ICFAI, Mumbai, B.E from-->
                                                                <!--   K.N.M.I.E.T-->
                                                                <!--</p>--> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 pr-0 pl-0">
                                    <img src="assets/img/about-us/Ravi-Gupta.jpg" class="img-fluid mr-20 " alt="Ravi Gupta" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-40">
                        <div class="col-md-12">
                            <div class="row center-box bxs">
                                <div class="col-md-6 pl-0 pr-0">
                                    <img src="assets/img/about-us/Swapnil-Jambhale.jpg" class="img-fluid" alt="Swapnil Jambhale" width="100%" />
                                </div>
                                <div class="col-md-6 p-40">
                                    <div class="">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h3 class=" blue-col">Swapnil Jambhale</h3>
                                                <h5 class="blue-col">Co-Founder & COO</h5>
                                                <ul class="lst_none ttm-list-style-icon pl-0 mt-20">
                                                    <li><i class="fas fa-caret-right"></i> Over 15 years of deep understanding in banking technology with a unique blend of business & technology.</li>
                                                    <li><i class="fas fa-caret-right"></i> Ex-GM Digital Banking had been part of the launch of some of key strategic payments initiatives of NPCI such as UPI, BBPS, RuPay JCB Global card, RuPay Contactless card etc.</li>
                                                    <li><i class="fas fa-caret-right"></i> Ex-Business Manager, Infrasoft Technologies - Projects managed 100+ financial institutions</li>
                                                    <li><i class="fas fa-caret-right"></i> Postgraduate Diploma in Digital from Emeritus in Collaboration with Columbia Business School & MIT Management Executive Education, B.E.Information Technology</li>
                                                </ul>
                                                {/* <!--<p class="mb-8">-->
                                                            <!--   Over 15 years of deep understanding in-->
                                                            <!--   banking technology with a unique blend-->
                                                            <!--   of business & technology.<br>-->
                                                                <!--   Ex-GM Digital Banking had been part of the-->
                                                                <!--   launch of some of key strategic payments-->
                                                                <!--   initiatives of NPCI such as UPI, BBPS, RuPay-->
                                                                <!--   JCB Global card, RuPay Contactless card etc.<br>-->
                                                                    <!--   Ex-Business Manager, Infrasoft Technologies - Projects-->
                                                                    <!--   managed 100+ financial institutions<br>-->
                                                                        <!--   Postgraduate Diploma in Digital from-->
                                                                        <!--   Emeritus in Collaboration with Columbia-->
                                                                        <!--   Business School & MIT Management-->
                                                                        <!--   Executive Education, B.E.Information-->
                                                                        <!--   Technology-->
                                                                        <!--</p>--> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="account-create-area ptb-70 bg-col-gray">
                <div class="container">
                    <div class="row center-box">
                        <div class="col-lg-4 col-md-4 col-sm-12 p-0 ">
                            <div class="section-title m-20">
                                <h2 class="text-left res-padding"><span class="blue-col">Safexpay<br /> Global<br />Workspaces</span></h2>
                            </div>
                            {/* <!-- <h5 class="m-20 text-left res-padding">Safexpay has headquarter in Mumbai and our presence across the globe.</h5>-->
                                    <!--<h5 class="m-20 text-left res-padding">Our presence across the globe.</h5>--> */}
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-12 pb-40">
                            <div>
                                <img src="assets/img/about-us/map.png" class="img-fluid" alt="Worldwide Network" usemap="#map_example" />
                                <map name="map_example"> </map>
                                <area href="https://facebook.com" alt="Facebook" target="_blank" shape='poly' coords="30,100, 140,50, 290,220, 180,280" />
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row bxs p-40 loc-box-bg padd-20-res">
                            <div class="col-md-6  p-20 loc-box1 loc-box no-bor-res">
                                <h5 class="text-center mt-20 blue-col">United Arab Emirates</h5>
                                {/* <!--<p class="blue-col text-center">Unit GA-00-SZ-L1-RT-208, Level 1, Gate Avenue - South Zone,
                                            Dubai International Financial Centre, Dubai
                                        </p>-->
                                        <!-- <center>
                                            <a href="#" class="sky-blue-col">Show on map <i class="fas fa-arrow-right transform-rotate"></i></a>
                                        </center> --> */}
                            </div>
                            <div class="col-md-6 p-20  loc-box no-bor-res">
                                <h5 class="text-center mt-20 blue-col">Qatar</h5>
                                {/* <!-- <p class="blue-col text-center">
                                            9th Floor, QFC Tower 1,
                        West Bay and P.O. Box 23245, Doha-->
                                            <!-- <center>
                                                <a href="#" class="sky-blue-col">Show on map <i class="fas fa-arrow-right transform-rotate"></i></a>
                                            </center> --> */}
                            </div>
                            <div class="row pb-20">
                                <div class="col-md-4 p-20 loc-box2 no-bor-res">
                                    <h5 class="text-center mt-20 blue-col">Kingdom of Saudi Arabia</h5>
                                    {/* <!-- <p class="blue-col text-center"> 718, Lodha Supremous-2,
                                                Wagle Estate Thane-West
                                            </p>--> */}
                                </div>
                                <div class="col-md-4  p-20 loc-box2 no-bor-res">
                                    {/* <!-- <h5 class="text-center mt-20 white-col">UAE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span class="sly-blue-col">|</span>
                                            </h5> --> */}
                                    <h5 class="text-center mt-20 blue-col">India
                                    </h5>
                                    {/* <!--<p class="blue-col text-center"> 879, Udyog Vihar, Phase V,
                                                Gurgoan 0122016
                                            </p>--> */}
                                </div>
                                <div class="col-md-4">
                                    <h5 class="text-center mt-20 blue-col">Srilanka</h5>
                                    {/* <!--<p class="blue-col text-center">Level 35, World Trade Centre,
                                                West Tower, Colombo 01
                                            </p>--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;