"use client";
import PageHeader from "@/components/PageHeader";
import RequireSetup from "@/components/RequireSetup";
import { useDoLaterStore } from "@/store/useDoLaterStore";

export default function DoLaterPage() {
  const { items, remove } = useDoLaterStore();

  return (
    <RequireSetup>
      <section className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <PageHeader
          title="Do Later"
          subtitle="Questions you saved for revision"
          showBack
        />

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 p-10 text-center">
            <p className="text-sm text-slate-600">
              You haven’t saved any questions yet.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Use ⭐ “Do Later” from any topic to save questions here.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((q) => (
              <div
                key={q.id}
                className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 transition
                         hover:border-indigo-200 hover:bg-indigo-50/40"
              >
                {/* Left */}
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900">{q.title}</span>
                  <span className="text-xs text-slate-500">{q.topic}</span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium
                    ${
                      q.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : q.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {q.difficulty}
                  </span>

                  <a
                    href={q.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-indigo-600 hover:underline"
                  >
                    Open
                  </a>

                  {/* Remove */}
                  <button
                    type="button"
                    className="text-xs text-slate-400 hover:text-slate-600"
                    title="Remove from Do Later"
                    onClick={() => remove(q.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </RequireSetup>
  );
}
