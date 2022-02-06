import { ComponentStory } from '@storybook/react';
import { SubText } from 'components/atoms/SubText/SubText';

export default {
  title: 'components/atoms/SubText',
  component: SubText,
};

const Template: ComponentStory<typeof SubText> = (args) => (
  <SubText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'SubText',
};
