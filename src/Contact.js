import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Contact.css";

import { EffectCoverflow, Pagination } from "swiper";

export function Contact() {
  return (
    <div>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          loop: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/round/G1.jpeg" />
          <h2 className="myimage">image 1</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G2.jpeg" />
          <h2 className="myimage">image 2</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G3.jpeg" />
          <h2 className="myimage">image 3</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G4.jpeg" />
          <h2 className="myimage">image 3</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G5.jpeg" />
          <h2 className="myimage">image 4</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G6.jpeg" />
          <h2 className="myimage">image 5</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G7.jpeg" />
          <h2 className="myimage">image 6</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G8.jpeg" />
          <h2 className="myimage">image 7</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G9.jpeg" />
          <h2 className="myimage">image 8</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G10.jpeg" />
          <h2 className="myimage">image 9</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G11.jpeg" />
          <h2 className="myimage">image 10</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G12.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G13.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G14.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G15.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G16.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G17.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G18.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G19.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G20.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G21.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G22.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G23.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G24.jpeg" />
        </SwiperSlide>
      </Swiper>
      {console.log(Contact)}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
}

export function Contactus() {
  return (
    <div className="mainDiv">
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 700,
          modifier: 1,
          slideShadows: true,
          loop: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >

        <SwiperSlide>
          <img src="images/round/G1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G5.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G6.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G7.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G8.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G9.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G10.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G11.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G12.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G13.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G14.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G15.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G16.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G17.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G18.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G19.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G20.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G21.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G22.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G23.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/round/G24.jpeg" />
        </SwiperSlide>
      </Swiper>
      {console.log(Contact)}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
}
