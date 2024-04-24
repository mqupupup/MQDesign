import type { Meta, StoryObj } from '@storybook/react';

import Tag from './index';

// More on how to set up button at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing button with args: https://storybook.js.org/docs/react/writing-stories/args


function log(e: any) {
  console.log(e);
}

function preventDefault(e: any) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');

}
export const Basic = () => {
  return (
      <>
        <Tag>Tag 1</Tag>
        <Tag>
          <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
        </Tag>
        <Tag closable onClose={preventDefault}>
          Prevent Default
        </Tag>
        <Tag closable onClose={log}>
          Tag 2
        </Tag>
          <Tag visible closable>
              Tag 3
          </Tag>
      </>
  )
}

export const Color = () => {
    return (
        <>
            <div>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
            </div>

            <div style={{marginTop:12}}>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
            </div>
        </>
    )
}
