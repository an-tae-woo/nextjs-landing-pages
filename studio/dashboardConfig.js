export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6140579f8bb45e851cd5dca7',
                  title: 'Sanity Studio',
                  name: 'nextjs-landing-pages-studio-mrxsnbm3',
                  apiId: '504b4394-5afb-4f4b-8d82-06792f5d340e'
                },
                {
                  buildHookId: '6140579f9b2a858324756dc3',
                  title: 'Landing pages Website',
                  name: 'nextjs-landing-pages-web-x6hh2mvm',
                  apiId: 'e4b01302-731b-4952-abcd-fe81ac1525a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/an-tae-woo/nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-landing-pages-web-x6hh2mvm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
