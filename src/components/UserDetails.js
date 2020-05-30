import React from 'react';
import '../assets/styles/components/UserDetails.scss';
import { AddCircleOutline } from '@material-ui/icons';

const UserDetails = (props) => (
  <>
    {
      props.full ? (
        <div className="UserDetails">
          <div className="UserDetails__user">
            <div className="UserDetails__circle" />
            <span className="UserDetails__name">Nombre del usuario</span>
          </div>
          <p>Calle/Avenida</p>
          <p>Colonia</p>
          <div className="UserDetails__adress">
            <span>Municipio Delegación</span>
            <span>Codigo postal</span>
          </div>
          <div className="UserDetails__state">
            <span>Estado</span>
            <span>Pais</span>
            <span>Número Telefonico</span>
          </div>
          <button type="submit" className="UserDetails__add">
            <p>Agregar instrucciones de entrega</p>
          </button>
        </div>
      ) :
        (
          <div className="UserDetails UserDetails__empty">
            <button type="button" className="UserDetails__empty--btn">
              <AddCircleOutline />
            </button>
            <p>Agregue una nueva dirección</p>
          </div>
        )
    }
  </>
);

export default UserDetails;
