
import React from "react";
import MetaTags from 'react-meta-tags';

function FAQ(params) {
    return (
        <>
            <MetaTags>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Safexpay</title>
            </MetaTags>
            <section class="account-create-area">
                <div class="gray-bg-stat">
                    <div class="hero-content mt-0">
                        <h1 class="text-center stat-page-banner-text">
                            <span class="white-col">Frequently Asked Questions</span>
                        </h1>
                    </div>
                </div>
            </section>
            <section class="ptb-70 team-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2 class="text-center blue-col">General admission and onboarding</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-12">
                            <p class="fw-400"><b> How do I begin with Safexpay?  </b></p>
                            <p>Just visit our website <a href="https://www.safexpay.com/" target="_blank"> https://www.safexpay.com/</a>and click “Talk to us” button and start filling out the requested fields with your company details and contact information. Seconds later, you will be redirected to our dashboard, ready to start the integration.

                            </p>
                            <p>Merchants are requested to follow the steps below to complete the onboarding process: </p>
                            <ul class="lst_none ttm-list-style-icon pl-0">
                                <li><i class="fas fa-check"></i>Enter Contact and Business details  </li>
                                <li><i class="fas fa-check"></i>Login and set the password   </li>
                                <li><i class="fas fa-check"></i>Verify bank details </li>
                                <li><i class="fas fa-check"></i>Upload KYC details</li>
                                <li><i class="fas fa-check"></i>Accept the Terms and Conditions </li>
                                <li><i class="fas fa-check"></i>Wait for email/SMS notification of successful onboarding/registration </li>
                            </ul>
                            <p>Once your online application has been&nbsp;submitted, our service team will contact you and provide further assistance regarding the administrative part of supporting documents and questions that follow.</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Do I need a legal entity to work with Safexpay?</b></p>
                            <p>No, The presence of any legal entity is not necessary. Safexpay does accept business from individuals or freelancers</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> What will be the Set-up Costs?</b></p>
                            <p>We provide Free Set Up.&nbsp;</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> Can Safexpay help me to incorporate if I am from a different region than accepted? </b></p>
                            <p>Yes. In case your registration is not accepted, we would recommend you how to join us from the accepted regions.</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> Will the gateway fee be charged at the time of the transaction or at the end of the
                                month? </b>
                            </p>
                            <p>The fee is charged per transaction which is deduced at the time of processing.</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>How can I change the company name after the contract has been signed with Safexpay?  </b></p>
                            <p>All you need to do is, provide us with the new login name and documents which confirm the change. Our support team will guide you regarding the same and you will be notified as soon as the requested changes are implemented.
                            </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> Which countries does Safexpay support?  </b></p>
                            <p>For incorporation, you need to be registered in India. For processing, the transactions can be done from anywhere in the world. We do not block any country unless it is blacklisted. The entire world is open with us.&nbsp;
                            </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Will my company/business incur any costs from Safexpay technical support during our
                                integration and onboarding? </b>
                            </p>
                            <p>There are no additional or hidden charges. We are happy to help in your transition and onboarding to Safexpay.&nbsp;</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> What do I do if I forgot my username or password?  </b></p>
                            <p>You can reset your password or contact technical support to provide you with a new one.</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>How can I import my credit card information from another processor to Safexpay?   </b></p>
                            <p>This can be done easily following some rules and regulations. For guidance, please contact our support department directly before you initiate the process.
                            </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> What reports do you offer?  </b></p>
                            <p>We provide you with your transaction reports on refund, transaction, and chargeback. To know more about reports, please feel free to contact us.&nbsp;</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What reports are best for end-of-the-month reporting?</b></p>
                            <p>Payment reports, transaction reports, refunds, and chargeback reports are considered to be the best for month-end reporting.</p>
                        </div>
                    </div>
                    {/* <!-- <div class="row mt-40">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2 class="text-center blue-col">Basic Details</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What is Safexpay?</b></p>
                            <p>Safexpay is a Payment Aggregation Platform. All kinds of organizations/Startups can use Safexpay to accept payments on mobile apps and on websites. From start-ups in garages to non-profit organizations and even some of the largest online retailers, we have more experience working with new business models than any other payment provider. More information is available on our website
                            </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Who can use Safexpay?     </b></p>
                            <p>At Safexpay, any product type and business models are supported like Airlines, B2B, donation, E-commerce, education, hospitality, financial service, travels, utilities etc. If you have any doubts or wish to consult us following your approval, please contact our sales team directly.</p>
                            <p>Below attached is the prohibited category list:</p>
                            <a href="">https://www.safexpay.com/company/about-us</a>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Who can use Safexpay?  </b></p>
                            <p>
                                At Safexpay, any product type and business models are supported like Airlines, B2B, donation, E-commerce, education, hospitality, financial service, travels, utilities etc. If you have any doubts or wish to consult us following your approval, please contact our sales team directly.</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What reports are best for end-of-the-month reporting?     </b></p>
                            <p>Safexpay can be accessed from anywhere, at any time in the world. “Single platform for all your wallet needs
                        </div>
                    </div>---> */}
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Which business models and products does Safexpay accept? </b></p>
                            <p>At Safexpay, any product type and business models are supported like Airlines, B2B, donation, E-commerce, education, hospitality, financial service, travels, utilities etc. If you have any doubts or wish to consult us following your approval, please contact our sales team directly.</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400">Below attached is the prohibited category list:</p>
                            <p class="fw-400"><a href="assets/pdf/Prohibited category list.140a924d.pdf">Prohibited category list.pdf</a> </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2 class="text-center blue-col">Basic Details</h2>
                            </div>
                        </div>
                    </div>



                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What is Safexpay?    </b></p>
                            <p>Safexpay is a Mumbai-based fintech company focused on solving problems for businesses that need help in either accepting online payments or make pay-outs to various stakeholders. We also specialize in making our platform available to other merchant acquirers such as banks, financial institutions, fintech &amp; international clients making us the leader in B2B White-labeled payments.&nbsp;</p>

                        </div>
                    </div>

                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Who can use Safexpay? </b></p>
                            <p>All kinds of organizations/Startups can use Safexpay to accept payments on mobile apps and on websites. From start-ups in garages to non-profit organizations and even some of the largest online retailers, we have more experience working with new business models than any other payment provider. More information is available on our website</p>

                            <p><a href="about-us.html">https://www.safexpay.com/about-us</a></p>

                        </div>
                    </div>

                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Safexpay is available in what parts of the world?  </b></p>
                            <p>Safexpay can be accessed from anywhere, at any time in the world. “Single platform for all your wallet needs” </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Do you work with banks and other financial institutions?</b></p>
                            <p>Yes, we work with retail brands, banks, financial institutions, and users/consumers of payment and financial technology companies.&nbsp;</p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What kinds of payments can I accept with Safexpay?   </b></p>

                            <ul class="lst_none ttm-list-style-icon pl-0">
                                <li><i class="fas fa-check"></i><b>In Card Processors - </b> VISA, Master Card, Rupay, Maestro, Amex-Amex, JCB <strong>Under Net Banking - </strong> (50+Banks) Axis Bank, HDFC Bank, ICICI Bank, SBI, Kotak Bank, Yes Bank and many more for you to choose from.&nbsp;</li>
                                <li><i class="fas fa-check"></i><strong>M-Wallet - </strong>Mobikwik, Freecharge, Ola Money, Jio Money, Oxigen Wallet, Amazon Pay, Airtel Money, Paytm, etc. options are available. </li>

                            </ul>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>How long will it take to get a Safexpay account?   </b></p>
                            <p>In most cases, merchants can start using Safexpay immediately after filling out our signup form. However, in some other cases, we might need to collect some additional information before you can start processing. In case that happens, we will be in touch with you throughout the process.</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>How soon will I get my money after the transaction is processed?</b></p>
                            <p>As soon as the customer initiates and completes the payment, the amount will get credited to the merchant's account right away.&nbsp;</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Can Safexpay help protect against fraud? </b></p>
                            <p>Yes, as the name suggests, safexpay includes fraud protection for merchants of any size, at no additional cost. </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What are your support hours?</b></p>
                            <p>We’re happy to help and would be at your service 24x7. </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Can I make a customized Bank platform through safexpay?</b></p>
                            <p>Yes,SafexPay can build you a fully loaded customized Bank platform within 2-3 weeks.  </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>We like one of your apps, can you make one for our brand?</b></p>
                            <p>Absolutely, all of our apps are white-label apps that can be easily branded on demand.  </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What is a White-Label payment gateway? </b></p>
                            <p>A White-label payment gateway is a feature that allows a company to provide payment processing services under its own name, while the actual processing is done by some external third-party processor, payment gateway provider, or vendor. </p>
                            <p>In a sense, the company puts its own “label” on top of the “white label” or “blank label” that the actual payment processing solution bears. That is where the name comes from.
                            </p>
                            <p>Labeling or branding of payment gateway solutions can be done on several conceptual levels (merchant, reseller, PSP). </p>
                            <p>White-label payment gateway solutions allow companies to improve their image and reputation in the eyes of their customers (including not only cardholders, but merchants and PSPs as well).</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What is Neo Banking? </b></p>
                            <p>A Neo Bank is a kind of digital bank without any physical branches. Rather than being physically present at a specific location, neo banking is entirely online. Neo banking provides a complete experience of digital banking through mobile applications, you don’t need to go anywhere. Neo banks offer solutions in ways that conventional banks do not. They are cheaper, quicker, and can leverage a single network with the entire financial portfolio with the objective of providing a smooth customer experience </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> What are the features provided by your platform?
                            </b></p>
                            <p>We provide the following Features: -  </p>
                            <ul><li>Front End UI for Web Portal </li><li>Mobile Application (IOS &amp; Android) </li><li>Web-Based Admin Module </li><li>API For E-Commerce &amp; In-App </li><li>Payments SDK </li><li>Integration With Card</li><li>Management System CRM</li></ul>
                            <p>On Premise Installation  </p>
                            <ul><li>Integration with External vendors </li><li>Bank API </li><li>Card Generation &amp; Activation </li><li>Virtual &amp; Physical Card </li><li>PIN Generation</li><li>Cash Back and Offers. </li></ul>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> How will your platform help our business?
                            </b></p>
                            <p>Safexpay will help you in bank-to-bank transfers, setting Limit Management, and Sub-Wallet Creation. It also helps in QR Code generation, E-KYC Upload & Maker-Checker process, Integration of Offers, Flights, Tickets, account management module, physical card request & management too.

                            </p><p>Other features that can help your business to boom with the help of the platform are – </p>
                            <ul><li>Merchant Creation Module </li><li>Mobile App </li><li>MIS &amp; Reports with Excel download facility </li><li>Virtual and physical card </li><li>Limit Management </li><li>Hierarchy Users Onboarding </li><li>KYC Management and Reporting.</li></ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Does Safexpay have its own card? </b></p>
                            <p>Yes, Safexpay provides you a card and you can personalize/customize your card too.</p><br />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What are the features of the Safexpay card?</b></p>
                            <ul><li>Debit/Prepaid card </li><li>Basic Card Features </li><li>Swipe Cards are enabled for </li><li>POS/ e-Commerce/ATM </li><li>Reloadable card </li><li>For domestic use only </li><li>Card validity is 3 years 30* days advance order to be place </li><li>A card user/mobile number can have a max of 5 cards </li></ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fw-400"><b>I have opened your app. What to do next? </b></p>
                            <p>You can choose from the given options: </p>
                            <ul><li>Explore – You can explore all the features, do a demo transaction before you do a real one.</li><li>Complete your profile – Help us to know you better </li><li>Generate a QR Code of your own </li><li>See how payment links work</li></ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fw-400"><b>If I don’t have a registered business, can I still use the Safexpay app?
                            </b></p>
                            <p>Yes, you can still sign-up and collect payments securely through safexpay.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Is safexpay a secured payment gateway?
                            </b></p>
                            <p>Safexpay India, will always ensure that your privacy is protected and secured. It’s in our name to be safe. We provide:</p>
                            <ul><li>PCI DSS 3.2.1</li><li>AES &amp; TLS Encryption</li><li>ISO 27001-2013 Certified</li><li>Card Tokenization</li></ul>
                            <p>For more information write to us at care@safexpay.com we will be happy to assist you.</p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2 class="text-center blue-col">OVERVIEW</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Do I need an internet connection to use Safexpay?  </b></p>
                            <p>Yes. To process transactions, you must be connected to the internet via Wi-Fi or mobile data.  </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Do my customers need a safexpay account to pay me? </b></p>
                            <p>No. Your customers can pay with their debit or credit card, cash, cheque or smartphone payment solutions like Amazonpay, paytm etc.  </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Which cards can I accept?&nbsp; </b></p>
                            <p>You can accept Chip & PIN, contactless debit and credit cards from:  </p>
                            <ul><li>VISA</li><li>American Express&nbsp;</li><li>Master Card&nbsp;</li><li>Rupay&nbsp;</li><li>Maestro&nbsp;</li><li>JCB&nbsp;</li></ul>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Does Safexpay need an activation or deactivation fee? </b></p>
                            <p>No. There is no cancellation process in safexpay. If you no longer wish to use the product, you can simply delete the app, if you have purchased it, it’s yours to keep. ☺  </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Can I accept debit and credit cards from overseas visitors?</b></p>
                            <p>Yes, as long as they have supported cards like Visa, Mastercard, Maestro or JCB. </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What do I do if my customer’s card is declined?  </b></p>
                            <p>If your customer’s card is declined do the following steps:</p>
                            <ul><li>Check to see if it’s an accepted card type (Visa, Mastercard, American Express Maestro, Amex-Amex or JCB)&nbsp;</li><li>If not, ask your customer to try another card&nbsp;</li><li>Advise your customer to contact their card issuer, in case.</li></ul>
                        </div>
                    </div>

                    <div class="row mt-40">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2 class="text-center blue-col">GST/BUSINESS DETAILS</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Do I need A GST number?  </b></p>
                            <p>No, you can set up an account with us without a GST number. Please note that you’ll not be able to get benefit on input credit on taxation of service charges until your GST number is not submitted with Safexpay. </p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <br /><p class="fw-400"><b>I have a company, but I don’t have GST, can I use your services? </b></p>
                            <p>Yes, you can give us the declaration of GST non-enrollment or Provisional GST certificate and you would be ready to go.. </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Does Safexpay include GST?  </b></p>
                            <p>The Ministry of Finance, Government of India, has levied a GST of 18% on the value of taxable goods & services. As a result, the service tax of 15% (inclusive of 0.5% Swachh Bharat Cess + 0.5% Krishi Kalyan Cess) will be replaced by a GST of 18% charged by </p>
                            <p> Safexpay. The GST thus collected will be deposited with the government and we will include this amount on the payout statements and invoices issued to you.                </p></div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>How will I get to know the amount deducted?  </b></p>
                            <p>The amount of GST levied will be conveyed to you as a part of the periodic statements/invoices issued.  </p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Will the amount be deducted on each transaction or lump-sum? </b></p>
                            <p>The GST will be charged on each transaction that you make.  </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What is the difference between an operating address and a business address?</b></p>

                            <p>The Operating Address is your current address from where your business is operated. Business Address is the address that has been registered while getting your business started. </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Can I still register if I’m the only person in my business? </b></p>
                            <p>Yes, you can still use our facilities.  </p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b> My business mostly deals with foreign clients, will I be facing any transaction issues?
                            </b></p>
                            <p>Yes, you can still use our facilities.  </p>
                            <p>No, you can make domestic payments as well as foreign payments. You can visit our website for more details. Click on the link below</p>
                            <p><strong><a href="https://www.safexpay.com/business/accept-payments">https://www.safexpay.com/business/accept-payments</a></strong></p>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2 class="text-center blue-col">PAN/DOCUMENTS VERIFICATION</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What are the documents needed for sign-up?&nbsp;</b></p>
                            <p>Have questions about the documents required for accepting payments with Safexpay payment gateway? Here’s a documents checklist that you should keep ready according to your business filing status. </p>
                            <ol>
                                <li><strong> Club / Societies / Association </strong></li>
                            </ol>
                            <ul>
                                <li>Proof of Identity: - Copy of PAN card of Club &amp; Association. Duly attested as "True Copy" by authorized signatory with club/association Stamp.&nbsp;</li>
                                <li>Individual Address Proof: - Copy of Driving license or Aadhaar card or Passport or Voter id (All committee members), duly attested as "True Copy" by authorized signatory with society /club or association Stamp.&nbsp;</li>
                                <li>Address proof of Club / Societies - Registration certificate, 80 G Certificate issued under Income Tax Act Duly attested as "True Copy" by club / Society / Association Stamp and authorize signatories.&nbsp;</li>
                                <li>A Cancelled Cheque for Nodal Bank registration, account in which you will receive daily Settlement amount.&nbsp;</li>
                                <li>General body resolution for the appointment of office bearers, List of member/ authorized signatory certified.&nbsp;</li>
                                <li>In the Merchant Agreement, all the pages are duly signed and stamped by the merchant.</li>
                                <li>Copy of Bye-Laws Copy of Society Deed / Government Certificate.&nbsp;</li>
                            </ul>
                            <ol start="2">
                                <li><strong> Partnership Limited Liability Partnership&nbsp;</strong></li>
                            </ol>
                            <ul>
                                <li>Proof of Identity of - Copy of PAN card (Firm &amp; All Partners)&nbsp;</li>
                                <li>Individual / Partner’s Proof: - Copy of Driving license or Aadhaar card or Passport or Voter id (All Partners)&nbsp;</li>
                                <li>Individual / Partner’s Proof: - Copy of Driving license or Aadhaar card or Passport or Voter id (All Partners)&nbsp;</li>
                                <li>Financial Proof Current Account: - Bank Account Statement for last 6 months or Audited Balance sheet &amp; P &amp; L statement for the last 2 years.</li>
                                <li>A Cancelled Cheque&nbsp;</li>
                                <li>Certificate of Incorporation&nbsp;</li>
                                <li>Board Resolution on your Firm’s Letterhead&nbsp;</li>
                                <li>List of the Partners (On Firms’ Letter Head)&nbsp;</li>
                                <li>The Merchant Agreement&nbsp;</li>
                                <li>Copy of Partnership Deed in case of LLP Firm Limited Liability Partnership Agreement&nbsp;</li>
                            </ul>
                            <ol start="3">
                                <li><strong> Private Limited/Public Limited&nbsp;</strong></li>
                            </ol>
                            <ul>
                                <li>Proof of Identity of: - Copy of PAN card (Company &amp; All Directors) ∙ Individual/director proof: - Copy of driving license or Aadhar card or Passport or voter id (all director)&nbsp;</li>
                                <li>Proof of Business Address of Operating Office&nbsp;</li>
                                <li>Financial proof current account: - Bank account statement for last 6 months or Audited balance sheet &amp; p &amp; l statement for the last 2 years&nbsp;</li>
                                <li>A Cancelled Cheque&nbsp;</li>
                                <li>Board Resolution on your Company Letterhead&nbsp;</li>
                                <li>List of Director&nbsp;</li>
                                <li>The Merchant Agreement&nbsp;</li>
                                <li>Memorandum / Articles of Association and Certificate of Incorporation. (1st and Last 3 Pages)&nbsp;</li>
                            </ul>
                            <ol start="4">
                                <li><strong> Sole Proprietor&nbsp;</strong></li>
                            </ol>
                            <ul>
                                <li>Proof of Identity of: - Copy of PAN card (self), Driving license or Aadhaar card or Passport or Voter id&nbsp;</li>
                                <li>Proof of Business Address of Operating Office: - Copy of your Landline Telephone Bill OR Electricity Bill, Bank Account Statement OR Passbook&nbsp;</li>
                                <li>Proof of Business Address of Operating Office&nbsp;</li>
                            </ul>
                            <p><strong>Any 1 document: -</strong></p>
                            <ol>
                                <li>a) Registration certificate (in the case of a registered concern)</li>
                                <li>b) Certificate/license issued by the Municipal authorities under Shop &amp; Establishment act&nbsp;</li>
                                <li>c) Sales and income tax returns&nbsp;</li>
                                <li>d) CST/VAT certificate&nbsp;</li>
                                <li>e) Certificate/registration document issued by Sales Tax/Service</li>
                            </ol>
                            <ul>
                                <li>Tax/Professional Tax authorities</li>
                                <li>Financial Proof Current Account: - Bank Account Statement for last 6 months or Audited Balance sheet &amp; P &amp; L statement for the last 2 years</li>
                                <li>A Cancelled Cheque&nbsp;</li>
                                <li>The Merchant Agreement&nbsp;</li>
                            </ul>
                            <ol start="5">
                                <li><strong> NGOs/ Charitable Trusts&nbsp;</strong></li>
                            </ol>
                            <ul>
                                <li>Proof of Identity of: - Copy of PAN Card (Trust &amp; All Trustees)&nbsp;</li>
                                <li>Individual Address Proof: - Copy of Driving license or Aadhaar card or Passport or Voter id (All Trustees)&nbsp;</li>
                                <li>Trust Address proof Copy of your Landline telephone bill OR electricity bill or Bank Statement.&nbsp;</li>
                                <li>A Cancelled Cheque&nbsp;</li>
                                <li>Trust Resolution from the Board of Directors/Trustees on NGO’s letterhead ∙ Audited balance sheet &amp; P/L statement for last 2 years) &amp; last year’s Current a/c statement (Trust) duly attested.&nbsp;</li>
                                <li>The Merchant Agreement&nbsp;</li>
                                <li>Trust Deed / Memorandum of Understanding (MOU)&nbsp;</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>Where do I upload all the documents?&nbsp; </b></p>
                            <p>The process is completely online and hassle-free, no need to worry. You can upload a soft copy of your agreement and documents from Safexpay itself. Your agreement will be available after your business category is approved. For business category verification, our business team will reach out to you.&nbsp;</p>

                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <p class="fw-400"><b>What PAN details are required?&nbsp;</b></p>
                            <p>
                                If you are a registered firm, you have to enter details as mentioned on your company’s PAN Card. If you are an Individual or Proprietorship, then please enter your personal PAN card details. If you are an NGO/Charitable trust, then please enter the PAN card details of your trust and all trustees.</p>


                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2 class="text-center blue-col">BANK ACCOUNT VERIFICATION</h2>
                            </div>
                        </div>
                        <div class="row mt-40">
                            <div class="col-md-12">
                                <p class="fw-400"><b>What is an IFSC code and where can I find it?&nbsp;</b></p>
                                <p>
                                    IFSC code is a unique eleven-digit number that is a combination of alphabets and numerals. It is used to transfer funds online for NEFT, IMPS, and RTGS transactions. Usually, this code can be found on the cheque book provided by the bank.</p>
                            </div>
                        </div>
                        <div class="row mt-40">
                            <div class="col-md-12">
                                <p class="fw-400"><b>How long does it take for account verification?&nbsp;</b></p>
                                <p>
                                    It takes 24 working hours after your bank account is verified to activate your nodal account.&nbsp;</p>


                            </div>
                        </div>
                        <div class="row mt-40">
                            <div class="col-md-12">
                                <p class="fw-400"><b>Can I submit my savings account details if I don’t have current account details?&nbsp;</b></p>
                                <p>
                                    Yes, in case you are an individual running a business, only then do we support savings bank account type. For non-individual business types, you will have to enter Current bank account details.&nbsp;</p>
                            </div>
                        </div>
                        <div class="row mt-40">
                            <div class="col-md-12">
                                <div class="section-title">
                                    <h2 class="text-center blue-col">INTERNATIONAL</h2>
                                </div>
                            </div>
                            <div class="row mt-40">
                                <div class="col-md-12">
                                    <p class="fw-400"><b>Is safexpay available in my country/region?&nbsp;</b></p>
                                    <p>
                                        Safexpay is available for merchants in India, UAE, Singapore. In legal terms, you have to be domiciled in a supported country/region. We are working hard to bring Safexpay to other countries/regions as well. If you would like to be notified when safexpay will be available in your country/region, tap on “talk to us” by clicking the link below.</p>
                                    <a href="https://www.safexpay.com/business/accept-payments">https://www.safexpay.com/business/accept-payments</a>
                                </div>
                            </div>
                            <div class="row mt-40">
                                <div class="col-md-12">
                                    <p class="fw-400"><b>What does it mean to be “domiciled” in the country?&nbsp;
                                    </b></p>
                                    <p>
                                        Your business must operate out of your country-based office. You must also have a bank account with your country/region. The location of your customers has no effect on where you are domiciled.&nbsp;</p>
                                </div>
                            </div>
                            <div class="row mt-40">
                                <div class="col-md-12">
                                    <p class="fw-400"><b>What currencies can I accept?&nbsp;</b></p>
                                    <p>
                                        We support 100+ currencies for collecting the payment from customer across the world with faster settlements. Contact us for the most up-to-date list of foreign currencies and for more information about presenting transactions in multiple currencies.</p>
                                </div>
                            </div>
                            <div class="row mt-40">
                                <div class="col-md-12">
                                    <div class="section-title">
                                        <h2 class="text-center blue-col">PAYMENT</h2>
                                    </div>
                                </div>
                                <div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>What to do when bill payment status is not updated on the merchant site?</b></p>
                                            <p>
                                                Bill payments will be updated within 2 working days on merchant site.&nbsp;</p>

                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>The transaction has failed but my money is debited from my account. What should I do?&nbsp;
                                            </b></p>
                                            <p>
                                                The amount will be refunded within 48 hrs. Do not panic. Kindly check your dashboard to see the status of your refund. Also, an email and SMS will be sent to you from our side regarding the same. Refunds into the bank usually take 3-5 business days to reflect in your bank account.&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b> Money is debited from my account but the merchant hasn’t received it. What should i do?
                                            </b></p>
                                            <p>
                                                Typically, a network failure leads to such situations. Don’t worry at all, your money is safe. Contact the merchant and provide your merchant transaction ID and Safexpay payment ID (available on Dashboard and on your transaction email), we will do the rest.</p>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>I have not received the refund in my bank account. What should I do?
                                            </b></p>
                                            <p>
                                                Refunds are generally processed by the bank after 48 hrs of the transaction. Bank usually takes 3-5 business days from the date of refund to reflect in your bank account (Excluding Saturdays, Sundays, and Bank Holidays).&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>Are there any additional fees I would charge?&nbsp;
                                            </b></p>
                                            <p>
                                                No additional fees are charged.&nbsp;</p>
                                            <ul>
                                                <li>No Setup fees&nbsp;</li>
                                                <li>No Annual Maintenance fees&nbsp;</li>
                                                <li>No fees for transfer&nbsp;</li>
                                                <li>No fees for failed payments&nbsp;</li>
                                                <li>No fees for refunds&nbsp;</li>
                                                <li>No fees for support</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>What is the payment cycle that you offer?&nbsp;&nbsp;
                                            </b></p>
                                            <p>There are various Payment Cycles that can be configured as per the merchant’s requirements.</p>
                                            <ul>
                                                <li>T+1 day&nbsp;</li>
                                                <li>T+2 day</li>
                                                <li>T+3 day (T refers to the day of the transaction itself)</li>
                                                <li>T+7 day&nbsp;</li>
                                                <li>T+14 day</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>What is the payment cycle that you offer?&nbsp;&nbsp;
                                            </b></p>
                                            <p>There are various Payment Cycles that can be configured as per the merchant’s requirements.</p>
                                            <ul>
                                                <li>T+1 day&nbsp;</li>
                                                <li>T+2 day</li>
                                                <li>T+3 day (T refers to the day of the transaction itself)</li>
                                                <li>T+7 day&nbsp;</li>
                                                <li>T+14 day</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>How do I initiate a refund?&nbsp;
                                            </b></p>
                                            <ul>
                                                <li>You can choose the refund option from the dashboard of safexpay or</li>
                                                <li>Using APIs.&nbsp;</li>
                                            </ul>
                                            <p>The entire amount will be refunded by default.</p>
                                            <p>Note: A refund once initiated cannot be canceled or reversed.&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>Can I initiate a partial refund? If yes, How?
                                            </b></p>
                                            <p>
                                                You can initiate partial or full refunds to your customers. Follow these steps to issue refunds:</p>
                                            <ul>
                                                <li>Log in to your Safexpay Dashboard with credentials.&nbsp;</li>
                                                <li>You can choose the refund option from the dashboard of safexpay or by using APIs.&nbsp;</li>
                                                <li>Enter the refund amount and transaction reference on the portal. Example- For a Rs.1000 transaction, you can enter Rs. 200 to initiate partial refund.</li>
                                            </ul>
                                            <p>Note: A refund once initiated cannot be canceled or reversed. Multiple Partial refunds can be done upto the transaction amount against the transaction reference number.</p>

                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>Do you charge any amount for the refund process?&nbsp;
                                            </b></p>
                                            <p>No, safexpay does not charge any amount for the refund process.&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>How do I cancel a refund?
                                            </b></p>
                                            <p>Refund once marked cannot be cancelled.</p>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>How can I track a refund from my portal?
                                            </b></p>
                                            <p>You can track the refund from the merchant portal.</p>
                                        </div>
                                    </div>
                                    <div class="row mt-40">
                                        <div class="col-md-12">
                                            <p class="fw-400"><b>Where can I find a refund reference number?&nbsp;
                                            </b></p>
                                            <p>You can find the reference number over the merchant portal. Go to the transaction MIS tab and check refund status.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="account-create-area">
                <div class="bg-green  ptb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <h2 class="text-center">Ready to boost your business
                                    with Safexpay?
                                </h2>
                                <p class="mt-40 text-center">
                                    Need more information to help you decide, call our helpline or drop us a note and we will get back to you
                                </p>
                                <div class="row text-center">
                                    <div class="col-md-4 mt-20">
                                        <i class="fas fa-check "></i> <span class="">Easy Onboarding</span>
                                    </div>
                                    <div class="col-md-4 mt-20">
                                        <i class="fas fa-check "></i> <span class="">Dedicated Account Manager</span>
                                    </div>
                                    <div class="col-md-4 mt-20">
                                        <i class="fas fa-check"></i> <span class="">API Access </span>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="col-md-4 mt-20">
                                        <i class="fas fa-check "></i> <span class="">24x7 support </span>
                                    </div>
                                    <div class="col-md-4 mt-20">
                                        <i class="fas fa-check"></i> <span class="">Customised Pricing</span>
                                    </div>
                                    <div class="col-md-4 mt-20">
                                        <i class="fas fa-check"></i> <span class="">International Payments</span>
                                    </div>
                                </div>
                                <center>
                                    <div class="mt-30">
                                        <a href="#" class="cta">Talk to us&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
                                    </div>
                                </center>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default FAQ;