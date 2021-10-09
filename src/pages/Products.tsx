import React, { useEffect } from "react";
import { ProductProps } from "../types/product";
import * as actions from "../redux/product/action";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/action";
import Item from "../components/Item";
import { ApplicationState } from "../redux/createRootReducer";
import "./Products.css";
import Loader from "../components/Loader";
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
  /*  loading,
  data,
  errors, */
  getProducts,
  addToCart,
}) => {
  const dispatch = useDispatch();

  const { data, loading, errors } = useSelector(
    (state: ApplicationState) => state.product
  );

  useEffect(() => {
    dispatch(actions.getProducts());
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }
  if (errors) {
    return <h5>something went wrong</h5>;
  }
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-12">
          <div className="row">
            {data.map((item, id) => {
              return (
                <div className="col-md-4 col-sm-12" key={id}>
                  <Item item={item} addToCart={addToCart} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
