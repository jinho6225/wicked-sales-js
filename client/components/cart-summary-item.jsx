import React from 'react';

const CartSummaryItem = props => {
  const { item } = props;
  return (
    <div>
      <div className="row w-85 m-2 p-2 border border-secondary bg-light d-flex align-items-center">
        <div className="col-4 w-100 p-2">
          <img src={item.image} className="detail-img" alt="..." />
        </div>

        <div className="col-7 w-100 p-2">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text text-muted">{`$${(item.price / 100).toFixed(2)}`}</p>
          <p className="card-text">{item.shortDescription}</p>
        </div>
      </div>
    </div>
  );
};
export default CartSummaryItem;