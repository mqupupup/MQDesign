import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MailOutlined, AppstoreOutlined, SettingOutlined, SmileOutlined } from '@ant-design/icons';

import Menu from './index';

const meta = {
    title: 'Example/Menu',
    component: Menu,
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
} satisfies Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const App = () => (
  <Menu defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" id="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
  </Menu>
);

export const Inline = () => (
  <Menu mode="inline" defaultSelectedKeys={['mail']} style={{ width: 300 }}>
    <Menu.Item id="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.SubMenu id="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
      <Menu.Item id="two" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item id="three" icon={<AppstoreOutlined />}>
        Navigation Three
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

export const Inline2 = () => (
  <Menu mode="inline" defaultSelectedKeys={['mail']} style={{ width: 300 }}>
    <Menu.Item id="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.SubMenu id="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
      <Menu.Item id="two" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item id="three" icon={<AppstoreOutlined />}>
        Navigation Three
      </Menu.Item>
      <Menu.SubMenu id="SubMenu2" title="Navigation Two - Submenu2" icon={<SettingOutlined />}>
        <Menu.Item id="two2" icon={<AppstoreOutlined />}>
          Navigation Two2
        </Menu.Item>
        <Menu.Item id="three2" icon={<AppstoreOutlined />}>
          Navigation Three2
        </Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
  </Menu>
);


export const Items = () => {
  return <Menu
    mode="inline"
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ]}
    style={{ width: 300 }}
  />
}