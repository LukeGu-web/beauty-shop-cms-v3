export default {
  title: 'Price section',
  name: 'priceSection',
  type: 'object',
  fields: [
    {
      name: 'content',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
        },
        { name: 'description', type: 'text' },
        { name: 'buttonLabel', title: 'Button label', type: 'string' },
        { name: 'buttonLink', title: 'Button link', type: 'url' },
      ],
    },
    {
      name: 'lists',
      type: 'array',
      of: [
        {
          name: 'list',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'prices',
              type: 'array',
              of: [
                {
                  name: 'price',
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      type: 'string',
                    },
                    { name: 'cost', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
