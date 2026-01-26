import { dsaData } from "@/data/problem";
import TopicCard from "@/components/ProblemRow";
import PageHeader from "@/components/PageHeader";
import RequireSetup from "@/components/RequireSetup";

export default function RoadmapPage() {
  return (
    <RequireSetup>
      <section className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <PageHeader
          title="Topics"
          subtitle="Track your progress topic by topic"
        />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dsaData.map((topic) => {
            return <TopicCard key={topic.title} topic={topic} />;
          })}
        </div>
      </section>
    </RequireSetup>
  );
}
