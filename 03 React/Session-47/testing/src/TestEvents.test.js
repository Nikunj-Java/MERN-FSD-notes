import { render, cleanup, fireEvent } from '@testing-library/react';
import  React from 'react';
import TestEvent from './TestEvent';
afterEach(cleanup);

it('increments counter',()=>{
    const {getByTestId}=render(<TestEvent/>);
    fireEvent.click(getByTestId('button-up'));

    expect(getByTestId('counter')).toHaveTextContent('1');

});

it('decrements counter',()=>{
    const {getByTestId}=render(<TestEvent/>);
    fireEvent.click(getByTestId('button-down'));

    expect(getByTestId('counter')).toHaveTextContent('-1');

});


 
