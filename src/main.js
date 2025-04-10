import { handleCookies } from './js/cookies';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    handleCookies();
  },
  { once: true }
);
handleCookies();
