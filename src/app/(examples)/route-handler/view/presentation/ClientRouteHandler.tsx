"use client";

import { useEffect, useState } from "react";
import { serverActionFetch } from "../../repository/server";
import AppButton from "@/components/Reusable/AppButton";

const ClientRouteHandler = () => {
  const [loadingServerAction, setLoadingServerAction] = useState(false);

  const [loadingRouteHandler, setLoadingRouteHandler] = useState(false);

  const [codeToggle, setCodeToggle] = useState(false);

  const onRenderFetch = async () => {
    setLoadingServerAction(true);
    const res = await Promise.all([
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
    ]);
    console.log("SERVER ACTION FETCH", res);
    setLoadingServerAction(false);
  };

  const serverHandlerOnClient = async () => {
    const res = await fetch("/api/route-handler/example1");
    const data = await res.json();
    return data;
  };

  const onServerHandlerClicked = async () => {
    setLoadingRouteHandler(true);
    const res = await Promise.all([
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
    ]);
    console.log("SERVER HANDLER ON CLIENT", res);
    setLoadingRouteHandler(false);
  };

  useEffect(() => {
    onRenderFetch();

    setTimeout(() => {
      onServerHandlerClicked();
    }, 2000);
  }, []);
  return (
    <div className="mt-[30px]">
      This is client route handler
      <div className="flex flex-col gap-[10px]">
        <div className="mt-[20px]">
          <h1>
            At very first render, this component will do server action fetching
            with promise all to simulate 10 Fetching with promise all
          </h1>

          <AppButton loading={loadingServerAction}>
            Client Server Action Loading
          </AppButton>

          <div className="mt-[12px]">
            <button
              className="underline"
              onClick={() => {
                setCodeToggle(!codeToggle);
              }}
            >
              Click to See code
            </button>
            {codeToggle && (
              <pre>
                {`
// server action
"use server";

import { headers } from "next/headers";

export const serverActionFetch = async () => {
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const host =
    headersList.get("x-forwarded-host") ||
    headersList.get("host") ||
    "beta.popstarz.ai";


  const res = await fetch('/api/route-handler/example1');
  const data = await res.json();

  return data;
};

// fetcher


  const onRenderFetch = async () => {
    setLoadingServerAction(true);
    const res = await Promise.all([
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
      serverActionFetch(),
    ]);
    console.log("SERVER ACTION FETCH", res);
    setLoadingServerAction(false);
  };

          `}
              </pre>
            )}
          </div>
        </div>
        <div>
          <h1>
            After 2s since its rendered, we run fetching with server handler and
            promise all to also 10 endpoints
          </h1>
          <AppButton loading={loadingRouteHandler}>
            After 2s, This will fetch Server Handler Loading
          </AppButton>
          <div className="mt-[12px]">
            <button
              className="underline"
              onClick={() => {
                setCodeToggle(!codeToggle);
              }}
            >
              Click to See code
            </button>
            {codeToggle && (
              <pre>
                {`
 const serverHandlerOnClient = async () => {
    const res = await fetch("/api/route-handler/example1");
    const data = await res.json();
    return data;
  };

  const onServerHandlerClicked = async () => {
    setLoadingRouteHandler(true);
    const res = await Promise.all([
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
      serverHandlerOnClient(),
    ]);
    console.log("SERVER HANDLER ON CLIENT", res);
    setLoadingRouteHandler(false);
  };
          `}
              </pre>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <h1>
          Hypothesis: To prove that route handler is run in parallel, the server
          handler fetching will be finished first even if it's run late after 2s
          component rendered and without blocking from the server action. Also
          we do 10 fetching, with server action it should resolve 1 one by 1
          request since it's serial
        </h1>

        <h1 className="mt-[20px]">
          See network tab, focus on: if initiator is ClientRouteHandler.ts then
          it's route handler fetching.
          <br />
          if initiator is server.ts then it's server action fetching.
        </h1>
      </div>
      <AppButton
        onClick={() => {
          window.location.reload();
        }}
      >
        Re Run
      </AppButton>
    </div>
  );
};

export default ClientRouteHandler;
