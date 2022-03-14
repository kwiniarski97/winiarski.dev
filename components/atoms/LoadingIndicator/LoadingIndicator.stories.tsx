import { ComponentStory } from '@storybook/react';
import { LoadingIndicator } from 'components/atoms/LoadingIndicator/LoadingIndicator';
import React from 'react';

export default {
  title: 'components/atoms/LoadingIndicator',
  component: LoadingIndicator,
};

const Template: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
);

export const ManualProgress = Template.bind({});
ManualProgress.args = {
  progress: 0.77,
  isLoading: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
  isLoading: true,
};
