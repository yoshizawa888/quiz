// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['/assets/css/reset.css'],
	ssr: true,
	// target: "static",
	// generate: {
	// 	dir: 'public',
	// },
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: '4択クイズ',
			meta: [{ name: 'description', content: '4択クイズ' }],
			// link: [{ rel: 'icon', href: '/favicon.ico' }],
		},
	},
});
