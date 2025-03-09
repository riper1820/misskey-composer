export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CDK_EMAIL_DOMAIN: string;
      CDK_BUCKET_NAME: string;
    }
  }
}