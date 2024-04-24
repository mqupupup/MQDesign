import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import  { MessageInner } from './Message';

import message from './index';
import Button from "../button";

const meta = {
  title: 'Example/Message',
  component: MessageInner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*  argTypes: {
      backgroundColor: { control: 'color' },
    },*/
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;


export const MessageInnerDemo = () => {
  return <>
    <MessageInner type="success">Primary MessageInner</MessageInner>
  </>
}

const info = () => {
  message.info('This is a normal message');
};

export const App: React.FC = () => (
  <button onClick={info}>
    Display normal message
  </button>
);
