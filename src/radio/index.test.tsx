import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Radio from './index';

describe('Radio',() => {
    test('renders Radio', () => {
        render(<Radio>Click me</Radio>);
        const linkElement = screen.getByText(/Click me/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('wheather support onchange', () => {
        const onChange = jest.fn();
        render(<Radio onChange={onChange}>Click me</Radio>);
        const linkElement = screen.getByText(/Click me/i);
        fireEvent.click(linkElement);

        expect(onChange).toBeCalled();
    });

    test('wheather support underControl', () => {
        const onChange = jest.fn();
        render(<Radio onChange={onChange}>Click me</Radio>);
        const linkElement = screen.getByText(/Click me/i);
        fireEvent.click(linkElement);

        expect(onChange).toBeCalledTimes(1);
    });

/**
    test('renders Primary Radio', () => {
        const {container} = render(<Radio type={"primary"}>Click me</Radio>);
        // const linkElement = screen.getByText(/Click me/i);
        expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
    });

    test('renders Medium Radio', () => {
        const {container} = render(<Radio size="medium">Click me</Radio>);
        // const linkElement = screen.getByText(/Click me/i);
        expect(container.querySelector('.ant-btn-medium')).toBeInTheDocument();
    });

    test('renders Normal Radio', () => {
        const {container} = render(<Radio type={"normal"}>Click me</Radio>);
        expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
    });

    test('wheather support click', () => {
        const onClick = jest.fn();
        render(<Radio type={"primary"} onClick={onClick}>Click me</Radio>);
        const linkElement = screen.getByText(/Click me/i);
        fireEvent.click(linkElement);

        expect(onClick).toBeCalled();
    });
**/
})
