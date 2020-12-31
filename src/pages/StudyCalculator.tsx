import React, { useState } from 'react';
import { CreatePartyForm } from '../components/studyCalculator/CreatePartyForm';
import { SuccessRateTable } from '../components/studyCalculator/SuccessRateTable';
import { RuneSlotRateTable } from '../components/studyCalculator/RuneSlotRateTable';
import { calcSuccessRateMapResult, getSpawnRate, PlusSuccessRateItem, SlotSuccessRateItem } from '../logic/study';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import './StudyCalculator.scss';
import { FormattedMessage } from 'react-intl';

export type StudyPartyParam = { study: number; runePerAdd: number; plusPerAdd: number };

export type CreateTgtRank = 'RANK_1' | 'RANK_1+' | 'RANK_2' | 'RANK_2+' | 'RANK_3' | 'RANK_3+' | 'RANK_4';
const isCreateTgtRank = (v: string): v is CreateTgtRank =>
  ['RANK_1', 'RANK_1+', 'RANK_2', 'RANK_2+', 'RANK_3', 'RANK_3+', 'RANK_4'].includes(v);

export const StudyCalculator: React.FC = () => {
  const [study, setStudy] = useState<StudyPartyParam>({ study: 0, plusPerAdd: 0, runePerAdd: 0 });
  const [tgtRank, setTgtRank] = useState<string>('RANK_4');

  const [result, setResult] = React.useState<{
    plusSuccessRate: PlusSuccessRateItem[];
    runeSlotSuccessRate: SlotSuccessRateItem[];
    sumSuccessRate: number[];
  }>({ plusSuccessRate: [], runeSlotSuccessRate: [], sumSuccessRate: [] });

  React.useEffect(() => {
    if (!isCreateTgtRank(tgtRank)) {
      return;
    }
    setResult(calcSuccessRateMapResult(study, tgtRank));
  }, [study, tgtRank]);

  return (
    <React.Fragment>
      <CreatePartyForm emitStudy={setStudy} emitRank={setTgtRank} />
      <SuccessRateTable plusSuccessRate={result.plusSuccessRate} />
      <RuneSlotRateTable runeSlotSuccessRate={result.runeSlotSuccessRate} />
      <Accordion expanded={true}>
        <AccordionSummary>
          <h4>生成物出現確率</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div className="spawn-table-container">
            <Table className="spawn-table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  {result.plusSuccessRate.map((successRate, key) => (
                    <TableCell key={key}>+{successRate.plus}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <FormattedMessage id="study.spawnTable.rowLabel" values={{ num: 0 }} />
                  </TableCell>
                  {result.plusSuccessRate.map((successRate, index) => (
                    <TableCell key={index}>{getSpawnRate(result, successRate.plus, 0).toFixed(2)}%</TableCell>
                  ))}
                </TableRow>
                {result.runeSlotSuccessRate.map((runeRate) => (
                  <TableRow key={runeRate.slot}>
                    <TableCell>
                      <FormattedMessage id="study.spawnTable.rowLabel" values={{ num: runeRate.slot }} />
                    </TableCell>
                    {result.plusSuccessRate.map((successRate, key) => (
                      <TableCell key={key}>
                        {getSpawnRate(result, successRate.plus, runeRate.slot).toFixed(2)}%
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>合計</TableCell>
                  {result.sumSuccessRate.map((sumRate, key) => (
                    <TableCell key={key}>{sumRate.toFixed(2)}%</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};
