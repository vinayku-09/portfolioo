import { storage } from "@/lib/storage";
import { SkillsClient } from "./skills-client";

export const metadata = {
  title: "Skills | Vinay Kumar Singh",
  description: "Proficiency levels in various development vectors and system protocols.",
};

export default async function SkillsPage() {
  const skills = await storage.getSkills();
  
  return <SkillsClient skills={skills} />;
}
