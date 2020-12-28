import { useSelector } from "react-redux";
import { StateProps } from "../../store/StateProps";
import Header from "../Header/Header";
import "./checkout.css";

const Checkout = () => {
  const products = useSelector((state: StateProps[]) => state);
  return (
    <>
      <Header title="Shopping Basket" />
      {products.filter((items: StateProps) => { items.productTitle.length === 0 ? <div>There is no product in your basket</div> : 
      <div className='checkout'>
        <h1>Checkout</h1>
        <table>
          <thead>
            <tr className="thead">
              <th>Product</th>
              <th>Price</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        </div>
       })}
    </>
  );
};
export default Checkout;
