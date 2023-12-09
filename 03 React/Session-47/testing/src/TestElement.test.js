import { render, cleanup } from '@testing-library/react';
import  React from 'react';
import TestElements from './TestElement';

afterEach(cleanup)
it('should equal to 0',()=>{
  const {getByTestId}=render(<TestElements/>)
  expect(getByTestId('counter')).toHaveTextContent(0);
});