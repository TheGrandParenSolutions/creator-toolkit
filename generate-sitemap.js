import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const hostname = 'https://www.creator-toolkit.com';
const dynamicRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/youtube-downloader', changefreq: 'daily', priority: 0.8 },
    { url: '/thumbnail-test', changefreq: 'daily', priority: 0.8 },
    { url: '/pricing', changefreq: 'weekly', priority: 0.6 },
    { url: '/login', changefreq: 'weekly', priority: 0.3 },
    { url: '/signup', changefreq: 'weekly', priority: 0.3 },
];

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream('./dist/sitemap.xml');

    sitemap.pipe(writeStream);

    dynamicRoutes.forEach(route => sitemap.write(route));

    sitemap.end();

    await streamToPromise(sitemap); // Ensures the stream completes
    console.log('Sitemap successfully generated at ./dist/sitemap.xml');
}

generateSitemap().catch(err => {
    console.error('Error generating sitemap:', err);
});
