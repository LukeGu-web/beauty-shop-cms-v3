import {SlugInput} from 'sanity-plugin-prefixed-slug'
import {slugGenerator} from '../utilities/slug-generator.js'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        source: 'name',
        maxLength: 30,
        slugify: (input) => slugGenerator(input),
      },
    },
  ],
}
