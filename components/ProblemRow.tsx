import { Topic } from "@/data/problem";
import ProgressBar from "@/components/ProgressBar";
import slugify from "@/utils/slugify";
import Link from "next/link";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const total = topic.problems.length;
  const easy = topic.problems.filter((p) => p.difficulty === "Easy").length;
  const medium = topic.problems.filter((p) => p.difficulty === "Medium").length;
  const hard = topic.problems.filter((p) => p.difficulty === "Hard").length;

  const completed = 1; // placeholder
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
          <h3 className="text-lg font-semibold text-slate-900 leading-snug">
            {topic.title}
          </h3>

          <span
            className="
              text-slate-300 transition-transform duration-300
              group-hover:translate-x-1 group-hover:text-slate-500
            "
          >
            →
          </span>
        </div>

        {/* Meta */}
        <p className="mt-1 text-sm text-slate-500">{total} questions</p>

        {/* Difficulty (unchanged, as requested) */}
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-medium text-slate-700">Easy</span>
            <span className="text-slate-500">{easy}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="font-medium text-slate-700">Medium</span>
            <span className="text-slate-500">{medium}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="font-medium text-slate-700">Hard</span>
            <span className="text-slate-500">{hard}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-1 flex items-center justify-between text-[11px]">
            <span className="font-medium text-slate-500">Progress</span>
            <span className="font-semibold text-indigo-700">{percentage}%</span>
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
