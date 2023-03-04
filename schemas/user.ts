export default {
  name: 'user',
  type: 'document',
	title: 'User',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'array',
      of: [{
        type: 'string'
      }]
    },
    {
      title: 'Contact info',
      name: 'contactInfo',
      type: 'object',
      fields: [
        {
          title: 'LinkedIn',
          name: 'ln',
          type: 'url',
          validation: (Rule: any) => Rule.uri({
            scheme: ['http', 'https']
          })
        },
        {
          title: 'Twitter',
          name: 'tw',
          type: 'url',
          validation: (Rule: any) => Rule.uri({
            scheme: ['http', 'https']
          })
        },
        {
          title: 'Telegram',
          name: 'te',
          type: 'url',
          validation: (Rule: any) => Rule.uri({
            scheme: ['http', 'https']
          })
        },
        {
          title: 'Github',
          name: 'git',
          type: 'url',
          validation: (Rule: any) => Rule.uri({
            scheme: ['http', 'https']
          })
        },
        {
          title: 'Email',
          name: 'mail',
          type: 'url',
          validation: (Rule: any) => Rule.uri({
            scheme: ['mailto']
          })
        },
        {
          title: 'Phone',
          name: 'phone',
          type: 'url',
          validation: (Rule: any) => Rule.uri({
            scheme: ['tel']
          })
        },
      ]
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [{
        name: 'project',
        type: 'object',
        fields: [
          { title: 'ID', name: 'id', type: 'string' },
          { title: 'Name', name: 'name', type: 'string' },
          { title: 'Description', name: 'desc', type: 'string' },
          {
            title: 'Demo',
            name: 'demo',
            type: 'url',
            validation: (Rule: any) => Rule.uri({
              scheme: ['http', 'https']
            })
          },
          {
            title: 'Source',
            name: 'source',
            type: 'url',
            validation: (Rule: any) => Rule.uri({
              scheme: ['http', 'https'] // 'mailto', 'tel'
            })
          },
          {
            title: 'Thumbnail',
            name: 'preview',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                // options: {
                //   isHighlighted: true // <-- make this field easily accessible
                // }
              },
              {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          },
          {
            title: 'Skills',
            name: 'skills',
            type: 'array',
            of: [{ type: 'string'}]
          },
        ]
      }]
    }
  ]
}