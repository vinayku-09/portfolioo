import { z } from "zod";

// Project types
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string | null;
  repoUrl: string | null;
  techStack: string[] | null;
  featured: boolean | null;
}

export const insertProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  imageUrl: z.string().url(),
  projectUrl: z.string().url().optional().nullable(),
  repoUrl: z.string().url().optional().nullable(),
  techStack: z.array(z.string()).optional().nullable(),
  featured: z.boolean().optional().nullable(),
});

export type InsertProject = z.infer<typeof insertProjectSchema>;

// Skill types
export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number | null;
  icon: string | null;
}

export const insertSkillSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  proficiency: z.number().min(0).max(100).optional().nullable(),
  icon: z.string().optional().nullable(),
});

export type InsertSkill = z.infer<typeof insertSkillSchema>;

// Experience types
export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export const insertExperienceSchema = z.object({
  role: z.string().min(1),
  company: z.string().min(1),
  duration: z.string().min(1),
  description: z.string().min(1),
});

export type InsertExperience = z.infer<typeof insertExperienceSchema>;

// Education types
export interface Education {
  id: number;
  degree: string;
  institute: string;
  year: string;
  description?: string | null;
}

export const insertEducationSchema = z.object({
  degree: z.string().min(1),
  institute: z.string().min(1),
  year: z.string().min(1),
  description: z.string().optional().nullable(),
});

export type InsertEducation = z.infer<typeof insertEducationSchema>;

// Contact message types
export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date | null;
}

export const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
