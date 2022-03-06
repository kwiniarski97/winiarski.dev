import { ComponentStory } from '@storybook/react';
import { PostCard } from 'components/organisms/PostCard/PostCard';
import React from 'react';

export default {
  title: 'components/organisms/PostCard',
  component: PostCard,
};

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  post: {
    link: '123',
    title: 'title',
    summary: 'summary summary summary',
    coverImg: 'http://placekitten.com/g/200/300',
    publishedAt: 1643913060509,
    categories: ['books', 'tutorials'],
  },
};
