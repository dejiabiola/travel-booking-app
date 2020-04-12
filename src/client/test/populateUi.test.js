import { populateUi } from "../js/populateUi";

describe("Test: the function 'populateUi())'" , () => {
  test('It should be defined', () => {
      expect(populateUi).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof populateUi).toBe("function");
  });
})