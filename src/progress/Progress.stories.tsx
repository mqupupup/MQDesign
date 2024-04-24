import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import Progress from './index';

const meta = {
  title: 'Example/Progress',
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    percent: 30,
    children: 'Progress',
  },
};

export const Basic = () => {
  return <>
    <Progress percent={30}>Primary Progress</Progress>
    <br/>
    <Progress percent={70} status="exception" />

  </>
}


export const Dynamic: React.FC = () => {
  const [percent, setPercent] = React.useState(0);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
      <>
        <Progress percent={percent} />
        <br /><br />

        <MinusOutlined onClick={decline} />
        <PlusOutlined onClick={increase} />
      </>
  );
};

export const Circle = () => {
  return <>
    <Progress type="circle" percent={50} />
  </>
}

export const DynamicCircle: React.FC = () => {
  const [percent, setPercent] = React.useState(0);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
      <>
        <Progress percent={percent} type="circle"/>
        <br /><br />

        <MinusOutlined onClick={decline} />
        <PlusOutlined onClick={increase} />
      </>
  );
};