interface Config {
  app: AppConfig;
}

interface AppConfig {
  name: string;
  is_secure: boolean;
  base_url: string;
  api_url: string;
  app_env: 'local' | 'staging' | 'production';
  debug: boolean;
  app_key: string;
}
