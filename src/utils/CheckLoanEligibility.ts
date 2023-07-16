export const isEligible = (
  age: string,
  employStatus: boolean,
  monthlyPay: number,
  loanAmount: number,
  repaymentPeriod: number,
): boolean => {
  const ageInt = parseInt(age);
  const loanAmountValid = loanAmount <= monthlyPay;

  if (ageInt >= 18 && employStatus && loanAmountValid && repaymentPeriod < 12) {
    return true;
  }
  return false;
};
