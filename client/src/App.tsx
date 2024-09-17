import React from 'react';

import { Switch } from '@nextui-org/switch';
import { NextUIProvider } from '@nextui-org/system';

export const App: React.FC = () => (
  <React.StrictMode>
    <NextUIProvider>
      <Switch onValueChange={() => {}} />
    </NextUIProvider>
  </React.StrictMode>
);
