import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import OdometerShow from '../Other/Odometer/OdometerShow';
import ContactUsModel from '../Other/ContactUsModel/ContactUsModel';
import Slider from "react-slick";
import MetaTags from 'react-meta-tags';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

    const [openModel, SetopenModel] = useState(false)

    const ShowModel = (e) => {
        e.preventDefault();
        SetopenModel(true)
    }
    const CloseModel = () => {
        SetopenModel(false)
    }

    // Tab start
    const [Active, SetActive] = useState("");
    const [Active2, SetActive2] = useState("");
    const [Active3, SetActive3] = useState("");
    const [ref, inView] = useInView({
    });
    const [ref2, inView2] = useInView({
    });
    const [ref3, inView3] = useInView({
    });

    useEffect(() => {
        if (inView) {
            SetActive("active")
            SetActive2("")
            SetActive3("")
        } else {
            SetActive("")
        }
    });
    useEffect(() => {
        if (inView2) {
            SetActive2("active")
            SetActive("")
            SetActive3("")
        } else {
            SetActive2("")
        }
    })
    useEffect(() => {
        if (inView3) {
            SetActive3("active")
            SetActive("")
            SetActive2("")
        } else {
            SetActive3("")
        }
    })
    // Tab end

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
        <div>
            <MetaTags>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="Fintech Abu Dhabi, Fintech UAE, Fintech Companies Dubai,Fintech Middle East,Payment Solution,Payment Solution Provider,banking payment solutions,education payment solutions" />
                <meta name="description" content="Safexpay offers the widest range of payment options such as Credit cards, Debit cards, Netbanking , UPI, EMI, International cards etc. for your customers." />
                <title>A Perfect Online Payment Solution - Safexpay</title>
            </MetaTags>
            <div className="banner-section">
                <div className="container">
                    <div className="row m-0 align-items-center">
                        <div className="col-lg-3 col-md-12 p-0 elements-left">
                            <div className="invoicing-image">
                                <div className="main-image">
                                    <img src="assets/img/home-img/Integration-plug-in.png" className="vis-hid filter-blue home-Integration-plug-in-res wow animate__animated animate__fadeInLeft img-fluid" alt="Integration Plugin" />
                                    <img src="assets/img/home-img/API-Integration.png" className="vis-hid filter-blue1 home-API-Integration-res wow animate__animated animate__fadeInLeft img-fluid" alt="API Integration Kit" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="hero-content">
                                <h1 className="text-center lh-65 blue-col">Swifter. Simpler. Safer.</h1>
                                <h5 className="text-center gray-col mt-20 fs-18 mb-40">Payments platform tailored to your business.</h5>
                                <center>
                                    <a href="#" className="cta cta-popup cta-home-padd" id="cta-popup" data-toggle="modal" data-bs-target="#myModal" onClick={ShowModel}>
                                        Contact Us
                                    </a>
                                </center>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 p-0 elements-right">
                            <div className="invoicing-image">
                                <div className="main-image">
                                    <img src="assets/img/home-img/QR-code.png" className="vis-hid filter-blue1 home-QR-code-res wow animate__animated animate__fadeInRight img-fluid" alt="Your QR code- Scan and Pay" />
                                    <img src="assets/img/home-img/payment-card.png" className="vis-hid filter-blue home-payment-card-res wow animate__animated animate__fadeInRight img-fluid" alt="Payment Cards" />
                                    <img src="assets/img/home-img/card.png" className="vis-hid filter-green home-card-res wow animate__animated animate__fadeInRight img-fluid" alt="Card" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="funfacts-area ptb-70 mt-60 funfacts-res">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div class="funfact">
                                <OdometerShow odometerInitialValue="00.00" odometerShowValue="99.99" odometerFormat="(dd).dd" odometerExtraValue="%" />
                                <p>Uptime</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div class="funfact">
                                <OdometerShow odometerInitialValue="00" odometerShowValue="90" odometerFormat="d" odometerExtraValue="%" />
                                <p>Success Rate</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div class="funfact">
                                <OdometerShow odometerInitialValue="00" odometerShowValue="247" odometerFormat="ddxd" odometerExtraValue="" />
                                <p>Customer Support</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div class="funfact">
                                <OdometerShow odometerInitialValue="0" odometerShowValue="35" odometerFormat="d" odometerExtraValue="+" />
                                <p>International Currencies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="upper-globe"></section>

            <section class="services-area m-4s redefine-res-padd" id="Payment-Gateway">
                <div class="section-title">
                    <h2><span class="blue-col">Redefine your payments experience</span></h2>
                </div>
            </section>

            <article class="container">
                <ul class="nav nav-tabs home-page home-page-tabs title center-box" id="primary-navwrapper">
                    <li class="pay-head" role="presentation">
                        <a href="#Payment-Gateway" className={Active}>Payment Gateway</a>
                    </li>
                    <li class="remi-head" role="presentation">
                        <a href="#Payouts" className={Active2}>Payouts</a>
                    </li>
                    <li class="cont-head" role="presentation">
                        <a href="#Neo-Banking" className={Active3}>Neo Banking</a>
                    </li>
                </ul>
                <div class="container ptb-40-lr-0" data-color="#16A085">
                    <div class="row  flex-wrap-reverse">
                        <div class="col-md-5">
                            <h5 class="blue-col mt-20"><b>Payment Gateway</b></h5>
                            <div class="row mt-50">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/pay3.svg" alt="Quick and seamless digital onboarding" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10">
                                    <h5 class="blue-col">Quick and seamless digital<br /> onboarding</h5>
                                    <p>Start collecting payments with quick and hassle-free activation.</p>
                                </div>
                            </div>
                            <div class="row mt-30">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/pay2.svg" alt="Most comprehensive payments options" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10">
                                    <h5 class="blue-col">Most comprehensive payments options</h5>
                                    <p>Increase conversions on your website with 100+ payment options.</p>
                                </div>
                            </div>
                            <div class="row mt-30" id="Payouts">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/pay51.svg" alt="Whitelabel capabilities" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10">
                                    <h5 class="blue-col">Whitelabel capabilities</h5>
                                    <p>Connect with the customers through your own branded payment gateway.</p>
                                </div>
                            </div>
                            <div class="row mt-30">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-10" >
                                    <a href="Payment-gateway.html" class="cta"><img src="assets/img/logo/X.png" class="img-fluid" alt="Experience Payment Platform" ref={ref} />perience Payment Platform</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1 col-xs-hidden col-sm-hidden"></div>
                        <div class="col-md-6 pr">
                            <img src="assets/img/home-img/payment-gateway.png" class="home-pg-girl img-fluid" alt="Activate your account" />
                            <center>
                                <img src="assets/img/mobile/home-img/PG.png" class="home-pg-girl1 img-fluid" alt="To sign up, enter your details and register" title="To sign up, enter your details and register" />
                            </center>
                            <img src="assets/img/home-img/sign-up.png" class="filter-green home-sign-up-res  img-fluid wow animate__animated animate__fadeInUp" alt="Enter your details and register " />
                            <img src="assets/img/home-img/account-activated.png" class="filter-green home-account-activated-res img-fluid wow animate__animated animate__fadeInUp" alt="Activate your account" />
                        </div>
                    </div>
                </div>
                <div class="container ptb-40-lr-0" data-color="#C0392B">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="assets/img/home-img/send-money.png" class="second-box-plus-res img-fluid wow animate__animated animate__fadeInUp filter-blue pa" alt="send-money.png" />
                            <img src="assets/img/home-img/add-beneficiary.png" class="second1-box-col-pay-res img-fluid wow animate__animated animate__fadeInUp pa" alt="add-beneficiary" />
                            <img src="assets/img/home-img/money-received.png" class="home-money-received-res img-fluid" alt="money-received" />
                            <center>
                                <img src="assets/img/mobile/home-img/payout.png" class="home-money-received-res1 img-fluid" alt="money-received" />
                            </center>
                        </div>
                        <div class="col-md-1 col-xs-hidden col-sm-hidden"></div>
                        <div class="col-md-5">
                            <h5 class="blue-col mt-20"><b>Payouts</b></h5>
                            <div class="row mt-30">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/r1.svg" alt="r1" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10">
                                    <h5 class="blue-col">Instant Bulk Payments</h5>
                                    <p>Disburse instantly to multiple beneficiaries</p>
                                </div>
                            </div>
                            <div class="row mt-30">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/r2.svg" alt="r2" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10" id="Neo-Banking">
                                    <h5 class=" blue-col">High Compatibility for Disbursal</h5>
                                    <p>Seamless integration with comprehensive ERP solutions in the market </p>
                                </div>
                            </div>
                            <div class="row mt-30">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/r4.svg" alt="r4" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10" id="three">
                                    <h5 class="blue-col">Quickest Beneficiary Addition</h5>
                                    {/* <!--<p>No cooling period, instant approval, beneficiary name verification with banking ecosystem</p>--> */}
                                    <p>No Cooling period, instant beneficiary name verification from banking ecosystem</p>
                                </div>
                            </div>
                            {/* <!--<div class="row mt-30">-->
                                                    <!--   <div class="col-md-2">-->
                                                        <!--   </div>-->
                                                    <!--   <div class="col-md-10" >-->
                                                        <!--      <a href="Payouts.html" class="sky-blue-col">Xperience Payouts</a>-->
                                                        <!--   </div>-->
                                                    <!--</div>--> */}
                            <div class="row mt-30">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-10">
                                    <a href="Payouts.html" class="cta"><img src="assets/img/logo/X.png" class="img-fluid" alt="Experience Neo Bank" ref={ref2} />perience Payouts</a>
                                </div>
                            </div>
                        </div>
                        {/* <!--<div class="col-md-1 col-xs-hidden col-sm-hidden"></div>--> */}
                    </div>
                </div>
                <div class="container ptb-40-lr-0" data-color="#8E44AD">
                    <div class="row flex-wrap-reverse">
                        {/* <!--<div class="col-md-1 col-xs-hidden col-sm-hidden"></div>--> */}
                        <div class="col-md-5">
                            <h5 class="blue-col mt-20"><b>Neo Banking</b></h5>
                            <div class="row mt-50">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/neo1.svg" alt="Smart expense analytics" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10">
                                    <h5 class="blue-col">Smart expense analytics</h5>
                                    <p>Acquire in-depth payment insights with our comprehensive dashboard.</p>
                                </div>
                            </div>
                            <div class="row mt-30">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/neo2.svg" alt="Instant virtual card activation" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10">
                                    <h5 class="blue-col">Instant virtual card activation</h5>
                                    <p>With zero wait time, gain instant access to virtual cards.</p>
                                </div>
                            </div>
                            <div class="row mt-30">
                                <div class="col-2 col-s-2">
                                    <img src="assets/img/home-img/neo3.svg" alt="Best debit card alternative for business spends" class="img-fluid" />
                                </div>
                                <div class="col-10 col-s-10">
                                    <h5 class="blue-col">Best debit card alternative for business spends</h5>
                                    <p>Achieve your Financial milestones with our insightful management tools.</p>
                                </div>
                            </div>
                            <div class="row mt-30">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-10">
                                    <a href="neo-banking.html" class="cta"><img src="assets/img/logo/X.png" class="img-fluid" alt="Experience Neo Bank" ref={ref3} />perience Neo Bank</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1 col-xs-hidden col-sm-hidden"></div>
                        <div class="col-md-6 pr">
                            <img src="assets/img/home-img/neo-banking-card.png" class="filter-green neo-bank-pay-res img-fluid wow animate__animated animate__fadeInUp pa" alt="Neo banking card" />
                            <img src="assets/img/home-img/add-money.png" class="filter-green home-add-money-res img-fluid wow animate__animated animate__fadeInUp" alt="Add money" />
                            <img src="assets/img/home-img/send-money-neo.png" class="filter-green home-send-money-neo-res img-fluid wow animate__animated animate__fadeInUp" alt="Sent money" />
                            <img src="assets/img/home-img/neo-banking.png" class="home-man-res img-fluid" alt="Neo bank, send money and add money" />
                            <center>
                                <img src="assets/img/mobile/home-img/neobank.png" class="home-man-res1 img-fluid" alt="Neo bank, send money and add money" title="Neo bank, send money and add money" />
                            </center>
                        </div>
                    </div>
                </div>
            </article>

            <section class="services-area ptb-70 bg-col-gray">
                <div class="container">
                    <div class="section-title text-left ml-0">
                        <h2><span class="blue-col">Features </span></h2>
                    </div>
                </div>
                <div class="container">
                    <div class="row flex-wrap-reverse">
                        <div class="col-md-6 col-sm-12">
                            <div class="row ">
                                <div class="col-6">
                                    <div class="p-30 res-padding  pl-0">
                                        <img src="assets/img/payouts/end-to-end.svg" class="img-fluid" alt="Intuitive, insightful dashboards" />
                                        <h5 class="mt-20 blue-col">Intuitive, insightful dashboards</h5>
                                        <p>Understand transactional trends to scale your business.</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="p-30 res-padding pl-0">
                                        <img src="assets/img/payouts/scale.svg" class="img-fluid" alt="Multi-platform, multi-plugin compatibility" />
                                        <h5 class="mt-20 blue-col">Multi-platform, <br />multi-plugin compatibility</h5>
                                        <p>Best in class uptime of 99.9%.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-40">
                                <div class="col-6">
                                    <div class="p-30 res-padding  pl-0">
                                        <img src="assets/img/payouts/console.svg" class="img-fluid" alt=" million+ transactions per day" />
                                        <h5 class="mt-20 blue-col">1 million+ <br />transactions per day</h5>
                                        <p>Robust digital infrastructure to cater upto 10 Mn+ transactions per day.</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="p-30 res-padding pl-0">
                                        <img src="assets/img/payouts/scheduled.svg" class="img-fluid" alt="Cloud agnostic support" />
                                        <h5 class="mt-20 blue-col">Cloud agnostic <br />support</h5>
                                        <p>Consistent Performance even while migrating between platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 right-stick-comp r-0p pr-0">
                            <div class="invoicing-image fr funfacts-res">
                                <div class="main-image">
                                    <img src="assets/img/payouts/pc.png" class="home-pc-res img-fluid" alt="Safexpay Dashboard- Transactions, Refunds, Transaction Details" />
                                    <img src="assets/img/mobile/home-img/features.png" class="home-pc-res1 pr img-fluid mb-60" alt="Transactions- Details, Total Amount, Avg Payment Amount, Total Transactions." title="Transactions- Details, Total Amount, Avg Payment Amount, Total Transactions. " />
                                    <img src="assets/img/home-img/transaction.png" class="filter-blue home-transaction-res wow animate__animated animate__fadeInUp img-fluid" alt="Transactions - Total Amount " />
                                    <img src="assets/img/home-img/transaction-details.png" class="filter-green home-transaction-details-res wow animate__animated animate__fadeInUp img-fluid" alt="Transaction Details- Amount and Count" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="services-area ptb-70">
                <div class="container">
                    <div class="row res-padding">
                        <div class="col-md-4">
                            <div class="section-title">
                                <h2 class="text-left pt-10p"><span class="blue-col">Thousands of businesses trust us </span></h2>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-4">
                                    <div>
                                        <center>
                                            <img src="assets/img/home-page-brands/shell.png" alt="Shell" class="img-fluid" />
                                        </center>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <center>
                                            <img src="assets/img/home-page-brands/imoney.png" alt="i-Money" class="img-fluid" />
                                        </center>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <center>
                                            <img src="assets/img/home-page-brands/Melorra-Logo.png" alt="Melorra Logo" class="img-fluid" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-20">
                                <div class="col-4">
                                    <div>
                                        <center>
                                            <img src="assets/img/home-page-brands/quickwork.png" alt="Quickwork Logo" class="img-fluid" />
                                        </center>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <center>
                                            <img src="assets/img/home-page-brands/magnati.png" width="150px;" alt="Magnati Logo" class="img-fluid" />
                                        </center>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <center>
                                            <img src="assets/img/home-page-brands/mswipe.png" alt="mswipe Logo" class="img-fluid" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feedback-area ptb-70 bg-testimonial">
                <div class="container">
                    <div class="section-title mb-0">
                        <h2><span class="blue-col">Trusted by the Best</span></h2>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="demo" class="carousel slide ht-350 ht-500" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <Slider {...SlideSetting} ref={customeSlider}>
                                        <div class="carousel-item active" id="one">
                                            <div class="row padd-20">
                                                <div class="col-md-7 mlr-auto" >
                                                    <div class="">
                                                        <div class="row padd-20">
                                                            <div class="col-md-2">
                                                                <img src="assets/img/client-image/Umesh Arya.png" alt="Client Image" class="bor-rad-50p img-fluid" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <h5 class="blue-col">Umesh Arya</h5>
                                                                <span class="blue-col">IT Head</span><br />
                                                                {/* <!--<span class="blue-col">PC Jeweller Ltd</span>--> */}
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <p>Customer Support at Safexpay is prompt, courteous, and extremely helpful. Whenever I run into a problem, the team is always there with a prompt solution. I've found their swift customer service to be amazing and has been helpful in resolving my concerns.
                                                                </p>
                                                                <img src="assets/img/home-page-brands/pcj.png" alt="PC Jeweller Logo" class="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item padd-15" id="two">
                                            <div class="row padd-20">
                                                <div class="col-md-7 mlr-auto" >
                                                    <div class="">
                                                        <div class="row padd-20">
                                                            <div class="col-md-10">
                                                                <h5 class="blue-col">Mukesh Kumar</h5>
                                                                <span class="blue-col">APO</span><br />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <p>We at Railway Recruitment Cell Northern Railway hereby state that during the online application for engagement of Act Apprentices, we have availed services of Safexpay’s Payment Gateway and duly appreciate the services for its exemplary features. We are highly pleased as their services has benefitted significantly due to the excellent services rendered by your team.
                                                                </p>
                                                                <img src="assets/img/home-page-brands/railway.png" alt="Indian Railway Logo" class="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item padd-15" id="three" >
                                            <div class="row padd-20">
                                                <div class="col-md-7 mlr-auto" >
                                                    <div class="">
                                                        <div class="row padd-20">
                                                            <div class="col-md-2">
                                                                <img src="assets/img/client-image/Trish-Kunath.png" alt="Client Image" class="bor-rad-50p img-fluid" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <h5 class="blue-col">Trish Kunath</h5>
                                                                <span class="blue-col">Team Atlantis</span><br />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <p>This is to show our appreciation for the marathon effort you guys put in for us. We wanted to say a very BIG THANK YOU for the effort and your continued support.We appreciate and love you all!
                                                                </p>
                                                                <img src="assets/img/home-page-brands/aventures.png" alt="Aventures Atlantis Logo" class="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <button class="carousel-control-prev" type="button" onClick={() => gotoPrev()} data-bs-target="#demo" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" onClick={() => gotoNext()} data-bs-target="#demo" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="comparisons-area ptb-70">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">Build your own platform</span></h2>
                        <p class="mt-20 text-center mw-900">Our White Label Solution is best suited for businesses that want to accept and disburse payments under their own brand. The comprehensive platform helps businesses to process safer and decentralized transactions in an unrivaled global network of payment solutions.</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pr">
                            <center>
                                <img src="assets/img/home-img/dashboard-mac.png" alt="Shopping Cart Summary " class="filter-green computer-res wow animate__animated animate__fadeInUp img-fluid" />
                                <img src="assets/img/mobile/home-img/dashboard-res.png" alt="Order Summary" class="computer-res1 img-fluid" title="Order Summary" />
                            </center>
                            <img src="assets/img/home-img/mobile-on-computer.png" alt="Order Summary" class="home-mobile-on-computer-res wow animate__animated animate__fadeInUp img-fluid" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="comparisons-area ptb-70 bg-col-gray">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">Be our partner in three easy steps</span> </h2>
                        <p class="mt-20">Be a part of <br />Safexpay partner reward program <br /> & get unlimited benefits.</p>
                    </div>
                    <div class="row flex-wrap-reverse">
                        <div class="col-md-4">
                            <h5 class="mt-30 blue-col"><b>Step 1</b></h5>
                            <div>
                                <h5 class="mt-15 blue-col">Easy onboarding </h5>
                                <p>Partner sign up is now easier than ever with our seamless onboarding.</p>
                            </div>
                            <h5 class="mt-40 blue-col"><b>Step 2</b></h5>
                            <div>
                                <h5 class="mt-15 blue-col">Get access to our intuitive dashboard</h5>
                                <p>Track transactions details effectively through our comprehensive dashboard insights.</p>
                            </div>
                            <h5 class="mt-40 blue-col"><b>Step 3</b></h5>
                            <div>
                                <h5 class="mt-15 blue-col">Start earning</h5>
                                <p>Onboard new merchants and upsell safexpay products to earn unlimited rewards.</p>
                            </div>
                            <div class="row mt-20 mb-20">
                                <div class="col-md-12">
                                    <a href="partner-program.html" class="cta"><img src="assets/img/logo/X.png" class="img-fluid" alt="Experience Partner Program" />perience Partner Program</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                        <div class="col-md-6 pr">
                            <img src="assets/img/home-img/partner.png" class="img-fluid" alt="Join hands with us" />
                            <div>
                                <img src="assets/img/home-img/steps-2.svg" alt="Register" class="home-step1-res filter-green wow animate__animated animate__fadeInUp img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openModel == true ? <ContactUsModel openModel={openModel} CloseModel={CloseModel} /> : ""}
        </div>
    )
}
export default Home