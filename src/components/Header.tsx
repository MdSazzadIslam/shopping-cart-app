import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux/createRootReducer';
import './Header.css';
const Header: React.FC = () => {
  const { data } = useSelector((state: ApplicationState) => state.cart);

  return (
    <div className="headerContainer">
      <div className="navHeader">
        <Link to="/">Home</Link>
      </div>

      <div className="navCart">
        <Link to="/cart">
          Cart <div className="cartSpan">{data.items.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
