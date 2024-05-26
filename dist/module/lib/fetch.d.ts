import type { Fetch } from "./types/Fetch";
export declare const resolveFetch: (customFetch?: Fetch) => Fetch;
export declare const fetchWithAuth: (apiKey: string, customFetch?: Fetch) => Fetch;
export declare const resolveResponse: () => Promise<{
  new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
  prototype: Response;
  error(): Response;
  redirect(url: string | URL, status?: number | undefined): Response;
}>;
//# sourceMappingURL=fetch.d.ts.map
