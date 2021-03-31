import {calculatePaymentArray, getNumberEnd} from "./utils";

describe(`Utils work correctly`, () => {
  test(`calculatePaymentArray util work correctly with correct data`, () => {
    const salary = 50000;
    const expectedValue = [78000, 78000, 78000, 26000];
    expect(calculatePaymentArray(salary)).toEqual(expectedValue);
  });
  test(`calculatePaymentArray util work correctly with uncorrect data`, () => {
    const salary = `fakeData`;
    const expectedValue = [];
    expect(calculatePaymentArray(salary)).toEqual(expectedValue);
  });
  test(`getNumberEnd util work correctly with uncorrect data`, () => {
    const number = `fakeData`;
    const expectedValue = ``;
    expect(getNumberEnd(number)).toEqual(expectedValue);
  });
  test(`getNumberEnd util work correctly with correct data (1)`, () => {
    const number = `1`;
    const expectedValue = `ый`;
    expect(getNumberEnd(number)).toEqual(expectedValue);
  });
  test(`getNumberEnd util work correctly with correct data (2)`, () => {
    const number = `2`;
    const expectedValue = `ой`;
    expect(getNumberEnd(number)).toEqual(expectedValue);
  });
  test(`getNumberEnd util work correctly with correct data (0)`, () => {
    const number = `0`;
    const expectedValue = ``;
    expect(getNumberEnd(number)).toEqual(expectedValue);
  });
  test(`getNumberEnd util work correctly with correct data (3)`, () => {
    const number = `3`;
    const expectedValue = `ий`;
    expect(getNumberEnd(number)).toEqual(expectedValue);
  });
});
