export default {
  name: 'skill',
  type: 'document',
	title: 'Skills',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    { title: 'Skill name', name: 'name', type: 'string' }
  ]
}
