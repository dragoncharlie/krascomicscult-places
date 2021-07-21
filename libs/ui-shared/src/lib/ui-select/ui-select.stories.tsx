import { text } from '@storybook/addon-knobs';
import React from 'react';
import { UiSelect } from './ui-select';

export default {
  title: 'Select',
  component: UiSelect,
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const primary = () => (
  <UiSelect width={text('width', '350px')} options={options} />
);
