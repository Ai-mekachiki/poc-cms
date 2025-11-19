import { directus } from "./index.page.ts";

Deno.test("Directus", async () => {
    console.log(await directus());
});
