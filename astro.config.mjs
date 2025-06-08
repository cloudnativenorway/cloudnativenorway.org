// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://cloudnativenorway.org',
	integrations: [
		starlight({
			title: 'Cloud Native Norway',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Norsk',
					lang: 'nb-NO'
				},
				en: {
					label: 'English'
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/cloudnativenorway' }],
			sidebar: [
				{
					label: 'Organisasjonen',
					translations: {
						'en': 'The Organization',
					},
					items: [
						{ slug: 'org/who' },
						{ slug: 'org/what' },
						{ slug: 'org/contact'},
					],
				},
				{
					label: 'Hva vi tilbyr',
					translations: {
						'en': 'Services',
					},
					autogenerate: { directory: 'services' },
				},
			],
		}),
	],
});
