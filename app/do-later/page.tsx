"use client";

import PageHeader from "@/components/PageHeader";
import RequireSetup from "@/components/RequireSetup";
import { useDoLaterStore, DoLaterItem, Difficulty } from "@/store/useDoLaterStore";
import { LeetCodeIcon, GFGIcon, YouTubeIcon, TUFIcon } from "@/components/icons";

// Difficulty section config matching topicClient
const difficultyConfig: Record<Difficulty, { 
  label: string; 
  gradient: string; 
  icon: string;
}> = {
  Easy: {
    label: "Easy",
    gradient: "from-emerald-500 to-teal-600",
    icon: "🌱",
  },
  Medium: {
    label: "Medium",
    gradient: "from-amber-500 to-orange-500",
    icon: "⚡",
  },
  Hard: {
    label: "Hard",
    gradient: "from-rose-500 to-red-600",
    icon: "🔥",
  },
};

// Problem card component matching topicClient style
function SavedProblemCard({ 
  item, 
  index,
  onRemove,
}: { 
  item: DoLaterItem; 
  index: number;
  onRemove: (id: string) => void;
}) {
  return (
    <div
      className="group relative flex items-center justify-between
                 rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm
                 px-5 py-4 transition-all duration-300
                 hover:border-indigo-200 hover:bg-white
                 hover:shadow-[0_8px_30px_-12px_rgba(99,102,241,0.25)]
                 hover:-translate-y-0.5"
    >
      {/* Left side */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-medium text-slate-400 w-6">
          #{index + 1}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
            {item.title}
          </span>
          <span className="text-xs text-slate-400">{item.topic}</span>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        {/* Platform links */}
        <div className="flex items-center gap-1.5 mr-2">
          {item.leetCodeLink && (
            <a
              href={item.leetCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Solve on LeetCode"
              className="flex items-center justify-center w-8 h-8 rounded-lg 
                         bg-gradient-to-br from-orange-50 to-amber-50
                         text-orange-500 hover:from-orange-100 hover:to-amber-100
                         transition-all duration-200 hover:scale-110 hover:shadow-md"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
          )}

          {item.gfgLink && (
            <a
              href={item.gfgLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Solve on GeeksforGeeks"
              className="flex items-center justify-center w-8 h-8 rounded-lg 
                         bg-gradient-to-br from-emerald-50 to-green-50
                         text-emerald-600 hover:from-emerald-100 hover:to-green-100
                         transition-all duration-200 hover:scale-110 hover:shadow-md"
            >
              <GFGIcon className="w-4 h-4" />
            </a>
          )}

          {item.youtubeLink && (
            <a
              href={item.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch Tutorial"
              className="flex items-center justify-center w-8 h-8 rounded-lg 
                         bg-gradient-to-br from-red-50 to-rose-50
                         text-red-500 hover:from-red-100 hover:to-rose-100
                         transition-all duration-200 hover:scale-110 hover:shadow-md"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
          )}

          {item.tufLink && (
            <a
              href={item.tufLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Read on Take U Forward"
              className="flex items-center justify-center w-8 h-8 rounded-lg 
                         bg-gradient-to-br from-violet-50 to-purple-50
                         text-violet-600 hover:from-violet-100 hover:to-purple-100
                         transition-all duration-200 hover:scale-110 hover:shadow-md"
            >
              <TUFIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Remove button */}
        <button
          type="button"
          title="Remove from saved"
          onClick={() => onRemove(item.id)}
          className="flex items-center justify-center w-8 h-8 rounded-lg 
                     bg-slate-100 text-slate-400 hover:bg-red-100 hover:text-red-500
                     transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function DoLaterPage() {
  const { items, remove } = useDoLaterStore();

  // Group items by difficulty
  const groupedItems: Record<Difficulty, DoLaterItem[]> = {
    Easy: [],
    Medium: [],
    Hard: [],
  };

  items.forEach((item) => {
    groupedItems[item.difficulty].push(item);
  });

  const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

  return (
    <RequireSetup>
      <section className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <PageHeader
          title="Saved for Later"
          subtitle={`${items.length} questions saved for revision`}
          showBack
        />

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
            <div className="mb-4 text-5xl">📚</div>
            <p className="text-lg font-medium text-slate-600">
              No saved questions yet
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Click the bookmark icon on any problem to save it here
            </p>
          </div>
        ) : (
          /* Difficulty Sections */
          <div className="space-y-10">
            {difficulties.map((difficulty) => {
              const problemItems = groupedItems[difficulty];
              if (problemItems.length === 0) return null;

              const config = difficultyConfig[difficulty];

              return (
                <div key={difficulty} className="relative">
                  {/* Difficulty Header */}
                  <div className="relative mb-5">
                    <div className={`
                      absolute inset-0 bg-gradient-to-r ${config.gradient} rounded-2xl opacity-10 blur-xl
                    `} />
                    <div className={`
                      relative flex items-center justify-between px-6 py-2 rounded-2xl
                      bg-gradient-to-r ${config.gradient} text-white shadow-lg
                    `}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{config.icon}</span>
                        <div>
                          <h3 className="text-lg font-bold">{config.label}</h3>
                          <p className="text-sm text-white/80">
                            {problemItems.length} {problemItems.length === 1 ? "problem" : "problems"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Problem List */}
                  <div className="space-y-2 pl-2">
                    {problemItems.map((item, index) => (
                      <SavedProblemCard
                        key={item.id}
                        item={item}
                        index={index}
                        onRemove={remove}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </RequireSetup>
  );
}
