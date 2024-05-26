import { isBrowser } from "./helpers";
import { version } from "./version";
export const NODE_VERSION =
  (process === null || process === void 0 ? void 0 : process.versions.node) || "Unknown";
export const DEFAULT_HEADERS = {
  "Content-Type": `application/json`,
  "X-Client-Info": `@deepgram/sdk; ${isBrowser() ? "browser" : "server"}; v${version}`,
  "User-Agent": `@deepgram/sdk/${version} ${isBrowser() ? "javascript" : `node/${NODE_VERSION}`}`,
};
export const DEFAULT_URL = "https://api.deepgram.com";
export const DEFAULT_GLOBAL_OPTIONS = {
  url: DEFAULT_URL,
};
export const DEFAULT_FETCH_OPTIONS = {
  headers: DEFAULT_HEADERS,
};
export const DEFAULT_OPTIONS = {
  global: DEFAULT_GLOBAL_OPTIONS,
  fetch: DEFAULT_FETCH_OPTIONS,
};
//# sourceMappingURL=constants.js.map
