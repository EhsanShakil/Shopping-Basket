import { useSelector } from "react-redux";
import { StateProps } from "../store/StateProps";

const Products = () => {
  const products = useSelector((state: StateProps[]) => state);

  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      {products.map((product: StateProps, index: number) => (
        <div key={index}>
          <img src={product.image} alt="Drones" width={300} height={300} />
          <h2>{product.productTitle}</h2>
          <p>{product.productDescription}</p>
          <h2>Price: ${product.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
