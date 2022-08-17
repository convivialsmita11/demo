import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ContactUsModel(props) {
    const [modal, setModal] = useState(false);
    const [PaymentGateway, SetPaymentGateway] = useState(false)
    const [PartnerProgram, SetPartnerProgram] = useState(false)
    const [NeoBanking, SetNeoBanking] = useState(false)
    const [WhiteLabel, SetWhiteLabel] = useState(false)
    const [Payouts, SetPayouts] = useState(false)

    const toggle = () => setModal(!modal);
    useEffect(() => {
        toggle()
    }, [props.openModel]);

    useEffect(() => {
        return () => {
            if (modal) {
                props.CloseModel();
            }
        }
    }, [modal])

    useEffect(() => {
        if (props.Request == "NeoBanking") {
            SetNeoBanking(true);
        }
        if (props.Request == "PaymentGateway") {
            SetPaymentGateway(true);
        }
        if (props.Request == "PartnerProgram") {
            SetPartnerProgram(true);
        }
        if (props.Request == "SetWhiteLabel") {
            SetWhiteLabel(true);
        }
        if (props.Request == "Payouts") {
            SetPayouts(true);
        }
    }, [])


    return (
        <>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                {/* <div className='modal-header'>
                    <div className='row'>
                        <div className="col-md-5 bg-green">
                        </div>
                        <div className="col-md-7">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={toggle}></button>
                        </div>
                    </div>
                </div> */}

                <ModalBody className='pt-0 pb-0'>
                    <div className='row'>
                        <div className="col-md-5 bg-green">
                        </div>
                        <div className="col-md-7">
                            <button type="button" className="btn-close fr pt-20" data-bs-dismiss="modal" onClick={toggle}></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5  p-020 pb-20 txt-hide-res bg-green">
                            <div className="row mt-10">
                                <div className="col-md-2">
                                    <img src="assets/img/home-page/pay2.svg" alt="100+ payment options" />
                                </div>
                                <div className="col-md-10">
                                    <h6 className="blue-col">Hassle-free Instant Activation</h6>
                                    <p>Online onboarding in just 2 steps and get started with easy-to-implement APIs.</p>
                                </div>
                            </div>
                            <div className="row mt-10">
                                <div className="col-md-2">
                                    <img src="assets/img/home-page/r2.svg" alt="Home page" />
                                </div>
                                <div className="col-md-10">
                                    <h6 className="blue-col">Single window solution</h6>
                                    <p>Track all your payments, settlements, refunds on a single platform.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 mt-10">
                                    <img src="assets/img/home-page/neo2.svg"
                                        alt="With zero wait time, gain instant access to virtual cards" />
                                </div>
                                <div className="col-md-10" id="two">
                                    <h6 className="mt-10 blue-col">Holistic payment experience</h6>
                                    <p>Ensure your customers get a wide range of payment modes to complete the transaction.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7 bg-white col-7-pb pt-20">
                            <div className="p-020">
                                <h3>Xperience Now</h3>
                                <form action="#" id="contactForm" method="post" onsubmit="return validateForm();">

                                    <div className=" mt-10 border-b">
                                        <label for="email">Name:</label><span className="required">*</span>
                                        <input type="text" className="form-control border-0" id="name" placeholder="Enter name" name="name"
                                            pattern="[a-zA-Z\s]+" required="" />
                                    </div>
                                    <div className=" mt-30 border-b">
                                        <label for="email">Email Address:</label><span className="required">*</span>
                                        <input type="email" className="form-control border-0" id="email_id" placeholder="Enter email address"
                                            name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required="" />
                                    </div>
                                    <div className="mt-30 border-b">
                                        <label for="mobileno">Mobile number:</label><span className="required">*</span>
                                        <input type="text" className="form-control border-0" id="mobile_no" placeholder="Enter number"
                                            name="mobileno" pattern="^[7-9]\d{9}$" required="" />
                                    </div>
                                    <label className="mt-30">Select the product you would like to experience</label><br />
                                    <div className="form-check mt-10">
                                        <div className="checkbox">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="checkbox-inline"><input type="checkbox" id="Payment_Gateway"
                                                        name="payment[]" checked={PaymentGateway} value="Payment Gateway" className="form-check-input" />Payment
                                                        Gateway</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="checkbox-inline"><input type="checkbox" id="Partner_Program"
                                                        name="payment[]" checked={PartnerProgram} value="Partner_Program" className="form-check-input" />Partner
                                                        Program</label>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="checkbox-inline"><input type="checkbox" id="Neo_Banking" name="payment[]"
                                                        value="Neo Banking" checked={NeoBanking} className="form-check-input" />Neo Banking</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="checkbox-inline"><input type="checkbox" id="White_Label" name="payment[]"
                                                        value="White Label" checked={WhiteLabel} className="form-check-input" />White Label</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="checkbox-inline"><input type="checkbox" id="Payouts" name="Payouts[]"
                                                        value="Payouts" checked={Payouts} className="form-check-input" />Payouts</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button id="submit" type="submit" name="submit" className="btn cta ptb-5-lr-20 mt-20">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter> */}
            </Modal>
        </>
    );

}
export default ContactUsModel;