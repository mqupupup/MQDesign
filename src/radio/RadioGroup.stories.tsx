import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio from './index';
import RadioGroup from "./RadioGroup";

const meta = {
    title: 'Example/RadioGroup',
    component: RadioGroup,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta <typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;



export const UnderControl = () => {
    return <RadioGroup value="3">
        <Radio value="1" key="1" >选项1</Radio>
        <Radio value="2" key="2" >选项2</Radio>
        <Radio value="3" key="3" >选项3</Radio>,
    </RadioGroup>
}

// export const Disabled = () => {
//   return <>
//     <Radio disabled> Radio</Radio>
//   </>
// }