import assert from "node:assert/strict";
import test from "node:test";
import worker from "./worker.ts";

test("deployment-prefixed stylesheet requests resolve to the static asset path", async () => {
  let assetPath = "";
  const response = await worker.fetch(
    new Request("https://qrati.com/connect/marko-example/styles.css"),
    {
      ASSETS: {
        fetch: async (request) => {
          assetPath = new URL(request instanceof Request ? request.url : request).pathname;
          return new Response("body", { headers: { "content-type": "text/css" } });
        },
      },
    },
  );

  assert.equal(response.status, 200);
  assert.equal(assetPath, "/styles.css");
});
