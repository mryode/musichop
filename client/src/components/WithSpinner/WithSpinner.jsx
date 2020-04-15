import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './WithSpinnerStyles';

const WithSpinner = WrappedComponent => ({ isLoading, ...rest }) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <WrappedComponent {...rest} />
  );

export default WithSpinner;
