import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Affix from './index';

describe('Affix',() => {
    test('renders Affix', () => {
        render(<Affix>Click me</Affix>);
        const linkElement = screen.getByText(/Click me/i);
        expect(linkElement).toBeInTheDocument();
    });

/**
    test('renders Primary Affix', () => {
        const {container} = render(<Affix type={"primary"}>Click me</Affix>);
        // const linkElement = screen.getByText(/Click me/i);
        expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
    });

    test('renders Medium Affix', () => {
        const {container} = render(<Affix size="medium">Click me</Affix>);
        // const linkElement = screen.getByText(/Click me/i);
        expect(container.querySelector('.ant-btn-medium')).toBeInTheDocument();
    });

    test('renders Normal Affix', () => {
        const {container} = render(<Affix type={"normal"}>Click me</Affix>);
        expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
    });

    test('wheather support click', () => {
        const onClick = jest.fn();
        render(<Affix type={"primary"} onClick={onClick}>Click me</Affix>);
        const linkElement = screen.getByText(/Click me/i);
        fireEvent.click(linkElement);

        expect(onClick).toBeCalled();
    });
**/
})
