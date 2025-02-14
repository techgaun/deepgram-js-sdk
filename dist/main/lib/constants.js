"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_OPTIONS =
  exports.DEFAULT_FETCH_OPTIONS =
  exports.DEFAULT_GLOBAL_OPTIONS =
  exports.DEFAULT_URL =
  exports.DEFAULT_HEADERS =
  exports.NODE_VERSION =
    void 0;
const helpers_1 = require("./helpers");
const version_1 = require("./version");
exports.NODE_VERSION =
  ((_a = process === null || process === void 0 ? void 0 : process.versions) === null ||
  _a === void 0
    ? void 0
    : _a.node) || "Unknown";
exports.DEFAULT_HEADERS = {
  "Content-Type": `application/json`,
  "X-Client-Info": `@deepgram/sdk; ${(0, helpers_1.isBrowser)() ? "browser" : "server"}; v${
    version_1.version
  }`,
  "User-Agent": `@deepgram/sdk/${version_1.version} ${
    (0, helpers_1.isBrowser)() ? "javascript" : `node/${exports.NODE_VERSION}`
  }`,
};
exports.DEFAULT_URL = "https://api.deepgram.com";
exports.DEFAULT_GLOBAL_OPTIONS = {
  url: exports.DEFAULT_URL,
};
exports.DEFAULT_FETCH_OPTIONS = {
  headers: exports.DEFAULT_HEADERS,
};
exports.DEFAULT_OPTIONS = {
  global: exports.DEFAULT_GLOBAL_OPTIONS,
  fetch: exports.DEFAULT_FETCH_OPTIONS,
};
//# sourceMappingURL=constants.js.map
