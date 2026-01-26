"use client";

import { Topic } from "@/data/problem";
import { useDoLaterStore } from "@/store/useDoLaterStore";
import { useCompletedStore } from "@/store/useCompletedStore";
import PageHeader from "@/components/PageHeader";

export default function TopicClient({ topic }: { topic: Topic }) {
  const { toggle: toggleLater, isSaved } = useDoLaterStore();
  const { toggleComplete, isCompleted } = useCompletedStore();

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Header */}
      <PageHeader
        title={topic.title}
        subtitle={`${topic.problems.length} questions · mark as you solve`}
        showBack
      />

      {/* Question List */}
      <div className="space-y-2">
        {topic.problems.map((problem) => {
          const saved = isSaved(problem.id);
          const completed = isCompleted(problem.id);

          return (
            <label
              key={problem.id}
              className="group flex cursor-pointer items-center justify-between
                         rounded-lg border border-slate-200 bg-white px-4 py-3
                         transition-all hover:-translate-y-0.5
                         hover:border-indigo-300
                         hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.15)]"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => toggleComplete(problem.id)}
                  className="h-4 w-4 rounded border-slate-300
                             text-indigo-600 focus:ring-indigo-500"
                />

                <span
                  className={`text-sm transition-colors
                    ${
                      completed
                        ? "line-through text-slate-400"
                        : "text-slate-800 group-hover:text-slate-900"
                    }`}
                >
                  {problem.title}
                </span>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium
                    ${
                      problem.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : problem.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                >
                  {problem.difficulty}
                </span>

                <a
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-indigo-600 hover:underline"
                >
                  Open
                </a>

                <button
                  type="button"
                  title={saved ? "Saved for later" : "Mark to do later"}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    toggleLater({
                      id: problem.id,
                      title: problem.title,
                      difficulty: problem.difficulty,
                      topic: topic.title,
                      link: problem.link,
                    });
                  }}
                  className={`
                    flex items-center gap-1 rounded-md px-2 py-1 text-xs transition
                    ${
                      saved
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                    }
                  `}
                >
                  {saved ? "★ Saved" : "☆ Later"}
                </button>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}
