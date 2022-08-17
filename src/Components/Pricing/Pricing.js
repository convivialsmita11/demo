import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MetaTags from 'react-meta-tags';

import ContactUsModel from '../Other/ContactUsModel/ContactUsModel';

function Pricing() {

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
    const [ref, inView] = useInView({
    });
    const [ref2, inView2] = useInView({
    });

    useEffect(() => {
        if (inView) {
            SetActive("active")
            SetActive2("")
        } else {
            SetActive("")
        }
    });
    useEffect(() => {
        if (inView2) {
            SetActive2("active")
            SetActive("")
        } else {
            SetActive2("")
        }
    })
    // Tab end
    return (
        <>

            <MetaTags>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Safexpay offers simple and transparent pricing with features like smart routing,Instant GoLive,merchant analytics,QR codes & single API for all payment methods." />
                <title>Safexpay- Simple and Transparent Pricing</title>

            </MetaTags>
            <section class="services-area pt-70">
                <div class="section-title">
                    <h2><span class="blue-col">Simple transparent pricing</span></h2>
                    <p class="text-center mt-20" id="one">Let’s start with your business journey together.</p>
                </div>
            </section>

            <article class="container pb-70">
                <ul class="nav nav-tabs home-page-tabs pricing-page title center-box" id="primary-navwrapper">
                    <li class="pay-head" role="presentation">
                        <a href="#one" className={Active}>Payment Gateway</a>
                    </li>
                    <li class="cont-head" role="presentation">
                        <a href="#three" className={Active2}>Payout</a>
                    </li>
                </ul>
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
                            <p class="fw-500 blue-col mb-0 res-mt-90"><b>Net Banking<sup>+</sup></b></p>
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
                    <span ref={ref} />
                </div>
                <div class="container mt-70">
                    <div class="row bxs">
                        <div class="col-md-4 p-30">
                            <div>
                                <h5 class="blue-col mt-20"><b>Payout</b></h5>
                                <p class="fs-13">Make Payouts your way.</p>
                            </div>
                            {/* <!--<h5 class="mt-30 mb-0">2.45% + AED 1.00</h5>--> */}
                            <div >
                                <p class="fw-500 blue-col mb-0 mt-30"><b>IMPS | UPI</b></p>
                                <h1 class="lh-65">Rs.5<sup>*</sup></h1>
                                <p class="fs-13">Payout upto 25,000</p>
                                {/* <!--<h5 class="mt-40 mb-0">3.25% + AED 1.00</h5>--> */}
                                <h1 class="lh-65">Rs.8<sup>*</sup></h1>
                                <p class="fs-13">Payout above 25,000</p>
                            </div>
                            <p class="fs-13 mt-30">(*) Pricing per transaction & GST additional.</p>
                        </div>
                        <div class="col-md-4 p-30">
                            <div class="vis-hid dis-no-res">
                                <h5 class="blue-col mt-20"><b>Start up</b></h5>
                                <p class="fs-13">( Upto 50k AED Volumes / Month )</p>
                            </div>
                            <div >
                                <p class="fw-500 blue-col mb-0 mt-30"><b>NEFT | RTGS</b></p>
                                <h1 class="lh-65">Rs.8<sup>*</sup></h1>
                                {/* <!--<p class="fs-13">Payout upto 25,000</p>-->
                                                                                                        <!--<h5 class="mt-40 mb-0">3.25% + AED 1.00</h5>--> */}
                                <p class="fw-500 blue-col mb-0 mt-30"><b>Beneficiary Validation</b></p>
                                <h1 class="lh-65">Rs.2<sup>*</sup></h1>
                                {/* <!--<p class="fs-13">Payout above 25,000</p>--> */}
                            </div>
                        </div>
                        <div class="col-md-4 p-40 padd-res-20-0">
                            <div class="vis-hid dis-no-res">
                                <h5 class="blue-col mt-20"><b>Start up</b></h5>
                                <p class="fs-13">( Upto 50k AED Volumes / Month )</p>
                            </div>
                            <div>
                                <p class="fw-500 blue-col mb-0 mt-30"><b>VPA Validation</b></p>
                                <h1 class="lh-65">Rs.2<sup>*</sup></h1>
                                {/* <!--<p class="fs-13">Payout upto 25,000</p>-->
                                                                                                        <!--<h5 class="mt-40 mb-0">3.25% + AED 1.00</h5>--> */}
                                <p class="fw-500 blue-col mb-0 mt-30"><b>Virtual Account Creation</b></p>
                                <h1 class="lh-65">Rs.2<sup>*</sup></h1>
                                {/* <!--<p class="fs-13">Payout above 25,000</p>--> */}
                            </div>
                        </div>
                    </div>
                    <span ref={ref2} />
                </div>
            </article>

            <div class="container pb-70">
                <div class="row bxs bor-rad-10">
                    <div class="col-md-12 p-30">
                        <h5 class="blue-col mt-20"><b>Looking for customised pricing?</b>
                            <a href="#" class="cta fr" onClick={ShowModel}>Contact Us</a>
                        </h5>
                    </div>
                </div>
            </div>
            {openModel == true ? <ContactUsModel openModel={openModel} CloseModel={CloseModel} /> : ""}
        </>
    )
}

export default Pricing;