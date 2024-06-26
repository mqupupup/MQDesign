import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserOutlined } from '@ant-design/icons';

import Input from './index';
import TextArea2 from './TextArea2';
import Button from "../button";

const meta = {
    title: 'Example/Input',
    component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = () => {
  return <Input placeholder="basic usage" defaultValue="abcd" />
}


export const Prefix = () => {
  return <>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </>
}

export const Size = () => {
  return <>
    <Input size="small" placeholder="small" /><br />
    <Input placeholder="small" /><br />
    <Input size="large" placeholder="small" /><br />
  </>
}

export const Control = () => {
  const [value, setValue] = React.useState('')
  return <>
    <Input value={value} onChange={(e: any) => setValue(e.target.value)} /><br />

    <button onClick={() => setValue('set by button')}>set value</button>
  </>
}

const onChange = e => {
  console.log('Change:', e.target.value);
};

export const MaxLength = () => (
  <>
    <Input maxLength={20} onChange={onChange} />
  </>
);

export const TextAreaBasic = () => (
  <>
    <Input.TextArea onChange={onChange} defaultValue="a\nb\nc\nd\ncddd"/>
  </>
);

// export const TextAreaMaxLength = () => (
//   <>
//     <Input.TextArea showCount maxLength={20} onChange={onChange} />
//   </>
// );

const TextArea = Input.TextArea;

export const TextAreaAutoSize = () => (
  <>
    <TextArea placeholder="Autosize height based on content lines" autoSize />
    <div style={{ margin: '24px 0' }} />
    <TextArea
      placeholder="Autosize height with minimum and maximum number of lines"
      autoSize={{ minRows: 2, maxRows: 6 }}
    />
    <div style={{ margin: '24px 0' }} />
    <TextArea
      placeholder="Controlled autosize"
      autoSize={{ minRows: 3, maxRows: 5 }}
    />
  </>
);

export const TextAreaAutoSize2 = () => (
  <>
    <TextArea2 placeholder="Autosize height based on content lines" autoSize />
    <div style={{ margin: '24px 0' }} />
    <TextArea2
      placeholder="Autosize height with minimum and maximum number of lines"
      autoSize={{ minRows: 2, maxRows: 6 }}
    />
    <div style={{ margin: '24px 0' }} />
    <TextArea2
      placeholder="Controlled autosize"
      autoSize={{ minRows: 3, maxRows: 5 }}
    />

  </>
);