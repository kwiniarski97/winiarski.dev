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
    slug: '123',
    title: 'title',
    excerpt: 'summary summary summary',
    coverImg: { src: 'https://placekitten.com/g/200/300' },
    publishedAt: new Date(),
    categories: ['books', 'tutorials'],
    content: '',
  },
};
