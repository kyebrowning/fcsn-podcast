import {FolderIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Person schema.  Define and edit the fields for the 'person' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const category = defineType({
  name: 'category',
  title: 'Category',
  icon: FolderIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({ //Slug
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'A slug is required for the post to show up in the preview',
        options: {
          source: 'categoryName',
          maxLength: 96,
          isUnique: (value, context) => context.defaultIsUnique(value, context),
        },
        validation: (rule) => rule.required(),
      }),
    
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      categoryName: 'categoryName',
    },
    prepare(selection) {
      return {
        title: `${selection.categoryName}`,
      }
    },
  },
})
