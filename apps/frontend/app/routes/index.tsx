import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Link from "~/components/Link";

type Health = {
  ok: boolean;
  error?: Error;
};

const API = "http://localhost:5001/healthz";

export const loader: LoaderFunction = async () => {
  try {
    const res = await fetch(API);

    return json((await res.json()) as Health);
  } catch (e) {
    return json({ ok: false, error: e });
  }
};

export default function Index() {
  const data = useLoaderData<Health>();

  return (
    <div className="p-4 sm:rounded-md bg-slate-200">
      <h1 className="text-lg font-semibold mb-2 sm:mb-0">Remix House Stack</h1>
      <p className="sm:pl-4">
        Built With <Link to="https://turbo.build/repo">Turborepo</Link> +{" "}
        <Link to="https://remix.run/">Remix</Link>
      </p>
      <p className="sm:pl-4 text-sm">
        The API is {data?.ok ? "Running" : "Not Running"}
      </p>
    </div>
  );
}
