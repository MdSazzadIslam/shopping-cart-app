import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart: React.FC = () => {
  const [carts, setCarts] = useState<Number>(1);
  return (
    <div>
      {carts === 0 ? (
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
                      <th scope="col"> </th>
                      <th scope="col">Module</th>
                      <th scope="col">Coverage</th>
                      <th scope="col">Risk</th>
                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
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
