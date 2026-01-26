"use client";

import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  showBack = false,
}: PageHeaderProps) {
  const router = useRouter();

  return (
    <header className="mb-8">
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="flex h-8 w-8 items-center justify-center rounded-md
                       text-slate-500 hover:bg-indigo-50 hover:text-indigo-600
                       transition"
          >
            {/* Left arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  );
}
