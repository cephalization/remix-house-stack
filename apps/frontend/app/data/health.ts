type Health = {
  ok: boolean;
  error?: Error;
};

const HEALTH_API = "http://localhost:5001/healthz";
const SLOW_HEALTH_API = "http://localhost:5001/delayedhealth";

export const getHealth = async () =>
  (await (await fetch(HEALTH_API)).json()) as Health;

export const getStreamingHealth = async () =>
  (await (await fetch(SLOW_HEALTH_API)).json()) as Health & {
    duration: string;
  };
