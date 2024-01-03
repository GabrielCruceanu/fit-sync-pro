export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// records data on each page visited
export const pageView = (url: string) => {
  // @ts-ignore
  if (window && window.dataLayer) {
    // @ts-ignore
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};

// handles any custom event we want to track. For eg. how many clicks has our subscribe button
export const event = ({ action, category, label, value }: any) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
