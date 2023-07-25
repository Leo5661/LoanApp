export const isFormValid = (
  fname: string,
  age: string,
  phone: string,
  address: string,
  typeofJob: string,
  companyName: string,
  position: string,
  monthlyPay: number,
  loanAmount: number,
  repaymentTime: number,
): boolean => {
  const isDataValid =
    fname.length != 0 &&
    age.length != 0 &&
    phone.length != 0 &&
    address.length != 0 &&
    typeofJob.length != 0 &&
    companyName.length != 0 &&
    position.length != 0 &&
    monthlyPay > 0 &&
    loanAmount > 0 &&
    repaymentTime > 0;

  if (isDataValid) {
    return true;
  }
  return false;
};
