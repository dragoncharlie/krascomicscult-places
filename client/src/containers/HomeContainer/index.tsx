import * as React from 'react';

export interface Props {
  name?: string;
  priority?: boolean
}

const HomeContainer: React.FC<Props> = () => (
  <div>
    Home
  </div>
);

export default HomeContainer;
