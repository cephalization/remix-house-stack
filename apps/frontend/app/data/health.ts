import { API_HOST } from "./api";

type Health = {
  ok: boolean;
  error?: Error;
};

type StreamingHealth = Health & {
  duration: string;
};

const HEALTH_API = `${API_HOST}/healthz`;
const SLOW_HEALTH_API = `${API_HOST}/delayedhealth`;

export const getHealth = async (): Promise<Health> => {
  try {
    return (await (await fetch(HEALTH_API)).json()) as Health;
  } catch (e) {
    // remix non-deferred loader data will blow up the server if an error is thrown
    return {
      ok: false,
      error: new Error("Could not connect to api"),
    };
  }
};

export const getStreamingHealth = async (): Promise<StreamingHealth> => {
  try {
    return (await (await fetch(SLOW_HEALTH_API)).json()) as Health & {
      duration: string;
    };
  } catch (e) {
    // deferred remix loader data will fallback to a suspense error component
    // when errors are thrown
    throw new Error("Could not connect to slow health api");
  }
};
