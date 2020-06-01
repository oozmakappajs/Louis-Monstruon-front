import React, { useState } from 'react';
import swal from 'sweetalert';

import Button from '../components/elements/Button';
import IconButton from '../components/elements/IconButton';
import QuantityCounter from '../components/elements/QuantityCounter';

import '../assets/styles/components/ProductActions.scss';

const ProductContainer = (props) => {
  const { addToCart, goToPayment, like, theme, product, url } = props;
  const [count, setCount] = useState(1);

  const handleQuantity = (operation) => {
    if (operation > product.stock) {
      swal('There are not enough products', 'Maximum capacity reached', 'error');
      setCount(count);
    } else {
      setCount(operation);
    }
  };

  const item = {
    id: product.id,
    url,
    name: product.name,
    price: product.price,
    image: product.image,
    stock: product.stock,
    quantity: count,
  };

  return (
    <section className={`product ${theme} ProductContainer`}>
      <div className="product_galery">
        <img className="ProductContainer__img" src={product.image} alt={product.name} />
      </div>
      <div className="product_actions ProductContainer__info">
        <div className="ProductContainer__info-price">
          <div className="ProductContainer__info-price-container">
            <p className="ProductContainer__info-price-text">
              $
              {product.price}
            </p>
            <QuantityCounter action={handleQuantity} count={count} alertCount />
          </div>
          <IconButton type="fav" action={like} className="ProductContainer__info-price--heart" />
        </div>
        <div className="ProductContainer__info-buttons">
          <div className="ProductContainer__info-buttons--btn">
            <Button name="success" action={() => goToPayment(item)}>Comprar ahora</Button>
          </div>
          <div className="ProductContainer__info-buttons--icon">
            <IconButton type="cart" action={() => addToCart(item)} isBuying />
          </div>
        </div>
      </div>
      <div className="product_description">
        <p className="ProductContainer__text">
          {product.long_desc}
        </p>
      </div>
    </section>
  );
};

export default ProductContainer;
