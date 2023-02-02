import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./reactcrousal2.css";
import { useHistory } from "react-router-dom";

export function ProductCross({ array, setArray }) {
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
      breakpoint: { max: 999, min: 550 },
      items: 4,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 549, min: 300 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const yoyo = array.map((item, index) => {
    return (
      <ProductCross2
        key={index}
        id={index}
        image={item.imageUrl}
        code={item.code}
        name={item.name}
        imgPack={item.imgPack}
        array={array}
        setArray={setArray}
      />
    );
  });

  return (
    <div className="card2">
      <Carousel
        responsive={responsive}
        transitionDuration={500}
        containerClass="carousel-container"
      >
        {yoyo}
      </Carousel>
      {console.log("hloo 1 " + { yoyo })}
    </div>
  );
}

export function ProductCross2({
  id,
  image,
  code,
  name,
  imgPack,
  array,
  setArray,
}) {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/product/" + id)}>
      {console.log(JSON.stringify( image ) + "hloo")}
      <div className="mainItemBox2">
        <div className="itemBox2">
          <img className="itemImage2" src={image} alt="img" />
          <div className="itemText">
            <p className="itemName2">Happy Birthday</p>
            <p className="itemCode2">101</p>
          </div>
        </div>
      </div>
    </div>
  );
}
