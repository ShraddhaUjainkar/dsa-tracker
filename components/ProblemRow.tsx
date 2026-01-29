"use client";
import { Topic } from "@/data/problem";
import ProgressBar from "@/components/ProgressBar";
import slugify from "@/utils/slugify";
import Link from "next/link";
import { useCompletedStore } from "@/store/useCompletedStore";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const total = topic.problems.length;
  const completedIds = useCompletedStore((state) => state.completedIds);

  // Count problems and solved per difficulty
  const easyProblems = topic.problems.filter((p) => p.difficulty === "Easy");
  const mediumProblems = topic.problems.filter((p) => p.difficulty === "Medium");
  const hardProblems = topic.problems.filter((p) => p.difficulty === "Hard");

  const easySolved = easyProblems.filter((p) => completedIds.includes(p.id)).length;
  const mediumSolved = mediumProblems.filter((p) => completedIds.includes(p.id)).length;
  const hardSolved = hardProblems.filter((p) => completedIds.includes(p.id)).length;

  const completed = topic.problems.filter((p) =>
    completedIds.includes(p.id),
  ).length;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  const slug = slugify(topic.title);

  return (
    <Link href={`/topic/${slug}`} className="group block">
      <div
        className="
          relative rounded-xl border border-slate-200 bg-white p-6
          transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-lg hover:border-slate-300
        "
      >
        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-md font-semibold text-slate-800 leading-snug">
            {topic.title}
          </h3>
        </div>

        {/* Meta */}
        <p className="mt-1 text-sm text-slate-500">{total} questions</p>

        {/* Difficulty with solved counts */}
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-slate-600">Easy</span>
            <span className={`text-slate-500 ${easySolved === easyProblems.length && easyProblems.length > 0 ? 'text-emerald-600 font-semibold' : ''}`}>
              {easySolved}/{easyProblems.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="text-sm text-slate-600">Medium</span>
            <span className={`text-slate-500 ${mediumSolved === mediumProblems.length && mediumProblems.length > 0 ? 'text-amber-600 font-semibold' : ''}`}>
              {mediumSolved}/{mediumProblems.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="text-sm text-slate-600">Hard</span>
            <span className={`text-slate-500 ${hardSolved === hardProblems.length && hardProblems.length > 0 ? 'text-rose-600 font-semibold' : ''}`}>
              {hardSolved}/{hardProblems.length}
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-1 flex items-center justify-between text-[11px]">
            <span className="text-sm text-slate-600">Progress</span>
            <span className="text-sm font-semibold text-indigo-700">
              {percentage}%
            </span>
          </div>

          <ProgressBar value={percentage} />
        </div>

        {/* Soft hover surface */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-xl
            ring-1 ring-transparent transition
            group-hover:ring-slate-200
          "
        />
      </div>
    </Link>
  );
}
