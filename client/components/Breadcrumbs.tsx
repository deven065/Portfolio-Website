import { useLocation } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function Breadcrumbs() {
  const location = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', url: '/' }];
    
    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({ name, url: currentPath });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = getBreadcrumbs();
  
  if (breadcrumbs.length <= 1) return null;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://devendigitallabs.com${crumb.url}`
    }))
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 px-6 sm:px-8 lg:px-12">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.url} className="flex items-center">
              {index > 0 && <span className="mx-2 text-slate-500">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-blue-400 font-medium" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <a
                  href={crumb.url}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {crumb.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
