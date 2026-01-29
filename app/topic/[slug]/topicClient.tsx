"use client";

import { Topic, Problem, Difficulty } from "@/data/problem";
import { useDoLaterStore } from "@/store/useDoLaterStore";
import { useCompletedStore } from "@/store/useCompletedStore";
import PageHeader from "@/components/PageHeader";
import { LeetCodeIcon, GFGIcon, YouTubeIcon, TUFIcon } from "@/components/icons";

// Modern difficulty section config with gradients
const difficultyConfig: Record<Difficulty, { 
  label: string; 
  gradient: string; 
  accentColor: string;
  iconBg: string;
  icon: string;
}> = {
  Easy: {
    label: "Easy",
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    icon: "🌱",
  },
  Medium: {
    label: "Medium",
    gradient: "from-amber-500 to-orange-500",
    accentColor: "text-amber-600",
    iconBg: "bg-amber-100",
    icon: "⚡",
  },
  Hard: {
    label: "Hard",
    gradient: "from-rose-500 to-red-600",
    accentColor: "text-rose-600",
    iconBg: "bg-rose-100",
    icon: "🔥",
  },
};

// Modern Problem card component
function ProblemCard({ 
  problem, 
  topicTitle, 
  saved, 
  completed, 
  toggleComplete, 
  toggleLater,
  index,
}: { 
  problem: Problem; 
  topicTitle: string;
  saved: boolean; 
  completed: boolean; 
  toggleComplete: (id: string) => void; 
  toggleLater: (item: any) => void;
  index: number;
}) {
  return (
    <div
      className="group relative flex items-center justify-between
                 rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm
                 px-5 py-4 transition-all duration-300
                 hover:border-indigo-200 hover:bg-white
                 hover:shadow-[0_8px_30px_-12px_rgba(99,102,241,0.25)]
                 hover:-translate-y-0.5"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* Custom checkbox */}
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleComplete(problem.id)}
            className="peer sr-only"
          />
          <div className={`
            w-5 h-5 rounded-lg border-2 transition-all duration-200
            ${completed 
              ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-transparent' 
              : 'border-slate-300 group-hover:border-indigo-400'
            }
            flex items-center justify-center
          `}>
            {completed && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </label>

        {/* Problem number & title */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-slate-400 w-6">
            #{index + 1}
          </span>
          <span
            className={`text-sm font-medium transition-colors duration-200
              ${completed
                ? "line-through text-slate-400"
                : "text-slate-700 group-hover:text-slate-900"
              }`}
          >
            {problem.title}
          </span>
          
          {/* Solved badge */}
          {completed && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm">
              ✓ Solved
            </span>
          )}
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        {/* Platform links */}
        <div className="flex items-center gap-1.5 mr-2">
          {problem.leetCodeLink && (
            <a
              href={problem.leetCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Solve on LeetCode"
              className="flex items-center justify-center w-8 h-8 rounded-lg 
                         bg-gradient-to-br from-orange-50 to-amber-50
                         text-orange-500 hover:from-orange-100 hover:to-amber-100
                         transition-all duration-200 hover:scale-110 hover:shadow-md"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
          )}

          {problem.gfgLink && (
            <a
              href={problem.gfgLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Solve on GeeksforGeeks"
              className="flex items-center justify-center w-8 h-8 rounded-lg 
                         bg-gradient-to-br from-emerald-50 to-green-50
                         text-emerald-600 hover:from-emerald-100 hover:to-green-100
                         transition-all duration-200 hover:scale-110 hover:shadow-md"
            >
              <GFGIcon className="w-4 h-4" />
            </a>
          )}

          {problem.youtubeLink && (
            <a
              href={problem.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Watch Tutorial"
              className="flex items-center justify-center w-8 h-8 rounded-lg 
                         bg-gradient-to-br from-red-50 to-rose-50
                         text-red-500 hover:from-red-100 hover:to-rose-100
                         transition-all duration-200 hover:scale-110 hover:shadow-md"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
          )}

          {problem.tufLink && (
            <a
              href={problem.tufLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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

        {/* Save button */}
        <button
          type="button"
          title={saved ? "Remove from saved" : "Save for later"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleLater({
              id: problem.id,
              title: problem.title,
              difficulty: problem.difficulty,
              topic: topicTitle,
              gfgLink: problem.gfgLink,
              leetCodeLink: problem.leetCodeLink,
              youtubeLink: problem.youtubeLink,
              tufLink: problem.tufLink,
            });
          }}
          className={`
            flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium
            transition-all duration-200
            ${saved
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-200"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }
          `}
        >
          {saved ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default function TopicClient({ topic }: { topic: Topic }) {
  const { toggle: toggleLater, isSaved } = useDoLaterStore();
  const { toggleComplete, isCompleted } = useCompletedStore();

  // Group problems by difficulty
  const groupedProblems: Record<Difficulty, Problem[]> = {
    Easy: [],
    Medium: [],
    Hard: [],
  };

  topic.problems.forEach((problem) => {
    groupedProblems[problem.difficulty].push(problem);
  });

  const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* Header */}
      <PageHeader
        title={topic.title}
        subtitle={`${topic.problems.length} questions · mark as you solve`}
        showBack
      />

      {/* Difficulty Sections */}
      <div className="space-y-10">
        {difficulties.map((difficulty) => {
          const problems = groupedProblems[difficulty];
          if (problems.length === 0) return null;

          const config = difficultyConfig[difficulty];

          return (
            <div key={difficulty} className="relative">
              {/* Difficulty Header - Modern Card Style */}
              <div className="relative mb-5">
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${config.gradient} rounded-2xl opacity-10 blur-xl
                `} />
                <div className={`
                  relative flex items-center justify-between px-6 py-2 rounded-2xl
                  bg-gradient-to-r ${config.gradient} text-white
                  shadow-lg
                `}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{config.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold">{config.label}</h3>
                      <p className="text-sm text-white/80">
                        {problems.length} {problems.length === 1 ? "problem" : "problems"}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-2xl font-bold">
                        {problems.filter(p => isCompleted(p.id)).length}
                      </span>
                      <span className="text-white/60">/{problems.length}</span>
                    </div>
                    <div className="w-16 h-16 relative">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18" cy="18" r="15"
                          fill="none"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="3"
                        />
                        <circle
                          cx="18" cy="18" r="15"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeDasharray={`${(problems.filter(p => isCompleted(p.id)).length / problems.length) * 94.2} 94.2`}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem List */}
              <div className="space-y-2 pl-2">
                {problems.map((problem, index) => (
                  <ProblemCard
                    key={problem.id}
                    problem={problem}
                    topicTitle={topic.title}
                    saved={isSaved(problem.id)}
                    completed={isCompleted(problem.id)}
                    toggleComplete={toggleComplete}
                    toggleLater={toggleLater}
                    index={index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
