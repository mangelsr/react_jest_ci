import ProductMock from '../../__mocks__/ProductMock';
import reducer from '../../reducers';

describe('Reducers tests', () => {
  test('should return initial state', () => {
    const initalState = {};
    expect(reducer(initalState, '')).toEqual(initalState) ;
  });

  test('should handle ADD_TO_CART action', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('should handle REMOVE_FROM_CART action', () => {
    const initialState = {
      cart: [ProductMock],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expected = {
      cart: [],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

});
