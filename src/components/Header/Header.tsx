import React from "react";
import "./header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateProps } from "../../store/StateProps";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const products = useSelector((state: StateProps[]) => state);
  const productCount = products.filter((items) =>
    items.added).length <= 0
      ? 0
      : products.filter((items) => items.added).length;
  return (
    <div className="header">
      <Link to="/" className='link'>
        <h2 className='title'>{title}</h2>
      </Link>
      <Link to="/checkout" className='link'>
        <div className='cart'>
          <AiOutlineShoppingCart size={35} color="black" />
          <div className='count'>{productCount}</div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
