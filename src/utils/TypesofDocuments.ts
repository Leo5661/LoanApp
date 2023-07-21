export type VerificationDoc = {
  name: string;
  types: string;
  icon: string;
};

export const DocList: VerificationDoc[] = [
  {
    name: 'Proof of Identity',
    types: 'Passport / Aadhar / Voter-Id',
    icon: 'address-card',
  },
  {
    name: 'Proof of Income',
    types: 'Job Offer / contracts',
    icon: 'file-contract',
  },
  {
    name: 'Bank Statements',
    types: 'Monthly Income Slip / Bank statment',
    icon: 'coins',
  },
];
