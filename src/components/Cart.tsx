import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../redux/createRootReducer';

import './Cart.css';
const Cart: React.FC = () => {
  const [carts, setCarts] = useState<Number>(1);
  const dispatch = useDispatch();

  const { data, loading, errors } = useSelector(
    (state: ApplicationState) => state.cart
  );
  console.log(data, loading, errors);

  const cartsData = data.items.map((item) => {
    const imageUrl = `/assets/images/${item.image}`;

    return (
      <tr key={item.id}>
        <td>
          <img src={imageUrl} width="70px" alt={item.name} />
        </td>
        <td>{item.name}</td>
        <td>
          <input
            className="form-control"
            type="text"
            value={item.qty}
            width="10px"
            disabled
          />
        </td>
        <td className="text-right">{item.coverage}</td>
        <td className="text-right">{item.risk}</td>
        <td className="text-right">{item.price}</td>
        <td className="text-right">
          <button className="btn btn-sm btn-danger">
            <i className="fa fa-trash" />
          </button>
        </td>
      </tr>
    );
  });
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
                      <th scope="col">Image</th>
                      <th scope="col">Module</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Coverage</th>
                      <th scope="col">Risk</th>
                      <th scope="col" className="text-right">
                        Price
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
                      <td>Sub-Total</td>
                      <td className="text-right">{}</td>
                    </tr>

                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Shipping</td>
                      <td className="text-right">0</td>
                    </tr>

                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">
                        <strong>{}</strong>
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
