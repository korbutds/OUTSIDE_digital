import {MAX_PROPERTY_COST, VAT} from "./const";

export const calculatePaymentArray = (monthSalary) => {
  const salary = Number(monthSalary);
  if (salary) {
    const paymentArray = [];
    const yearSalary = salary * 12;
    const yearTax = Math.floor(yearSalary * VAT / 100);
    let taxDeduction = MAX_PROPERTY_COST * VAT / 100;

    while (taxDeduction > 0) {
      const sum = (taxDeduction > yearTax) ? yearTax : taxDeduction;
      paymentArray.push(sum);
      taxDeduction -= yearTax;
    }

    return paymentArray;
  }
  return [];
};

export const getNumberEnd = (number) => {
  const validNumber = !!Number(number);
  const numberStr = number.toString();
  if (validNumber) {
    if (number > 10 && number < 20) {
      return `ый`;
    } else if (numberStr.endsWith(`3`)) {
      return `ий`;
    } else if (numberStr.endsWith(`2`) || numberStr.endsWith(`6`) || numberStr.endsWith(`7`) || numberStr.endsWith(`8`)) {
      return `ой`;
    } else {
      return `ый`;
    }
  }
  return ``;
};

export const calculateExp = (year) => {
  return year === 2 ? `во ${year}-${getNumberEnd(year)} год` : `в ${year}-${getNumberEnd(year)} год`;
};

export const getThousandthSpace = (number) => {
  const numberStr = number.toString();
  let result = ``;
  switch (numberStr.length) {
    case 1:
    case 2:
    case 3:
      result = numberStr;
      break;
    case 4:
      result = numberStr.slice(0, 1) + ` ` + numberStr.slice(1);
      break;
    case 5:
      result = numberStr.slice(0, 2) + ` ` + numberStr.slice(2);
      break;
    case 6:
      result = numberStr.slice(0, 3) + ` ` + numberStr.slice(3);
      break;
  }
  return result;
};
