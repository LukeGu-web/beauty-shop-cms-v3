export default {
  title: 'Result section',
  name: 'resultSection',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'buttonLabel', title: 'Button label', type: 'string' },
    { name: 'buttonLink', title: 'Button link', type: 'url' },
    {
      name: 'carousel',
      type: 'array',
      of: [
        {
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            { name: 'link', type: 'url' },
            {
              name: 'imageSrc',
              type: 'image',
              title: 'Image source',
            },
          ],
        },
      ],
    },
    {
      title: 'Meet team',
      name: 'team',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'buttonLabel', title: 'Button label', type: 'string' },
        { name: 'buttonLink', title: 'Button link', type: 'url' },
        { name: 'imageSrc', title: 'Image source', type: 'image' },
      ],
    },
  ],
};
