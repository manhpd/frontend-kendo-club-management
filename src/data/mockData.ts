import { Member, Payment } from '../types';

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    joinDate: '2023-01-15',
    rank: '1st Dan',
    status: 'active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '098-765-4321',
    joinDate: '2023-03-20',
    rank: '2nd Kyu',
    status: 'active'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.j@example.com',
    phone: '555-555-5555',
    joinDate: '2022-11-10',
    rank: '3rd Dan',
    status: 'inactive'
  }
];

export const mockPayments: Payment[] = [
  {
    id: '1',
    memberId: '1',
    amount: 150,
    quarter: 'Q1',
    year: 2024,
    paymentDate: '2024-01-15',
    status: 'paid'
  },
  {
    id: '2',
    memberId: '2',
    amount: 150,
    quarter: 'Q1',
    year: 2024,
    paymentDate: '2024-01-20',
    status: 'paid'
  },
  {
    id: '3',
    memberId: '3',
    amount: 150,
    quarter: 'Q1',
    year: 2024,
    paymentDate: '',
    status: 'overdue'
  }
]; 