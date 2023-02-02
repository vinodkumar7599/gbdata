import { useParams } from "react-router-dom";


export function ProductInfo({arrays} ){
const {id} = useParams();
console.log(arrays[id].imageUrl);
  return(
    <div>
    {/* <img src={arrays[id].imageUrl} alt="img" /> */}
    <img src="images/POMPOM/1.jpg" alt="img 1" />
    </div>
  );
}


