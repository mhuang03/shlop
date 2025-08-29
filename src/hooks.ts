import type { Reroute } from "@sveltejs/kit";
import { decryptSlug } from "$lib/link_utils";

export const reroute: Reroute = async ({ url }) => {
  if (url.pathname == "/") return "/"; // allow root path through

  // for all other paths, we expect only a base64 slug, e.g. /jF9DAw3tYFGES
  // this will be decoded and rewritten to a path
  // the slugs are AES encrypted paths
  const slug = url.pathname.slice(1);
  try {
    return await decryptSlug(slug);
  } catch (e) {
    return "/404";
  }
};
