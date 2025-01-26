import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const hostname = 'https://www.creator-toolkit.com';


const dynamicRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/thumbnail-test', changefreq: 'daily', priority: 0.8 },
    { url: '/thumbnail-test/youtube-thumbnail-preview', changefreq: 'daily', priority: 0.8 },
    { url: '/pricing', changefreq: 'weekly', priority: 0.6 },
    { url: '/login', changefreq: 'weekly', priority: 0.3 },
    { url: '/signup', changefreq: 'weekly', priority: 0.3 },
    { url: '/forgot-password', changefreq: 'weekly', priority: 0.2 },
    { url: '/reset-password', changefreq: 'weekly', priority: 0.2 },
    { url: '/YoutubeToText', changefreq: 'daily', priority: 0.8 },
    { url: '/thumbnail-downloader', changefreq: 'daily', priority: 0.8 },
    { url: '/video-download-gear', changefreq: 'daily', priority: 0.9 },
    { url: '/remove-background', changefreq: 'daily', priority: 0.7 },
    { url: '/404', changefreq: 'yearly', priority: 0.1 },
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
