export default {
  name: 'project',
  type: 'document',
	title: 'Projects',
  fields: [
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
      of: [{
        type: 'reference',
        to: {type: 'skill'}
      }]
    },
  ]
}
