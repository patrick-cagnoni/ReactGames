import { useSelector } from 'react-redux'

import { Container } from '@material-ui/core'

import  OrderBy from '../OrderBy'
import Product from '../Product'

import * as S from './styles'

const Products = () => {
    const { products } = useSelector((state) => state.products);

    return (
        <S.Wrapper>
            <Container>
                <S.Title>Games</S.Title>
                <OrderBy />
                <S.Shelf>
                    {products.map(({id,image, name, price, score}) => (
                        <Product 
                            key={id}
                            id={id}
                            image={image}
                            name={name}
                            price={price}
                            score={score}
                        />
                    ))}
                </S.Shelf>
            </Container>
        </S.Wrapper>
    )
}

export default Products