import React, { Fragment } from 'react';
import { Container, CssBaseline } from '@material-ui/core';

export const AppFrame = React.memo(AppFrameComponent);

/**
 * 大枠
 * @constructor
 */
function AppFrameComponent(props: { children: JSX.Element }) {
  return (
    <Fragment>
      <CssBaseline />
      <main
        style={{
          height: '96vh',
          backgroundBlendMode: 'lighten',
          backgroundColor: 'rgba(255,255,255,0.5)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: 'auto',
        }}
      >
        <Container maxWidth="xl">{props.children}</Container>
      </main>
    </Fragment>
  );
}
