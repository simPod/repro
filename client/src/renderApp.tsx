import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@project/client/App';

export const renderApp = () => {
  const node = document.getElementById('app-holder');
  if (node === null) {
    return;
  }

  const root = createRoot(node);

  root.render(<App />);
};
