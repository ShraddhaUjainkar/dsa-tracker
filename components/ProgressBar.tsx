interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="h-1 rounded-full bg-slate-300/70">
        <div
          //   className="h-1 rounded-full bg-slate-700 transition-[width] duration-300"
          className="
            h-1 rounded-full
            bg-linear-to-r from-indigo-500 via-indigo-700 to-violet-600
            transition-[width] duration-300
          "
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
