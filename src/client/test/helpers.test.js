import { secondsToDhm, isFutureDate, isDateAfterThatDate, formatDate } from "../js/helpers";

describe("Test: the function 'secondsToDhm()'" , () => {
  test('It should be defined', () => {
      expect(secondsToDhm).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof secondsToDhm).toBe("function");
  });

  test('259,200 seconds should return 3 days', () => {
    expect(secondsToDhm(259200)).toBe(4 + ' days');
  });

  test('60 seconds should return 1 minute', () => {
    expect(secondsToDhm(60)).toBe(1 + ' minute');
  });
});

describe("Test: the function 'isFutureDate()'" , () => {
  test('It should be defined', () => {
      expect(isFutureDate).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof isFutureDate).toBe("function");
  });

  test('Year 2021 should be truthy', () => {
    expect(isFutureDate('2021-01-01')).toBeTruthy;
  });

  test('Year 2018 should be falsy', () => {
    expect(isFutureDate('2018-01-01')).toBeFalsy;
  });
});

describe("Test: the function 'isDateAfterThatDate()'" , () => {
  test('It should be defined', () => {
      expect(isDateAfterThatDate).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof isDateAfterThatDate).toBe("function");
  });

  test('It should be falsy', () => {
    expect(isDateAfterThatDate('2021-01-01', '2018-01-01')).toBeFalsy;
  });

  test('It should be truthy', () => {
    expect(isDateAfterThatDate('2018-01-01', '2021-01-01')).toBeTruthy;
  });
});

describe("Test: the function 'formatDate()'" , () => {
  test('It should be defined', () => {
      expect(formatDate).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof formatDate).toBe("function");
  });

  test('2020-04-01 should return 1 April, 2020', () => {
    expect(formatDate('2020-04-01')).toBe(`01 April, 2020`);
  });

  test('2020-04-01 should not return 1 March, 2020', () => {
    expect(formatDate('2020-04-01')).not.toBe(`1 March, 2020`);
  });
});
