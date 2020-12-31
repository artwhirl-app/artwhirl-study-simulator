import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';

const RowBox: React.FC<BoxProps> = (props) => {
  return (
    <Box {...props} style={{ display: 'flex', flexDirection: 'row', ...props.style }}>
      {props.children}
    </Box>
  );
};

const memo = React.memo(RowBox);
export { memo as RowBox };
