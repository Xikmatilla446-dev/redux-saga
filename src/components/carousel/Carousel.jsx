import React, { useState, useEffect} from 'react';
import { connect } from "react-redux";

import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';
import './Carousel.css';

import {loadImageStats} from "../../actions";



const Carousel = ({loadingCarousel, imageStats, errorCarousel, loadStats}) => {


    useEffect(() => {
        // debugger
        loadStats();

    },[]);

    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive:[
            {
                breakpoint:960,
                settings:{
                slidesToShow: 3,
                slidesToScroll: 2,

            }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 2,

                }
            }

        ]

    };


  return(
      <div className="container">
          {
              loadingCarousel ? (
                  <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>

              ) : (
                  <Slider {...settings}>

                      {
                          imageStats.map((image) =>
                           (   <div className="out" key={image.id}>
                                  <div className="card">
                                      <img className="rounded-circle"
                                           src={image.urls.regular}
                                           alt={image.user.username}

                                      />
                                      <div className="card-body">
                                          <h5 className="card-title"
                                              style={{color:image.color}}
                                          >
                                              {image.description}
                                          </h5>
                                          <small className="card-text text-sm-center text-muted">In your contacts</small>
                                          <br/>
                                          <button className="btn btn-sm follow btn-primary"
                                          >Follow</button>
                                      </div>
                                  </div>

                              </div>))}

                  </Slider>

              )
          }

          {errorCarousel && <div className="error">{JSON.stringify(errorCarousel)}</div>}
      </div>
  )

};



const mapStateToProps = state => ({
    loadingCarousel: state.loadingCarousel,
    imageStats : state.imageStats,
    errorCarousel: state.errorCarousel
});



const mapDispatchToProps = dispatch => ({
    loadStats: () => dispatch(loadImageStats()),

});
export default connect(mapStateToProps, mapDispatchToProps )(Carousel);
