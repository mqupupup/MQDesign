import type { Meta, StoryObj } from '@storybook/react';

import Affix from './index';
import Affix2 from "./Affix2";
import Button from "../button";
import { createGlobalStyle } from 'styled-components';

// More on how to set up button at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Affix',
  component: Affix,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'scroll',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
/*  argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} satisfies Meta<typeof Affix>;

export default meta;
type Story = StoryObj<typeof meta>;


const GlobalStyle = createGlobalStyle`
  body {
    height: 2000px; /* 设置页面高度，模拟滚动 */
  }
`;
export const  Primary = () => {
     return <>
       <Affix offsetTop={10}>
         <Button type="primary">
           Affix top
         </Button>
       </Affix>
    </>
}
export const Basic = () => {
  return <>
    <Affix offsetTop={10}>
      <Button type="primary">
        Affix top
      </Button>
    </Affix>
    <Button type="primary">
      Others Button
    </Button>
  </>
}

export const Basic2 = () => {
  return <>
    <GlobalStyle />
    <Affix2 offsetTop={10}>
      <Button type="primary">
        Affix top2
      </Button>
    </Affix2>
    <br />
    <br />
    <br />
    <Button type="primary">
      Others Button
    </Button>
  </>
}
