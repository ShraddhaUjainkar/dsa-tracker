"use client";
import ProgressBar from "@/components/ProgressBar";
import { dsaData } from "@/data/problem";
import { useCompletedStore } from "@/store/useCompletedStore";
import { useDoLaterStore } from "@/store/useDoLaterStore";
import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";

export default function Navbar() {
  const isSetupDone = useUserStore((s) => s.isSetupDone);
  const completed = useCompletedStore((state) => state.completedIds.length);
  const { name, role } = useUserStore();

  // total questions across all topics
  const total = dsaData.reduce((sum, topic) => sum + topic.problems.length, 0);
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  const doLaterCount = useDoLaterStore((state) => state.items.length);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center gap-10 px-6 py-4">
        {/* Title + Subtitle */}
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg
               bg-indigo-50 text-indigo-600"
          >
            {/* Chart / Progress Icon */}
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
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 4 4 5-5" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <Link href={"/dashboard"}>
              <h1 className="text-lg font-semibold tracking-tight text-slate-900">
                DSA <span className="text-indigo-600">Progress</span>
              </h1>
              <span className="mt-0.5 text-xs text-slate-500">
                LeetCode · GFG Tracker
              </span>
            </Link>
          </div>
        </div>
        {isSetupDone && (
          <>
            {/* Progress Section */}
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

            {/* Do Later Icon */}
            <div className="relative flex items-center justify-center">
              <Link href="/do-later" title="Do Later questions">
                <div
                  className="group relative flex h-9 w-9 items-center justify-center rounded-full
               hover:bg-indigo-50 transition cursor-pointer"
                >
                  {/* Star Icon (SVG – no library needed) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5 text-slate-600 group-hover:text-indigo-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.488-.412.864-.835.607L12 18.354l-4.523 2.742c-.423.257-.951-.119-.835-.607l1.285-5.385a.563.563 0 00-.182-.557L3.54 9.943c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>

                  {doLaterCount > 0 && (
                    <span
                      className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center
                   rounded-full bg-indigo-600 px-1 text-[10px] font-semibold text-white"
                    >
                      {doLaterCount}
                    </span>
                  )}

                  {/* icon here */}
                </div>
              </Link>
            </div>

            {/* User */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full
               bg-indigo-100 text-sm font-semibold text-indigo-700"
              >
                {name.charAt(0)}
              </div>

              {/* Name + role */}
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-medium text-slate-800">
                  {name}
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
