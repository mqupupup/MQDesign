import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Progress from './index';

describe('Progress',() => {
    test('renders Progress', () => {
        render(<Progress>Click me</Progress>);
        const linkElement = screen.getByText(/Click me/i);
        expect(linkElement).toBeInTheDocument();
    });

/**
    test('renders Primary Progress', () => {
        const {container} = render(<Progress type={"primary"}>Click me</Progress>);
        // const linkElement = screen.getByText(/Click me/i);
        expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
    });

    test('renders Medium Progress', () => {
        const {container} = render(<Progress size="medium">Click me</Progress>);
        // const linkElement = screen.getByText(/Click me/i);
        expect(container.querySelector('.ant-btn-medium')).toBeInTheDocument();
    });

    test('renders Normal Progress', () => {
        const {container} = render(<Progress type={"normal"}>Click me</Progress>);
        expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
    });

    test('wheather support click', () => {
        const onClick = jest.fn();
        render(<Progress type={"primary"} onClick={onClick}>Click me</Progress>);
        const linkElement = screen.getByText(/Click me/i);
        fireEvent.click(linkElement);

        expect(onClick).toBeCalled();
    });
**/
})
