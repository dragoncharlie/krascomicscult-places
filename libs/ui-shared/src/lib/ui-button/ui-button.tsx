import React from 'react';
import tw from 'tailwind-styled-components';

interface ButtonUiProps {
  label?: string;
  width?: string;
  height?: string;
  background?: string;
  disabled?: boolean;
}

const StyledUiButton = tw.button<ButtonUiProps>`
  text-background
  bg-accent
  rounded
  duration-300
  pl-4
  pr-4
  h-8
  text-sm
  font-medium

  hover:bg-accent-hover
  focus:bg-accent-focus

  dark:bg-dark-accent
  dark:hover:bg-dark-accent-hover
  dark:focus:bg-dark-accent-focus
`;

export const UiButton = ({
  label,
  disabled,
  width,
  height,
  background,
}: ButtonUiProps) => (
  <StyledUiButton
    disabled={disabled}
    width={width}
    height={height}
    background={background}
  >
    {label ?? 'Click me'}
  </StyledUiButton>
);
