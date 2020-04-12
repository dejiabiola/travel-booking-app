import { validateForm } from "../js/formValidation";

describe("Test: the function 'validateForm())'" , () => {
  test('It should be defined', () => {
      expect(validateForm).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof validateForm).toBe("function");
  });
})