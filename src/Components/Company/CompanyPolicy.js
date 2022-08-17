import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MetaTags from 'react-meta-tags';

function CompanyPolicy() {


    // Tab start
    const [Active, SetActive] = useState("");
    const [Active2, SetActive2] = useState("");
    const [Active3, SetActive3] = useState("");
    const [Active4, SetActive4] = useState("");
    const [Active5, SetActive5] = useState("");
    const [ref, inView] = useInView({
    });
    const [ref2, inView2] = useInView({
    });
    const [ref3, inView3] = useInView({
    });
    const [ref4, inView4] = useInView({
    });
    const [ref5, inView5] = useInView({
    });

    useEffect(() => {
        if (inView) {
            SetActive("blue-col active")
            SetActive2("")
            SetActive3("")
            SetActive4("")
            SetActive5("")
        } else {
            SetActive("")
        }
    });
    useEffect(() => {
        if (inView2) {
            SetActive2("blue-col active")
            SetActive("")
            SetActive3("")
            SetActive4("")
            SetActive5("")
        } else {
            SetActive2("")
        }
    })
    useEffect(() => {
        if (inView3) {
            SetActive3("blue-col active")
            SetActive("")
            SetActive2("")
            SetActive4("")
            SetActive5("")
        } else {
            SetActive3("")
        }
    })
    useEffect(() => {
        if (inView4) {
            SetActive4("blue-col active")
            SetActive("")
            SetActive2("")
            SetActive3("")
            SetActive5("")
        } else {
            SetActive4("")
        }
    })

    useEffect(() => {
        if (inView5) {
            SetActive5("blue-col active")
            SetActive("")
            SetActive2("")
            SetActive3("")
            SetActive4("")
        } else {
            SetActive5("")
        }
    })
    // Tab end

    return (
        <>

            <MetaTags>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Safexpay and all its subsidiaries are committed for protecting and respecting your information that will be provided by you by filling the forms on our site." />
                <title>Safexpay- Company Policy- Privacy Policy</title>
            </MetaTags>
            <section class="account-create-area">
                <div class="gray-bg-stat">
                    <div class="hero-content mt-0">
                        <h1 class="text-center stat-page-banner-text" >
                            <span class="white-col">Company Policy</span>
                        </h1>
                    </div>
                </div>
            </section>


            <article class="container ptb-40">
                <div class="row">
                    <div class="col-md-3 col-4 static-page-tabs-res">
                        <ul class="static-page nav no-border nav-tabs home-page mob-title title" id="primary-navwrapper" >
                            <li class="pay-head " role="presentation">
                                <a href="#one" class={Active}>Privacy Policy</a>
                            </li>
                            <li class="remi-head" role="presentation">
                                <a href="#two" className={Active2}>Terms & Condition</a>
                            </li>
                            <li class="cont-head " role="presentation">
                                <a href="#three" className={Active3}>Disclaimer</a>
                            </li>
                            <li class="cont-head " role="presentation">
                                <a href="#four" className={Active4}>Customer Greivences Policy</a>
                            </li>
                            <li class="cont-head " role="presentation">
                                <a href="#five" className={Active5}>Responsible Disclosure Policy </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-9  col-8">
                        {/* <!--<div class="bxs">--> */}
                        <div id="one" data-color="#16A085" ref={ref}>
                            <div class="row center-box" >
                                <div class="col-12">
                                    <h2 class="blue-col" >Privacy Policy</h2>
                                    <div class="row">
                                        <section class="ptb-40 team-area">
                                            <div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="fw-400">
                                                            SAFEXPAY FZE(‘Safexpay’) and all its subsidiaries(including all subsidiaries across the globe)
                                                            are committed for protecting and respecting
                                                            your information that will be provided by you by filling the forms on our site.
                                                            Th Privacy Policy outlines the manner in which we collect, store, use and protect
                                                            your information and it has been prepared to ensure that your privacy is protected
                                                            and secured. You can be assured that we shall use your personal information only in
                                                            accordance with this Privacy Policy. Please read and understand carefully that the
                                                            Safexpay Privacy Policy is to know our views and practices regarding your personal data
                                                            and on how we use it. You hereby acknowledge that you accept this Privacy Policy when you
                                                            sign up for, access or use our products, services, content,
                                                            features, technologies, or functions offered on our website and all related sites,
                                                            applications and services (collectively “Safexpay Services”).
                                                            By providing us with your information you expressly consent to us processing your
                                                            information in accordance with the terms of our Privacy Policy.
                                                        </p>
                                                        <p class="fw-400">
                                                            <b>The Information which you have provided at the time of registration on our website and while subscription of our various services this may include but not limited to:</b>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <ul class="lst_none ttm-list-style-icon pl-0">
                                                            <li><i class="fas fa-check"></i> Name</li>
                                                            <li><i class="fas fa-check"></i> Designation</li>
                                                            <li><i class="fas fa-check"></i> Contact information including email address.</li>
                                                            <li><i class="fas fa-check"></i> Business information.</li>
                                                            <li><i class="fas fa-check"></i> Demographic information like postcodes, preferences and interests.</li>
                                                            <li><i class="fas fa-check"></i> Any other information related / relevant to our application process.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="fw-400">
                                                            <b> Why we collect your information?</b>
                                                        </p>
                                                        <ol start="1">
                                                            <li><b> To personalize user experience: </b></li>
                                                        </ol>
                                                        <p class="fw-400">We use your information to provide and improve the Safexpay Service to you. Also, we may use information to understand how our users as a group use the services and resources provided on Safexpay Website. </p>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ol start="2">
                                                            <li><b>  To improve customer service: </b></li>
                                                        </ol>
                                                        <p class="fw-400">Your information helps us to respond more effectively to your customer service requests, enquiry and support needs.  </p>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ol start="3">
                                                            <li><b> To process your application: </b></li>
                                                        </ol>
                                                        <p class="fw-400">We use the information collected to understand the nature and profile of your business and accordingly approve or decline your application.  </p>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ol start="4">
                                                            <li><b>  For marketing purposes: </b></li>
                                                        </ol>
                                                        <p class="fw-400">We may use your information for promotional activities of our new products and features, special offers and for advertising our products and services.   </p>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ol start="5">
                                                            <li><b>  To periodic Communications: </b></li>
                                                        </ol>
                                                        <p class="fw-400">The email/contact number/address provided will be used to send information and updates pertaining to our site and our services. It may also be used to respond
                                                            to your enquiry, and/or other requests. If the user decides to opt-in to our mailing list, they will receive emails that may include Paygate news, updates, related product or service information, etc.
                                                        </p>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ol start="6">
                                                            <li><b>To share with Law Enforcement Agencies, Government Agencies or Other Unaffiliated Third Parties: </b></li>
                                                        </ol>
                                                        <p class="fw-400">Even though we make full effort to prevent  your privacy, but sometimes we might require to disclose
                                                            your personal information to law enforcement agencies or to third parties helping in investigating fraud or to third
                                                            parties investigating to safe guard user or SAFEXPAY from any risk, or with government agencies or other third parties
                                                            without your permission not limited but including where we are compelled  by court order or similar legal procedure;
                                                            where we are required  to comply with law; or cooperating with an ongoing law enforcement investigation; or where we have
                                                            a good faith belief that such action is necessary to prevent physical harm or financial loss, to report suspected illegal
                                                            activity or to investigate a possible violation of our User Agreement.<br />
                                                            <br />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b> Data Storage and access  </b></p>
                                                        <p>The data we collect from you is stored in our system servers and will be treated with utmost confidentiality. Your personal information will be used only by Safexpay for all business transactions that require your information to complete the transactions.
                                                            <br />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b> Disclosure of your Information </b></p>
                                                        <p>Safexpay may disclose your personal information to any of our subsidiaries. </p>
                                                        <p>For the further growth of the Paygate, we may acquire any business or asset. In such case we may disclose your personal data to the prospective buyer of such business or assets.&nbsp;</p>
                                                        <p>Safexpay may transfer information with any of our subsidiaries that we collect about you, including personal information across borders and from your country or jurisdiction to other countries or jurisdictions around the world. Note that we may transfer information, including personal information with any of our subsidiaries, to a country and jurisdiction that does not have the same data protection laws as your jurisdiction&nbsp;
                                                        </p>
                                                        <p>In case Safexpay or its Subsidiaries are acquired by a third party, in which case information held by it about its customers will be one of the transferred assets. If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property or safety of us, our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.
                                                        </p>
                                                        <p>Safexpay may allow a third-party application to access your information in cases where a need arises for verification of your data and other validation purposes. Safexpay ensures that verification processes used by third party application will help to make your account safe from fraud or any money laundering</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b> Security and Retention:   </b></p>
                                                        <p>Safexpay recognizes its responsibility to keep confidential and secure at all times any information that Safexpay receives in connection with a transaction. Safexpay has all the necessary electronic and physical procedures in place to keep your information secure in order to prevent any unauthorized access. When you log into your Safexpay account, all Internet communication is secured using Secure Socket Layer (SSL) technology with 256-bit encryption security. For your own safety, please make sure never to share yourSafexpaylogin details with anyone.
                                                        </p>
                                                        <p>Notwithstanding anything contained in this Policy or elsewhere, to the extent permissible under applicable laws,Safexpayshall not be held responsible for any loss, damage or misuse of your Personal Information/Non-Personal Information/Sensitive Personal Information, if such loss, damage or misuse is attributable to a Force Majeure Event (as defined below).</p>
                                                        <p>A <b>Force Majeure </b>Event shall mean any event that is beyond the reasonable control of Paygateand shall include, without limitation, sabotage, fire, flood, explosion, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts of government, computer hacking, epidemic, unauthorised access to computer, computer system or computer network, computer crashes, breach of security and encryption (provided beyond reasonable control of Paygate), power or electricity failure or unavailability of adequate power or electricity.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b>Internet Cookies  </b></p>
                                                        <p>Cookies are text files, used by your computer's browser, that store visitor session data. Cookies, by themselves, do not identify the individual user. Cookies are commonly used on the Internet and do not harm your system.  </p>
                                                        <p>Cookies are mainly used to measure web traffic, for keeping records and to let you know when you visit a particular site. But cookies never give us access to any other information other than what you choose to share with us.&nbsp;</p>
                                                        <p>Cookies also help us in analysing data to be used in improving our website, eventually giving you a better user experience. Users generally have the options to accept or decline cookies. However, please note that you will not get the full benefit of using the website if you choose to decline.&nbsp;</p>
                                                        <p>When you registered on our website information about your computer, including where available is your IP address, operating system and browser type for system administration will be recorded. We may collect same information on email or by any other mode of communication. This is statistical data about our users’ browsing actions and patterns and does not identify any individual. This is required for the for more accurate reporting and improvement in the services.&nbsp;</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b>Third Party Websites  </b></p>
                                                        <p>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. Paygate does not control the content or links that appear on these sites and are not responsible for the practices employed by those websites.   </p>
                                                        <p>Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies. Paygate does not guarantee protection and privacy of information that you may provide to such websites.&nbsp;</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b>Updating your Information  </b></p>
                                                        <p>If your personal or professional information (such as your name, address, or telephone number) needs change, you must update your details by contacting Safexpay on our contact us page. </p>
                                                        <p>To avoid inconvenience to all, Safexpay strongly advises keeping all information up to date and correct. Safexpay will be exempt from any responsibility in the rare event where losses may arise from not updating your information. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b>Jurisdiction: </b></p>
                                                        <p>This Privacy Policy is governed by and shall be construed in accordance with the laws of Republic of India and any disputes arising out of or in connection with this Agreement shall be subject to jurisdiction of the Courts of Mumbai, India. </p>
                                                        {/* <!--<p>This Privacy Policy is governed by and shall be construed in accordance with the laws of UAE and any disputes arising out of or in connection with this Agreement shall be subject to jurisdiction of the Courts of UAE. </p>--> */}
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b>Indemnity:  </b></p>
                                                        <p>You shall indemnify and hold harmless Companies, its officers, directors, contractors or agents and any third parties relying on the information provided by you for any losses, including all claims, damages, liabilities, deficiencies, assessments, interest, awards, settlements, penalties,  </p>
                                                        <p>fines, costs or expenses, suffered, incurred, sustained by, or imposed on Safexpay, as a result of, arising out of, with respect to, in connection with or by reason of a breach or non-performance of any of the terms, conditions, representations, warranties or covenants contained in this Privacy Policy by You.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b>Other Websites and Services </b></p>
                                                        <p>We are not responsible for the practices employed by any websites or services linked to or from our Service, including the information or content contained mention there. Please remember that when you use a link to go from our Service to another website or service, our Privacy Policy does not apply to those third-party websites or services.</p>
                                                        <p>You’re browsing and interaction on any third-party website or service, including those that have a link on our website, are subject to that third party’s own rules and policies. Further, you agree that we are not responsible and do not have control over any third-parties website/Services that you authorize to access your User Content. If you are using a third-party website or service and you allow them to access your User Content you do so at your own risk.&nbsp;</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p class="fw-400"><b>Customer Rights:  </b></p>
                                                        <p>We acknowledge and agree the individual’s right to access their Personal Data. We shall allow an individual access to their Personal Data further we allow the individual the occasion to correct, amend or delete inaccurate information, except where the burden or expense of providing access would be disproportionate to the risks to the privacy of the individual is in question or where the rights of persons other than the individual would be violated. Individuals may contact our Privacy Officer via email to request access. Contact information can be found below.</p>
                                                        <p id="two">Safexpay reserves the right to amend this policy at any point in time on its discretion and accordingly update this page. Please check this page periodically to make sure you are happy with the changes.</p>
                                                        {/* <!--<p>Grievance redressal:  </p>
                                                            <p>Please write your concerns to: <b>For Paygate India Private Limited:&nbsp;</b></p>
                                                            <ul class="lst_none ttm-list-style-icon pl-0">
                                                                <li><i class="fas fa-check"></i> Contact on: Email: care@safexpay.com</li>
                                                            </ul>--> */}
                                                    </div>
                                                </div>
                                                {/* <!--<div class="row">
                                                        <div class="col-md-12">
                                                            <p>For Paygate India Private Limited:&nbsp;</p>
                                                            <ul class="lst_none ttm-list-style-icon pl-0">
                                                                <li><i class="fas fa-check"></i> Email: legal@safexpay.com</li>
                                                                <li><i class="fas fa-check"></i> Address- 718, 7th Floor, Lodha Supremous-2, Wagle Estate, Thane West, Maharashtra 400604, India. </li>
                                                                <li><i class="fas fa-check"></i> Working hours: 9 a.m. to 7 p.m. </li>
                                                            </ul>
                                                            <p id="two">Paygate reserves the right to amend this policy at any point in time on its discretion and accordingly update this page. Please check this page periodically to make sure you are happy with the changes.</p>
                                                            <p>Policy w.e.f. 01st January 2021</p>
                                                        </div>
                                                    </div>--> */}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-color="#C0392B" ref={ref2}>
                            <div class="row center-box">
                                <div class="col-md-12">
                                    <h2 class="blue-col" >Terms & Condition</h2>
                                    <div class="row ptb-40">
                                        <h5 class="blue-col"> 1. Introduction</h5>
                                        <p>Safexpay FZE and/or its affiliates ("Safexpay”) provide website services to you when you visit www.safexpay.com (the "Website").Your use of Safexpay services is subject to the terms and conditions mentioned on this page or in any agreement between you and us which govern your use of our services. </p>
                                        <p>You hereby acknowledge that you agree and accept this Terms & Conditions when you sign up for, access or use our products, services, content, features, technologies or functions offered on our website and all related sites, applications and services (collectively “Safexpay Services”).</p>
                                        <p>
                                            Request you to see our Privacy Policy to understand in detail how we collect and process your information through Safexpay Services.
                                        </p>
                                    </div>
                                    <div class="row ptb-40">
                                        <h5 class="blue-col"> 2.	Licence to use website</h5>
                                        <p>
                                            Subject to your acceptance with thisTerms and Conditions of Use and applicable Service Terms and your payment of any applicable fees, Safexpay or its content providers grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make personal and non-commercial use of the Safexpay Services.
                                        </p>
                                        <p>Unless otherwise stated, Safexpay is the sole owner of all the intellectual property rights on the website and material on the website. Subject to the licence, all this intellectual property rights are reserved by Safexpay.</p>
                                        {/* <p> */}
                                        <div class="p-20">
                                            <h6>Restrictions:</h6>
                                            A.  You must notrepublish material/content from this website (including republication on another website.
                                            <p>B. You must not sell or sub-license material/content from the website.
                                            </p>
                                            <br />
                                            <p>C. You must not Publicly show any material/content from the website or reproduce or republish in Public
                                            </p>
                                            <p>D. You must not reproduce, duplicate, copy or otherwise exploit material/content on our website for a commercial purpose
                                            </p>
                                            <p> E. You must not edit or otherwise modify any material/content on the website.
                                            </p>
                                        </div>
                                        <p id="three">You may use the Safexpay Services only as permitted by law and may not misuse the Safexpay Services. The licenses granted by Safexpay shall be terminated if you do not comply with thisTerms &Conditions of Use or any Service Terms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-color="#C0392B" ref={ref3}>
                            <div class="row center-box">
                                <div class="col-md-12">
                                    <h2 class="blue-col" >Disclaimer</h2>
                                    <div class="row" >
                                        <section class="ptb-40 team-area">
                                            <div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="fw-400" id="four">
                                                            Safexpay has taken care to ensure that all content, software, functions, materials, and information made available on,
                                                            provided in connection with or accessible through on this website is accurate, this website and the services accessible
                                                            on or via this website are provided "as is" and “as available” basis and your use of and reliance on the information on
                                                            this website and the online services is entirely at your own risk. Safexpay makes no representation or warranty of any
                                                            kind whatsoever for the website, software, advice & opinions, post, any tools, statements, information, content or online
                                                            services will be error-free or viruses or any other harmful component will meet any particular criteria of accuracy, completeness,
                                                            reliability, performance or quality. Safexpay does not warrant or represent regarding any content provided through this website and
                                                            disclaims its liabilities in respect thereof. We reserve the right, in our sole discretion, to correct any errors or omissions in any
                                                            portion of this website. While Safexpay takes all reasonable precautions to prevent this, we do not warrant that the website or any software
                                                            available for download via the website is free of viruses or destructive code. To the fullest extent permissible by law, Safexpay expressly disclaims
                                                            all (express and implied) warranties, including, without limitation, warranties of merchantability, title, and fitness for a particular purpose, noninfringement,
                                                            compatibility, security and accuracy, damages for loss of profits, business interruption, loss of programs or information in respect of this website and the services accessible on this website.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-color="#8E44AD" ref={ref4}>
                            <div class="row center-box">
                                <div class="col-md-12">
                                    <h2 class="blue-col" >Customer Greivences Policy</h2>
                                    <div class="row">
                                        <section class="ptb-40 team-area">
                                            <div>
                                                <div class="row ">
                                                    <div class="col-md-12">
                                                        <p>In today’s competitive era and constantly evolving business, we at Safexpay take pride in keeping our customers at the centre of all our strategies and initiatives and are committed to deliver best in class customer services to all our existing and new customers at all times. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>As a service organization we promote "Excellence in Delivery" and hence feedback from our valued customers forms an integral part of all decisions taken by the organization. The feedback provided by our customers is treated as an asset to the organization, evaluated and customized to improve our products and services. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>This policy document aims at communicating the various mechanisms available for our customers to reach out to us, our service guarantee and timelines by which we will try and ensure resolution to our customer concerns. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <div class="section-title">
                                                            <h2 class="text-center blue-col">Our Principles</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ul class="lst_none ttm-list-style-icon pl-0">
                                                            <li><i class="fas fa-check"></i> Customers remain the Key focus for all initiatives and strategies developed at Safexpay.</li>
                                                            <li><i class="fas fa-check"></i> "Delighted" customers are a necessity for business growth and survival. </li>
                                                            <li><i class="fas fa-check"></i> Our Customers and their Feedback is treated as the most valuable asset for the organization, forming the foundation for development and innovation. </li>
                                                            <li><i class="fas fa-check"></i> We endeavour to simplify our customers life through our innovations and product offerings. </li>
                                                            <li><i class="fas fa-check"></i> Constantly evolve and invest in our grievance redressing systems for a seamless service  delivery. </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <div class="section-title">
                                                            <h2 class="text-center blue-col">Our Promise</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ul class="lst_none ttm-list-style-icon pl-0">
                                                            <li><i class="fas fa-check"></i> All grievances will be dealt with, timely and courteously. </li>
                                                            <li><i class="fas fa-check"></i> We promise to resolve any or all issues faced by our customers effectively and within the communicated time frame. </li>
                                                            <li><i class="fas fa-check"></i> All Service Level Agreements and turnaround time for each third party transaction would be published on our website.  </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>The company has a dedicated Customer Engagement Centre under the Customer Service Department (CSD) to manage customer queries and ease out grievances if any. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <div class="section-title">
                                                            <h2 class="text-center blue-col">We Value your Feedback </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>All customers have the right to share their feedback or complaint in case they find our services are not meeting their expectations or are dissatisfied with any interaction with any of our staff members. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>The Customers can send in their Queries, Requests or Complaints in the following ways: </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <ul class="lst_none ttm-list-style-icon pl-0">
                                                            <li><i class="fas fa-check"></i> Over Phone - Customer Engagement Centre:-Customers can call us on +91 7208903029 (Call Charges as applicable apply), between 09:00 AM to 7:00 PM, 7 Days working (National Holidays excluded). </li>
                                                            <li><i class="fas fa-check"></i> Over Email :- Sending us an email on <a href="mailto:care@safexpay.com">care@safexpay.com</a></li>
                                                            <li><i class="fas fa-check"></i> Contact Us section :- Customers can choose the contact us section on our website <a href="http://www.safexpay.com">http://www.safexpay.com</a> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>These mechanisms are dedicated for redressing our customer complaints, providing online resolution wherever possible, and capturing valuable feedback regarding our services.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>On receiving customer feedback, our executives would reach out to the customers and ensure that all grievances are redressed within a predefined Service Level Agreement as communicated below. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>If the complaint is not resolved within the given timelines or the response is unsatisfactory the customer can choose to escalate the concern to our level 2 escalation officer, with relevant details such as Complaint Reference Number provided at the time of raising the initial complaint. The escalation methodology is mentioned in this policy under the Escalation Section. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>
                                                            For the purpose of this Grievance Policy, (i) an end-customer who will be purchasing of goods /services from the merchants by making payment via different payment instrument is defined as a (“Customer”); (ii) a merchant (“Merchant”) shall be a user of Safexpay Services for accepting various payment instruments from the Customers for completion of their payment obligation.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <div class="section-title">
                                                            <h2 class="text-center blue-col">Grievance Redressal</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>SAFEXPAY has formulated an escalation matrix to assure that the Customer grievances are routed and addressed in a proper and reasonable manner. The Customer is requested to read and understand the below escalation matrix to ensure a timely redressal of their grievances.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <h5>Level 1 –</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>Customer can visit SAFEXPAY Support page
                                                            (https://safexpay.ae supportus)-
                                                            Support and refer to specific query/issue related to their grievance. The Customer can fill up forms available for specific issue to report their grievance. Safexpay shall respond to the grievance filed by the Customer within 24 hrs.
                                                        </p>
                                                        <br />
                                                        <p>If the Customer is not satisfied with the response provided, the Customer can go for next level of escalations.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <h5>TYPE OF QUERIES and TAT</h5>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th>Type of Issue</th>
                                                                        <th>Details</th>
                                                                        <th>Email Id</th>
                                                                        <th>TAT</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Txn issue & status</td>
                                                                        <td>Txn issues at technical level reported by merchant , issues.Transaction status of the transaction</td>
                                                                        <td>care@safexpay.com</td>
                                                                        <td>24 hrs</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>Refund/status issues</td>
                                                                        <td>Refund status of the transactions</td>
                                                                        <td>care@safexpay.com</td>
                                                                        <td>24 hrs</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>Payout/Settlement related issue</td>
                                                                        <td>Payout status for merchants, customer txns</td>
                                                                        <td>care@safexpay.com</td>
                                                                        <td>24 hrs</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>4</td>
                                                                        <td>Payment options</td>
                                                                        <td>Payment Options working or not</td>
                                                                        <td>care@safexpay.com</td>
                                                                        <td>24 hrs</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>5</td>
                                                                        <td>Merchant communications</td>
                                                                        <td>Schedule/Unscheduled downtimes -bank /Portals /txns</td>
                                                                        <td>care@safexpay.com</td>
                                                                        <td>24 hrs</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <h5>Level 2 –</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>In case the Customer wishes to further escalate the grievance, the Customer can get the grievances registered by e-mailing: <a href="mailto:care@safexpay.com">care@safexpay.com</a>. Safexpay shall attempt to respond within 3 days from the date of the on which grievance was filed. The Customer may request for update on grievance in case if any grievance requires more than the specified time period and the Customer shall be kept updated on the status of the grievance. If the Customer is not satisfied with the response provided, the Customer can go for next level of escalations.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <h5>Level 3 –</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>In case the Customer still has any grievance, the Customer shall escalate such grievance to the Nodal Officer.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>Paygate India Private Limited,<br />
                                                            718, 7th Floor, Lodha Supremous-2, <br />
                                                            Wagle Estate, Thane West<br />
                                                            Maharashtra 400604, India.<br />
                                                            E-MAIL: <a href="mailto:legal@safexpay.com">legal@safexpay.com</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <h5>Dispute Resolution</h5>
                                                        <h5>Complaint regarding Customer Order :</h5>
                                                        <h5>Case 1</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>In case the Customer does not receive the services/products even after the stipulated time period or if the products received are different, defective or damaged, then the Customer should visit the Merchant website and refer to the terms & conditions, shipping policy, refund/exchange/ return/cancellation policy and contact the Merchant to resolve the issue.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>The Customer can initiate communication directly with the Merchant to resolve issues pertaining to a specific order through Merchant’s Website under the contact us (email or call support) option. The Customer can share the details of the transaction such as date of transaction, amount of transaction, Order ID shared by the Merchant, description of the problem with the Merchant.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <h5>Case 2</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>In case the Customer do not get a satisfactory response or Merchant does not respond to Customer’s emails & phone calls within 7 working days from the date of transaction made by the Customer, then the Customer can contact Safexpay to mediate and amicably resolve the issue. The Customer may provide Safexpay with the following details :</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <ul class="lst_none ttm-list-style-icon pl-0">
                                                            <li><i class="fas fa-check"></i>  Date of transaction </li>
                                                            <li><i class="fas fa-check"></i>  Amount of transaction</li>
                                                            <li><i class="fas fa-check"></i> Transaction ID</li>
                                                            <li><i class="fas fa-check"></i> Order ID</li>
                                                            <li><i class="fas fa-check"></i> Description of the problem</li>
                                                            <li><i class="fas fa-check"></i> Details of email communication with the Merchant</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>Once a complaint is raised, the Safexpay Risk Team would respond to the issue as per the timeline specified in escalation matrix under Customer Grievance Policy.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>In the event, the Customer is not satisfied with Merchant’s response then the Customer can raise a chargeback with its issuing bank as a second option. These chargebacks will be raised with Safexpay by the Customer’s issuing bank and Safexpay shall assist to amicably resolve the issue.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <h5>Case 3</h5>
                                                        <h5>Cancellation/Refunds/ Returns :</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>In cases of queries related to the cancellation of Orders/Refunds/Returns the Customer should directly contact the Merchant and follow instructions as specified in the return/refund/ cancellation policy on the Merchant Website. Please note that since Safexpay is a payment gateway, Safexpay only facilitate online payments for Merchants. Safexpay do not handle shipping or order dispatch.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>In cases of failed transaction, order not generated at the time of transaction on Merchant’s Website or refund is initiated, then the Customer should get the credit in its bank account within 5-7 business days. In case the Customer has not received the amount, the Customer has to contact the Merchant for further details, as the refunds are initiated from Merchant's end.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>In case the Merchant declines to process the refund to the Customer for cases where services/products were not delivered by the Merchant, the Customer may contact Safexpay for resolution on the same.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <h5>Case 4</h5>
                                                        <h5>Reporting potential fraud or unauthorized transactions or fraudulent Merchant :</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>The Customer can immediately write to the Nodal Officer with respect to the transaction that was not authorized by the Customer or reporting about the fraudulent Merchant with a subject line “Reporting Fraud”. The Customer also has an option to raise a chargeback for such unauthorized transaction.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>Note: The abovementioned cases are more specifically available over Safexpay Support Page -www.safexpay/support</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>Chargeback is the return of funds to a customer, initiated by the issuing bank of the payment mode used by a consumer. Chargeback is a dispute against a particular transaction raised by the cardholder (end-user) and reported to their card issuing bank. A chargeback is a provision by banks and card networks such as Visa & MasterCard to protect Customers from unauthorized or fraudulent payments. Once the cardholder files a complaint, the bank reports the same to Safexpay and initiates an investigative procedure.</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40" id="five">
                                                    <div class="col-md-12">
                                                        <p>Policy w.e.f. 01st January 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-color="#8E44AD" ref={ref5}>
                            <div class="row center-box">
                                <div class="col-md-12">
                                    <h2 class="blue-col">Responsible Disclosure Policy </h2>
                                    <div class="row">
                                        <section class="ptb-40 team-area">
                                            <div>
                                                <div class="row ">
                                                    <div class="col-md-12">
                                                        <p>In today’s competitive era and constantly evolving business, we at Safexpay take pride in keeping our customers at the centre of all our strategies and initiatives and are committed to deliver best in class customer services to all our existing and new customers at all times. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>As a service organization we promote "Excellence in Delivery" and hence feedback from our valued customers forms an integral part of all decisions taken by the organization. The feedback provided by our customers is treated as an asset to the organization, evaluated and customized to improve our products and services. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>This policy document aims at communicating the various mechanisms available for our customers to reach out to us, our service guarantee and timelines by which we will try and ensure resolution to our customer concerns. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <div class="section-title">
                                                            <h2 class="text-center blue-col">Our Principles</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ul class="lst_none ttm-list-style-icon pl-0">
                                                            <li><i class="fas fa-check"></i> Customers remain the Key focus for all initiatives and strategies developed at Safexpay.</li>
                                                            <li><i class="fas fa-check"></i> "Delighted" customers are a necessity for business growth and survival. </li>
                                                            <li><i class="fas fa-check"></i> Our Customers and their Feedback is treated as the most valuable asset for the organization, forming the foundation for development and innovation. </li>
                                                            <li><i class="fas fa-check"></i> We endeavour to simplify our customers life through our innovations and product offerings. </li>
                                                            <li><i class="fas fa-check"></i> Constantly evolve and invest in our grievance redressing systems for a seamless service  delivery. </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <div class="section-title">
                                                            <h2 class="text-center blue-col">Our Promise</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ul class="lst_none ttm-list-style-icon pl-0">
                                                            <li><i class="fas fa-check"></i> All grievances will be dealt with, timely and courteously. </li>
                                                            <li><i class="fas fa-check"></i> We promise to resolve any or all issues faced by our customers effectively and within the communicated time frame. </li>
                                                            <li><i class="fas fa-check"></i> All Service Level Agreements and turnaround time for each third party transaction would be published on our website.  </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>The company has a dedicated Customer Engagement Centre under the Customer Service Department (CSD) to manage customer queries and ease out grievances if any. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <div class="section-title">
                                                            <h2 class="text-center blue-col">We Value your Feedback </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>All customers have the right to share their feedback or complaint in case they find our services are not meeting their expectations or are dissatisfied with any interaction with any of our staff members. </p>
                                                    </div>
                                                </div>
                                                <div class="row mt-40">
                                                    <div class="col-md-12">
                                                        <p>The Customers can send in their Queries, Requests or Complaints in the following ways: </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default CompanyPolicy
    ;