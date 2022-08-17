import React, { useState } from "react";
import ContactUsModel from '../Other/ContactUsModel/ContactUsModel';
import MetaTags from 'react-meta-tags';

function PartnerProgram() {

    const [openModel, SetopenModel] = useState(false)

    const ShowModel = (e) => {
        e.preventDefault();
        SetopenModel(true)
    }
    const CloseModel = () => {
        SetopenModel(false)
    }

    return (
        <>
            <MetaTags>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Become a Safexpay partner and unlock unlimited earnings. Gain benefits like hassle-free onboarding and track realtime merchant transactions at your fingertips." />
                <title>Be a Part of Safexpay Partner Program</title>
            </MetaTags>
            <section class="services-area">
                <div class="container-fluid p-0">
                    <div class="overview-box">
                        <div class="overview-content">
                            <div class="content left-content" >
                                <div class="hero-content">
                                    <h1 class="lh-65" >
                                        <span class="blue-col">Unlock unlimited earnings with Safexpay partner program</span>
                                    </h1>
                                </div>
                                {/* <!--<p class="mt-40 mb-40 ">-->
                     <!--   As a trusted Safexpay partner, we'll provide you the <br/> access to all tools and resources essential to expand <br/> your business.-->
                     <!--</p>--> */}
                                <p class="mt-40 mb-40 res-wd-80">
                                    As a trusted Safexpay partner, we'll provide you the  access to all tools and resources essential to expand  your business.
                                </p>
                                <a href="#" class="cta cta-popup" id="cta-popup" data-toggle="modal" data-bs-target="#myModal" onClick={ShowModel}>Contact Us</a>
                            </div>
                        </div>
                        <div class="overview-image">
                            <div class="image fr">
                                <img src="assets/img/partner-program/earnings.png" class="pp-partner-program-earning-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Total Earnings" />
                                {/* <!--  <img src="assets/img/partner-program/transaction-details.png"  class="pp-group-3995-res filter-green wow animate__animated animate__fadeInUp img-fluid"   alt="group-3995">--> */}
                                <img src="assets/img/partner-program/partner progrm image.png" alt="Transaction details" class="pp-partner-res img-fluid" />
                                <img src="assets/img/mobile/partner-program/partner progrm image.png" alt="Partner with Safexpay" title="Partner with Safexpay" class="pp-partner-res1 img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area ptb-70 bg-col-gray">
                <div class="section-title">
                    <h2><span class="blue-col">Benefits of being a Safexpay partner</span></h2>
                </div>
                <div class="container ">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res pl-0">
                                <img src="assets/img/partner-program/Hassle-free.svg" alt="Hassle-free partner onboarding" class="img-fluid" />
                                <h5 class="mt-10 blue-col">Hassle-free partner onboarding</h5>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/partner-program/Merchant-transaction.svg" alt="Realtime merchant transactions tracking at your fingertips." class="img-fluid" />
                                <h5 class="mt-10 blue-col">Realtime merchant transactions tracking at your fingertips</h5>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/partner-program/Unlimited-earning.svg" alt="Unlimited earnings & rewards." class="img-fluid" />
                                <h5 class="mt-10 blue-col">Unlimited earnings & rewards</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area ptb-70">
                <div class="container-fluid p-0">
                    <div class="overview-box">
                        <div class="overview-content">
                            <div class="content left-content">
                                <div class="row ">
                                    <div class="section-title ml-0 text-left">
                                        <h2><span class="blue-col">Made for all<br /> businesses big<br /> & small</span></h2>
                                    </div>
                                </div>
                                <div class="row res-padding">
                                    <div class="ptb-20-lr-0">
                                        <div class="col-md-11">
                                            <div class="row mt-30">
                                                <div class="col-2 col-s-2">
                                                    <img src="assets/img/partner-program/size1.svg" alt="Focus on your business growth with Safexpay by your side" class="img-fluid" />
                                                </div>
                                                <div class="col-8 col-s-8">
                                                    <h5 class="blue-col text-left">Start up accelerators, <br />enablers, incubators</h5>
                                                    <p class="text-left">Focus on your business growth with Safexpay by your side.
                                                    </p>
                                                </div>
                                                <div class="col-1 col-s-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row res-padding">
                                    <div class="ptb-20-lr-0">
                                        <div class="col-md-11">
                                            <div class="row mt-30">
                                                <div class="col-2 col-s-2">
                                                    <img src="assets/img/partner-program/size2.svg" alt="Establish a secure payment acceptance interface using our APIs." />
                                                </div>
                                                <div class="col-8 col-s-8">
                                                    <h5 class="blue-col text-left">Developer, designer <br />or freelancer</h5>
                                                    <p class="text-left">Establish a secure payment acceptance interface using our APIs.
                                                    </p>
                                                </div>
                                                <div class="col-1 col-s-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row res-padding">
                                    <div class="ptb-20-lr-0">
                                        <div class="col-md-11">
                                            <div class="row mt-30">
                                                <div class="col-2 col-s-2">
                                                    <img src="assets/img/partner-program/size3.svg" alt="Enterprise solution providers, ERP & SAAS players" class="img-fluid" />
                                                </div>
                                                <div class="col-8 col-s-8">
                                                    <h5 class="blue-col text-left">Enterprise solution providers, ERP & SAAS players</h5>
                                                    <p class="text-left">Activate payments for your clients with our robust and seamless integrations.
                                                    </p>
                                                </div>
                                                <div class="col-1 col-s-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="overview-image">
                            <div class="image fr">
                                <img src="assets/img/partner-program/wallets.png" class="pp-wallets-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Apple pay, Samsung pay, Google pay, etc." />
                                <img src="assets/img/partner-program/green-card.png" class="pp-green-card-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="card" />
                                <img src="assets/img/partner-program/partner-program1.png" class="pp-partner-pro-res img-fluid" alt="Partner program image" />
                                <img src="assets/img/partner-program/API-integration-Kit.png" class="pp-api-integration-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="API integration Kit REST-API" />
                                {/* <!-- <img src="assets/img/partner-program/social-media.png"  class="pp-social-media-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="social-media">--> */}
                                <center>
                                    <img src="assets/img/mobile/partner-program/social-media.png" title="Wallets, API Integration Kit, Social Media" alt="Wallets, API Integration Kit, Social Media" class="pp-partner-pro-res1 img-fluid" />
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area ptb-70 bg-col-gray">
                <div class="section-title">
                    <h2><span class="blue-col">Benefits of being a Safexpay partner</span></h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="p-40 pl-0 padd-20-res">
                                <img src="assets/img/partner-program/Partner-benefit1.svg" alt="Onboard your merchants seamlessly" />
                                <h5 class="mt-10 blue-col">Merchant management</h5>
                                <p>Onboard your merchants seamlessly on the platform.Get insights on all your merchant transaction on our state-of-the-art dashboard.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/partner-program/Partner-benefit2.svg" alt="Customize the checkout page" />
                                <h5 class="mt-10 blue-col">PG management</h5>
                                <p>Customize the checkout page with your logo and brand, along with multiple payment options.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 pr-0 padd-20-res">
                                <img src="assets/img/partner-program/Partner-benefit3.svg" alt="Get a detailed understanding in the payout report." />
                                <h5 class="mt-10 blue-col">Reconciliation &amp; settlement</h5>
                                <p>All merchant transactions are directly settled in their accounts and commissions are processed to the partner’s account. Get a detailed understanding in the payout report.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="p-40 pl-0 padd-20-res">
                                <img src="assets/img/partner-program/Partner-benefit4.svg" alt="Secured transaction & platform security" />
                                <h5 class="mt-10 blue-col">Security &amp; certifications</h5>
                                <p>Secured transaction & platform security with our 256-bit encryption & PCI DSS 3.2.1 certified platform.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/partner-program/Partner-benefit5.svg" alt="Get your issues resolved quickly with 24x7 support." />
                                <h5 class="mt-10 blue-col">24*7 assistance</h5>
                                <p>Get your issues resolved quickly with 24*7 support.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/partner-program/dashboard1.svg" alt="Analyse merchant insights and monitor transactions " />
                                <h5 class="mt-10 blue-col">Dashboard</h5>
                                <p>Analyse merchant insights and monitor their transactions and your earnings with our in-depth charts and reports.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area ptb-70 ">
                <div class="section-title">
                    <h2><span class="blue-col">Our platform, your brand</span></h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="assets/img/partner-program/merchant-account.png" class="pp-merchant-account-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Merchant Account Icon" />
                            <img src="assets/img/partner-program/expires-on.png" class="pp-expires-on-res filter-green wow animate__animated animate__fadeInUp img-fluid" alt="Create QR code" />
                            <img src="assets/img/partner-program/left-card.png" class="pp-left-card-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Visa card" />
                        </div>
                        <div class="col-md-4 mt-60 mt-0-res">
                            <img src="assets/img/partner-program/our-platform-brand.png" class="pp-our-platform-brand-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="View Full Account History" />
                            <center>
                                <img src="assets/img/mobile/partner-program/our-platform-brand.png" class="pp-our-platform-brand-res1 filter-blue img-fluid" alt="Platform details" title="Platform details" />
                            </center>
                        </div>
                        <div class="col-md-4">
                            <img src="assets/img/partner-program/notification.png" class="pp-notification-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Bell" />
                            <img src="assets/img/partner-program/save-card.png" class="pp-save-card-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Save Cards" />
                            <img src="assets/img/partner-program/right-card.png" class="pp-right-card-res filter-green wow animate__animated animate__fadeInUp img-fluid" alt="Card- Bank Name" />
                            <img src="assets/img/partner-program/cart.png" class="pp-cart-res wow animate__animated animate__fadeInUp img-fluid" alt="Cart Icon" />
                        </div>
                    </div>
                    <div class="row  justify-content-center mt-20">
                        <div class="col-md-4">
                            <div class="p-40 pl-0 padd-20-res">
                                <img src="assets/img/partner-program/Dashboard.svg" alt="Personlize your dashboard " />
                                <h5 class="mt-10 blue-col">Dashboard</h5>
                                <p>Personlize your dashboard with your brand color and logo. Get macro-level analysis of all your merchant transaction in a single view.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/partner-program/Email.svg" alt="Email/SMS notifications" />
                                <h5 class="mt-10 blue-col">Email/SMS notifications</h5>
                                <p>Use pre-configured templates for transaction updates to your customers. </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/partner-program/Checkout.svg" alt="Checkout pages" />
                                <h5 class="mt-10 blue-col">Checkout pages</h5>
                                <p>Customize the checkout page with your brand logo and colours to foster trust amongst your customers. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openModel == true ? <ContactUsModel openModel={openModel} CloseModel={CloseModel} Request="PartnerProgram" /> : ""}
        </>
    )
}

export default PartnerProgram;