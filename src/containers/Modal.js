import React from 'react';
import { Clear } from '@material-ui/icons';
import '../assets/styles/containers/Modal.scss';
import TagsContainer from './TagsContainer';
import StripePayment from '../stripe';

const Modal = (props) => {
  const { open, handleOpen } = props;
  return (
    <>
      {
        open && (
          <div className="Modal">
            <button type="button" className="Modal__icon" onClick={handleOpen}>
              <Clear />
            </button>
            {
              props.price ? (
                <div className="Modal__container">
                  <div className="Modal__price">
                    <p>Precio</p>
                    <p>--------------------</p>
                  </div>
                  <TagsContainer title="Talla" />
                  <TagsContainer title="Promociones" />
                  <TagsContainer title="Temporada" />
                </div>
              ) : (
                <div className="Modal__container Modal__container--checkout">
                  <StripePayment />
                </div>
              )
            }
          </div>
        )
      }
    </>
  );
};

export default Modal;
