type Emi = {
  emi: number;
  totalOfEmi: number;
  totalPayment: number;
};

export const getEMIInstalmentAmount = (
  principleAmount: number,
  rateOfIntrest: number,
  time: number,
): Emi => {
  const intrestMonthly = rateOfIntrest / 12 / 100;
  const timeInMonths = time * 12;

  const emi =
    (principleAmount *
      intrestMonthly *
      Math.pow(1 + intrestMonthly, timeInMonths)) /
    (Math.pow(intrestMonthly + 1, timeInMonths) - 1);

  const totalEmi = emi * timeInMonths - principleAmount;
  const totalPay = totalEmi + principleAmount;

  return {
    emi: Math.round(emi),
    totalOfEmi: Math.round(totalEmi),
    totalPayment: Math.round(totalPay),
  };
};
