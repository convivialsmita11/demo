import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MetaTags from 'react-meta-tags';
import WOW from 'wowjs';

function WhiteLabel() {

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
      new WOW.WOW({
          live: false
      }).init();
  }, [])
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
   return (
      <>

         <MetaTags>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="keywords" content="E-commerce payment gateway, Payment Gateway Uae,Best Payment Gateway UAE,payment gateway UAE,payment gateway in UAE,payment gateway,online payment gateway in UAE,International Payment Gateway,online payment gateway,Payment Gateway In Dubai" />
            <meta name="description" content="Safexpay is the best payment gateway that offers multiple integration options like hosted checkout page,merchant hosted page, payment by SMS/Email links & more" />
            <title>Best Payment Gateway in Dubai-  Safexpay</title>
         </MetaTags>
         <div class="banner-section pb-70 mb-40">
            <div class="container-fluid">
               <div class="row m-0 align-items-center">
                  <div class="col-lg-3 col-md-3 p-0">
                     <img src="assets/img/white-label/Group 3743.png" class="vis-hid img-fluid mobile-ui1-WL-res filter-blue wow animate__animated animate__fadeInUp" alt="Integration Plugin" />
                     <img src="assets/img/white-label/img1.png" class="vis-hid img-fluid mobile-ui-WL-res filter-blue wow animate__animated animate__fadeInUp" alt="Payment Summary" />
                     <img src="assets/img/white-label/cart.png" class="vis-hid img-fluid cart-ui1-WL-res filter-blue wow animate__animated animate__fadeInUp" alt="Cart" />
                  </div>
                  <div class="col-lg-6 col-md-12 p-0">
                     <div class="hero-content">
                        <h1 class="text-center lh-65 blue-col">Boost your business with Safexpay whitelabel solution</h1>
                     </div>
                     <p class="mt-20 text-center">Our robust white-label payment platform serves as a strong foundation for your company, allowing you to manage payments while maintaining your brand identity in an ever-evolving industry.
                     </p>
                  </div>
                  <div class="col-lg-3 col-md-12 p-0">
                     <img src="assets/img/white-label/bell.png" class="vis-hid bell-account-WL-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Notification Icon" />
                     <img src="assets/img/white-label/Group 3765.png" class="vis-hid cobranded-card-WL-res filter-green wow animate__animated animate__fadeInUp img-fluid" alt="Payment Cards- Visa, Mastercard etc." />
                     <img src="assets/img/white-label/qr.png" class="vis-hid virtual-account-WL-res filter-blue wow animate__animated animate__fadeInUp img-fluid" alt="Scan and Pay" />
                  </div>
               </div>
            </div>
         </div>
         <section class="services-area m-4s mt-40 pt-70 redefine-res-padd" id="Payment-Gateway">
            <div class="section-title">
               <h2><span class="blue-col">Our whitelabel offerings</span></h2>
            </div>
         </section>

         <article class="container">
            <ul class="nav nav-tabs home-page title center-box" id="primary-navwrapper">
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
               <div class="row flex-wrap-reverse">
                  <div class="col-md-5">
                     <h5 class="blue-col mt-20"><b>Payment gateway</b></h5>
                     <div class="row mt-30">
                        <div class="col-2 col-s-2">
                           <img src="assets/img/white-label/offering-y1.svg" alt="Merchant lifecycle management" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="blue-col">Merchant lifecycle management</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y2.svg" alt="Payment modes & priority routing" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Payment modes & priority routing</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y3.svg" alt="Flexible reconciliation & settlement" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Flexible reconciliation & settlement</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y4.svg" alt="Integration kits & developer guides" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Integration kits & developer guides</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y5.svg" alt="Built-in or API-led dashboards" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10" id="Payouts">
                           <h5 class="mt-30 blue-col">Built-in or API-led dashboards</h5>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-1 col-xs-hidden col-sm-hidden"></div>
                  <div class="col-md-6 pr">
                     <img src="assets/img/white-label/white-label-tab-1.png" class="wl-pp-res animate__animated animate__fadeInUp img-fluid" alt="Payment Gateway" />
                     <img src="assets/img/mobile/white-label/white-label-tab-1.png" class="wl-pp-res1 img-fluid" alt="white-label-tab-1" title="Payment modes" />
                     <img src="assets/img/white-label/security.png" class="wl-tab-4124-res img-fluid wow animate__animated animate__fadeInUp" alt="Secure Payments" />
                     <img src="assets/img/white-label/code.png" class="wl-tab-41141-res img-fluid wow animate__animated animate__fadeInUp" alt="Code" />
                     <img src="assets/img/white-label/API.png" class="wl-tab-4114-res img-fluid wow animate__animated animate__fadeInUp" alt="API" id="three" />
                     <img src="assets/img/white-label/user-acces.png" class="wl-tab-user-access1-res img-fluid wow animate__animated animate__fadeInUp" alt="User access management" />
                     <img src="assets/img/white-label/img2.png" class="wl-tab1-user-access-res img-fluid wow animate__animated animate__fadeInUp" alt="Payment Summary" />
                  </div>
               </div>
               <span ref={ref}></span>
            </div>
            <div class="container ptb-40-lr-0" data-color="#C0392B">
               <div class="row">
                  <div class="col-md-6 pr" >
                     <img src="assets/img/white-label/dashboard.png" class="wl-tab-41251-res img-fluid wow animate__animated animate__fadeInUp" alt="dashboard" />
                     <img src="assets/img/white-label/white-label-tab-2.png" class="wl-payouts-res fr wow animate__animated animate__fadeInUp img-fluid" alt="white-label-tab-2" style={{ 'Width': '100%' }} />
                     <img src="assets/img/mobile/white-label/white-label-tab-2.png" class="wl-payouts-res1 fr  img-fluid" alt="white-label-tab-2" />
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                     <h5 class="blue-col mt-20"><b>Payouts</b></h5>
                     <div class="row mt-30">
                        <div class="col-2 col-s-2">
                           <img src="assets/img/white-label/offering-y7.png" alt="pay3" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="blue-col">Physical or Virtual Card</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y8.png" alt="pay3" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Co-branded card </h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y9.png" alt="pay3" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">ATM Withdrawals</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y10.png" alt="pay3" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Easy Card loading & Re-loading</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y11.png" alt="pay3" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10" id="Neo-Banking">
                           <h5 class="mt-30 blue-col">Pay Rewards/Salaries on card</h5>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y12.png" alt="pay3" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Balance Passbook</h5>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-1"></div>
               </div>
               <span ref={ref2}></span>
            </div>
            <div class="container ptb-40-lr-0" data-color="#8E44AD">
               <div class="row flex-wrap-reverse">
                  {/* <!--<div class="col-md-1 col-xs-hidden col-sm-hidden"></div>--> */}
                  <div class="col-md-5">
                     <h5 class="blue-col mt-20"><b>Neo banking</b></h5>
                     <div class="row mt-30">
                        <div class="col-2 col-s-2">
                           <img src="assets/img/white-label/offering-y13.svg" alt="Own banking environment" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="blue-col">Own banking environment</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y14.svg" alt="Send or receive money" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Send or receive money</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y15.svg" alt="Pay bills" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Pay bills</h5>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-2 col-s-2 mt-30">
                           <img src="assets/img/white-label/offering-y16.svg" alt="Add & manage cards" class="img-fluid" />
                        </div>
                        <div class="col-10 col-s-10">
                           <h5 class="mt-30 blue-col">Add & manage cards
                           </h5>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-1 col-xs-hidden col-sm-hidden"></div>
                  <div class="col-md-6 pr">
                     <img src="assets/img/home-img/send-money-neo.png" class="wl-tab-3888 img-fluid wow animate__animated animate__fadeInUp" alt="Sent Money" />
                     <img src="assets/img/white-label/uitility.png" class="wl-tab-4128-res img-fluid wow animate__animated animate__fadeInUp" alt="Pay water and electricity bills, recharhe mobile, DTH, Gas booking etc." />
                     <img src="assets/img/white-label/white-label-tab-3.png" class="wl-neo-res img-fluid" alt="Payments made easy" style={{ 'Width': '100%' }} />
                     <img src="assets/img/mobile/white-label/white-label-tab-3.png" class="wl-neo-res1 img-fluid" alt="white-label-tab-3" />
                  </div>
               </div>
               <span ref={ref3}></span>
            </div>
         </article>

         <section class="services-area ptb-70 bg-col-gray">
            <div class="section-title">
               <h2><span class="blue-col">White label features</span></h2>
            </div>
            <div class="container ">
               <div class="row">
                  <div class="col-6 col-md-3">
                     <div class="p-40 padd-20-res pl-0">
                        <img src="assets/img/white-label/feature-01.svg" alt="Own branded checkouts" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Own branded <br />checkouts</h5>
                     </div>
                  </div>
                  <div class="col-6 col-md-3">
                     <div class="p-40 padd-20-res">
                        <img src="assets/img/white-label/feature-02.svg" alt="Email & SMS templates as per own brand" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Email & SMS templates as per own brand</h5>
                     </div>
                  </div>
                  <div class="col-6 col-md-3">
                     <div class="p-40 padd-20-res">
                        <img src="assets/img/white-label/feature-03.svg" alt="Multiple payment options" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Multiple payment options</h5>
                     </div>
                  </div>
                  <div class="col-6 col-md-3">
                     <div class="p-40 padd-20-res pr-0">
                        <img src="assets/img/white-label/multiple-currency.svg" alt="Multiple currency acceptance" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Multiple currency acceptance</h5>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-6 col-md-3">
                     <div class="p-40 padd-20-res pl-0">
                        <img src="assets/img/white-label/feature-05.svg" alt="Branded portals for merchants and channel partners" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Branded portals for merchants and channel partners</h5>
                     </div>
                  </div>
                  <div class="col-6 col-md-3">
                     <div class="p-40 padd-20-res">
                        <img src="assets/img/white-label/feature-07.svg" alt="Merchant analytics" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Merchant analytics</h5>
                     </div>
                  </div>
                  <div class="col-6 col-md-3">
                     <div class="p-40 padd-20-res">
                        <img src="assets/img/white-label/feature-08.svg" alt="Branded API for 15+ shopping carts" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Branded API for 15+ shopping carts</h5>
                     </div>
                  </div>
                  <div class="col-6 col-md-3">
                     <div class="p-40 padd-20-res pr-0">
                        <img src="assets/img/white-label/feature-09.svg" alt="Branded SDK for mobile API integration" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Branded SDK for mobile API integration</h5>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section class="comparisons-area ptb-70">
            <div class="container">
               <div class="section-title">
                  <h2><span class="blue-col">White label advantages</span></h2>
                  <h5 class="mt-20 fs-18">Our White Label Solution is best suited for businesses that want to accept and disburse payments under their own brand. The comprehensive platform helps businesses to process safer and decentralized transactions in an unrivaled global network of payment solutions.
                  </h5>
               </div>
               <div class="row">
                  <div class="col-md-12 pr">
                     <center>
                        <img src="assets/img/white-label/computer.png" alt="Shipping details" class="computer-res wow animate__animated animate__fadeInUp img-fluid" />
                        <img src="assets/img/mobile/white-label/computer.png" alt="Order Summary" class="computer-res1  img-fluid" title="Order Summary" />
                     </center>
                     <img src="assets/img/white-label/mobile-on-computer.png" alt="Cart" class="home-mobile-on-computer-res wow animate__animated animate__fadeInUp img-fluid" />
                  </div>
               </div>
               <div class="row pt-10p">
                  <div class="col-6 col-md-4">
                     <div class="p-40 padd-20-res">
                        <img src="assets/img/white-label/own-branded-checkout.svg" alt="Own branded checkout" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Own branded <br />checkout</h5>
                        <p>Make your target audience resonate with your brand throughout the payment experience.</p>
                     </div>
                  </div>
                  <div class="col-6 col-md-4">
                     <div class="p-40 padd-20-res">
                        <img src="assets/img/white-label/Reassured-checkout-experience.svg" alt="Reassured checkout experience" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Reassured <br />checkout experience</h5>
                        <p>Reinforce trust with your customers with a seamless checkout.</p>
                     </div>
                  </div>
                  <div class="col-6 col-md-4">
                     <div class="p-40 padd-20-res">
                        <img src="assets/img/white-label/go-live-within-7-days.svg" alt="Go live within 7 days" class="img-fluid" />
                        <h5 class="mt-20 blue-col">Go live<br /> within 7 days</h5>
                        <p>Fast and hassle-free onboarding and integration with the shortest turnaround time.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section class="services-area ptb-70">
            <div class="container">
               <div class="section-title">
                  <h2><span class="blue-col">Use Cases</span></h2>
               </div>
               <div class="overview-box">
                  <div class="overview-content">
                     <div class="content left-content">
                        <img src="assets/img/white-label/use-cases-WL.png" alt="Use cases" class="wl-man-res img-fluid" />
                     </div>
                  </div>
                  <div class="overview-image">
                     <div class="row">
                        <div class="image">
                           <img src="assets/img/white-label/Education.png" alt="Education" class="wl-Education-uc mt-10 filter-green wow animate__animated animate__fadeInUp img-fluid" />
                           <img src="assets/img/white-label/NBSP.png" alt="NBFC" class="wl-nbsp-uc img-fluid mt-10 filter-green wow animate__animated animate__fadeInUp" />
                           <img src="assets/img/white-label/Corporate.png" alt="Corporate" class="wl-corporate-uc mt-10 img-fluid filter-blue wow animate__animated animate__fadeInUp" />
                           <img src="assets/img/white-label/IT.png" alt="IT Sector" class="wl-it-uc img-fluid mt-10 filter-green wow animate__animated animate__fadeInUp" />
                        </div>
                     </div>
                     <div class="row ">
                        <div class="image">
                           <img src="assets/img/white-label/Insurance.png" alt="Insurance" class="wl-insurance-uc mt-10 img-fluid filter-green wow animate__animated animate__fadeInUp" />
                           <img src="assets/img/white-label/Tech.png" alt="Tech" class="wl-tech-uc img-fluid mt-10 filter-blue wow animate__animated animate__fadeInUp" />
                        </div>
                     </div>
                     <div class="row ">
                        <div class="image">
                           <img src="assets/img/white-label/Banking.png" alt="Banking" class="wl-banking-uc mt-10 img-fluid  filter-green wow animate__animated animate__fadeInUp" />
                           <img src="assets/img/white-label/Government.png" alt="Government" class="wl-gov-uc mt-10 img-fluid  filter-green wow animate__animated animate__fadeInUp" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   )

}
export default WhiteLabel;