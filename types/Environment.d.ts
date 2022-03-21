/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXTAUTH_URL: string;
    APP_KEY: string;

    NEXT_PUBLIC_APP_NAME: string;
    NEXT_PUBLIC_SECURE: boolean;
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_APP_ENV: 'local' | 'staging' | 'production';
    NEXT_PUBLIC_DEBUG: boolean;
  }
}
