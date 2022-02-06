import { ComponentStory } from '@storybook/react';
import React from 'react';
import { PostCard } from './PostCard';

export default {
  title: 'components/molecules/PostCard',
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
    summary: 'summary',
    coverImg: 'http://placekitten.com/g/200/300',
    createdAt: 1643913060509,
    publishedAt: 1643913060509,
  },
};
