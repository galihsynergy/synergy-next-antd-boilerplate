import { headers } from "next/headers";
import ClientRouteHandler from "./view/presentation/ClientRouteHandler";

const serverSideRouterHandlerFetch = async () => {
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

const RouteHandlerSimulation = async () => {
  const res = await Promise.all([
    serverSideRouterHandlerFetch(),
    serverSideRouterHandlerFetch(),
    serverSideRouterHandlerFetch(),
    serverSideRouterHandlerFetch(),
    serverSideRouterHandlerFetch(),
  ]);

  console.log(res, ">?full");
  return (
    <div>
      <h1>This is router handler simulation</h1>
      {Array.isArray(res) &&
        res.length > 0 &&
        "This text is server component fetching at top root (RSC)"}
      <ClientRouteHandler />
    </div>
  );
};

export default RouteHandlerSimulation;
