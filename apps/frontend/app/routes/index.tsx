import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
    <div className="container">
      <h1 className="title">
        Frontend <br />
        <span>Remix House Stack</span>
      </h1>
      <p>The API is {data?.ok ? "Running" : "Not Running"}</p>
      <p className="description">
        Built With <a href="https://turbo.build/repo">Turborepo</a> +{" "}
        <a href="https://remix.run/">Remix</a>
      </p>
    </div>
  );
}
