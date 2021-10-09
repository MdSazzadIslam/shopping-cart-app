import React, { useEffect } from "react";
import { ProductProps } from "../types/product";
import { getProducts } from "../redux/product/action";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/action";
import Item from "../components/Item";
import "./Products.css";

interface IProductProps {
  loading: boolean;
  products: ProductProps[];
  errors?: string;
}
interface IDispatch {
  getProducts: () => any;
  addToCart: (item: any) => any;
}

type AllProps = IProductProps & IDispatch;

const products: React.FC<AllProps> = ({
  loading,
  products,
  errors,
  getProducts,
  addToCart,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="container">
      <div className="list">
        {products.map((item) => {
          return <Item item={item} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};

export default products;
