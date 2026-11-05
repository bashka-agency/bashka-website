// Workers static assets ignore the Range header and always answer 200 with the
// whole file, but Safari (iOS and macOS) only plays video from servers that
// answer Range requests with 206. The Cache API does honor Range, so video
// requests (routed here by run_worker_first) are served through it.
const worker = {
  async fetch(request, env) {
    const range = request.headers.get("Range");
    if (request.method !== "GET" || !range) {
      return env.ASSETS.fetch(request);
    }

    const asset = await env.ASSETS.fetch(request.url);
    if (asset.status !== 200) {
      return asset;
    }

    try {
      // Keying on the ETag means a deploy that replaces the file never serves a stale copy.
      const key = new URL(request.url);
      key.search = `etag=${encodeURIComponent(asset.headers.get("ETag") ?? "")}`;
      const rangedRequest = new Request(key, { headers: { Range: range } });
      const browserCacheControl = asset.headers.get("Cache-Control");

      let partial = await caches.default.match(rangedRequest);
      if (partial) {
        await asset.body?.cancel();
      } else {
        const headers = new Headers(asset.headers);
        headers.set("Cache-Control", "public, max-age=31536000, immutable");
        await caches.default.put(key, new Response(asset.body, { headers }));
        partial = await caches.default.match(rangedRequest);
      }

      if (partial) {
        const response = new Response(partial.body, partial);
        if (browserCacheControl) {
          response.headers.set("Cache-Control", browserCacheControl);
        } else {
          response.headers.delete("Cache-Control");
        }
        return response;
      }
    } catch (error) {
      console.error("Range request via Cache API failed", error);
    }

    // The Cache API is a no-op on *.workers.dev; serve the whole file as before.
    return env.ASSETS.fetch(request.url);
  },
};

export default worker;
