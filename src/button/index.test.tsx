import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Button from './index';

describe('Button',() => {
    test('renders Button', () => {
        render(<Button>Click me</Button>);
        const linkElement = screen.getByText(/Click me/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Primary Button', () => {
        const {container} = render(<Button type={"primary"}>Click me</Button>);
        // const linkElement = screen.getByText(/Click me/i);
        expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
    });

    test('renders Medium Button', () => {
        const {container} = render(<Button size="medium">Click me</Button>);
        // const linkElement = screen.getByText(/Click me/i);
        expect(container.querySelector('.ant-btn-medium')).toBeInTheDocument();
    });

    test('renders Normal Button', () => {
        const {container} = render(<Button type={"normal"}>Click me</Button>);
        expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
    });

    test('wheather support click', () => {
        const onClick = jest.fn();
        render(<Button type={"primary"} onClick={onClick}>Click me</Button>);
        const linkElement = screen.getByText(/Click me/i);
        fireEvent.click(linkElement);

        expect(onClick).toBeCalled();
    });

    test('wheather support oBlur', () => {
        const onBlur =  jest.fn();
        render(<Button type={"primary"} onBlur={onBlur}>Click me</Button>);

        const linkElement = screen.getByText(/Click me/i);
        fireEvent.click(linkElement);
        fireEvent.blur(linkElement);

        expect(onBlur).toBeCalled();
    });

    test('wheather support focus', () => {
        const onFocus =  jest.fn();
        render(<Button type={"primary"} onFocus={onFocus}>Click me</Button>);


        const linkElement = screen.getByText(/Click me/i);
        fireEvent.focus(linkElement);

        expect(onFocus).toBeCalled();
    });
})
