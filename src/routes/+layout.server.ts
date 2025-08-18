import type { PageServerLoad } from './$types';
import { readdir } from 'fs/promises';

export const load: PageServerLoad = async () => {
	return {
		bg: (await readdir('./static/bg')).filter((f) => !f.endsWith('.txt'))
	};
};
