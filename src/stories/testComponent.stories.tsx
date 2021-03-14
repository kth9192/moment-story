import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Button } from '../components/button/Button';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'YourComponent',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
