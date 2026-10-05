type RuntimeEnv = {
  VITE_BASE_API_URL?: string;
};

declare global {
  interface Window {
    __ENV__?: RuntimeEnv;
  }
}

const runtimeEnv = window.__ENV__ ?? {};

export const env = {
  baseApiUrl: runtimeEnv.VITE_BASE_API_URL || import.meta.env.VITE_BASE_API_URL,
};
