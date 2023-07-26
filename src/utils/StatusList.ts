import {LoanStatus} from '../redux/slices/loanSlice';

type StatusListType = {
  name: string;
  statusCode: LoanStatus;
};

export const StatusList: StatusListType[] = [
  {
    name: 'Application submitted',
    statusCode: LoanStatus.APPLICATION_SUBMITED,
  },
  {
    name: 'Document submitted',
    statusCode: LoanStatus.DOCUMENT_SUBMITED,
  },
  {
    name: 'Document Verification',
    statusCode: LoanStatus.DOCUMENT_VERIFICATION_SUCCESS,
  },
  {
    name: 'Loan Verification',
    statusCode: LoanStatus.LOAN_SUCCESS,
  },
];
