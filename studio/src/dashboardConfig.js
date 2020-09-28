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
                  buildHookId: '5f717c273961d34758a2c401',
                  title: 'Sanity Studio',
                  name: 'thatdeveloper-sanity-gatsby-blog-studio',
                  apiId: 'd84b7c37-8409-4781-a15a-ef03c19e4512'
                },
                {
                  buildHookId: '5f717c273961d34a1ca2fdb6',
                  title: 'Blog Website',
                  name: 'thatdeveloper-sanity-gatsby-blog',
                  apiId: '12497a3d-d4cb-45da-9f1f-2cf40d9909b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KevinDennyII/thatdeveloper-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://thatdeveloper-sanity-gatsby-blog.netlify.app', category: 'apps' }
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
