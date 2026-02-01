import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
}) => {
    const siteName = 'OutdoorCamp Rental';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDescription = 'Penyewaan alat outdoor dan camping terbaik. Booking online mudah, aman, dan terjangkau untuk petualangan Anda.';
    const defaultKeywords = 'sewa alat camping, rental tenda, outdoor gear rental, sewa alat naik gunung, camping gear';
    const defaultImage = '/images/og-image.png'; // Updated to local path
    const siteUrl = 'https://outdoorcamp-rental.vercel.app'; // Replace with actual URL if known

    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`, // Assuming a logo exists
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-812-3456-7890",
            "contactType": "customer service"
        }
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Canonical Link */}
            <link rel="canonical" href={metaUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            {type === 'product' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": title,
                        "description": description,
                        "image": metaImage,
                        "offers": {
                            "@type": "Offer",
                            "url": metaUrl,
                            "priceCurrency": "IDR",
                            "availability": "https://schema.org/InStock"
                        }
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
