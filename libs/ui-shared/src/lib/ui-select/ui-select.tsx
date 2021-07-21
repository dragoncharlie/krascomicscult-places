import { transparentize } from 'polished';
import React from 'react';
import Select from 'react-select';

interface UiSelectProps {
  options: { value: string; label: string }[];
  width?: string;
  height?: string;
}

const Colors = {
  primary: '#497cff',
};

const customStyles = {
  indicatorSeparator: () => ({}),

  container: (provided, { width, height }) => ({
    ...provided,
    width: width ?? '350px',
    height: height ?? '40px',
  }),

  control: (provided, { isFocused }) => ({
    ...provided,

    border: isFocused ? `2px solid ${Colors.primary}` : '',
    '&:hover': {
      border: `2px solid ${Colors.primary}`,
    },
  }),

  option: (provided, { isSelected }) => ({
    ...provided,
    background: 'white',
    color: isSelected ? `${Colors.primary}` : '#333333',
    '&:hover': {
      background: `${transparentize(0.9, Colors.primary)}`,
    },
  }),

  menu: (provided) => ({
    ...provided,
    border: `2px solid ${Colors.primary}`,
  }),
};

export const UiSelect = ({ options, width }: UiSelectProps) => (
  <Select styles={customStyles} width={width} options={options} />
);
