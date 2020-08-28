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
                  buildHookId: '5f4924be80ad1401291ceba9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h81pf327',
                  apiId: '8e8c8c3e-d818-4046-a7ad-c409b395df76'
                },
                {
                  buildHookId: '5f4924be66cfbf00f9823072',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-btzcf6pv',
                  apiId: '2f6e7413-470b-4d3f-a225-eb285da6f011'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darrenspivey/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-btzcf6pv.netlify.app',
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
