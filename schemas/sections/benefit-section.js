export default {
  title: 'Benefit section',
  name: 'benefitSection',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'items',
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
            { name: 'description', type: 'text' },
            {
              name: 'imageSrc',
              type: 'image',
              title: 'Image source',
            },
          ],
        },
      ],
    },
  ],
};
