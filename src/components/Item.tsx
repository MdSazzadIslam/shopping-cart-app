import React, { useState } from 'react';
import { ProductProps } from '../types/product';
import { Form } from 'react-bootstrap';
import './Item.css';
/**
 * defining props type for this component
 */
interface IItemprops {
  item: ProductProps;
}

interface IDispatch {
  addItemToCart: (item: any) => void;
}

type Props = IItemprops & IDispatch;

const Item: React.FC<Props> = ({ item, addItemToCart }) => {
  const [coverage, setCoverage] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const AddItemToCart = () => {
    if (coverage && price) {
      item.qty = 1;
      item.coverage = coverage;
      item.price = price;
      addItemToCart(item);
    } else {
      alert('Coverage is required!!! [Please move slider]');
    }
  };

  const handleCoverageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoverage(parseInt(e.target.value));
    const newPrice = Math.round(parseInt(e.target.value) * (item.risk / 100));
    setPrice(newPrice);
  };

  const imageUrl = `/assets/images/${item.image}`;
  const customCoverage = item.minCoverage + '-' + item.maxCoverage;
  return (
    <div className="new-card" key={item.id}>
      <div className="inner-card">
        <img
          src={imageUrl}
          className="img-fluid rounded"
          alt={item.name}
          style={{ width: '350px', height: '250px' }}
        />

        <div className="mt-2 px-2">
          <small>{item.description}</small>
        </div>
        <div className="mt-2 px-2">
          <small>Risk # {item.risk}%</small>
        </div>
        <div className="mt-2 px-2">
          <small>Coverage # {customCoverage}</small>
          <h4 style={{ color: 'blue' }}> {coverage}</h4>
          <Form.Range
            min={item.minCoverage}
            max={item.maxCoverage}
            onChange={handleCoverageChange}
          />
        </div>
        <div className="px-2">
          <h4>${price}</h4>
        </div>

        <div className="px-2 mt-3">
          <button
            className="btn btn-outline-primary px-3"
            onClick={() => AddItemToCart()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Item);
