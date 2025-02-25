"use server";

import { headers } from "next/headers";

export const serverActionFetch = async () => {
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const host =
    headersList.get("x-forwarded-host") ||
    headersList.get("host") ||
    "beta.popstarz.ai";

  const domain = `${protocol}://${host}`;

  const res = await fetch(`${domain}/api/route-handler/example1`);
  const data = await res.json();

  return data;
};
