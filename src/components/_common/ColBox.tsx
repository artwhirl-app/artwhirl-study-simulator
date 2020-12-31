import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';

const ColBox: React.FC<BoxProps> = (props) => {
  return (
    <Box {...props} style={{ display: 'flex', flexDirection: 'column', ...props.style }}>
      {props.children}
    </Box>
  );
};

const memo = React.memo(ColBox);
export { memo as ColBox };
