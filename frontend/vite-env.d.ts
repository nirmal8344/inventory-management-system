/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // Neenga vera edhavadhu .env variable use panna, adhayum inga add pannikalam
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}