import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);

  test('should render the component', () => {
    expect(footer.length).toEqual(1);
  });

  test('should render footer title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('should render the snapsot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
