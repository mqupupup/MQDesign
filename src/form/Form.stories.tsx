import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Form from './index';
import Input from '../input';
import Button from '../button';
import Checkbox from '../checkbox';
const { Item, Reset } = Form;

const meta = {
  title: 'Example/Form',
  component: Form,
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
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;


export const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [checked, setChecked] = useState(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input, input2, checked)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input value={input} onChange={e => setInput(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.TextArea value={input2} onChange={e => setInput2(e.target.value)} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox
          checked={checked}
          value="checkvalue"
          onChange={(e) => setChecked(e.target.checked)}
        >Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export const Basic: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true, username: 'MQDesign' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: 'Please input your username!' },
          { max: 10, message: 'Must be shorter than 10' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
          <Reset style={{marginLeft: 8}}>Reset</Reset>
          <Reset style={{marginLeft: 8,background:"oldlace"}} resetValue={{password: '123456'}}>fill Value</Reset>
        </div>
      </Form.Item>
    </Form>
  );
};