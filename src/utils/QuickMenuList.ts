export type QuickMenuListType = {
  icon: string;
  name: string;
  navRoute: any;
  onPress: Function;
};

export const QuickMenuList: QuickMenuListType[] = [
  {
    icon: 'hand-holding-usd',
    name: 'Apply Loan',
    navRoute: 'ApplyLoan',
    onPress: () => {
      console.log('Apply for Loan clicked');
    },
  },
  {
    icon: 'credit-card',
    name: 'Add account',
    navRoute: 'Status',
    onPress: () => {
      console.log('Add payment account clicked');
    },
  },
  {
    icon: 'cubes',
    name: 'Loan Packages',
    navRoute: 'LoanPackage',
    onPress: () => {
      console.log('Loan Packages clicked');
    },
  },
];
