import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Select from './index';
import Progress from "../progress";

const { Option } = Select;

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = () => {
  return <>
    <Select style={{width: 120}} defaultValue='Qing'>
      <Option value="Qing">Qing</Option>
      <Option value="Miao">Miao</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="tju">tju</Option>
      <Option value="city">深圳</Option>
    </Select>
  </>
}
