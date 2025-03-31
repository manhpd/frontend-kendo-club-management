import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import Grid from '../components/CustomGrid';
import { mockMembers, mockPayments } from '../data/mockData';

const Dashboard: React.FC = () => {
  const totalMembers = mockMembers.length;
  const activeMembers = mockMembers.filter(member => member.status === 'active').length;
  const totalPayments = mockPayments.reduce((sum, payment) => sum + payment.amount, 0);
  const pendingPayments = mockPayments.filter(payment => payment.status === 'pending').length;

  const stats = [
    { title: 'Total Members', value: totalMembers, color: '#1976d2' },
    { title: 'Active Members', value: activeMembers, color: '#2e7d32' },
    { title: 'Total Payments', value: `$${totalPayments}`, color: '#ed6c02' },
    { title: 'Pending Payments', value: pendingPayments, color: '#d32f2f' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                backgroundColor: stat.color,
                color: 'white',
              }}
            >
              <Typography component="h2" variant="h6" gutterBottom>
                {stat.title}
              </Typography>
              <Typography component="p" variant="h4">
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard; 