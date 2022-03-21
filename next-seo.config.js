/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Home Title for Project Name ',
  titleTemplate: '%s | Project Name',
  description: 'Project Name description',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/',
    site_name: 'Project Name',
  },
  twitter: {
    handle: '@project_name',
    site: '@project_name',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      httpEquiv: 'content-type',
      content: 'text/html; charset=utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1',
    },
  ],
};
