export default {
  title: 'Question section',
  name: 'questionSection',
  type: 'object',
  fields: [
    {
      name: 'questions',
      type: 'array',
      of: [
        {
          name: 'question',
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
            },
            { name: 'answer', type: 'text' },
          ],
        },
      ],
    },
  ],
};
