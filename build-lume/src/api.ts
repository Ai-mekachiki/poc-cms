import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	text: string;
};

export default defineOperationApi<Options>({
	id: 'build-lume', // これはapp.tsで書いたものと同じものを書くきまり。
	handler: ({ text }) => {
		console.log(text);
	},
});
