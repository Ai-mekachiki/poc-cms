import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'build-lume',
	name: 'Build Lume',
	icon: 'Build',
	description: 'Lumeプロジェクトをビルドします。',
	overview: ({ text }) => [
		{
			label: 'Text',
			text: text,
		},
	],
	options: [
		{
			field: 'text',
			name: 'Text',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],
});
