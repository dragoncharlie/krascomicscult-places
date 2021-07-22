import React from 'react';
import tw from 'tailwind-styled-components';
import { UiButton } from '@kcc/ui-shared';

const RedText = tw.p`
  text-error
  text-xl
  font-bold
`;

export const App = () => {
  /*
   * Replace the elements below with your own.
   */
  return (
    <main className="app">
      <RedText>Comics</RedText>
      <UiButton />
    </main>
  );
};
