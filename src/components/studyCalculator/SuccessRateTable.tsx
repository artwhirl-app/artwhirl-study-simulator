import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import { PlusSuccessRateItem } from '../../logic/study';

export const SuccessRateTable: React.FC<{ plusSuccessRate: PlusSuccessRateItem[] }> = ({ plusSuccessRate }) => {
  return (
    <React.Fragment>
      <h4>成功率</h4>
      <Table>
        <TableHead>
          <TableRow>
            {plusSuccessRate.map((successRate, key) => (
              <TableCell key={key}>+{successRate.plus}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {plusSuccessRate.map((successRate, key) => (
              <TableCell key={key}>{Math.floor(successRate.successRate)}%</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
