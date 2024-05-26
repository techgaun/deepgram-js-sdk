import { AbstractRestfulClient } from "./AbstractRestfulClient";
import { SpeakSchema, TextSource } from "../lib/types";
export declare class SpeakClient extends AbstractRestfulClient {
  result: undefined | Response;
  /**
   * @see https://developers.deepgram.com/reference/text-to-speech-api
   */
  request(source: TextSource, options?: SpeakSchema, endpoint?: string): Promise<SpeakClient>;
  getStream(): Promise<ReadableStream<Uint8Array> | null>;
  getHeaders(): Promise<Headers>;
}
//# sourceMappingURL=SpeakClient.d.ts.map
