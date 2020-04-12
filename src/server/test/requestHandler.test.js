import { getCoordinates, getWeather, getImage, getCountryDetail } from '../requestHandler';


describe("Test: the function 'getCoordinates()'" , () => {
  test('It should be defined', () => {
      expect(getCoordinates).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof getCoordinates).toBe("function");
  });

});

describe("Test: the function 'getWeather()'" , () => {
  test('It should be defined', () => {
      expect(getWeather).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof getWeather).toBe("function");
  });
});

describe("Test: the function 'getImage()'" , () => {
  test('It should be defined', () => {
      expect(getImage).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof getImage).toBe("function");
  });
});

describe("Test: the function 'getCountryDetail()'" , () => {
  test('It should be defined', () => {
      expect(getCountryDetail).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof getCountryDetail).toBe("function");
  });
});