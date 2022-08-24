import React from 'react';
import { mount, shallow } from 'enzyme';

import ProductMock from '../../__mocks__/ProductMock';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('should render Product component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });

  test('should handle buy click event', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
