import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import React, { useState } from 'react';
import { SlotSuccessRateItem } from '../../logic/study';
import { FormattedMessage } from 'react-intl';
import './RuneSlotRateTable.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const RuneSlotRateTable: React.FC<{ runeSlotSuccessRate: SlotSuccessRateItem[] }> = ({
  runeSlotSuccessRate,
}) => {
  const [expand, setExpand] = useState(true);
  return (
    <Accordion expanded={expand}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={() => setExpand(!expand)}>
        <h4>ルーンスロット発生率</h4>
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
};
