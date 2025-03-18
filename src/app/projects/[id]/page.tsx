import ProjectDetail from "@/pages/projects/[id]";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProjectDetail />;
}

// Generate static paths for all projects
import { projectsData } from "@/data/projects";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}
