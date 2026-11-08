"use client";

import { useEffect, useState } from "react";

/** Live clock in David's timezone, so recruiters know when he is online. */
export function LocalTime({ timezone }: { timezone: string }) {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: timezone, hour: "2-digit", minute: "2-digit", hour12: true });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timezone]);
  return <span className="font-mono">Costa Rica · {now ?? "—"}</span>;
}
