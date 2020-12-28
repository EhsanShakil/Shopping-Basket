import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "../../store/StateProps";
import Header from "../Header/Header";
import "./checkout.css";
import { remove } from "../../store/basketSlice"

const Checkout = () => {
  const products = useSelector((state: StateProps[]) => state);
  const dispatch = useDispatch()
  return (
    <>
      <Header title="Shopping Basket" />
      {products.filter((items: StateProps) => items.added).length === 0 ? (
        <h2 className="checkout" style={{ color: "red" }}>
          There is no product in your basket
        </h2>
      ) : (
        <div className="checkout">
          <h1>Checkout</h1>
          <table>
            <thead>
              <tr className="tabelhead">
                <th>Product</th>
                <th>Price</th>
                <th>Remove Item</th>
              </tr>
            </thead>
            <br />
            <tbody>
              {products
                .filter((items: StateProps) => items.added)
                .map((items: StateProps) => (
                  <>
                    <tr className="tabelbody">
                      <td>{items.productTitle}</td>
                      <td>${items.price}</td>
                      <td><button className='remove'  onClick={() => dispatch(remove(items))}>Remove</button></td>
                    </tr>
                    <br />
                  </>
                ))}
            </tbody>
            </table>

            <h2>Total: {products.filter((items: StateProps) => items.added).reduce(
              (total, num) => total + num.price, 0)}</h2>
        </div>
      )}
    </>
  );
};
export default Checkout;
