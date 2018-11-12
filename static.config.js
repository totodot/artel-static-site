const getData = require('./getData');

export default {
  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
    const news = await getData('./content/news')
    const tests = await getData('./content/tests')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/onas',
        component: 'src/containers/About',
      },
      {
        path: '/aktualnosci',
        component: 'src/containers/Blog',
        getData: () => ({
          news,
          tests
        }),
        children: news.map(message => ({
          path: `/${message.data.slug}`,
          component: 'src/containers/Message',
          getData: () => ({
            message
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
