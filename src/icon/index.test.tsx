import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Icon from './index';
import Button from "../button";

describe('Icon',() => {
    test('renders Icon', () => {
        const { container } = render(<Icon type="fixed"/>);
        expect(container.querySelector('svg')).toBeInTheDocument();
    });

    test('custom className', () => {
        const { container } = render(<Icon type="fixed" className = "custom" />) ;
        expect(container.querySelector('.custom')).toBeInTheDocument();
    });

    test('wheather support click', () => {
        const onClick = jest.fn();
        const {container} = render(<Icon type={"fixed"} onClick={onClick} />);
        const linkElement = container.querySelector('svg') as unknown as SVGAElement;
        fireEvent.click(linkElement);

        expect(onClick).toBeCalled();
    });


})
