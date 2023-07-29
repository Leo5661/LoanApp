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
    navRoute: 'AddBank',
    onPress: () => {
      console.log('Add payment account clicked');
    },
  },
  {
    icon: 'tachometer-alt',
    name: 'Loan Status',
    navRoute: 'Status',
    onPress: () => {
      console.log('Status Screen clicked');
    },
  },
];
