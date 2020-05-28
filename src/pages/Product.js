import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDescription from '../components/ProductDescription';
import ProductSlider from '../containers/ProductSlider';
import ProductActions from '../components/ProductActions';
import '../assets/styles/pages/product.scss';

const Product = () => {
  return (
    <>
      <Header type="leftIcons">Producto</Header>
      <main className="content">
        <section className="product">
          <div className="product_galery">
            <ProductSlider />
          </div>
          <div className="product_actions">
            <ProductActions />
          </div>
          <div className="product_description">
            <ProductDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam sapiente voluptate unde natus obcaecati quo labore. Aspernatur ullam, voluptatum qui aliquam esse consequuntur minus eum tempora, doloremque a, eveniet quos?
              Vero recusandae minima quae ipsum voluptas voluptates blanditiis explicabo temporibus perferendis odit, iure quasi autem sequi veniam quo numquam adipisci! Doloremque, quam voluptatum? Vitae, voluptas blanditiis esse quaerat nihil ipsum!
              Ad reiciendis obcaecati sit placeat eos, cumque quibusdam fuga ipsam voluptatem excepturi praesentium laborum labore quo hic! Provident harum rerum voluptas minus dolor eveniet labore distinctio accusantium non, placeat perspiciatis.
              Qui incidunt aliquam eum molestiae dolorem aliquid cupiditate inventore saepe corporis nemo nostrum commodi, reiciendis aperiam minima voluptatibus voluptatem nobis quae, dicta optio pariatur voluptates cumque? Sapiente fugiat pariatur reiciendis?
              Velit iure reiciendis voluptates praesentium recusandae laboriosam accusantium culpa fugiat tempore! Aut id voluptatibus cumque dolorum labore? Mollitia iure reiciendis possimus molestiae a, ipsum tenetur, aspernatur ad tempore adipisci odio.
              Nobis inventore iure, saepe quas temporibus facilis quae odit soluta quis earum voluptates consequatur, exercitationem reiciendis? Blanditiis sequi laborum illum, dignissimos ipsam deleniti repellat sed maiores optio odit neque porro.
              Ad nemo assumenda excepturi. Impedit amet architecto exercitationem quo vero natus dicta odio! Odit, deserunt? Ipsam facilis voluptas nostrum, tenetur minima itaque beatae atque accusantium. Sit in magni ipsa qui.
              Alias unde placeat iste recusandae dignissimos inventore, aliquam ipsam nam minima nemo magni magnam sequi laboriosam vero asperiores provident cumque omnis labore totam in incidunt? Eaque saepe inventore voluptate aspernatur?
              Inventore, fuga eius. Impedit provident corrupti illum vero possimus quos repellat eveniet libero, beatae velit nesciunt praesentium labore numquam molestiae quibusdam blanditiis odio tenetur enim, soluta ab non accusantium. Fugiat.
            </ProductDescription>
          </div>
        </section>
      </main>
      <Footer icons />
    </>
  );
};

export default Product;
