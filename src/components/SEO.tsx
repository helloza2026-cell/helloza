import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const SITE_URL = "https://helloza.co.in";
const DEFAULT_IMAGE = `${SITE_URL}/hero-bpo.jpg`;

const upsertMeta = (key: "name" | "property", value: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(key, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | Helloza Bpo Solutions`;

    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", `${title} | Helloza Bpo Solutions`);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", `${title} | Helloza Bpo Solutions`);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Helloza Bpo Solutions",
      url: SITE_URL,
      logo: `${SITE_URL}/logohello.png`,
      description,
      sameAs: [],
    };

    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld="true"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [description, image, path, title]);

  return null;
};

export default SEO;
