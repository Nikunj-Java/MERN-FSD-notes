import { render, screen,cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//it or test: describe test case
//expect: condition that needs to pass
//a matcher: function that is applied to expected condition
//render: the method used to render a given component

//Best method of testing is ScreenShot
//Screenshot , as the name suggest it allows us to save the snapshot of a given component
//it helps a lot when you update or do something and want to compare it with previous one

it('should take a snapshot',()=>{
  const {asFragment}=render(<App/>)
  expect(asFragment(<App/>)).toMatchSnapshot();
})