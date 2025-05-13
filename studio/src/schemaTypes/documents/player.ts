import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Person schema.  Define and edit the fields for the 'person' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const player = defineType({
  name: 'player',
  title: 'Player',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({ //First Name
      name: 'playerName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({ //Picture
      name: 'picture',
      title: 'Picture',
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
      //validation: (rule) => rule.required(),
    }),
    defineField({ //Guild
      name: 'guild',
      title: 'Guild(s)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'guild' }] }],
    }),
    defineField({ //Player Type
      name: 'playerType',
      title: 'Player Type',
      type: 'string',
      options: {
        list: [
          {title: 'Captain', value:'captain'},
          {title: 'Squaddie', value: 'squaddie'},
          {title: 'Mascot', value: 'mascot'}
        ]
      }
    })

  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      playerName: 'playerName',
      picture: 'picture',
    },
    prepare(selection) {
      return {
        title: `${selection.playerName}`,
        subtitle: 'Player',
        media: selection.picture,
      }
    },
  },
})
