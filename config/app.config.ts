export const apiURL = {};

export const appConfig: AppConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Project Name',
  is_secure: Boolean((process.env.NEXT_PUBLIC_SECURE || 'true') === 'true'),
  base_url: process.env.NEXT_PUBLIC_BASE_URL || 'localhost:3000',
  api_url: process.env.NEXT_PUBLIC_API_URL as AppConfig['api_url'],
  app_env: (process.env.NEXT_PUBLIC_APP_ENV as AppConfig['app_env']) || 'local',
  app_key: process.env.APP_KEY,
  debug: Boolean((process.env.NEXT_PUBLIC_DEBUG || 'true') === 'true'),
};
