import { storage } from "@/lib/storage";
import { EducationClient } from "./education-client";

export const metadata = {
  title: "Education | Vinay Kumar Singh",
  description: "Development history of core knowledge systems and academic certifications.",
};

export default async function EducationPage() {
  const education = await storage.getEducation();
  
  return <EducationClient education={education} />;
}
