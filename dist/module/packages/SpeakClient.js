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
import { AbstractRestfulClient } from "./AbstractRestfulClient";
import { DeepgramError, DeepgramUnknownError } from "../lib/errors";
import { appendSearchParams, isTextSource } from "../lib/helpers";
export class SpeakClient extends AbstractRestfulClient {
  /**
   * @see https://developers.deepgram.com/reference/text-to-speech-api
   */
  request(source, options, endpoint = "v1/speak") {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        let body;
        if (isTextSource(source)) {
          body = JSON.stringify(source);
        } else {
          throw new DeepgramError("Unknown transcription source type");
        }
        const speakOptions = Object.assign({ model: "aura-asteria-en" }, options);
        const url = new URL(endpoint, this.baseUrl);
        appendSearchParams(url.searchParams, speakOptions);
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
        throw new DeepgramUnknownError("Tried to get stream before making request", "");
      return this.result.body;
    });
  }
  getHeaders() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.result)
        throw new DeepgramUnknownError("Tried to get headers before making request", "");
      return this.result.headers;
    });
  }
}
//# sourceMappingURL=SpeakClient.js.map
