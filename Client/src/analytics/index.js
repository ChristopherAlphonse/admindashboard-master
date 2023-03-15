import ReactGA from 'react-ga';

const { VITE_GOOGLE_ANALYTICS_TRACKING_ID } = import.meta.env;

// Initialize Google Analytics
export const initGA = () => {
  console.log('Initializing Google Analytics');
  ReactGA.initialize(VITE_GOOGLE_ANALYTICS_TRACKING_ID);
};

// Log page view
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

// Log custom event
export const logEvent = (category, action) => {
  if (category && action) {
    console.log(`Logging event: category=${category}, action=${action}`);
    ReactGA.event({ category, action });
  }
};

// Log exceptions
export const logException = (description, fatal = false) => {
  if (description) {
    console.log(`Logging exception: description=${description}, fatal=${fatal}`);
    ReactGA.exception({ description, fatal });
  }
};
