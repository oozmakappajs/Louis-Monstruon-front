import React from 'react';
import { AddShoppingCart, LocalGroceryStoreOutlined, Favorite, FavoriteBorder } from '@material-ui/icons';
import '../../assets/styles/elements/IconButton.scss';

const IconButton = (props) => {
  return (
    <>
      {
        props.type === 'cart' && (
          !props.isBuying ? (
            <button type="button" className="IconButton IconButton--cart">
              <LocalGroceryStoreOutlined />
            </button>
          ) : (
            <button type="button" className="IconButton IconButton--cart">
              <AddShoppingCart />
            </button>
          )
        )
      }
      {
        props.type === 'fav' && (
          props.isFav ? (
            <button type="button" className="IconButton IconButton--fav">
              <Favorite />
            </button>
          ) : (
            <button type="button" className="IconButton IconButton--emptyfav">
              <FavoriteBorder />
            </button>
          )
        )
      }
    </>
  );
};

export default IconButton;
