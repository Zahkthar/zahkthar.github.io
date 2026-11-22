import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

/**
 * Generates the static RSS 2.0 feed at `/rss.xml` for published documentation articles.
 */
export async function GET(context: APIContext) {
	const docs = await getCollection('docs');

	const articles = docs
		.filter(
			(entry) =>
				!entry.data.draft &&
				entry.data.template !== 'splash' &&
				entry.data.pubDate instanceof Date,
		)
		.sort((a, b) => {
			const dateDiff = b.data.pubDate!.getTime() - a.data.pubDate!.getTime();
			if (dateDiff !== 0) return dateDiff;
			return (b.data.sidebar?.order ?? 0) - (a.data.sidebar?.order ?? 0);
		});

	return rss({
		title: 'Zahkthar',
		description:
			"Documentation dédiée à l'électronique et à la programmation embarquée.",
		site: context.site!,
		customData: '<language>fr</language>',
		items: articles.map((entry) => {
			const slug = entry.id.replace(/^\/+|\/+$/g, '');
			return {
				title: entry.data.title,
				description: entry.data.description,
				pubDate: entry.data.pubDate,
				link: `/${slug}/`,
			};
		}),
	});
}
