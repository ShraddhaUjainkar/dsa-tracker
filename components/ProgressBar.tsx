interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-28">
      <div className="h-1 rounded-full bg-slate-300/70">
        <div
          className="h-1 rounded-full bg-slate-700 transition-[width] duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
