"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export default function EntryPage() {
  const router = useRouter();
  const isSetupDone = useUserStore((s) => s.isSetupDone);

  useEffect(() => {
    router.replace(isSetupDone ? "/dashboard" : "/setup");
  }, [isSetupDone, router]);

  return null;
}
