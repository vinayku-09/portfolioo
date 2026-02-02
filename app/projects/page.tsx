import { storage } from "@/lib/storage";
import { ProjectsClient } from "./projects-client";

export const metadata = {
  title: "Projects | Vinay Kumar Singh",
  description: "Archive of completed builds, experiments, and system architectures.",
};

export default async function ProjectsPage() {
  const projects = await storage.getProjects();
  
  return <ProjectsClient initialProjects={projects} />;
}
