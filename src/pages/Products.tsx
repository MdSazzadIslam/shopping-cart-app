import React, { useEffect } from 'react';
import { ProductProps } from '../types/product';
import * as productActions from '../redux/product/action';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../redux/cart/action';
import Item from '../components/Item';
import { ApplicationState } from '../redux/createRootReducer';
import './Products.css';
import Loader from '../components/Loader';

/**
 * defining props type for this component
 */
interface IProductProps {}
interface IDispatch {}

type AllProps = IProductProps & IDispatch;

const Products: React.FC<AllProps> = ({}) => {
  const dispatch = useDispatch();

  const { data, loading, errors } = useSelector(
    (state: ApplicationState) => state.product
  );

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, [dispatch]);

  const addToCart = (item: ProductProps) => {
    dispatch(cartActions.addToCart(item));
  };

  if (errors) {
    return <h3>Something went wrong</h3>;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Products;
