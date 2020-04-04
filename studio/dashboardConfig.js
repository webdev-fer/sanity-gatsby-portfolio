export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e88e5e1bb65cd06e0eb45fe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dtna9sht',
                  apiId: 'f131ca69-6e4e-425a-8aa3-6129b330555c'
                },
                {
                  buildHookId: '5e88e5e1b020054223db8e2b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5biwpybp',
                  apiId: '152b4082-ce71-42f7-b964-0f32bc71a465'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webdev-fer/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5biwpybp.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
