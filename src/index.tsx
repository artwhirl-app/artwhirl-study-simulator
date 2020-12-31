import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.process = { cwd: () => '' }; // for raw-loader

ReactDOM.render(<App />, document.getElementById('root'));
