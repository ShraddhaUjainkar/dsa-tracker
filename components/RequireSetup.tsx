"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useRequireSetup } from "@/hooks/useRequireSetup";

interface RequireSetupProps {
  children: ReactNode;
}

export default function RequireSetup({ children }: RequireSetupProps) {
  const pathname = usePathname();
  const isSetupDone = useRequireSetup();

  const isSetupPage = pathname === "/setup";

  /**
   * Block rendering when:
   * - setup is NOT done
   * - AND current page is NOT /setup
   */
  if (!isSetupDone && !isSetupPage) {
    return <div className="h-screen overflow-hidden" />;
  }

  return <>{children}</>;
}
