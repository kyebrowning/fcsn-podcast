import {EarthGlobeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Person schema.  Define and edit the fields for the 'person' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const guild = defineType({
  name: 'guild',
  title: 'Guild',
  icon: EarthGlobeIcon,
  type: 'document',
  fields: [
    defineField({ //Guild Name
      name: 'guildName',
      title: 'Guild Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({ //Slug
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'A slug is required for the post to show up in the preview',
        options: {
          source: 'guildName',
          maxLength: 96,
          isUnique: (value, context) => context.defaultIsUnique(value, context),
        },
        validation: (rule) => rule.required(),
      }),
      defineField({ //Guild Logo
        name: 'guildLogo',
        title: 'Guild',
        type: 'image',
        fields: [
          defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessibility.',
            validation: (rule) => {
              // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
              return rule.custom((alt, context) => {
                if ((context.document?.picture as any)?.asset?._ref && !alt) {
                  return 'Required'
                }
                return true
              })
            },
          }),
        ],
        options: {
          hotspot: true,
          aiAssist: {
            imageDescriptionField: 'alt',
          },
        },
        validation: (rule) => rule.required(),
      }),
    
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      guildLogo: 'guildLogo',
      guildName: 'guildName',
    },
    prepare(selection) {
      return {
        title: `${selection.guildName}`,
        media: selection.guildLogo
      }
    },
  },
})
