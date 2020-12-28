import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "../../store/StateProps";
import "./products.css";
import {add} from "../../store/basketSlice"

const Products = () => {
  const products = useSelector((state: StateProps[]) => state);
  const dispatch = useDispatch()
  console.log(products);
  return (
    <div className="container">
      {products.map((product: StateProps, index: number) => (
        <div key={index} className="products">
          <img src={product.image} alt="Drones" className="image" />
          <div className='details'>
            <h2>{product.productTitle}</h2>
            <p>{product.productDescription}</p>
            <h2>Price: ${product.price}</h2>
          </div>
          <button className='button' onClick={() => dispatch(add(product))}>Add To Card</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
