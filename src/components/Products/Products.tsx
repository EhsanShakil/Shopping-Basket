import { useSelector } from "react-redux";
import { StateProps } from "../../store/StateProps";
import './products.css'

const Products = () => {
  const products = useSelector((state: StateProps[]) => state);

  console.log(products);
  return (
    <div>
      {products.map((product: StateProps, index: number) => (
        <div key={index} className='products'>
          <img src={product.image} alt="Drones" className='image' />
          <div style={{lineHeight: 1.2}}>
          <h2>{product.productTitle}</h2>
          <p>{product.productDescription}</p>
            <h2>Price: ${product.price}</h2>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
