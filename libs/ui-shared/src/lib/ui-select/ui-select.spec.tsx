import { render } from '@testing-library/react';
import React from 'react';

import { UiSelect } from './ui-select';

describe('UiSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSelect />);
    expect(baseElement).toBeTruthy();
  });
});
