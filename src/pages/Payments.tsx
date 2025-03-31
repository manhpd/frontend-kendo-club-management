import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { mockPayments, mockMembers } from '../data/mockData';

const Payments: React.FC = () => {
  const [quarter, setQuarter] = React.useState('Q1');
  const [year, setYear] = React.useState(2024);

  const getMemberName = (memberId: string) => {
    const member = mockMembers.find(m => m.id === memberId);
    return member ? member.name : 'Unknown';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'success';
      case 'pending':
        return 'warning';
      case 'overdue':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Payments
      </Typography>
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Quarter</InputLabel>
          <Select
            value={quarter}
            label="Quarter"
            onChange={(e) => setQuarter(e.target.value)}
          >
            <MenuItem value="Q1">Q1</MenuItem>
            <MenuItem value="Q2">Q2</MenuItem>
            <MenuItem value="Q3">Q3</MenuItem>
            <MenuItem value="Q4">Q4</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Year</InputLabel>
          <Select
            value={year}
            label="Year"
            onChange={(e) => setYear(Number(e.target.value))}
          >
            <MenuItem value={2024}>2024</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Member</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Quarter</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Payment Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{getMemberName(payment.memberId)}</TableCell>
                <TableCell>${payment.amount}</TableCell>
                <TableCell>{payment.quarter}</TableCell>
                <TableCell>{payment.year}</TableCell>
                <TableCell>
                  {payment.paymentDate
                    ? new Date(payment.paymentDate).toLocaleDateString()
                    : 'Not paid'}
                </TableCell>
                <TableCell>
                  <Chip
                    label={payment.status}
                    color={getStatusColor(payment.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Payments; 