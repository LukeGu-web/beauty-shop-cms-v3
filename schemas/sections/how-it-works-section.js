export default {
  title: 'How it works section',
  name: 'howItWorksSection',
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
    {
      title: 'Treatment areas',
      name: 'treatmentAreas',
      type: 'object',
      fields: [
        { title: 'Area title', name: 'areaTitle', type: 'string' },
        { title: 'Content title', name: 'contentTitle', type: 'string' },
        { name: 'description', type: 'text' },
        {
          name: 'imageSrc',
          type: 'image',
          title: 'Image source',
        },
      ],
    },
  ],
};
