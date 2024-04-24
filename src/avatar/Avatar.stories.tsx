import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './index';

import { UserOutlined } from '@ant-design/icons';

const meta = {
    title: 'Example/Avatar',
    component: Avatar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'left',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size:'medium',
        shape: 'circle',
        children: 'Avatar',
    },
};

export const Basic = () => {
  return <>
  <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
    <Avatar size={64} icon={<UserOutlined />} />
    <Avatar size="large" icon={<UserOutlined />} />
    <Avatar icon={<UserOutlined />} />
    <Avatar size="small" icon={<UserOutlined />} />
  </div>
  <br/>
  <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
    <Avatar shape="square" size={64} icon={<UserOutlined />} />
    <Avatar shape="square" size="large" icon={<UserOutlined />} />
    <Avatar shape="square" icon={<UserOutlined />} />
    <Avatar shape="square" size="small" icon={<UserOutlined />} />
  </div>
  </>
}

export const Type = () => (
  <>
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    <Avatar src={<img src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </>
);