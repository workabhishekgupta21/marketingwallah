"use client";

import { useState } from "react";

export function FounderPhoto({ src, alt, initials = "AG" }: { src: string; alt: string; initials?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="founder-frame">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="founder-photo" onError={() => setFailed(true)} />
      ) : (
        <div className="founder-photo grid place-items-center bg-gradient-to-br from-plasma/30 to-aurora/20 text-4xl font-bold text-white">
          {initials}
        </div>
      )}
    </div>
  );
}
