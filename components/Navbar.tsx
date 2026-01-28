"use client";

import ProgressBar from "@/components/ProgressBar";
import { dsaData } from "@/data/problem";
import { useCompletedStore } from "@/store/useCompletedStore";
import { useDoLaterStore } from "@/store/useDoLaterStore";
import { useUserStore } from "@/store/useUserStore";
import { capitalizeWords } from "@/utils/capitalize";
import Link from "next/link";

export default function Navbar() {
  const isSetupDone = useUserStore((s) => s.isSetupDone);
  const completed = useCompletedStore((state) => state.completedIds.length);
  const { name, role } = useUserStore();
  const doLaterCount = useDoLaterStore((state) => state.items.length);

  const total = dsaData.reduce((sum, topic) => sum + topic.problems.length, 0);
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center gap-10 px-6 py-4">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            DSA <span className="text-indigo-600">Progress</span>
          </h1>
        </Link>

        {isSetupDone && (
          <>
            {/* Progress */}
            <div className="ml-auto max-w-xs">
              <div className="flex items-center justify-end gap-3">
                <ProgressBar value={percentage} />
                <span className="text-sm font-semibold text-indigo-600 min-w-9 text-right">
                  {percentage}%
                </span>
              </div>
              <div className="mt-1 flex justify-end gap-6 text-xs text-slate-500">
                <span>{completed} solved</span>
                <span>{total - completed} remaining</span>
              </div>
            </div>

            {/* Do Later */}
            <Link href="/do-later" title="Do Later questions">
              <div className="group relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-indigo-50 transition cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-600 group-hover:text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.488-.412.864-.835.607L12 18.354l-4.523 2.742c-.423.257-.951-.119-.835-.607l1.285-5.385a.563.563 0 00-.182-.557L3.54 9.943c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                {doLaterCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {doLaterCount}
                  </span>
                )}
              </div>
            </Link>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-200 text-xl font-sans leading-none text-indigo-800">
                {name.charAt(0)}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-md font-medium text-slate-700">
                  {capitalizeWords(name)}
                </span>
                <span className="text-xs text-slate-500">{role}</span>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
