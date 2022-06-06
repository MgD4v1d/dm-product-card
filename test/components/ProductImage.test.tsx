import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('Pruebas en <ProductImage />', () => {

    test('debe de mostrar el componente con la url por argumento en la imagen', () => {
        
        const wrapper = renderer.create(
            <ProductImage  img="../../src/assets/no-image.jpg"/>
        );


        expect(wrapper.toJSON()).toMatchSnapshot();

    });


    test('debe de mostrar el componente con la imagen del producto', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () =>(
                        <ProductImage />
                    )
                }
            </ProductCard>
        );


        expect(wrapper.toJSON()).toMatchSnapshot();

    });

})