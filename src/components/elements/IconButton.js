import React from 'react';
import { AddShoppingCart, LocalGroceryStoreOutlined, Favorite, FavoriteBorder, DeleteOutlined } from '@material-ui/icons';
import '../../assets/styles/components/elements/IconButton.scss';

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
      {
        props.type === 'delete' && (
          <button type="button" className="IconButton IconButton--fav IconButton--delete">
            <DeleteOutlined />
          </button>
        )
      }
    </>
  );
};

export default IconButton;
