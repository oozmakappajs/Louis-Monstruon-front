import React from 'react';
import { LocalGroceryStoreOutlined, Favorite, FavoriteBorder } from '@material-ui/icons';
import '../../assets/styles/elements/IconButton.scss';

const IconButton = (props) => {
  return (
    <>
      {
        props.type === 'cart' && (
          <button type="button" className="IconButton IconButton--cart">
            <LocalGroceryStoreOutlined />
          </button>
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
