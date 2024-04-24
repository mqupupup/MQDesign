import React, { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Overlay from './index';
import Button from '../button';

const { Popup } = Overlay;

const meta = {
  title: 'Example/Overlay',
  component: Overlay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Overlay>;
export default meta;
type Story = StoryObj<typeof meta>;

export const UnderControl = () => {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef(null);
  return <>
    <Button onClick={() => setVisible(true)} ref={buttonRef}>click</Button>
    <Overlay visible={visible} onVisibleChange={v => setVisible(v)}
      target={() => buttonRef.current}
    >
      <div style={{
        border: '1px solid black',
        width: 300,
        height: 300,
      }}>
        Under Control Overlay
      </div>
    </Overlay>
  </>
}

export const Points = () => {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef(null);
  return <>
    <Button onClick={() => setVisible(true)} ref={buttonRef}>click</Button>
    <Overlay visible={visible} onVisibleChange={v => setVisible(v)}
      target={() => buttonRef.current}
      points={['tr', 'tr']}
    >
      <div style={{
        border: '1px solid black',
        width: 300,
        height: 300,
      }}>
        Points
      </div>
    </Overlay>
  </>
}


export const Placement = () => {
  const ref1 = useRef(null);
  const topLeft = <Button ref={ref1}>topLeft</Button>;
  const top = <Button>top</Button>;
  const topRight = <Button>topRight</Button>;
  const leftTop = <Button>leftTop</Button>;
  const left = <Button>left</Button>;
  const leftBottom = <Button>leftBottom</Button>;
  const rightTop = <Button>rightTop</Button>;
  const right = <Button>right</Button>;
  const rightBottom = <Button>rightBottom</Button>;
  const bottomLeft = <Button>bottomLeft</Button>;
  const bottom = <Button>bottom</Button>;
  const bottomRight = <Button>bottomRight</Button>;

  return <div style={{ paddingLeft: 200 }}>
    <div style={{ marginLeft: 75 }}>
      <Popup trigger={topLeft} placement="topLeft">topLeft</Popup>
      <Popup trigger={top} placement="top">top</Popup>
      <Popup trigger={topRight} placement="topRight">topRight</Popup>
    </div>
    <div style={{ width: 80, float: "left" }}>
      <Popup trigger={leftTop} placement="leftTop">leftTop</Popup>
      <Popup trigger={left} placement="left">left</Popup>
      <Popup trigger={leftBottom} placement="leftBottom">leftBottom</Popup>
    </div>
    <div style={{ width: 80, marginLeft: 290 }}>
      <Popup trigger={rightTop} placement="rightTop">rightTop</Popup>
      <Popup trigger={right} placement="right">right</Popup>
      <Popup trigger={rightBottom} placement="rightBottom">rightBottom</Popup>
    </div>
    <div style={{ marginLeft: 75 }}>
      <Popup trigger={bottomLeft} placement="bottomLeft">bottomLeft</Popup>
      <Popup trigger={bottom} placement="bottom">bottom</Popup>
      <Popup trigger={bottomRight} placement="bottomRight">bottomRight</Popup>
    </div>
  </div>
}