import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ContactUsModel from '../Other/ContactUsModel/ContactUsModel';
import MetaTags from 'react-meta-tags';
import WOW from 'wowjs';

function PaymentGateway() {

    const [openModel, SetopenModel] = useState(false)

    const ShowModel = (e) => {
        e.preventDefault();
        SetopenModel(true)
    }
    const CloseModel = () => {
        SetopenModel(false)
    }


    
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    // Tab start
    const [Active, SetActive] = useState("");
    const [Active2, SetActive2] = useState("");
    const [Active3, SetActive3] = useState("");
    const [Active4, SetActive4] = useState("");
    const [ref, inView] = useInView({
    });
    const [ref2, inView2] = useInView({
    });
    const [ref3, inView3] = useInView({
    });
    const [ref4, inView4] = useInView({
    });

    useEffect(() => {
        if (inView) {
            SetActive("active")
            SetActive2("")
            SetActive3("")
            SetActive4("")
        } else {
            SetActive("")
        }
    });
    useEffect(() => {
        if (inView2) {
            SetActive2("active")
            SetActive("")
            SetActive3("")
            SetActive4("")
        } else {
            SetActive2("")
        }
    })
    useEffect(() => {
        if (inView3) {
            SetActive3("active")
            SetActive("")
            SetActive2("")
            SetActive4("")
        } else {
            SetActive3("")
        }
    })
    useEffect(() => {
        if (inView4) {
            SetActive4("active")
            SetActive("")
            SetActive2("")
            SetActive3("")
        } else {
            SetActive4("")
        }
    })
    // Tab end

    return (
        <>

            <MetaTags>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="checkout payment gateway" />
                <meta name="description" content="Experience a seamless checkout with Safexpay. Develop a customised payment gateway by integrating with our explementary documentation for APIs and SDKs." />
                <title>Fully Customised Payment Gateway with Multiple Integration Options - Safexpay</title>
            </MetaTags>
            <section class="services-area">
                <div class="container-fluid p-0">
                    <div class="overview-box">
                        <div class="overview-content">
                            <div class="content left-content">
                                <div class="hero-content">
                                    {/* <!--<h1 class="lh-65"><span class="blue-col">Boost your <br />business with our <br />comprehensive<br /> payments platform</span>-->
                                        <!--</h1>--> */}
                                    <h1 class="lh-65"><span class="blue-col">Boost your business with our comprehensive payments platform</span>
                                    </h1>
                                </div>
                                <p class="mt-40 mb-40">
                                    Amplify your growth with our easy onboarding, seamless integrations and comprehensive payment options.
                                </p>
                                {/* <!--<a href="#" class="cta">Contact Us</a>--> */}
                                <a href="#" class="cta cta-popup" id="cta-popup" data-toggle="modal" data-bs-target="#myModal" onClick={ShowModel}>Contact Us</a>
                            </div>
                        </div>
                        <div class="overview-image">
                            <div class="image fr">
                                <img src="assets/img/payment-gateway/top-img.png" alt="Order Summary" class="pg-top-img-res img-fluid" />
                                <center>
                                    <img src="assets/img/mobile/payment-gateway/top-img.png" alt="Select payment methods- cards/wallets" class="pg-top-img-res1 img-fluid" />
                                </center>
                                <img src="assets/img/payment-gateway/main-image-card.png" class="pg-main-image-card-res wow animate__animated animate__fadeInUp img-fluid" alt="Bank name" />
                                <img src="assets/img/payment-gateway/PG-wallets.png" class="pg-PG-wallets-res wow animate__animated animate__fadeInUp img-fluid" alt="Apple pay, Samsung pay, Google pay, etc." />
                                <img src="assets/img/payment-gateway/PG-BNPL.png" class="pg-PG-BNPL-res wow animate__animated animate__fadeInUp img-fluid" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area pt-40 m-4s" id="SAFE-QR">
            </section>
            <section>
                <article class="container payment-gateway-page">
                    <ul class="nav nav-tabs home-page payment-gateway title center-box" id="primary-navwrapper">
                        <li class="pay-head" role="presentation">
                            <a href="#SAFE-QR" className={Active}>SAFE QR</a>
                        </li>
                        <li class="remi-head" role="presentation">
                            <a href="#Invoicing" className={Active2}>Invoicing</a>
                        </li>
                        <li class="cont-head" role="presentation">
                            <a href="#Instant-Button" className={Active3}>Instant Button</a>
                        </li>
                        <li class="cont-head" role="presentation">
                            <a href="#Customised-Form" className={Active4}>Customised Form</a>
                        </li>
                    </ul>
                    <div class="container ptb-40-lr-0" data-color="#16A085">
                        <div class="row flex-wrap-reverse">
                            <div class="col-md-6">
                                <h5 class="blue-col"><b>Safe QR</b></h5>
                                <div class="row mt-50">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/flexi1.svg" alt="Scan using phone camera" />
                                    </div>
                                    <div class="col-10 col-s-10">
                                        <h5 class="blue-col">Scan using phone camera</h5>
                                        <p>Use any mobile camera to make payments via QR code.
                                        </p>
                                    </div>
                                </div>
                                <div class="row mt-30">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/flexi2.svg" alt="Improve conversions by facilitating QR code payments" />
                                    </div>
                                    <div class="col-10 col-s-10">
                                        <h5 class="blue-col">Leverage multiple payment options</h5>
                                        <p>Improve conversions by facilitating QR code payments using a Credit card, BNPL and Wallets.
                                        </p>
                                    </div>
                                </div>
                                <div class="row mt-30" id="Invoicing">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/flexi3.svg" alt="Facilitate omnichannel payments via customized QR codes" />
                                    </div>
                                    <div class="col-10 col-s-10" >
                                        <h5 class="blue-col">Static and dynamic QR codes</h5>
                                        <p>Facilitate omnichannel payments via customized QR codes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <center>
                                    <img src="assets/img/payment-gateway/PG-QR-code.png" class="pg-PG-QR-code-res filter-blue wow animate__animated animate__fadeInUp" alt="Scan and Pay" />
                                    <img src="assets/img/mobile/payment-gateway/PG-QR-code.png" class="pg-PG-QR-code-res1 filter-blue" alt="Scan and Pay" title="Scan and Pay" />
                                </center>
                            </div>

                        </div>
                        <span ref={ref}></span>
                    </div>
                    <div class="container ptb-40-lr-0" data-color="#C0392B">
                        <div class="row">
                            <div class="col-md-6 pr">
                                <img src="assets/img/payment-gateway/set-reminder.png" class="filter-green filter-green-res wow animate__animated animate__fadeInUp img-fluid payment-gateway-set-rem-res" alt="Set Reminder" />
                                <img src="assets/img/payment-gateway/create-payment-link.png" class="filter-blue wow animate__animated animate__fadeInUp img-fluid payment-gateway-create-pay-res" alt="Create a link" />
                                <img src="assets/img/payment-gateway/payment-modes.png" class="filter-blue  filter-green-res wow animate__animated animate__fadeInUp img-fluid payment-gateway-pay-modes-res" alt="Payment through cards" />
                                <center>
                                    <img src="assets/img/mobile/payment-gateway/create-payment-link.png" class="payment-gateway-create-pay-res1 filter-blue img-fluid" alt="Add details to create a payment link" title="Add details to create a payment link" />
                                </center>
                            </div>
                            <div class="col-md-6">
                                <h5 class="blue-col mt-20"><b>Invoicing</b></h5>
                                <div class="row mt-50">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/payment1.svg" alt="Accept payments without any coding effort." />
                                    </div>
                                    <div class="col-10 col-s-10">
                                        <h5 class="blue-col">Payments without integrations</h5>
                                        <p>Accept payments without any coding effort.</p>
                                    </div>
                                </div>
                                <div class="row mt-30">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/payment2.svg" alt="Effortlessly share payment links via SMS, Email and social media platforms" />
                                    </div>
                                    <div class="col-10 col-s-10" id="Instant-Button">
                                        <h5 class="blue-col">Collect Payments via multiple channels</h5>
                                        <p>Effortlessly share payment links via SMS, Email and social media platforms. </p>
                                    </div>
                                </div>
                                <div class="row mt-30">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/payment3.svg" alt="Set reminders to ensure timely collection" />
                                    </div>
                                    <div class="col-10 col-s-10">
                                        <h5 class="blue-col">Collect payments against raised invoices</h5>
                                        <p>Set reminders to ensure timely collection.</p>
                                    </div>
                                </div>
                            </div>
                            <span ref={ref2}></span>
                        </div>
                    </div>
                    <div class="container ptb-40-lr-0 pt-70 pb-100" data-color="#8E44AD">
                        <div class="row  flex-wrap-reverse">
                            <div class="col-md-6">
                                <h5 class="blue-col mt-20"><b>Instant Button</b></h5>
                                <div class="row mt-50">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/instnt-btn.svg" alt="Pre-coded payment buttons" />
                                    </div>
                                    <div class="col-10 col-s-10">
                                        <h5 class="blue-col">Pre-coded payment button</h5>
                                        <p>Add payment button on your website in less than 5 minutes.</p>
                                    </div>
                                </div>
                                <div class="row mt-30">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/instnt-btn1.svg" alt="Tailor-made payment button" />
                                    </div>
                                    <div class="col-10 col-s-10" id="Customised-Form">
                                        <h5 class="blue-col">Tailor-made payment button</h5>
                                        <p>Customize the payment button synchronous to your brand and business needs. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 pr">
                                <img src="assets/img/payment-gateway/button-details.png" class="pg-btn-details-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Enter details and create a link" />
                                <img src="assets/img/payment-gateway/copy-code.png" class="pg-copy-code-res filter-green wow animate__animated animate__fadeInUp img-fluid" alt="Copy to clipboard" />
                                <center>
                                    <img src="assets/img/mobile/payment-gateway/button-details.png" class="pg-copy-code-res1 filter-green img-fluid" alt="Button details" title="Button details" />
                                </center>
                            </div>
                        </div>
                        <span ref={ref3}></span>
                    </div>
                    <div class="container ptb-40-lr-0 pt-150-res pb-100 mb-130" data-color="#8E44AD">
                        <div class="row">
                            <div class="col-md-6 pr">
                                <img src="assets/img/payment-gateway/company-name.png" class="pg-company-name-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="create a link" />
                                <img src="assets/img/payment-gateway/select-colour.png" class="pg-select-colour-res filter-green wow animate__animated animate__fadeInUp img-fluid" alt="Select Colour" />
                                <img src="assets/img/payment-gateway/calender01.png" class="pg-calender01-res wow animate__animated animate__fadeInUp img-fluid" alt="date" />
                                <img src="assets/img/payment-gateway/customisation-options.png" class="pg-customisation-options-res filter-blue1 wow animate__animated animate__fadeInUp img-fluid" alt="Payment details" />
                                <center>
                                    <img src="assets/img/mobile/payment-gateway/company-name.png" class="pg-company-name-res1 filter-blue  img-fluid" alt="Customized form" title="Customized form" />
                                </center>
                            </div>
                            <div class="col-md-6">
                                <h5 class="blue-col"><b>Customised Form</b></h5>
                                <div class="row mt-50">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/no-code.svg" alt="Design your custom form with pre-defined fields" />
                                    </div>
                                    <div class="col-10 col-s-10">
                                        <h5 class="blue-col">No-code, drag & drop form</h5>
                                        <p>Design your custom form with pre-defined fields. </p>
                                    </div>
                                </div>
                                <div class="row mt-30">
                                    <div class="col-2 col-s-2">
                                        <img src="assets/img/home-page/info.svg" alt="Facilitate information collection" />
                                    </div>
                                    <div class="col-10 col-s-10">
                                        <h5 class="blue-col">Facilitate information collection</h5>
                                        <p>Seamlessly collect payments along with user information. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span ref={ref4}></span>
                    </div>
                </article>
            </section>


            <section class="ptb-70  bg-col-gray">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">Payment platform features</span></h2>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-6">
                            <div class="p-40 padd-20-res pl-0">
                                <img src="assets/img/payment-gateway/refunds.svg" alt="We facilitate bulk, partial and instant refunds" />
                                <h5 class="mt-20 blue-col">Refunds</h5>
                                <p>We facilitate bulk, partial and instant refunds.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-6">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/payment-gateway/multi currency-1.svg" alt="Collect payments in 50+ currencies" />
                                <h5 class="mt-20 blue-col">Multi currency Payments</h5>
                                <p>Collect payments in 50+ currencies from customers across the world.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-6">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/payment-gateway/img14.svg" alt="Analyze customer insights and monitor trends" />
                                <h5 class="mt-20 blue-col">Dashboard</h5>
                                <p>Analyze customer insights and monitor trends with our in-depth charts and reports.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-6">
                            <div class="p-40 padd-20-res pl-0">
                                <img src="assets/img/payment-gateway/Smart-Routing.png" alt="Seamless experience for your customers" />
                                <h5 class="mt-20 blue-col">Smart Routing</h5>
                                <p>Our smart routing algorithm ensures the most seamless experience for your customers along with the highest success ratio.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-6">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/payment-gateway/img15.svg" alt="Enhance the checkout experience with no redirection" />
                                <h5 class="mt-20 blue-col">Embedded checkout</h5>
                                <p>Enhance the checkout experience with no redirection.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-6">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/payment-gateway/img15.svg" alt="Easy split payment module." />
                                <h5 class="mt-20 blue-col">Split Payment</h5>
                                <p>Fragmented payment collection is no more a problem with our split payment module.</p>
                            </div>
                        </div>
                        {/* <!--<div class="row">--> */}
                    </div>
                    {/* <!--</div>--> */}
                </div>
            </section>

            <section class="account-create-area">
                <div class="boost-bg ptb-70">
                    <div class="container pr">
                        <div class="row center-box">
                            <div class="col-md-12 payouts-box1">
                                <div class="child11 p-40 bg-green bor-rad-5">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="section-title m-0">
                                                <h2 class="text-left"><span class="blue-col">The easiest & safest integration ever</span></h2>
                                            </div>
                                            <p class="mt-30">For those of you who use popular e-commerce platforms or customize integration, we offer a number of plugins and integrations. Thanks to this, implementing payments on your website will take just a few minutes.</p>
                                            <div class="row mt-40">
                                                <div class="col-md-10">
                                                    {/* <!--<a href="#" class="cta"><img src="assets/img/logo/X.png"  alt="X icon" class="img-fluid" />perience Our APIs</a>--> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 simple-inter">
                                <div class="child11 child21 p-40 bg-col-white bor-rad-5">
                                    <h5 class="text-left blue-col">
                                        Simple integrations on all platforms
                                        {/* <!--<a href="#" class="sky-blue-col fr fs-15">View all </a>--> */}
                                    </h5>
                                    <div class="row mt-10">
                                        <div class="col-6 col-lg-3">
                                            <div class="single-blog-post all-boxes">
                                                <center><img src="assets/img/payment-gateway/brands/javascript.png" alt="Javascript Web Integration" /> </center>
                                                <p class="text-center mt-20 fs-10">Web Integration</p>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <div class="single-blog-post all-boxes">
                                                <center><img src="assets/img/payment-gateway/brands/android.png" alt="Android Logo" /> </center>
                                                <p class="text-center mt-20 fs-10">Android SDK </p>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <div class="single-blog-post all-boxes">
                                                <center><img src="assets/img/payment-gateway/brands/ios.png" alt="iOS Logo" /> </center>
                                                <p class="text-center mt-20 fs-10">iOS SDK </p>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <div class="single-blog-post all-boxes">
                                                <center><img src="assets/img/payment-gateway/brands/React-Native.png" alt="React Native Logo" /> </center>
                                                <p class="text-center mt-20 fs-10">React Native </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--<h5 class="text-left blue-col">E commerce plugins--> */}
                                    {/* <!--<a href="#" class="sky-blue-col fr fs-15">View all </a>--> */}
                                    {/* <!--</h5>--> */}
                                    <h5 class="text-left blue-col">Plug-ins across 10+ Shopping Carts
                                    </h5>
                                    <div class="row mt-10">
                                        <div class="col-6 col-lg-3">
                                            <div class="single-blog-post all-boxes">
                                                <center><img src="assets/img/payment-gateway/brands/woocommerce.png" alt="Woocommerce Logo" /> </center>
                                                <p class="text-center mt-20 fs-10">Woocommerce </p>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <div class="single-blog-post all-boxes">
                                                <center><img src="assets/img/payment-gateway/brands/Magento.png" alt="Magento logo" /> </center>
                                                <p class="text-center mt-20 fs-10">Magento</p>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <div class="single-blog-post all-boxes">
                                                <center><img src="assets/img/payment-gateway/brands/opencart.png" alt="Opencart logo" /> </center>
                                                <p class="text-center mt-20 fs-10">OpenCart</p>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <div class="single-blog-post all-boxes">
                                                <center><img src="assets/img/payment-gateway/brands/Zen-cart.png" alt="Zen cart logo" /> </center>
                                                <p class="text-center mt-20 fs-10">Zen cart</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area pt-70">
                <div class="section-title">
                    <h2><span class="blue-col">Simple transparent pricing</span></h2>
                    <p class="text-center mt-20" id="one">Let’s start with your business journey together.</p>
                </div>
            </section>

            <article class="container pb-70">
                {/* <!--<ul class="nav nav-tabs home-page-tabs pricing-page title center-box" id="primary-navwrapper">-->
         <!--   <li class="pay-head" role="presentation">-->
         <!--      <a href="#one">Payment Gateway</a>-->
         <!--   </li>-->
         <!--   <li class="cont-head" role="presentation">-->
         <!--      <a href="#three">Payout</a>-->
         <!--   </li>-->
         <!--</ul>--> */}
                <div class="container mt-70">
                    <div class="row bxs">
                        <div class="col-md-4 p-30">
                            <div>
                                <h5 class="blue-col mt-20"><b>Payment Gateway</b></h5>
                                <p class="fs-13">Easily accept payments from your customers.</p>
                            </div>
                            <h1 class="lh-65  mt-30">1.85%*</h1>
                            {/* <!--<h5 class="mt-30 mb-0">2.65% + AED 1.29</h5>--> */}
                            <p class="fw-500 blue-col mb-0"><b>Domestic Cards</b></p>
                            <img src="assets/img/payment-gateway/brands/9ec2e482-63be-4ffe-8982-e5762a3d6429.png" alt="Master Card Logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/544867a6-55a6-4597-b4d3-c10cf99951d2.png" alt="Visa logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/62309be5-7128-457b-866b-d11cc0f0fab8.png" alt="Visa logo" width="40px" />&nbsp;
                            {/* <!--<h5 class="mt-40 mb-0">3.45% + AED 1.29</h5>--> */}
                            <p class="fw-500 blue-col mb-0 mt-40"><b>Wallets</b></p>
                            <img src="assets/img/payment-gateway/brands/diners-club.png" alt="Diners Club Logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/Amazon-pay.png" alt="American-Express logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/35ea3338-662c-466a-ba72-86b633fbfe06.png
                     " alt="Union Pay logo" width="40px" />&nbsp;

                            <p class="fs-13 mt-30">*Pricing per transaction + GST Additional. Subject to approval from banking partners </p>
                        </div>
                        <div class="col-md-4 p-30">
                            <div class="vis-hid dis-no-res">
                                <h5 class="blue-col mt-20"><b>Start up</b></h5>
                                <p class="fs-13">( Upto 50k AED Volumes / Month )</p>
                            </div>
                            {/* <!--<h5 class="mt-30 mb-0 mt-0-res-pri">5.75% + AED 1.29</h5>--> */}
                            <p class="fw-500 blue-col mb-0 res-mt-90"><b>Net Banking</b></p>
                            <img src="assets/img/payment-gateway/brands/32af857a-48bf-4767-bfea-afea16a30776.png" alt="Tabby logo" width="40" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/8b3be1a4-9ccb-4d27-86b1-6f95fa24e1b2.png" alt="Spotii logo" width="40" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/af0bf6cf-b269-4eef-ae4c-33dd3f373c72.png" alt="Postpay logo" width="40" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/98d5424e-65c0-4289-8df2-1e0783f812d6.png" alt="Postpay logo" width="40" />&nbsp;
                            {/* <!--<h5 class="mt-40 mb-0">3.00% + AED 1.29</h5>--> */}
                            <p class="fw-500 blue-col mb-0 mt-40"><b>Buy Now Pay Later</b></p>
                            <img src="assets/img/payment-gateway/brands/8d843f80-f8bc-4762-8e5a-8305b1dfaf21.png
                     " alt="Google Pay Logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/47ce7cbf-48a9-4408-8f97-12355ab8c652.png
                     " alt="Samsung Pay logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/e3c452ef-c318-4517-9a1f-2df9473a5c7d.png" alt="Apple Pay Logo" width="40px" />&nbsp;
                        </div>
                        <div class="col-md-4 p-30 bg-col-lg-blue padd-res-20-0">
                            <div class="mt-50">
                                <h5 class="blue-col mt-20"><b>OFFER</b></h5>
                                <h1 class="lh-65 blue-col">Rs.0</h1>
                            </div>
                            <p class="fw-500 blue-col mb-0 mt-30"><b>Rupay Debit Cards + UPI</b></p>
                            <img src="assets/img/payment-gateway/brands/4a6168a5-b99c-4c6b-bf84-c2670be35ac7.png
                     " alt="Google Pay Logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/5b2c2d6f-38c9-490f-80b5-79591e7bdf19.png
                     " alt="Samsung Pay logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/63b17254-3404-4056-b44a-5fdcf4739c32.png
                     " alt="Apple Pay Logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/9221f2ba-18f2-4045-8fbc-9cfac7103ba9.png
                     " alt="Pay logo" width="40px" />&nbsp;
                            <img src="assets/img/payment-gateway/brands/de4e2936-ce34-4117-b5dd-01c383b7cfa9.png
                     " alt="Pay logo" width="40px" />&nbsp;
                            <ul class="lst_none ttm-list-style-icon pl-0 blue-col mt-40 mt-0-res-pri">
                                <li class="pl-0">
                                    <div class="fl wd-10"><img src="assets/img/payment-gateway/brands/circle.png" alt='Logo' /></div>
                                    <div class="fl wd-90"> Setup Cost : Rs.0 </div>
                                </li>
                                <br />
                                <li id="three" class="pl-0">
                                    <div class="fl wd-10"><img src="assets/img/payment-gateway/brands/circle.png" alt='Logo' /></div>
                                    <div class="fl wd-90"> Maintenance Fee : Rs.0 </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </article>

            <div class="container pb-70">
                <div class="row bxs bor-rad-10">
                    <div class="col-md-12 p-30">
                        <h5 class="blue-col mt-20"><b>Looking for customised pricing?</b>
                            <a href="#" class="cta fr">Contact Us</a>
                        </h5>
                    </div>
                </div>
            </div>
            {openModel == true ? <ContactUsModel openModel={openModel} CloseModel={CloseModel} Request="PaymentGateway" /> : ""}
        </>
    )
}

export default PaymentGateway;