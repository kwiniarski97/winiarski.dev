import { ComponentStory } from '@storybook/react';
import { CategoryLink } from 'components/atoms/CategoryLink/CategoryLink';

export default {
  title: 'components/atoms/CategoryLink',
  component: CategoryLink,
};

const Template: ComponentStory<typeof CategoryLink> = (args) => (
  <CategoryLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  category: 'books',
};
