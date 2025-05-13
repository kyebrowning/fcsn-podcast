import {JoystickIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Person schema.  Define and edit the fields for the 'person' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  icon: JoystickIcon,
  type: 'document',
  fields: [
    defineField({ //Skill Name
      name: 'skillName',
      title: 'Skill Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({ //Slug
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'A slug is required for the post to show up in the preview',
        options: {
          source: 'skillName',
          maxLength: 96,
          isUnique: (value, context) => context.defaultIsUnique(value, context),
        },
        validation: (rule) => rule.required(),
    }),
    defineField({ //Definition
      name: 'definition',
      title: 'Definition',
      type: 'blockContent',
    }),
    defineField({ //Skill Type
      name: 'skillType',
      title: 'Skill Type',
      type: 'string',
      options: {
        list: [
          {title: 'Character Play', value:'characterPlay'},
          {title: 'Character Trait', value: 'characterTrait'},
          {title: 'Heroic Play', value: 'heroicPlay'},
          {title: 'Legendary Play', value: 'legendaryPlay'},
        ]
      }
    }),
    defineField({ //Player
      name: 'player',
      title: 'Player(s)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'player' }] }],
    }),
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      skillName: 'skillName',
    },
    prepare(selection) {
      return {
        title: `${selection.skillName}`,
      }
    },
  },
})
