import { TextFieldProps } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type AppFormTextFieldProps = TextFieldProps & {
  name: string;
};
const AppFormTextField: React.FC<AppFormTextFieldProps> = (props) => {
  const { errors, register } = useFormContext();

  return (
    <TextField error={!!errors[props.name]} helperText={errors[props.name]?.message} inputRef={register} {...props} />
  );
};

const memo = React.memo(AppFormTextField);
export { memo as AppFormTextField };
