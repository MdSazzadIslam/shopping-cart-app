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
  debugger;
  const dispatch = useDispatch();
  const AddItemToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="new_card" key={item.id}>
      <div className="inner-card">
        <img src={item.image} className="img-fluid rounded" alt={item.name} />
        <div className="d-flex justify-content-between align-items-center mt-3 px-2">
          <h4>{item.name}</h4>
          <span className="heart">
            <i className="fa fa-heart" />
          </span>
        </div>
        <div className="mt-2 px-2">
          <small>{item.description}</small>
        </div>
        <div className="px-2">
          <h3>{item.price}</h3>
        </div>

        <div className="px-2 mt-3">
          <button
            className="btn btn-outline-primary px-3"
            onClick={(e) => AddItemToCart(e)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
