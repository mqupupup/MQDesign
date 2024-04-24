import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Tag from './index';
import Button from "../button";

describe('Tag',() => {
    test('renders Tag', () => {
        render(<Tag>Click me</Tag>);
        const linkElement = screen.getByText(/Click me/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('wheather support onClose', () => {
        const onClose = jest.fn();
        const { container } = render(<Tag closable onClose={onClose}>Tag</Tag>);

        const linkElement = container.querySelector('svg') as unknown as SVGAElement;
        fireEvent.click(linkElement);

        expect(onClose).toBeCalled();
    });


})