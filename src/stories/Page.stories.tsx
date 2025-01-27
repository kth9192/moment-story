import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Page, PageProps } from '../components/page/Page';
import * as HeaderStories from './Header.stories';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Example/Page',
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

Template.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/prX2dsVxaXtrK9H4SorCv8/clearrecipe',
  },
};
