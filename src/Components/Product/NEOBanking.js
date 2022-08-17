import React, { useState } from "react";
import MetaTags from 'react-meta-tags';

import ContactUsModel from '../Other/ContactUsModel/ContactUsModel';

function NEOBanking() {

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
                <meta name="keywords" content="Neobank UAE" />
                <meta name="description" content="UAE's Neobank. Safexpay supports deep customisation for all our products. Pick & choose your feature & you're in business. Upgrade regularly for newer features." />
                <title>Safexpay - Neobank Performing Multiple Banking Operations</title>
            </MetaTags>
            <section class="services-area">
                <div class="container-fluid p-0">
                    <div class="overview-box">
                        <div class="overview-content">
                            <div class="content left-content">
                                <div class="hero-content">
                                    {/* <!--<h1 class="lh-65"><span class="blue-col">Reprogramming <br />the Bank : Shift  <br />Gears on Digital  <br />Innovation </span>-->
                                        <!--</h1>--> */}
                                    <h1 class="lh-65 res-wd-80"><span class="blue-col">Reprogramming the Bank : Shift  Gears on Digital  Innovation </span>
                                    </h1>
                                </div>
                                <p class="mt-40 mb-40 res-wd-80">
                                    If banks aren’t willing to disrupt themselves digitally,  SafeXpay will be happy to do it for them.
                                </p>
                                <div class="others-options">
                                    <a href="#" class="cta cta-popup" id="cta-popup" data-toggle="modal" data-bs-target="#myModal" onClick={ShowModel}>Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div class="overview-image">
                            <div class="image fr">
                                <img src="assets/img/neo-banking/reprogramming-1.png" class="neo-repro-res img-fluid" alt="model image" />
                                <img src="assets/img/neo-banking/invoice.png" class="neo-co-branded-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Invoice Management" />
                                <center>
                                    <img src="assets/img/mobile/neo-banking/reprogramming-1.png" class="neo-repro-res1 img-fluid" alt="Co-Branded" title="Co-Branded" />
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="comparisons-area ptb-70 ">
                <div class="container">
                    <div class="section-title text-left ml-0">
                        <h2><span class="blue-col">Benefits of being a Neo-bank</span> </h2>
                    </div>
                    <div class="row center-box flex-wrap-reverse">
                        <div class="col-lg-5 col-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="p-40 pl-0 pt-0 mt-40">
                                        <img src="assets/img/neo-banking/neo-bank.svg" alt="Get a digital bank account." />
                                        <h5 class="mt-10 blue-col">Get a bank account that can do more.</h5>
                                        <p>There’s no need to stress about tracking down stray expenses or counting decimal points any longer. You can automate all tedious operations with Safexpay’s Neobank, which has speedy payment methods, intelligent insights, and savings features.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="pl-0 p-40 pt-0">
                                        <img src="assets/img/neo-banking/neo-bank1.svg" alt="Meet your smart account with just a click" />
                                        <h5 class="mt-10 blue-col">Meet your smart account, a click is all it takes</h5>
                                        <p>Save time with Neobank by performing multiple banking operations in one go: Money transfer, balance checking, payment collection and disbursal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-lg-6 col-12 pr">
                            <center>
                                <img src="assets/img/neo-banking/Group11.png" class="filter-blue img-fluid" alt="customised dashboard" />
                            </center>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ptb-70 team-area">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">Accept payments, send payouts, & manage business better</span></h2>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="p-40 pt-0 pl-0 padd-20-res">
                                <h5 class="mt-20 blue-col"><b>1</b></h5>
                                <h5 class="blue-col"><b>Easy money transfers in seconds</b></h5>
                                <p>Your NEO Smart account comes with a companion Stash account to put savings in. Move money between them in a flash.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 pt-0 padd-20-res">
                                <h5 class="mt-20 blue-col"><b>2</b></h5>
                                <h5 class="blue-col"><b>One account, multiple access</b></h5>
                                <p>Empower your account with custom access for viewing, transacting and create custom approval matrix for your transactions.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 pt-0 pr-0 padd-20-res">
                                <h5 class="mt-20 blue-col"><b>3</b></h5>
                                <h5 class="blue-col"><b>Easy reconciliation</b></h5>
                                <p class="mt-20">Manage all your collections & payouts. Also, reconcile your transactions easily.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--</div>--> */}
            </section>

            <section class="comparisons-area ptb-70">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">We have solutions for companies of all shapes and sizes</span></h2>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-4">
                            <div class="p-40 pl-0 padd-20-res">
                                <img src="assets/img/neo-banking/Small-Businesses.png" alt="Instantly open a digital zero balance account" />
                                <h5 class="mt-10 blue-col">Small businesses</h5>
                                <p>Instantly open a digital zero balance account that is easy to operate.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/neo-banking/MSME.png" alt="Powerful digital business account" />
                                <h5 class="mt-10 blue-col">MSMEs</h5>
                                <p>Powerful digital business account with new age features and customised reports.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/neo-banking/corporates.png" alt="Highly scalable solutions with faster integrations" />
                                <h5 class="mt-10 blue-col">Corporates</h5>
                                <p>Highly scalable solutions with faster integrations, cost effective collection & disbursals.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res pl-0">
                                <img src="assets/img/neo-banking/expenses-analytics.svg" alt="Receive detailed breakdown/analytics of your expenses." />
                                <h5 class="mt-10 blue-col">Expenses analytics</h5>
                                <p>Receive detailed breakdown/analytics of your expenses.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/neo-banking/Utility-bills.png" alt="Pay Utility Bills Anytime, Anywhere." />
                                <h5 class="mt-10 blue-col">Utility bills</h5>
                                <p>Pay Utility Bills Anytime, Anywhere.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/neo-banking/virtual-card.png" alt="Instantaneous Activation of Virtual card" />
                                <h5 class="mt-10 blue-col">Virtual card</h5>
                                <p>Instantaneous Activation of Virtual card.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openModel == true ? <ContactUsModel openModel={openModel} CloseModel={CloseModel} Request="NeoBanking" /> : ""}
        </>
    )
}

export default NEOBanking;