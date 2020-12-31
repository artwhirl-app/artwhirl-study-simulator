import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import { SlotSuccessRateItem } from '../../logic/study';
import { FormattedMessage } from 'react-intl';
import './RuneSlotRateTable.scss';

export const RuneSlotRateTable: React.FC<{ runeSlotSuccessRate: SlotSuccessRateItem[] }> = ({
  runeSlotSuccessRate,
}) => {
  return (
    <React.Fragment>
      <h4>ルーンスロット発生率</h4>
      <Table className="rune-slot-rate-table">
        <TableHead>
          <TableRow>
            {runeSlotSuccessRate.map((successRate, key) => (
              <TableCell key={key}>
                <FormattedMessage id="study.runeSlotRateTable.header" values={{ num: successRate.slot }} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {runeSlotSuccessRate.map((successRate, key) => (
              <TableCell key={key}>{Math.floor(successRate.successRate)}%</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
