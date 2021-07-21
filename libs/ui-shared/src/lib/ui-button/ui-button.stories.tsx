import { text, boolean } from '@storybook/addon-knobs';
import React from 'react';
import { UiButton } from './ui-button';

export default {
  title: 'Button',
  component: UiButton,
};

export const primary = () => (
  <UiButton
    label={text('label', 'button')}
    width={text('width', '350px')}
    height={text('height', '40px')}
    background={text('background', '#497cff')}
    disabled={boolean('disabled', false)}
  />
);
