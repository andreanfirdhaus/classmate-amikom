export const ENV = {
  baseUrls: {
    classmates: import.meta.env.VITE_BASE_URL1,
    graduated: import.meta.env.VITE_BASE_URL2,
    assistant: import.meta.env.VITE_BASE_URL3,
  },
  turnstile: {
    siteKey: import.meta.env.VITE_SITE_KEY_TURNSTILE,
  },
} as const;
