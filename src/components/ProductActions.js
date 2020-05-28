import React from 'react';
import IconButton from './elements/IconButton';
import QuantityCounter from './elements/QuantityCounter';
import Button from './elements/Button';
import '../assets/styles/components/ProductActions.scss';

const ProductActions = () => {
  return (
    <div className="ProductActions">
      <div className="ProductActions__info">
        <div className="ProductActions__info-price">
          <div className="ProductActions__info-price-container">
            <p>Precio</p>
            <QuantityCounter />
          </div>
          <IconButton type="fav" className="ProductActions__info-price--heart" />
        </div>
        <div className="ProductActions__info-buttons">
          <div className="ProductActions__info-buttons--btn">
            <Button name="success">
              Pagar
            </Button>
          </div>
          <div className="ProductActions__info-buttons--icon">
            <IconButton type="cart" isBuying />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
