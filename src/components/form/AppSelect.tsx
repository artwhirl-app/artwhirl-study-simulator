import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select, { SelectProps } from '@material-ui/core/Select';

export const AppSelect = React.memo(AppSelectComponent);
export type SelectOption<V = number | string> = {
  label: string;
  value: V;
  selected?: boolean;
};
type AppSelectProps = {
  formControlProps?: Partial<FormControlProps>;
  label: string;
  name: string;
  value?: string | number;
  options: Array<SelectOption>;
  onChange: SelectProps['onChange'];
  withoutNoSelectOption?: boolean;
};
/**
 * Select要素
 * @param props
 * @constructor
 */
function AppSelectComponent(props: AppSelectProps): JSX.Element {
  return (
    <FormControl {...props.formControlProps}>
      <InputLabel>{props.label}</InputLabel>
      <Select name={props.name} value={props.value || ''} onChange={props.onChange} label={props.label}>
        {props.withoutNoSelectOption ? null : (
          <MenuItem value="">
            <em>未選択</em>
          </MenuItem>
        )}
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
