import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/cart/action';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../redux/createRootReducer';
import Loader from './Loader';
import './Cart.css';

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { data, loading, errors } = useSelector(
    (state: ApplicationState) => state.cart
  );

  const total = data.items
    .reduce((sum, { price, qty }) => sum + price * qty, 0)
    .toFixed(2);

  const deleteCartHandler = async (
    e: React.FormEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };

  const cartsData = data.items.map((item, index) => {
    const imageUrl = `/assets/images/${item.image}`;

    return (
      <tr key={index}>
        <td>
          <img src={imageUrl} width="70px" alt={item.name} />
        </td>
        <td>{item.name}</td>

        <td className="text-right">{item.coverage}</td>
        <td className="text-right">{item.risk}</td>
        <td className="text-right">{item.qty}</td>
        <td className="text-right">{item.unitPrice}</td>
        <td className="text-right">{item.price}</td>
        <td className="text-right">
          <button
            className="btn btn-sm btn-danger"
            onClick={(e) => deleteCartHandler(e, item.id)}
          >
            <i className="fa fa-trash" />
          </button>
        </td>
      </tr>
    );
  });
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (errors) {
    return (
      <>
        <h3>Something went wrong</h3>
      </>
    );
  }

  return (
    <div>
      {data.items.length === 0 ? (
        <div className="col mb-2">
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Cart is Empty. Please add some items.
          </h3>
        </div>
      ) : (
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Module</th>
                      <th scope="col">Coverage</th>
                      <th scope="col">Risk</th>
                      <th scope="col">Qty</th>
                      <th scope="col" className="text-right">
                        Unit Price
                      </th>
                      <th scope="col" className="text-right">
                        Total Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartsData}

                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">
                        <strong>{total}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to="/" className="btn btn-block btn-primary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
