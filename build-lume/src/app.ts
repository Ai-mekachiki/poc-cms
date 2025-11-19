import { defineOperationApp } from '@directus/extensions-sdk';

// Flowエディタでの表示を制御するもの

export default defineOperationApp({
	id: 'build-lume',
	name: 'Build Lume',
	icon: 'Build',
	description: 'Lumeプロジェクトをビルドします。',
	overview: ({ text }) => [
		{
			label: 'コンソール出力',
			text,
		},
	],
	// Flowエディタでパラメータとして設定する内容を定義
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
