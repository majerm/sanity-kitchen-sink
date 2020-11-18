export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fb58a9b5b7fca00cee1c913',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cfdz2q1x',
                  apiId: '19fdaf5b-2b52-47f1-9a51-30c7e209a8a3'
                },
                {
                  buildHookId: '5fb58a9b5ff3a90120624737',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-65qajf8a',
                  apiId: '74117fce-5757-46b6-ac55-90138bb20dfc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/majerm/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-65qajf8a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
