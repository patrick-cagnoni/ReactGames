import { useSelector } from 'react-redux'

import Product from '../Product'

import * as S from './styles'

const Content = () => {
  const { products } = useSelector((state) => state.minicart);

  return (
    <S.Wrapper>
      {!!products.length && products.map(({id, name, image, price, quantity}) => (
        <Product 
          key={id} 
          id={id}
          name={name}
          image={image}
          price={price}
          quantity={quantity}
        />
      ))}
    </S.Wrapper>
  );
};

export default Content;
