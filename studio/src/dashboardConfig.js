export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e77b793fab0629e11dfbcee',
                  title: 'Sanity Studio',
                  name: 'rms-website-studio',
                  apiId: 'f67c2db6-2ded-4f06-a57e-e66cdc5559ba'
                },
                {
                  buildHookId: '5e77b793e26494dfade911fb',
                  title: 'Blog Website',
                  name: 'rms-website',
                  apiId: 'adc76982-ba55-4f0c-b1ac-cb5f1159bc7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rouncer27/rms-website',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://rms-website.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
