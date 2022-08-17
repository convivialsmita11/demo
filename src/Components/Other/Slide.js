import React, { useEffect, useRef, useState } from "react";
import { Carousel } from '@sefailyasoz/react-carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import HomeSlide from "./HomeSlide";
function Slide() {
    const [SlideSetting, SetSlideSetting] = useState([]);
    const customeSlider = useRef();
    const gotoNext = () => {
        customeSlider.current.slickNext()
    }
    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }
    useEffect(() => {
        SetSlideSetting({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        })
    }, [])
    return (
        <>
            <div className="container">
                <Slider {...SlideSetting} ref={customeSlider}>
                    {HomeSlide}
                </Slider>
                <button class="carousel-control-prev" type="button" onClick={() => gotoPrev()} data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" onClick={() => gotoNext()} data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}

export default Slide;


function HomeSlide() {
    return (
        <>
            <div class="carousel-item" id="one">
                <div class="row padd-20">
                    <div class="col-md-7 mlr-auto" >
                        <div class="">
                            <div class="row padd-20">
                                <div class="col-md-2">
                                    <img src="assets/img/client-image/Umesh Arya.png" alt="Client Image" class="bor-rad-50p img-fluid" />
                                </div>
                                <div class="col-md-10">
                                    <h5 class="blue-col">Umesh Arya</h5>
                                    <span class="blue-col">IT Head</span><br />
                                    {/* <!--<span class="blue-col">PC Jeweller Ltd</span>--> */}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Customer Support at Safexpay is prompt, courteous, and extremely helpful. Whenever I run into a problem, the team is always there with a prompt solution. I've found their swift customer service to be amazing and has been helpful in resolving my concerns.
                                    </p>
                                    <img src="assets/img/home-page-brands/pcj.png" alt="PC Jeweller Logo" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item padd-15" id="two">
                <div class="row padd-20">
                    <div class="col-md-7 mlr-auto" >
                        <div class="">
                            <div class="row padd-20">
                                <div class="col-md-10">
                                    <h5 class="blue-col">Mukesh Kumar</h5>
                                    <span class="blue-col">APO</span><br />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>We at Railway Recruitment Cell Northern Railway hereby state that during the online application for engagement of Act Apprentices, we have availed services of Safexpay’s Payment Gateway and duly appreciate the services for its exemplary features. We are highly pleased as their services has benefitted significantly due to the excellent services rendered by your team.
                                    </p>
                                    <img src="assets/img/home-page-brands/railway.png" alt="Indian Railway Logo" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item padd-15" id="three" >
                <div class="row padd-20">
                    <div class="col-md-7 mlr-auto" >
                        <div class="">
                            <div class="row padd-20">
                                <div class="col-md-2">
                                    <img src="assets/img/client-image/Trish-Kunath.png" alt="Client Image" class="bor-rad-50p img-fluid" />
                                </div>
                                <div class="col-md-10">
                                    <h5 class="blue-col">Trish Kunath</h5>
                                    <span class="blue-col">Team Atlantis</span><br />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>This is to show our appreciation for the marathon effort you guys put in for us. We wanted to say a very BIG THANK YOU for the effort and your continued support.We appreciate and love you all!
                                    </p>
                                    <img src="assets/img/home-page-brands/aventures.png" alt="Aventures Atlantis Logo" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}