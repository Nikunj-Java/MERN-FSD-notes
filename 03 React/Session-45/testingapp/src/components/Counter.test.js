import { fireEvent, render,screen } from "@testing-library/react"
import Counter from "./Counter"


test('Counter component increments count on button click',()=>{
    render(<Counter/>);
    const incremenButton=screen.getByText('Increment');
    const countDisplay=screen.getByText('Count:0');

    //act
    fireEvent.click(incremenButton);

    expect(countDisplay.textContent).toBe('Count:1');
});