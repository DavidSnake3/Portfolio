"use client";

import { useEffect, useState } from "react";

/** Live clock in David's timezone, so recruiters know when he is online. */
export function LocalTime({ timezone, locale }: { timezone: string; locale: string }) {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(locale, { timeZone: timezone, hour: "numeric", minute: "2-digit" });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timezone, locale]);
  return <span className="tabular-nums">{now ?? "—"}</span>;
}
