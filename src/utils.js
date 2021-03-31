import { MAX_PROPERTY_COST, VAT } from "./const";

export const calculatePaymentArray = (salary) => {
  const paymentArray = [];
  const yearSalary = salary * 12;
  const yearTax = Math.floor(yearSalary * VAT / 100);
  let taxDeduction = MAX_PROPERTY_COST * VAT / 100;

  while (taxDeduction > 0) {
  const sum = (taxDeduction > yearTax) ? yearTax : taxDeduction;
  paymentArray.push(sum)
  taxDeduction -= yearTax;
  }

  return paymentArray
}

export const getNumberEnd = (number) => {
  const numberEnd = (number) => {
    let end = ``;
    const lastNumber = number.toString();
    if (lastNumber.endsWith(`3`)) {
      end = `ий`
    } else if (lastNumber.endsWith(`2`) || lastNumber.endsWith(`6`) || lastNumber.endsWith(`7`) || lastNumber.endsWith(`8`)) {
      end = `ой`;
    } else {
      end = `ый`;
    }
  return end;
  }

  return (number > 10 && number < 20) ? `ый` : numberEnd(number);
}

export const calculateExp = (year) => {
  return year === 2 ? `во ${year}-${getNumberEnd(year)} год` : `в ${year}-${getNumberEnd(year)} год`
}
