import { dsaData } from "@/data/problem";
import slugify from "@/utils/slugify";
import TopicClient from "./topicClient";
import RequireSetup from "@/components/RequireSetup";

export function generateStaticParams() {
  return dsaData.map((topic) => ({
    slug: slugify(topic.title),
  }));
}
export default async function TopicPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const topic = dsaData.find((t) => slugify(t.title) === slug);

  if (!topic) {
    return <p className="p-6 text-sm text-slate-500">Topic not found</p>;
  }

  return (
    <RequireSetup>
      <TopicClient topic={topic} />
    </RequireSetup>
  );
}
