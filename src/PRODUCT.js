
import { useState } from "react";
import { useEffect } from "react";
import "./PRODUCT.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AOS from "aos";
import "aos/dist/aos.css";

export function Product() {
 const product = [
        "images/combo/c1.jpeg",
        "images/combo/c2.jpeg",
        "images/combo/c3.jpeg",
        "images/combo/c4.jpeg",
        "images/combo/c5.jpeg",
        "images/combo/c6.jpeg",
        "images/combo/c7.jpeg",
        "images/combo/c8.jpeg",
        "images/combo/c9.jpeg",
        "images/combo/c10.jpeg",
        "images/combo/c11.jpeg",
        "images/combo/c12.jpeg",
        "images/combo/c13.jpeg",
 ]
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count < product.length - 1 ? count + 1 : 0);
      console.log(count);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);


    return(
      <div>
         <div className="headContaner">
              <img className="imgProduct" src={product[count]} alt="head" />
              <ArrowBackIosIcon className="preview"
                onClick={() => {
                  setCount(count > 0 ? count - 1 : product.length - 1);
                }}
              />
              <ArrowForwardIosIcon className="next  "
                onClick={() => {
                  setCount(count < product.length - 1 ? count + 1 : 0);
                }}
              />
            </div>
      </div>  
    );
}

export function Heartfoil(){
    const hearts = [
        "images/heartfoil/heart1.jpeg",
        "images/heartfoil/heart2.jpeg",
        "images/heartfoil/heart3.jpeg",
        "images/heartfoil/heart4.jpeg",
        "images/heartfoil/heart5.jpeg",

    ];
    const [count1, setCount1] = useState(0);
    useEffect(() => {
      const interval1 = setInterval(() => {
        setCount1(count1 < hearts.length - 1 ? count1 + 1 : 0);
        console.log(count1);
      }, 3000);
      return () => clearInterval(interval1);
    }, [count1]);
  
    


    return(
        <div>
            <div className="headContaner2">
            <img className="imgProduct2" src={hearts[count1]} alt="ead" />
            <ArrowBackIosIcon className="preview"
              onClick={() => {
                setCount1(count1 > 0 ? count1 - 1 : hearts.length - 1);
              }}
            />
            <ArrowForwardIosIcon className="next"
              onClick={() => {
                setCount1(count1 < hearts.length - 1 ? count1 + 1 : 0);
              }}
            />
            </div>
        </div>
    );
}

export function Sport(){
    const sport = [
        "images/RG/RG0.png",
        "images/RG/RG1.png",
        "images/RG/RG2.png",
        "images/RG/RG4.png",
        "images/RG/RG5.png",
        "images/RG/RG6.png",
        "images/RG/RG7.png",
    ];
    const [sports, setSports] = useState(0);
    
    return(
        <div>
        <div className="headContaner4">
        <img className="imgProduct4" src={sport[sports]} alt="ead" />
        <ArrowBackIosIcon className="preview"
          onClick={() => {
            setSports(sports > 0 ? sports - 1 : sport.length - 1);
          }}
        />
        <ArrowForwardIosIcon className="next"
          onClick={() => {
            setSports(sports < sport.length - 1 ? sports + 1 : 0);
          }}
        />
        </div>
    </div>
    );
}

export function Sport1(){
    const array = [
        "images/inch40rl/SL0.png",
        "images/inch40rl/SL1.png",
        "images/inch40rl/SL2.png",
        "images/inch40rl/SL4.png",
        "images/inch40rl/SL5.png",
        "images/inch40rl/SL6.png",
        "images/inch40rl/SL7.png",
        "images/inch40rl/SL8.png",
        "images/inch40rl/SL9.png",
    ];
    const [sports, setSports] = useState(0);
    
    return(
        <div>
        <div className="headContaner3">
        <img className="imgProduct3" src={array[sports]} alt="ead" />
        <ArrowBackIosIcon className="preview"
          onClick={() => {
            setSports(sports > 0 ? sports - 1 : array.length - 1);
          }}
        />
        <ArrowForwardIosIcon className="next"
          onClick={() => {
            setSports(sports < array.length - 1 ? sports + 1 : 0);
          }}
        />
        </div>
    </div>
    );
}

export function All(){
    const array1 = [
        "images/round/G1.jpeg",
        "images/round/G2.jpeg",
        "images/round/G3.jpeg",
        "images/round/G4.jpeg",
        "images/round/G5.jpeg",
        "images/round/G6.jpeg",
        "images/round/G7.jpeg",
        "images/round/G8.jpeg",
        "images/round/G9.jpeg",
        "images/round/G10.jpeg",
        "images/round/G11.jpeg",
        "images/round/G12.jpeg",
        "images/round/G13.jpeg",
        "images/round/G14.jpeg",
        "images/round/G15.jpeg",
        "images/round/G16.jpeg",
        "images/round/G17.jpeg",
        "images/round/G18.jpeg",
        "images/round/G19.jpeg",
        "images/round/G20.jpeg",
        "images/round/G21.jpeg",
        "images/round/G22.jpeg",
        "images/round/G23.jpeg",
        "images/round/G24.jpeg",
    ];
 
    const [slider, setslider] = useState(0);
    

    return(
        <div className="allSlider">
        <img className="imgProduct5" src={array1[slider]} alt="ead" />
        <img className="imgProduct5" src={array1[slider+1]} alt="ead" />
        <img className="imgProduct5" src={array1[slider+2]} alt="ead" />
        <img className="imgProduct5" src={array1[slider+3]} alt="ead" />
        <img className="imgProduct5" src={array1[slider+4]} alt="ead" />
        <img className="imgProduct5" src={array1[slider+5]} alt="ead" />
        <img className="imgProduct5" src={array1[slider+6]} alt="ead" />
        <ArrowBackIosIcon className="preview1"
        onClick={() => {
         setslider(slider===0 ? array1.length-7 : slider-1);



            
        }}
      />

      <ArrowForwardIosIcon className="next1"
      onClick={() => {
        setslider(slider === array1.length -7 ? 0 : slider +1);
      }}
    />

        </div>
    );
    }