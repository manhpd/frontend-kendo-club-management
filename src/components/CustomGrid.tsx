import React from 'react';
import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

interface CustomGridProps extends MuiGridProps {
  children: React.ReactNode;
}

const Grid: React.FC<CustomGridProps> = ({ children, ...props }) => {
  return <MuiGrid {...props}>{children}</MuiGrid>;
};

export default Grid; 