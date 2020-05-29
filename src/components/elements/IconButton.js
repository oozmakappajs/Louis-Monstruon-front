import React from 'react';
import { AddShoppingCart, LocalGroceryStoreOutlined, Favorite, FavoriteBorder, DeleteOutlined } from '@material-ui/icons';

import '../../assets/styles/components/elements/IconButton.scss';

const IconButton = (props) => {
  return (
    <>
      {
        props.type === 'cart' && (
          !props.isBuying ? (
            <button type="button" className="IconButton IconButton--cart" onClick={props.action}>
              <LocalGroceryStoreOutlined />
            </button>
          ) :
            (
              <button type="button" className="IconButton IconButton--cart" onClick={props.action}>
                <AddShoppingCart />
              </button>
            )
        )
      }
      {
        props.type === 'fav' && (
          props.isFav ? (
            <button type="button" className="IconButton IconButton--fav" onClick={props.action}>
              <Favorite />
            </button>
          ) :
            (
              <button type="button" className="IconButton IconButton--emptyfav" onClick={props.action}>
                <FavoriteBorder />
              </button>
            )
        )
      }
      {
        props.type === 'delete' && (
          <button type="button" className="IconButton IconButton--delete" onClick={props.action}>
            <DeleteOutlined />
          </button>
        )
      }
    </>
  );
};

export default IconButton;
