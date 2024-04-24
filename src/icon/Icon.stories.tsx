import type { Meta, StoryObj } from '@storybook/react';

import Icon from './index';

// More on how to set up button at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing button with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type:'fixed',
  },
};

export const Copy = () => {
 return <Icon type = "copy" />
};

export const Close = () => {
  return <Icon type = "close" />
};


