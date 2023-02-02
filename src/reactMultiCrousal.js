import "./ReactCrousal.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ReactCrousal.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function ReactMultiCarousel() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 7,
      slidesToSlide: 6,
    },
    desktop: {
      breakpoint: { max: 1399, min: 1000 },
      items: 5,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 999, min: 600 },
      items: 4,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 599, min: 300 },
      items: 2,
      slidesToSlide: 2,
    },
  };

 

  return (
    <div>
      <div>
        <span className="productFoil">FOIL BALLOONS</span>
      </div>
      <div className="card">
        <Carousel
          responsive={responsive}
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div className="mainItemBox">
            <div className="itemBox">
              <img className="itemImage" src="images/round/G3.jpeg" alt="img" />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">101</p>
            </div>
          </div>

          <div className="mainItemBox">
            <div className="itemBox">
              <img
                className="itemImage"
                src="images/round/G10.jpeg"
                alt="img"
              />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">108</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img
                className="itemImage"
                src="images/round/G11.jpeg"
                alt="img"
              />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">109</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img
                className="itemImage"
                src="images/round/G12.jpeg"
                alt="img"
              />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">110</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img
                className="itemImage"
                src="images/round/G13.jpeg"
                alt="img"
              />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">111</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img
                className="itemImage"
                src="images/round/G14.jpeg"
                alt="img"
              />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">112</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img className="itemImage" src="images/round/G4.jpeg" alt="img" />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">102</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img className="itemImage" src="images/round/G5.jpeg" alt="img" />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">103</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img className="itemImage" src="images/round/G6.jpeg" alt="img" />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">104</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img className="itemImage" src="images/round/G7.jpeg" alt="img" />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">105</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img className="itemImage" src="images/round/G8.jpeg" alt="img" />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">106</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img className="itemImage" src="images/round/G9.jpeg" alt="img" />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">107</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img
                className="itemImage"
                src="images/round/G15.jpeg"
                alt="img"
              />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">113</p>
            </div>
          </div>
          <div className="mainItemBox">
            <div className="itemBox">
              <img
                className="itemImage"
                src="images/round/G16.jpeg"
                alt="img"
              />
              <p className="itemName">Happy Birthday</p>
              <p className="itemCode">114</p>
            </div>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G17.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">115</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G18.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">116</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G19.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">117</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G20.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">118</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G1.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">119</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G21.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">120</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G22.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">121</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G2.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">122</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G12.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">123</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G24.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">124</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G23.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">125</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G8.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">126</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G4.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">127</p>
          </div>
          <div className="itemBox">
            <img className="itemImage" src="images/round/G16.jpeg" alt="img" />
            <p className="itemName">Happy Birthday</p>
            <p className="itemCode">128</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
