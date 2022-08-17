import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import ContactUsModel from '../Other/ContactUsModel/ContactUsModel';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    NavDropdown,
    Button
} from "react-bootstrap";
import MetaTags from 'react-meta-tags';
function Header(props) {
    const [openModel, SetopenModel] = useState(false)
    const [isShowProduct, SetisShowProduct] = useState(false)
    const [isShowCompany, SetisShowCompany] = useState(false)
    const [IsSHowHambergerMenu, SetIsSHowHambergerMenu] = useState(false)

    const [ProductActive, SetProductActive] = useState("")
    const [CompanyActive, SetCompanyActive] = useState("")
    const [PriceActive, SetPriceActive] = useState("")

    const [CompanySymbol, SetCompanySymbol] = useState("+")
    const [ProductSymbol, SetProductSymbol] = useState("+")

    const [HambergurSymbol, SetHambergurSymbol] = useState(true)

    const ShowModel = (e) => {
        e.preventDefault();
        SetopenModel(true)
    }
    const CloseModel = () => {
        SetopenModel(false)
    }


    const ActiveCheck = (data) => {
        console.log("data ", data)
        if (data == "Product") {
            SetCompanyActive("")
            SetPriceActive("")
            SetProductActive("active")

        } else if (data == "Company") {
            SetProductActive("")
            SetPriceActive("")
            SetCompanyActive("active")

        } else if (data == "pricing") {
            SetProductActive("")
            SetCompanyActive("")
            SetPriceActive("active")

        } else {
            SetProductActive("")
            SetCompanyActive("")
            SetPriceActive("")
        }
    }
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const ProductShow = () => {
        if (isShowProduct) {
            SetisShowProduct(false)
            SetProductSymbol("+")
        } else {
            SetisShowProduct(true)
            SetisShowCompany(false)
            SetProductSymbol("-")
            SetCompanySymbol("+")
        }
    }
    const CompanyShow = () => {
        if (isShowCompany) {
            SetisShowCompany(false)
            SetCompanySymbol("+")
        } else {
            SetisShowCompany(true)
            SetisShowProduct(false)
            SetCompanySymbol("-")
            SetProductSymbol("+")
        }
    }
    const OpenHideHnaberger = () => {
        SetIsSHowHambergerMenu(!IsSHowHambergerMenu);
        SetHambergurSymbol(!HambergurSymbol);
    }
    return (
        <>

            <div class="navbar-area">
                <div class="luvion-responsive-nav">
                    <div class="container">
                        <div class="luvion-responsive-menu">
                            <div className='row'>
                                <div class="logo col-6">
                                    <NavLink exact to="/">
                                        <img src="./assets/img/logo/logo.png" alt="Safexpay Logo" />
                                    </NavLink>
                                </div>
                                <div className='col-6' onClick={OpenHideHnaberger}>
                                    {HambergurSymbol ? <>

                                        <span className="hamberger"></span>
                                        <span className="hamberger ham-one"></span>
                                        <span className="hamberger ham-two"></span>
                                    </> :
                                        <>
                                            <span className='fr' style={{'color':'#1a59b2'}} ><strong>X</strong></span>
                                        </>}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {screenWidth <= 991 &&
                    <>
                        {IsSHowHambergerMenu &&
                            <nav class="mean-nav">
                                <ul class="navbar-nav" >
                                    <li class="nav-item">
                                        <a class="nav-link cur-pnt" onClick={ProductShow}>Product <span className='fr'>{ProductSymbol}</span></a>
                                        {isShowProduct && <div className='container'>
                                            <div class="row">
                                                <div class="col-lg-7 ptrbl padd-0">
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/payment-gateway" onClick={OpenHideHnaberger}>
                                                            <div class="row">
                                                                <div class="fl wd-14">
                                                                    <img src="assets/img/logo/menu-1.png" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="pl-0 fl wd-82">
                                                                    <span class="mt-20 blue-col"><b>Payment Gateway </b></span>
                                                                    <p class="fs-12">Easy onboarding, simple integrations, and a wide range of payment methods can help you accelerate company growth.</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/neo-banking" onClick={OpenHideHnaberger}>
                                                            <div class="row">
                                                                <div class="fl wd-14">
                                                                    <img src="assets/img/logo/menu-2.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="pl-0 fl wd-82">
                                                                    <span class="mt-20 blue-col"><b>Neo Bank </b></span>
                                                                    <p class="fs-12">Digital innovation: Reprogramming the bank-shift gears</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/payouts" onClick={OpenHideHnaberger}>
                                                            <div class="row">
                                                                <div class="fl wd-14">
                                                                    <img src="assets/img/logo/Payouts-icon.png" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="pl-0 fl wd-82">
                                                                    <span class="mt-20 blue-col"><b>Payouts </b></span>
                                                                    <p class="fs-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                </div>
                                                <div class="col-lg-5  res-bg-green ptrbl padd-0 pl-20">
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/white-label" onClick={OpenHideHnaberger}>
                                                            <div class="row">
                                                                <div class="fl wd-img-menu-res-wl">
                                                                    <img src="assets/img/logo/menu-3.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="fl wd-tx-menu-res-wl">
                                                                    <span class="mt-20 blue-col"><b>White Label</b></span>
                                                                    <p class="fs-12">Augument your business presence with Safexpay's whitelabel solution</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/partner-program" onClick={OpenHideHnaberger}>
                                                            <div class="row">
                                                                <div class="fl wd-img-menu-res-wl">
                                                                    <img src="assets/img/logo/menu-4.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="fl wd-tx-menu-res-wl">
                                                                    <span class="mt-20 blue-col"><b>Partner Program </b></span>
                                                                    <p class="fs-12">Unlimited earning opportunity with Safexpay partner program</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link cur-pnt" onClick={CompanyShow}>Company <span className='fr'>{CompanySymbol}</span></a>
                                        {isShowCompany && <div className='container'>
                                            <div class="row">
                                            </div>
                                            <li class="nav-item mt-20 mt-0-res">
                                                <NavLink exact to="/about-us" onClick={OpenHideHnaberger}>
                                                    <div class="row">
                                                        <div class="fl wd-img-menu-res-ab">
                                                            <img src="assets/img/logo/menu-1.png" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                        </div>
                                                        <div class="fl wd-tx-menu-res-ab">
                                                            <span class="mt-20 blue-col"><b>About us</b></span>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </li>
                                            <li class="nav-item mt-20 mt-0-res">
                                                <NavLink exact to="/news-room" onClick={OpenHideHnaberger}>
                                                    <div class="row">
                                                        <div class="fl wd-img-menu-res-ab">
                                                            <img src="assets/img/logo/menu-2.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                        </div>
                                                        <div class="fl wd-tx-menu-res-ab">
                                                            <span class="mt-20 blue-col"><b>News Room</b></span>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </li>
                                            <li class="nav-item mt-20 mt-0-res">
                                                <NavLink exact to="/culture" onClick={OpenHideHnaberger}>
                                                    <div class="row">
                                                        <div class="fl wd-img-menu-res-ab">
                                                            <img src="assets/img/logo/menu-2.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                        </div>
                                                        <div class="fl wd-tx-menu-res-ab">
                                                            <span class="mt-20 blue-col"><b>Culture</b></span>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </li>
                                        </div>
                                        }
                                    </li>
                                    <li class="nav-item"><NavLink exact to="/pricing" onClick={OpenHideHnaberger}>Pricing</NavLink></li>
                                    <li class="nav-item cont-for-mob mean-last">
                                        <a href="#" class="cta nav-link cta-popup" id="cta-popup" data-toggle="modal" data-bs-target="#myModal" onClick={ShowModel}>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                                <div class="others-options cont-for-desk">
                                    <a href="#" class="cta cta-popup" id="cta-popup" data-toggle="modal" data-bs-target="#myModal">Contact Us</a>
                                </div>
                            </nav>
                        }
                    </>}

                <div class="luvion-nav">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <NavLink className="navbar-brand pad-nav" exact to="/" onClick={() => { ActiveCheck('Home') }}>
                                <img src="assets/img/logo/logo.png" alt="Safexpay Logo" />
                            </NavLink>
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li className={ProductActive ? "nav-item active" : "nav-item"} >
                                        <a class="nav-link cur-pnt" >Product </a>
                                        <ul class="dropdown-menu">
                                            <div class="row">
                                                <div class="col-lg-7 ptrbl padd-0">
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/payment-gateway" onClick={() => { ActiveCheck('Product') }}>
                                                            <div class="row">
                                                                <div class="fl wd-14">
                                                                    <img src="assets/img/logo/menu-1.png" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="pl-0 fl wd-82">
                                                                    <span class="mt-20 blue-col"><b>Payment Gateway </b></span>
                                                                    <p class="fs-12">Easy onboarding, simple integrations, and a wide range of payment methods can help you accelerate company growth.</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/neo-banking" onClick={() => { ActiveCheck('Product') }}>
                                                            <div class="row">
                                                                <div class="fl wd-14">
                                                                    <img src="assets/img/logo/menu-2.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="pl-0 fl wd-82">
                                                                    <span class="mt-20 blue-col"><b>Neo Bank </b></span>
                                                                    <p class="fs-12">Digital innovation: Reprogramming the bank-shift gears</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/payouts" onClick={() => { ActiveCheck('Product') }}>
                                                            <div class="row">
                                                                <div class="fl wd-14">
                                                                    <img src="assets/img/logo/Payouts-icon.png" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="pl-0 fl wd-82">
                                                                    <span class="mt-20 blue-col"><b>Payouts </b></span>
                                                                    <p class="fs-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </div>
                                                        </NavLink >
                                                    </li>
                                                </div>
                                                <div class="col-lg-5  res-bg-green ptrbl padd-0 pl-20">
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/white-label" onClick={() => { ActiveCheck('Product') }}>
                                                            <div class="row">
                                                                <div class="fl wd-img-menu-res-wl">
                                                                    <img src="assets/img/logo/menu-3.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="fl wd-tx-menu-res-wl">
                                                                    <span class="mt-20 blue-col"><b>White Label</b></span>
                                                                    <p class="fs-12">Augument your business presence with Safexpay's whitelabel solution</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                    <li class="nav-item mt-20 mt-0-res">
                                                        <NavLink exact to="/partner-program" onClick={() => { ActiveCheck('Product') }}>
                                                            <div class="row">
                                                                <div class="fl wd-img-menu-res-wl">
                                                                    <img src="assets/img/logo/menu-4.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                                </div>
                                                                <div class="fl wd-tx-menu-res-wl">
                                                                    <span class="mt-20 blue-col"><b>Partner Program </b></span>
                                                                    <p class="fs-12">Unlimited earning opportunity with Safexpay partner program</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className={CompanyActive ? "nav-item active" : "nav-item"}  >
                                        <a class="nav-link cur-pnt">Company </a>
                                        <ul class="dropdown-menu wd-company">
                                            <div class="col-lg-12 ptrbl padd-0">
                                                <li class="nav-item mt-20 mt-0-res">
                                                    <NavLink exact to="/about-us" onClick={() => { ActiveCheck('Company') }}>
                                                        <div class="row">
                                                            <div class="fl wd-img-menu-res-ab">
                                                                <img src="assets/img/logo/menu-1.png" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                            </div>
                                                            <div class="fl wd-tx-menu-res-ab">
                                                                <span class="mt-20 blue-col"><b>About Us </b></span>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li class="nav-item mt-20 mt-0-res">
                                                    <NavLink exact to="/news-room" onClick={() => { ActiveCheck('Company') }}>
                                                        <div class="row">
                                                            <div class="fl wd-img-menu-res-ab">
                                                                <img src="assets/img/logo/menu-2.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                            </div>
                                                            <div class="fl wd-tx-menu-res-ab">
                                                                <span class="mt-20 blue-col"><b>News Room</b></span>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li class="nav-item mt-20 mt-0-res">
                                                    <NavLink exact to="/culture" onClick={() => { ActiveCheck('Company') }}>
                                                        <div class="row">
                                                            <div class="fl wd-img-menu-res-ab">
                                                                <img src="assets/img/logo/menu-2.svg" alt="Safexpay Menu" class="mb-20 mr-20" />
                                                            </div>
                                                            <div class="fl wd-tx-menu-res-ab">
                                                                <span class="mt-20 blue-col"><b>Culture</b></span>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className={PriceActive ? "nav-item active" : "nav-item"}  >
                                        <NavLink exact to="/pricing" onClick={() => { ActiveCheck('pricing') }}>
                                            Pricing
                                        </NavLink></li>
                                    <li class="nav-item cont-for-mob">
                                        <a href="#" class="cta nav-link cta-popup" id="cta-popup" data-toggle="modal" data-bs-target="#myModal" onClick={ShowModel}>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                                <div class="others-options cont-for-desk">
                                    <a href="#" class="cta cta-popup" id="cta-popup" data-toggle="modal" data-bs-target="#myModal" onClick={ShowModel}>Contact Us</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
            {openModel == true ? <ContactUsModel openModel={openModel} CloseModel={CloseModel} Request="Header" /> : ""}
        </>
    )

}

export default Header;