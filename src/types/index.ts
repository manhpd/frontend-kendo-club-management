export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  rank: string;
  status: 'active' | 'inactive';
}

export interface Payment {
  id: string;
  memberId: string;
  amount: number;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  year: number;
  paymentDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

export interface MemberWithPayments extends Member {
  payments: Payment[];
} 