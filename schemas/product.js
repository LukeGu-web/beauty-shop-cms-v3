import {SlugInput} from 'sanity-plugin-prefixed-slug'
import {slugGenerator} from '../utilities/slug-generator.js'

import aboutSection from './sections/about-section.js'
import benefitSection from './sections/benefit-section.js'
import heroSection from './sections/hero-section.js'
import howItWorksSection from './sections/how-it-works-section.js'
import priceSection from './sections/price-section.js'
import questionSection from './sections/question-section.js'
import resultSection from './sections/result-section.js'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
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
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      ...heroSection,
    },
    {
      ...aboutSection,
    },
    {
      ...benefitSection,
    },
    {
      ...howItWorksSection,
    },
    {
      ...priceSection,
    },
    {
      ...resultSection,
    },
    {
      ...questionSection,
    },
  ],
}
