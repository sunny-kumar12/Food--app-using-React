import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  'h1',
  { id: 'parent', style: { color: 'red' } },
  'Hello world from react'
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);