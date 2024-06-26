import React, {useState} from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import Switch from './index';
import Button from '../button/index';

const meta = {
    title: 'Example/Switch',
    component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

export const Basic: React.FC = () => <Switch defaultChecked onChange={onChange} />;

export const Disabled: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br /><br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};

export const CheckedChild: React.FC = () => (
  <>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </>
);