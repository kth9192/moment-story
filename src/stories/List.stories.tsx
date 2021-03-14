import React from 'react';

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ListItemProps, MemoListItem, MemoList } from '../components/list';

export default {
  title: 'Example/List',
  component: MemoListItem,
  parameters: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ListItemProps> = (args) => (
  <MemoListItem {...args} handleCheck={action('test')} />
);
export const ListItem = Template.bind({});
ListItem.args = {};

const Template2: Story = (args) => <MemoList {...args} />;
export const Lists = Template2.bind({});
Lists.args = {};
