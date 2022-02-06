import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Button, ButtonTheme } from './Button';

export default {
  title: 'components/atoms/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: ButtonTheme.Primary,
  children: 'Button',
};
