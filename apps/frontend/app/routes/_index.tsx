import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import { Suspense } from "react";

import Link from "~/components/Link";
import { getHealth, getStreamingHealth } from "~/data/health";

export const loader = async () => {
  const health = getHealth();
  const streaming = getStreamingHealth();

  return defer({
    health: await health,
    streaming,
  });
};

const textClasses = "sm:pl-4 text-sm";

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="p-4 sm:rounded-md bg-slate-200">
      <h1 className="text-lg font-semibold mb-2 sm:mb-0">Remix House Stack</h1>
      <p className="sm:pl-4">
        Built With <Link to="https://turbo.build/repo">Turborepo</Link> +{" "}
        <Link to="https://remix.run/">Remix</Link>
      </p>
      <p className={clsx(textClasses)}>
        The API is {data.health.ok ? "Running" : "Not Running"}
      </p>
      <Suspense
        fallback={
          <p className={clsx(textClasses, "text-yellow-600")}>
            Loading streaming response, this will take a few seconds...
          </p>
        }
      >
        <Await
          resolve={data.streaming}
          errorElement={
            <p className={clsx(textClasses, "text-red-400")}>
              Unable to stream from API! Try restarting everything...
            </p>
          }
        >
          {(streaming) => {
            const { duration } = streaming;

            return (
              <p className={clsx(textClasses, "text-green-600")}>
                The API is streaming! Took {duration}.
              </p>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
