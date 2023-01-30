/// <reference types="react-scripts" />

declare module '*.woff2' {
  const src: string
  export default src
}

declare module '*.woff' {
  const src: string
  export default src
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_APPLICATION_NAME: string
    REACT_APP_POSTHOG_AUTH_TOKEN: string
    REACT_APP_RAMP_API_KEY: string
    REACT_APP_RAMP_URL: string
    REACT_APP_TX_HISTORY_INDEXER: string
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'model-viewer': any
  }
}