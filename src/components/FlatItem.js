import React from "react";
import { Link } from "react-router-dom";

const FlatItem = ({ slug, name, price, location, images }) => {
  const formatPrice = (price) => {
    if (price.toString().length === 7) {
      return `${(price / 100000).toFixed(2)} Lacs`;
    } else if (price.toString().length === 8) {
      return `${(price / 10000000).toFixed(2)} Crore`;
    } else {
      return price;
    }
  };
  return (
    <div className="text-center col-lg-4 col-12 col-md-6">
      <div className="item">
        <div className="item-image">
          <img className="img-fluid" src={images} alt="flat" />
        </div>
        <div className="item-description">
          <div className="d-flex justify-content-between mb-3">
            <span className="item-title">{name}</span>
            <span className="item-price">{formatPrice(price)}</span>
          </div>
          <div className="item-icon d-flex align-items-center justify-content-between">
            <div>
              <i className="fas fa-map-marker-alt"></i> <span>{location}</span>
            </div>
            <Link to={`/flat/${name}`} className="item-title">
              <button className="btn btn-detail">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatItem;
