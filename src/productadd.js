import "./productadd.css";
import { ReactMultiCarousel } from "./reactMultiCrousal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function ProductAdd() {
  AOS.init({
    duration: 2000,
    offset: 200,
  });

  return (
    <div>
      <div data-aos="zoom-in">
        <ReactMultiCarousel />
      </div>
      <br />
    </div>
  );
}

export function ProductAdd2() {
  return (
    <div>
      <div data-aos="zoom-in">
        <ReactMultiCarousel />
      </div>
      <br />
    </div>
  );
}

export function ProductAdd3() {
  return (
    <div>
      <div data-aos="fade-right">
        <ReactMultiCarousel />
      </div>
      <br />
    </div>
  );
}

export function ProductAdd4() {
  return (
    <div>
      <div data-aos="fade-left">
        <ReactMultiCarousel />
      </div>
      <br />
    </div>
  );
}
