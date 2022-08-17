import React, { useState } from "react";
import MetaTags from 'react-meta-tags';

import ContactUsModel from '../Other/ContactUsModel/ContactUsModel';

function Payouts() {

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
                <title>Safexpay</title>
            </MetaTags>
            <section class="services-area">
                <div class="container-fluid p-0">
                    <div class="overview-box">
                        <div class="overview-content">
                            <div class="content left-content">
                                {/* <!-- <h1 class="blue-col">Payment from <br />
                        Anyone, Anywhere
                        </h1> --> */}
                                <div class="hero-content">
                                    <h1 class="lh-65"><span class="blue-col">Empower your business by our strong payout  suite</span>
                                    </h1>
                                </div>
                                <p class="mt-40 mb-40">
                                    Our easy onboardig and roud the clock <br />transaction capability helps payout faster.
                                </p>
                                <a href="#" class="cta cta-popup" id="cta-popup" data-toggle="modal" data-bs-target="#myModal" onClick={ShowModel}>Contact Us</a>
                            </div>
                        </div>
                        <div class="overview-image">
                            <div class="image fr">
                                <img src="assets/img/payouts/empower.png" alt="empower" class="pay-empower-res img-fluid" />
                                <img src="assets/img/payouts/high-success-rate.png" class="pay-high-success-rate-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="high-success-rate" />
                                <img src="assets/img/payouts/user-access-management.png" class="pay-user-access-management-res filter-green wow animate__animated animate__fadeInUp img-fluid" alt="user-access-management" />
                                <img src="assets/img/payouts/sent-payout.png" class="pay-sent-payout-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="sent-payout" />
                                <img src="assets/img/mobile/payouts/empower.png" alt="empower" class="pay-empower-res1 img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="partner-area">
                        <div class="container">
                            <div class="partner-inner">
                                <div class="row align-items-center">
                                    <div class="col-lg-2 col-sm-4 col-md-3 col-6">
                                        <a>
                                            <img src="assets/img/home-page-brands/quickwork.png" alt="quickwork" />
                                            <img src="assets/img/home-page-brands/quickwork-bw.png" alt="quickwork" />
                                        </a>
                                    </div>
                                    <div class="col-lg-2 col-sm-4 col-md-3 col-6">
                                        <a>
                                            <img src="assets/img/home-page-brands/commonfolks.png" alt="commonfolks" />
                                            <img src="assets/img/home-page-brands/commonfolks-bw.png" alt="commonfolks" />
                                        </a>
                                    </div>
                                    <div class="col-lg-2 col-sm-4 col-md-3 col-6">
                                        <a>
                                            <img src="assets/img/home-page-brands/cashfree.png" alt="cashfree" />
                                            <img src="assets/img/home-page-brands/cashfree-bw.png" alt="cashfree" />
                                        </a>
                                    </div>
                                    <div class="col-lg-2 col-sm-4 col-md-3 col-6">
                                        <a>
                                            <img src="assets/img/home-page-brands/mswipe.png" alt="mswipe" />
                                            <img src="assets/img/home-page-brands/mswipe-bw.png" alt="mswipe" />
                                        </a>
                                    </div>
                                    <div class="col-lg-2 col-sm-4 col-md-3 col-6">
                                        <a>
                                            <img src="assets/img/home-page-brands/pcj.png" alt="pcj" />
                                            <img src="assets/img/home-page-brands/pcj-bw.png" alt="pcj" />
                                        </a>
                                    </div>
                                    <div class="col-lg-2 col-sm-4 col-md-3 col-6">
                                        <a>
                                            <img src="assets/img/home-page-brands/Melorra-Logo.png" alt="Melorra" />
                                            <img src="assets/img/home-page-brands/Melorra-Logo-bw.png" alt="Melorra" />
                                        </a>
                                    </div>
                                    <div class="col-lg-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ptb-70 team-area  bg-green">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">Make your payouts your way </span></h2>
                        <h5 class="mt-20 fs-18">Explore the various features of Safexpay's Payout option</h5>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="p-40 padd-20-res pl-0">
                                <img src="assets/img/payouts/pay-modes.svg" alt="pay-modes" />
                                <h5 class="mt-10 blue-col">Multiple<br /> payout modes</h5>
                                <p>We offer multiple payout modes such as NEFT, IMPS, RTGS, Wallets and Cards.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/payouts/smart-beneficiary.svg" alt="smart-beneficiary" />
                                <h5 class="mt-10 blue-col">Smart beneficiary management</h5>
                                <p>Bank verification of beneficiary legel name as well as penny testing.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/payouts/pay-precision.svg" alt="pay-precision" />
                                <h5 class="mt-10 blue-col">Payment <br />precision</h5>
                                <p>Our entire technology stack is developed in-house allowing us to create the most optimized payments flows</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/payouts/smart-reconcialiation.svg" alt="smart-reconcialiation" />
                                <h5 class="mt-10 blue-col">Smart <br />reconciliation</h5>
                                <p>Get final status of your transaction using our three-way reconciliation</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--</div>--> */}
            </section>


            <section class="services-area ptb-70">
                <div class="container">
                    <div class="section-title text-left ml-0">
                        <h2><span class="blue-col">Committed to making <br />payout easier </span></h2>
                    </div>
                </div>
                <div class="container">
                    <div class="row flex-wrap-reverse">
                        <div class="col-md-5 col-sm-12">
                            <div class="row">
                                <div class="col-md-6 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/end-to-end.svg" class="img-fluid" alt="end-to-end" />
                                        <h5 class="mt-10 blue-col">End to End payment</h5>
                                        <p>Get a single platform that covers the entire scope of payouts. With exclusive UPI &amp; Bank ecosystem, we ensure instant, safe &amp; secure transactions</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/scale.svg" class="img-fluid" alt="scale" />
                                        <h5 class="mt-10 blue-col">Built for Scale</h5>
                                        <p>Processing highest transactions per second in the market and asynchronous APIs to seamlessly manage peak volumes</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/console.svg" class="img-fluid" alt="console" />
                                        <h5 class="mt-10 blue-col">Comprehensive console</h5>
                                        <p>Unified platform for all types of Payouts, Collections, Current Account &amp; Business Expenses.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/scheduled.svg" class="img-fluid" alt="scheduled" />
                                        <h5 class="mt-10 blue-col">Schedule Payouts</h5>
                                        <p>Schedule your payouts to ensure timely payment to your beneficiaries.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mt-40">
                                    <div class="p-5">
                                        <img src="assets/img/payouts/fund.svg" class="img-fluid" alt="fund" />
                                        <h5 class="mt-10 blue-col">Transfer beyond funds</h5>
                                        <p>Enjoy payouts through Safexpay for Invoices, Tax Payments, Foreign Remittances and a host of other services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1 col-xs-hidden col-sm-hidden"></div>
                        <div class="col-md-5 col-sm-12 right-stick-comp r-0p pr-0 res-top-25p">
                            <div class="invoicing-image fr funfacts-res">
                                <div class="main-image">
                                    <img src="assets/img/payouts/pc.png" class="pay-pc-res img-fluid" alt="pc" />
                                    <img src="assets/img/payouts/bank-ecosystem.png" class="pay-bank-ecosystem-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="bank-ecosystem" />
                                    <img src="assets/img/payouts/built_for_scale.png" class="pay-built_for_scale-res filter-green wow animate__animated animate__fadeInUp img-fluid" alt="Built-for-sale" />
                                    <center>
                                        <img src="assets/img/mobile/payouts/pc.png" class="pay-pc-res1 img-fluid pr r-0" alt="pc" />
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ptb-70 bg-green">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">Use Cases</span></h2>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-3">
                            <div class="p-40 padd-20-res pl-0">
                                <img src="assets/img/payouts/fmcg.svg" alt="fmcg" />
                                <h5 class="mt-10 blue-col">FMCG / FMCD </h5>
                                <ul class="pl-15">
                                    <li>Channel Incentive</li>
                                    <li>Dealer Contest</li>
                                    <li>Influencer / Retailer Incentive</li>
                                    <li>Add Sales & Sub -Wallets</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/payouts/manufacturing.svg" alt="manufacturing" />
                                <h5 class="mt-10 blue-col">Manufacturing</h5>
                                <ul class="pl-15">
                                    <li>Supply Chain Payouts</li>
                                    <li>Salary Accountst</li>
                                    <li>Utilities</li>
                                    <li> Channel Incentive</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="p-40 padd-20-res">
                                <img src="assets/img/payouts/logistics.svg" alt="logistics" />
                                <h5 class="mt-10 blue-col">Logistics</h5>
                                <ul class="pl-15">
                                    <li>Driver Payouts</li>
                                    <li>Link Bases Payouts</li>
                                    <li>Fuel / Toll Payouts</li>
                                    <li> Partner Payouts</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/payouts/gaming.svg" alt="gaming" />
                                <h5 class="mt-10 blue-col">Gaming</h5>
                                <ul class="pl-15">
                                    <li>Referrals</li>
                                    <li>Influencer Payouts</li>
                                    <li>Player Winning</li>
                                    <li>User Engagement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-3">
                            <div class="p-40 padd-20-res pl-0">
                                <img src="assets/img/payouts/bsfi.svg" alt="bsfi" />
                                <h5 class="mt-10 blue-col">BSFI</h5>
                                <ul class="pl-15">
                                    <li>Referrals</li>
                                    <li>Loan Disbursals</li>
                                    <li>Account validation</li>
                                    <li>Channel Payouts </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="p-40 padd-20-res pr-0">
                                <img src="assets/img/payouts/hrms.svg" alt="hrms" />
                                <h5 class="mt-10 blue-col">HRMS & Payroll</h5>
                                <ul class="pl-15">
                                    <li>Referrals</li>
                                    <li>Instant salary disbursals round the clock</li>
                                    <li>Tax free employee benefits</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ptb-70 team-area">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="blue-col">Affordable pricing to send money in milliseconds</span></h2>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-3 fil-box1 bg-white bs br-3 single-blog-post">
                            <div class="row border-bottom p-2 text-left" >
                                <h4 class="mt-30 blue-col"><b>Simple Payout</b></h4>
                            </div>
                            <div class="row pl-2">
                                <ul class="lst_none ttm-list-style-icon payouts pl-0">
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>Vendor Payments </li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i> Payout links</li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>Dashboard</li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>Bulk Payout</li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>Insights & Reports</li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>300 free transaction every month</li>
                                </ul>
                                <span class="p-4"></span>
                            </div>
                            <div class="row border-top text-left p-4">
                                <h5 class="mt-30 blue-col">300 free transaction every month</h5>
                            </div>
                        </div>
                        <div class="col-md-3 fil-box2 bg-white effect7 b-3 single-blog-post">
                            <div class="row border-bottom p-2 text-left" >
                                <h4 class="mt-30 blue-col"><b>Booster Payout</b></h4>
                                <h6>Recommended for Startups and Bootstrapped companies</h6>
                            </div>
                            <div class="row pl-2">
                                <ul class="lst_none ttm-list-style-icon payouts pl-0">
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>Scheduled Payouts </li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i> Assisted Account opening, Debit Cards</li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col v"></i>Deposits and Withdrawals of Cash</li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>Dedicated Support </li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>All features of Simple Payout</li>
                                    <li class="m-4"><i class="fas fa-check fa-sm green-col fs-12"></i>500 free transactions every month</li>
                                </ul>
                            </div>
                            <div class="row border-top text-center p-4">
                                <h5 class="mt-20 blue-col">Transactions every month</h5>
                            </div>
                        </div>
                        <div class="col-md-3 fil-box3 bg-white bl-3 bs single-blog-post">
                            <div class="row border-bottom p-2 text-left" >
                                <div class="col-md-12">
                                    <h4 class="mt-30 blue-col"><b>Advanced Payout</b></h4>
                                    <h6>Enterprise level plan</h6>
                                </div>
                            </div>
                            <div class="row pl-4 min-ht-360">
                                <div class="col-md-12">
                                    <h6 class="pt-24 pl-24 pb-24">Customized pricing as per requirements</h6>
                                </div>
                            </div>
                            <div class="row border-top text-left p-4">
                                <div class="col-12">
                                    <a href="#" class="svg btn btn-primary contact-btn-padd">
                                        <div class="">
                                            <h6 class="fs-20 mt-4p">Contact Us </h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openModel == true ? <ContactUsModel openModel={openModel} CloseModel={CloseModel} Request="Payouts" /> : ""}

        </>
    )
}

export default Payouts;