"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export function useRequireSetup() {
  const router = useRouter();
  const pathname = usePathname();
  const isSetupDone = useUserStore((s) => s.isSetupDone);
  const hasHydrated = useUserStore((s) => s.hasHydrated);

  useEffect(() => {
    if (!hasHydrated) return;

    //  Setup NOT done → allow ONLY /setup
    if (!isSetupDone) {
      if (pathname !== "/setup") {
        router.replace("/setup");
      }
      return;
    }

    //  Setup DONE → block /setup only
    if (pathname === "/setup") {
      router.replace("/dashboard");
    }
  }, [isSetupDone, pathname, router]);

  return isSetupDone;
}
