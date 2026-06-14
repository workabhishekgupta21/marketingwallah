"use client";

import { useEffect } from "react";

export function InteractiveEffects() {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const glowTarget = (event.target as Element | null)?.closest<HTMLElement>("[data-glow-card]");
      if (glowTarget) {
        const rect = glowTarget.getBoundingClientRect();
        glowTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
        glowTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
      }

      const magneticTarget = (event.target as Element | null)?.closest<HTMLElement>("[data-magnetic]");
      if (!magneticTarget) return;
      const rect = magneticTarget.getBoundingClientRect();
      const strength = Number(magneticTarget.dataset.magneticStrength || 0.22);
      const x = (event.clientX - rect.left - rect.width / 2) * strength;
      const y = (event.clientY - rect.top - rect.height / 2) * strength;
      magneticTarget.style.setProperty("--mx", `${x}px`);
      magneticTarget.style.setProperty("--my", `${y}px`);
    };

    const handlePointerOut = (event: PointerEvent) => {
      const magneticTarget = (event.target as Element | null)?.closest<HTMLElement>("[data-magnetic]");
      if (!magneticTarget) return;
      magneticTarget.style.setProperty("--mx", "0px");
      magneticTarget.style.setProperty("--my", "0px");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
    };
  }, []);

  return null;
}
