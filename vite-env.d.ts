/// <reference types="vite/client" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_SECRET_KEY_GOOGLE_ReCAPTCHA: string;

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}