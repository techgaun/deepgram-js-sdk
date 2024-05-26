"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeakClient = void 0;
const AbstractRestfulClient_1 = require("./AbstractRestfulClient");
const errors_1 = require("../lib/errors");
const helpers_1 = require("../lib/helpers");
class SpeakClient extends AbstractRestfulClient_1.AbstractRestfulClient {
  /**
   * @see https://developers.deepgram.com/reference/text-to-speech-api
   */
  request(source, options, endpoint = "v1/speak") {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        let body;
        if ((0, helpers_1.isTextSource)(source)) {
          body = JSON.stringify(source);
        } else {
          throw new errors_1.DeepgramError("Unknown transcription source type");
        }
        const speakOptions = Object.assign({ model: "aura-asteria-en" }, options);
        const url = new URL(endpoint, this.baseUrl);
        (0, helpers_1.appendSearchParams)(url.searchParams, speakOptions);
        this.result = yield this._handleRawRequest(this.fetch, "POST", url, {}, {}, body);
        return this;
      } catch (error) {
        throw error;
      }
    });
  }
  getStream() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.result)
        throw new errors_1.DeepgramUnknownError("Tried to get stream before making request", "");
      return this.result.body;
    });
  }
  getHeaders() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.result)
        throw new errors_1.DeepgramUnknownError("Tried to get headers before making request", "");
      return this.result.headers;
    });
  }
}
exports.SpeakClient = SpeakClient;
//# sourceMappingURL=SpeakClient.js.map
