import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/services', changefreq: 'monthly', priority: 0.8 },
    { url: '/projects', changefreq: 'monthly', priority: 0.9 },
    { url: '/projects/interior-design-crm-ios', changefreq: 'monthly', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog/website-performance-optimization-case-study', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/luxury-interior-design-portfolio-features', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/dental-clinic-losing-patients-website-audit', changefreq: 'monthly', priority: 0.7 },
    { url: '/services/real-estate-web-development', changefreq: 'monthly', priority: 0.9 },
    { url: '/services/interior-design-web-development', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/dental-clinic-web-development', changefreq: 'monthly', priority: 0.8 },
];

async function generate() {
    const sitemap = new SitemapStream({ hostname: 'https://devendigitallabs.com' });
    const writeStream = createWriteStream(resolve(import.meta.dirname, '../public/sitemap.xml'));

    sitemap.pipe(writeStream);

    links.forEach(link => sitemap.write(link));
    sitemap.end();

    await streamToPromise(sitemap);
    console.log('Sitemap generated inside public/sitemap.xml!');

    // Also generate clean robots.txt
    const robotsContent = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /invoices/

Sitemap: https://devendigitallabs.com/sitemap.xml
`;
    import('fs').then(fs => {
        fs.writeFileSync(resolve(import.meta.dirname, '../public/robots.txt'), robotsContent);
        console.log('Robots.txt generated inside public/robots.txt!');
    });
}

generate().catch(console.error);
