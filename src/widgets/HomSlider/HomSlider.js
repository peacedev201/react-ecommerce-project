/**
 * Home Slider
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './HomSlider.css';

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class HomSlider extends Component {

    render() {
        return (
            <Slider className="slider-01 slider-simple-arrow" {...settings}>
                <div key={1} className="slide-01-item">
                    <div className="slide-inner">
                        <div className="slide-image">
                            <img src={require(`../../assets/images/image/Banner-1.png`)} alt="slide-1" />
                        </div>
                        <div className="slide-content">
                            <div className="slider-text">
                                <div className="row">
                                    <div className="col-xl-6 col-md-8">
                                        <div className="slide-left">
                                            <div className="slide-title">
                                                <div className="row">
                                                    <div className="col-2 nav-logo">
                                                        <img src={require(`../../assets/images/image/nav-logo.png`)} />
                                                    </div>
                                                </div>
                                                <h1 className="slider-header-txt">THE NEXT</h1>
                                                <h1 className="slider-header-txt">BEST THING</h1>
                                                <h2 className="slider-subtxt"><b className="slider-sub-txt-1">SALE START FROM</b><b className="slider-sub-txt-2"> TOMORROW</b></h2>
                                            </div>
                                            <Link className="btn slider-button" to="/shop">ADD TO WISHLIST</Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-4 text-right d-none d-md-block">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div key={2} className="slide-01-item">
                    <div className="slide-inner">
                        <div className="slide-image">
                            <img src={require(`../../assets/images/image/Banner-1.png`)} alt="slide-1" />
                        </div>
                        <div className="slide-content">
                            <div className="slider-text">
                                <div className="row">
                                    <div className="col-xl-6 col-md-8">
                                        <div className="slide-left">
                                            <div className="slide-title">
                                                <div className="row">
                                                    <div className="col-2 nav-logo">
                                                        <img src={require(`../../assets/images/image/nav-logo.png`)} />
                                                    </div>
                                                </div>
                                                <h1 className="slider-header-txt">THE NEXT</h1>
                                                <h1 className="slider-header-txt">BEST THING</h1>
                                                <h2 className="slider-subtxt"><b className="slider-sub-txt-1">SALE START FROM</b><b className="slider-sub-txt-2"> TOMORROW</b></h2>
                                            </div>
                                            <Link className="btn slider-button" to="/shop">ADD TO WISHLIST</Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-4 text-right d-none d-md-block">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}

export default HomSlider;
