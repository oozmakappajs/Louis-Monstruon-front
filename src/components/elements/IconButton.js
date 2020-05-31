import React from 'react';
import { AddShoppingCart, LocalGroceryStoreOutlined, Favorite, FavoriteBorder, DeleteOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';

import '../../assets/styles/components/elements/IconButton.scss';

const IconButton = (props) => {
  return (
    <>
      {
        props.type === 'cart' && (
          !props.isBuying ? (
            <button type="button" aria-label="Add to cart" className="IconButton IconButton--cart" onClick={props.action}>
              <LocalGroceryStoreOutlined />
            </button>
          ) :
            (
              <button type="button" aria-label="Add to cart" className="IconButton IconButton--cart" onClick={props.action}>
                <AddShoppingCart />
              </button>
            )
        )
      }
      {
        props.type === 'fav' && (
          props.isFav ? (
            <button type="button" aria-label="Remove to favorite" className="IconButton IconButton--fav" onClick={props.action}>
              <Favorite />
            </button>
          ) :
            (
              <button type="button" aria-label="Add to favorite" className="IconButton IconButton--emptyfav" onClick={props.action}>
                <FavoriteBorder />
              </button>
            )
        )
      }
      {
        props.type === 'delete' && (
          <button type="button" aria-label="Delete item" className="IconButton IconButton--delete" onClick={props.action}>
            <DeleteOutlined />
          </button>
        )
      }
    </>
  );
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func,
  isBuying: PropTypes.bool,
  isFav: PropTypes.bool,
};

export default IconButton;
