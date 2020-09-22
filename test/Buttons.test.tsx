import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Button from '../src/Components/Button'

let container = null

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('render button with children', () => {

    const onClick = jest.fn()

    act(() => {
        render(<Button onClick={onClick} >Click</Button>, container)
    })

    const button = document.querySelector(".button");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });



    expect(container.textContent).toBe('Click')    
    expect(onClick).toHaveBeenCalledTimes(1);
})

