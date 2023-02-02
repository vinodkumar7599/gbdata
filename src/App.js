import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Nav } from "./nav";
import { AboutUs } from "./AboutUs";
import { Home } from "./Home";
import { useState } from "react";
import { Contact, Contactus } from "./Contact";
import { All, Heartfoil, Product, Sport, Sport1 } from "./PRODUCT.js";
import { ReactMultiCarousel } from "./reactMultiCrousal";
import {
  ProductAdd,
  ProductAdd2,
  ProductAdd3,
  ProductAdd4,
} from "./productadd";
import { ProductCross } from "./reactcrousal2";
import { HashNavigation } from "swiper";
import { KeyboardReturnSharp, NightShelter } from "@mui/icons-material";
import { ProductInfo } from "./ProductInfo";

function App() {
  const arrays = [
    {
      imageUrl: "https://wallpapercave.com/wp/wp4287713.jpg",
      imgPack: "images/packing/1.jpg",
      code: "11",
      name: "image 1",
    },
    {
      imageUrl: "https://i.pinimg.com/474x/e4/66/04/e466048125f1cd832d848cd4a476388a--story-quotes-story-story.jpg",
      imgPack: "images/packing/2.jpg",
      code: "22",
      name: "image 2",
    },
    {
      imageUrl: "images/POMPOM/1.jpg",
      imgPack: "images/packing/3.jpg",
      code: "33",
      name: "image 3",
    },
    {
      imageUrl: "https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
      code: "44",
      name: "",
    },
    {
      imageUrl: "images/round/G13.jpeg",
      code: "55",
      name: "",
    },
    {
      imageUrl: "images/round/G14.jpeg",
      code: "66",
      name: "",
    },
    {
      imageUrl: "images/round/G4.jpeg",
      code: "77",
      name: "",
    },
    {
      imageUrl: "images/round/G5.jpeg",
      code: "88",
      name: "",
    },
    {
      imageUrl: "images/round/G6.jpeg",
      code: "99",
      name: "",
    },
    {
      imageUrl: "images/round/G7.jpeg",
      code: "100",
      name: "",
    },
    {
      imageUrl: "images/round/G8.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G9.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G10.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G11.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G12.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G13.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G14.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G15.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G16.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G17.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G18.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G19.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G20.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G21.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G22.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G23.jpeg",
      code: "",
      name: "",
    },
    {
      imageUrl: "images/round/G24.jpeg",
      code: "",
      name: "",
    },
  ];

  const [array, setArray] = useState([...arrays]);
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <ProductCross array={array} setArray={setArray} />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route exect path="/products">
          <Product />
          <Heartfoil />
          <Sport1 />
          <Sport />
          <All />
          <Contact />
          <Contactus />
          <ReactMultiCarousel />
        </Route>
        <Route path="/contact">
          <img
            className="contact_head_image lp"
            src="images/header_image.jpg"
            alt="img"
          />
          <ProductAdd />
          <ProductAdd2 />
          <ProductAdd3 />
          <ProductAdd4 />
        </Route>
        <Route path="/product/:id">
          <ProductInfo arrays={arrays} />
        </Route>
      </Switch>
    </div>
  );
}

// 

export default App;


