import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import React, { useState } from 'react';
import { PlusSuccessRateItem } from '../../logic/study';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const SuccessRateTable: React.FC<{ plusSuccessRate: PlusSuccessRateItem[] }> = ({ plusSuccessRate }) => {
  const [expand, setExpand] = useState(true);
  return (
    <Accordion expanded={expand} className="success-rate-table-root">
      <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={() => setExpand(!expand)}>
        <h4>成功率</h4>
      </AccordionSummary>
      <AccordionDetails>
        <div className="success-rate-table-container table-container">
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
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
