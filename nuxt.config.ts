// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Apeni.co | Software Development, Web Design & Cybersecurity',
      meta: [
        { name: 'description', content: 'Apeni.co crafts friendly, ocean-inspired digital experiences with professional web design, software development, and cybersecurity services for Denver and beyond.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Apeni.co' },
        { property: 'og:description', content: 'Transform your online presence with tailored web design, powerful software, and cybersecurity from Apeni.co.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  components: true
});
