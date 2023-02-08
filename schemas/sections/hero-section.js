export default {
  title: 'Hero section',
  name: 'heroSection',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'leftButtonLabel', title: 'Left button label', type: 'string' },
    { name: 'leftButtonLink', title: 'Left button link', type: 'url' },
    {
      name: 'rightButtonLabel',
      title: 'Right button label',
      type: 'string',
    },
    { name: 'rightButtonLink', title: 'Right button link', type: 'url' },
    {
      name: 'imageSrc',
      type: 'image',
      title: 'Image source',
    },
  ],
};
