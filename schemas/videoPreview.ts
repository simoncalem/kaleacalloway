import { ArchiveIcon } from '@sanity/icons'
import { defineType } from 'sanity'

import authorType from './author'
import postType from './post'

export default defineType({
  name: 'videoPreview',
  title: 'Video Preview',
  icon: ArchiveIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'video',
      title: 'Video',
      description: 'Short 2-5 second video for the hover preview',
      type: 'mux.video',
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: postType.title }],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     post: 'post.title',
  //     media: 'coverImage',
  //   },
  //   prepare(selection) {
  //     const { post } = selection
  //     return { ...selection, subtitle: post && `by ${post}` }
  //   },
  // },
})
