import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <PageHeader
        title="About"
        subtitle="Why this DSA Progress Tracker exists"
      />

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>
          <strong className="text-slate-800">DSA Progress</strong> is a simple,
          focused tool built to help developers track their Data Structures and
          Algorithms practice without relying on static Excel sheets or notes.
        </p>

        <p>
          While preparing for interviews, it’s easy to lose track of what you’ve
          solved, what needs revision, and how far you’ve actually progressed.
          This project solves that problem by giving you a clear roadmap,
          progress indicators, and a dedicated space to save questions for
          later.
        </p>

        <p>
          The app is intentionally kept lightweight — no logins, no
          distractions, and no unnecessary features. Your progress is stored
          locally, so you can focus entirely on learning and consistency.
        </p>

        <p>
          This project is built using modern frontend tools like{" "}
          <span className="font-medium text-slate-800">
            Next.js, React, TypeScript, Tailwind CSS
          </span>{" "}
          and state management with Zustand.
        </p>

        <p>
          If you’re serious about improving your problem-solving skills and want
          a clean, distraction-free way to track your journey, this tool is for
          you.
        </p>
      </div>
    </section>
  );
}
