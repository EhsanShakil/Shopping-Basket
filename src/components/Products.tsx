import { useSelector } from "react-redux";
import { StateProps } from "../store/StateProps";

const Products = () => {
  const products = useSelector((state: StateProps[]) => state);

  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      {products.map((product: StateProps, index: number) => (
        <div key={index}>{product.productTitle}</div>
      ))}
    </div>
  );
};

export default Products;
