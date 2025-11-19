import { createDirectus, rest, readItems } from "directus";

export interface ReleaseNote {
    id: number;
    Title: string;
    ReleaseDate: string;
    Contents: string;
}

export async function directus() {
    const directus = createDirectus("http://0.0.0.0:8055/").with(rest());
    return await directus.request<ReleaseNote[]>(readItems("ReleaseNote"));
}

export const layout = "layouts/base.tsx";

export default async function* () {
  const data = await directus();
  console.log(data);
  for (const page of data) {
    yield {
      url: `/${page.id}/`,
      ...page
    };
  }
}
