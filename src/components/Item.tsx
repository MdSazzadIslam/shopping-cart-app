import React from "react";
import { ProductProps } from "../types/product";
import { addToCart } from "../redux/cart/action";
import { useDispatch } from "react-redux";
import "./Item.css";
interface IItemprops {
  item: ProductProps;
}

interface IDispatch {
  addToCart: (item: any) => any;
}

type Props = IItemprops & IDispatch;

const Item: React.FC<Props> = ({ item, addToCart }) => {
  const dispatch = useDispatch();
  const AddItemToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="container">
      <div className="figure">
        <img src={item.image} alt={item.name} className="image" />
      </div>

      <div className="header">{item.name}</div>
      <div className="description">
        <div className="addToCart">
          <input type="button" onClick={() => AddItemToCart(item)}>
            Add To Cart
          </input>
        </div>
      </div>
    </div>
  );
};

export default Item;
