import React, { useState } from 'react';
import { AppSelect, SelectOption } from '../form/AppSelect';
import { CreateTgtRank, StudyPartyParam } from '../../pages/StudyCalculator';
import './CreatePartyForm.scss';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { SelectProps } from '@material-ui/core/Select';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const rankList: SelectOption<CreateTgtRank>[] = [
  { label: 'ランク1', value: 'RANK_1' },
  { label: 'ランク1+', value: 'RANK_1+' },
  { label: 'ランク2', value: 'RANK_2' },
  { label: 'ランク2+', value: 'RANK_2+' },
  { label: 'ランク3', value: 'RANK_3' },
  { label: 'ランク3+', value: 'RANK_3+' },
  { label: 'ランク4', value: 'RANK_4' },
];

export const CreatePartyForm: React.FC<{
  emitStudy: (newStudy: StudyPartyParam) => void;
  emitRank: (newRank: string) => void;
}> = ({ emitStudy, emitRank }) => {
  const [study, setStudy] = useState<StudyPartyParam>({
    study: 0,
    plusPerAdd: 0,
    runePerAdd: 0,
  });
  const [tgtRank, setTgtRank] = useState<string>('RANK_4');

  const handleTextOnChange: TextFieldProps['onChange'] = (e) => {
    setStudy({ ...study, [e.target.name]: +e.target.value });
    emitStudy({ ...study, [e.target.name]: +e.target.value });
  };
  const handleSelectOnChange: SelectProps['onChange'] = (e) => {
    typeof e.target.value === 'string' && setTgtRank(e.target.value);
    typeof e.target.value === 'string' && emitRank(e.target.value);
  };
  return (
    <Accordion expanded={true}>
      <AccordionSummary>
        <h4>研究設定</h4>
      </AccordionSummary>
      <AccordionDetails>
        <div className="create-party-form">
          <TextField
            label="研究力"
            className="study"
            name="study"
            type={'number'}
            onChange={handleTextOnChange}
            value={study.study}
          />
          <AppSelect
            formControlProps={{
              className: 'tgtRank',
            }}
            name={'tgtRank'}
            label={'作成装備ランク'}
            options={rankList}
            value={tgtRank}
            onChange={handleSelectOnChange}
          />
          <TextField
            label="プラス補正(%)"
            className="plusPerAdd"
            name="plusPerAdd"
            type={'number'}
            onChange={handleTextOnChange}
            value={study.plusPerAdd}
          />
          <TextField
            label="ルーン発生率補正(%)"
            className="runePerAdd"
            name="runePerAdd"
            type={'number'}
            onChange={handleTextOnChange}
            value={study.runePerAdd}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
