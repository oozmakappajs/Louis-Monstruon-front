import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/UserCard.scss';
import { AttachMoney } from '@material-ui/icons';
import IconButton from '../components/elements/IconButton';
import user from '../assets/images/products/dino4.jpg';

const UserCard = (props) => {
  return (
    <Link to="/:category/:product/:id" className="UserCard">
      <div className="UserCard__img-container">
        <img
          src={user}
          alt="UserCard-img"
          className="UserCard__img"
        />
      </div>
      <div className="UserCard__details">
        <p className="UserCard__title">Nombre de producto</p>
        {
          props.icon ? (
            <>
              <div className="UserCard__icon">
                <p className="UserCard__price">precio</p>
                <IconButton type="fav" isFav />
              </div>
            </>
          ) :
            (
              <>
                <div className="UserCard__icon UserCard--price">
                  <p className="UserCard__date">dd/mm/yyyy</p>
                  <div>
                    <AttachMoney />
                    <span>precio</span>
                  </div>
                </div>
              </>
            )
        }
      </div>
    </Link>
  );
};

export default UserCard;

