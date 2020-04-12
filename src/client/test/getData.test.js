import { getApiData } from "../js/getData";

describe("Test: the function 'getApiData())'" , () => {
  test('It should be defined', () => {
      expect(getApiData).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof getApiData).toBe("function");
  });
})