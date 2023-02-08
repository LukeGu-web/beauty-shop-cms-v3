export default {
  title: 'About section',
  name: 'aboutSection',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'buttonLabel', title: 'Button label', type: 'string' },
    { name: 'buttonLink', title: 'Button link', type: 'url' },
    { name: 'videoSrc', title: 'Video source', type: 'url' },
  ],
};
