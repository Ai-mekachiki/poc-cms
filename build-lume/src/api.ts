import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	text: string;
};

export default defineOperationApi<Options>({
	id: 'build-lume',
	handler: ({ text }) => {
		console.log(text);
	},
});
