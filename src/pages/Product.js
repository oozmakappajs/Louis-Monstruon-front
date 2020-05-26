import React from 'react';

import { getGlobalState } from '../Context';

import '../assets/styles/pages/product.scss';

const Product = (props) => {
  const [{ isAuth }, dispatch] = getGlobalState();

  const item = {
    id: '2a34a',
    name: 'Producto 2',
    count: 1,
  };

  const handleLike = () => {
    if (!isAuth) {
      props.history.push('/login');
    }
  };

  const handleAddToCart = (payload) => {
    return dispatch({ type: 'ADD_TO_CART', payload });
  };

  const goToPayment = () => {
    props.history.push(`/payment?items=${item.id}`);
  };

  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
      <main className="content">
        <section className="product">
          <div className="product_galery">
            <p>Galery of products</p>
          </div>
          <div className="product_actions">
            <p>product name</p>
            <p>product selection</p>
            <button type="button" onClick={handleLike}>Like</button>
            <button type="button" onClick={goToPayment}>Pagar</button>
            <button type="button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
          <div className="product_description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam sapiente voluptate unde natus obcaecati quo labore. Aspernatur ullam, voluptatum qui aliquam esse consequuntur minus eum tempora, doloremque a, eveniet quos?
              Vero recusandae minima quae ipsum voluptas voluptates blanditiis explicabo temporibus perferendis odit, iure quasi autem sequi veniam quo numquam adipisci! Doloremque, quam voluptatum? Vitae, voluptas blanditiis esse quaerat nihil ipsum!
              Ad reiciendis obcaecati sit placeat eos, cumque quibusdam fuga ipsam voluptatem excepturi praesentium laborum labore quo hic! Provident harum rerum voluptas minus dolor eveniet labore distinctio accusantium non, placeat perspiciatis.
              Qui incidunt aliquam eum molestiae dolorem aliquid cupiditate inventore saepe corporis nemo nostrum commodi, reiciendis aperiam minima voluptatibus voluptatem nobis quae, dicta optio pariatur voluptates cumque? Sapiente fugiat pariatur reiciendis?
              Velit iure reiciendis voluptates praesentium recusandae laboriosam accusantium culpa fugiat tempore! Aut id voluptatibus cumque dolorum labore? Mollitia iure reiciendis possimus molestiae a, ipsum tenetur, aspernatur ad tempore adipisci odio.
              Nobis inventore iure, saepe quas temporibus facilis quae odit soluta quis earum voluptates consequatur, exercitationem reiciendis? Blanditiis sequi laborum illum, dignissimos ipsam deleniti repellat sed maiores optio odit neque porro.
              Ad nemo assumenda excepturi. Impedit amet architecto exercitationem quo vero natus dicta odio! Odit, deserunt? Ipsam facilis voluptas nostrum, tenetur minima itaque beatae atque accusantium. Sit in magni ipsa qui.
              Alias unde placeat iste recusandae dignissimos inventore, aliquam ipsam nam minima nemo magni magnam sequi laboriosam vero asperiores provident cumque omnis labore totam in incidunt? Eaque saepe inventore voluptate aspernatur?
              Inventore, fuga eius. Impedit provident corrupti illum vero possimus quos repellat eveniet libero, beatae velit nesciunt praesentium labore numquam molestiae quibusdam blanditiis odio tenetur enim, soluta ab non accusantium. Fugiat.
              Fugit laudantium quisquam, excepturi aliquid harum exercitationem dolorum cum facilis sint id quasi perferendis modi voluptates accusamus itaque incidunt eligendi dolorem doloribus laboriosam soluta rem nemo! Atque ratione debitis necessitatibus!
              Modi, dolorem quisquam obcaecati doloribus, perferendis velit, suscipit rem eos maiores iure debitis facere sed quia! Eum quisquam nemo qui sint. Inventore sapiente dicta ut non dolorem provident velit temporibus?
              Est ad iure provident, accusantium rem accusamus eum ea architecto laboriosam officiis culpa perspiciatis voluptatem odit libero! Assumenda soluta nisi molestiae asperiores provident quasi. Ab beatae voluptatum sequi laboriosam ea!
              Officiis aut expedita recusandae hic omnis ratione ullam numquam atque in impedit tempore, voluptatem officia magni soluta maxime id quos obcaecati ipsam ea quae fugit quidem perspiciatis! Optio, alias voluptate!
              Ipsa, nobis tenetur quidem aliquid iste natus quos magni aut hic pariatur ea, quaerat et ut neque quas corrupti. Ad, suscipit reiciendis ipsum earum facere amet totam animi veniam quia!
              Minus accusantium enim praesentium id est impedit hic quo laborum quia voluptates suscipit illo expedita alias eum, ab dolor asperiores? Blanditiis quo sint perspiciatis dicta, nisi error ad quidem aliquam?
              Maiores libero impedit hic iusto, quisquam nisi inventore blanditiis, expedita nam, optio repellendus voluptate vel minima laudantium eum. Cupiditate enim consequatur odit. Dignissimos quod molestiae ipsam temporibus neque, iste doloremque?
              Consequuntur, assumenda. At in tempora ipsa, possimus est maxime iste temporibus quis vero vitae nostrum, earum ullam quas eius delectus sed voluptatem. Eius nesciunt omnis vel nihil obcaecati, aspernatur natus.
              Ratione veritatis sequi facere? Debitis quibusdam magni porro ipsa soluta laborum placeat rem hic neque architecto odit dolorem, itaque dolores consequatur iusto cum sequi nihil nesciunt officia pariatur perferendis minus.
              Veritatis cumque corporis rerum expedita, atque necessitatibus culpa accusantium natus debitis earum repellendus, adipisci velit officia eos voluptates illo, facilis non? Nulla laudantium, nesciunt rerum sint nostrum possimus iure blanditiis!
              Itaque atque molestias ipsa cupiditate, explicabo dolorum alias doloremque sit dignissimos ipsum quaerat, debitis quibusdam autem provident sequi, iste ratione voluptate eum amet officia ex! Reiciendis temporibus magnam fugiat eius.
            </p>
          </div>
        </section>
      </main>
      <nav className="menu_navigation">
        <h2>Menu de Navegación</h2>
      </nav>
    </>
  );
};

export default Product;
