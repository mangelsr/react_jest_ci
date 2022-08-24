
import getData from '../../utils/getData';

describe('getData tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should call api and return the data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    const url = 'https://google.com';
    getData(url)
      .then(response => expect(response.data).toEqual('12345'));
    expect(fetch.mock.calls[0][0]).toEqual(url);
  });

});
