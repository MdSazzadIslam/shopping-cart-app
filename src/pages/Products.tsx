import React, { useEffect } from "react";
import { ProductProps } from "../types/product";
import { getProducts } from "../redux/product/action";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/action";
import Item from "../components/Item";
import { ApplicationState } from "../redux/createRootReducer";
/* import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ApplicationState } from "../redux/createRootReducer"; */

import "./Products.css";

interface IProductProps {
  loading: boolean;
  data: ProductProps[];
  errors?: string;
}
interface IDispatch {
  getProducts: () => any;
  addToCart: (item: any) => any;
}

type AllProps = IProductProps & IDispatch;

const Products: React.FC<AllProps> = ({
  loading,
  data,
  errors,
  getProducts,
  addToCart,
}) => {
  const dispatch = useDispatch();
  const IProductProps = useSelector((state: ApplicationState) => state.product);
  console.log(IProductProps);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="container">
      <div className="list">
        {data.map((item, id) => {
          return (
            <div key={id}>
              <Item item={item} addToCart={addToCart} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* const mapStateToProps = ({ product }: ApplicationState) => ({
  loading: product.loading,
  errors: product.errors,
  data: product.data,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products); */

export default Products;
