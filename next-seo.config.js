 
const title = "NextVita Fastest Next JS Template Free";
const description =
  "Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download.";
const siteName = "NextVita";
const canonical = "https://allstack.vercel.app/";

const SEO = {
  title,
  description,
  titleTemplate: "%s | " + siteName,
  canonical: canonical,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonical,
    title,
    description,
    images: [
      {
        url: "https://allstack.vercel.app//logo.png",
        alt: title,
        width: 512,
        height: 512,
      },
    ],
  },
};

export default SEO;
