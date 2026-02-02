import type { 
  Project, InsertProject,
  Skill, InsertSkill,
  Experience, InsertExperience,
  Education, InsertEducation,
  ContactMessage, InsertContactMessage
} from '@/shared/schema';

// In-memory storage for demo purposes
// In production, replace with actual database (Drizzle + PostgreSQL)
class MemoryStorage {
  private projects: Project[] = [];
  private skills: Skill[] = [];
  private experiences: Experience[] = [];
  private educations: Education[] = [];
  private contactMessages: ContactMessage[] = [];
  private nextIds = {
    project: 1,
    skill: 1,
    experience: 1,
    education: 1,
    contactMessage: 1,
  };
  private seeded = false;

  async seed() {
    if (this.seeded) return;
    this.seeded = true;

    // Seed Projects
    const projectsData: InsertProject[] = [
      { 
        title: "AI Mock Interview", 
        description: "An intelligent platform for simulating job interviews with AI-driven feedback, real-time speech analysis, and personalized improvement recommendations.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        projectUrl: "#",
        repoUrl: "https://github.com/vinayku-09",
        techStack: ["React", "Node.js", "OpenAI", "WebRTC"],
        featured: true
      },
      { 
        title: "LifeVault", 
        description: "A secure digital vault for managing personal legacy and important life documents with end-to-end encryption.",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
        projectUrl: "#",
        repoUrl: "https://github.com/vinayku-09",
        techStack: ["Next.js", "PostgreSQL", "AWS S3"],
        featured: true
      },
      { 
        title: "Mentor Mitra", 
        description: "A mentorship platform connecting students with industry professionals for guidance and career development.",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
        projectUrl: "#",
        repoUrl: "https://github.com/vinayku-09",
        techStack: ["React", "Firebase", "Tailwind CSS"],
        featured: true
      },
      { 
        title: "Cybersecurity Dashboard", 
        description: "Advanced threat detection and vulnerability assessment tool with real-time monitoring capabilities.",
        imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80",
        projectUrl: "#",
        repoUrl: "https://github.com/vinayku-09",
        techStack: ["Python", "React", "Docker"],
        featured: false
      },
      { 
        title: "SecureComm Protocol", 
        description: "Encrypted communication protocol for secure data exchange between distributed systems.",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
        projectUrl: "#",
        repoUrl: "https://github.com/vinayku-09",
        techStack: ["Java", "Cryptography", "WebSockets"],
        featured: false
      }
    ];

    for (const p of projectsData) {
      await this.createProject(p);
    }

    // Seed Skills
    const skillsData: InsertSkill[] = [
      { name: "Java", category: "Programming Languages", proficiency: 90 },
      { name: "JavaScript", category: "Programming Languages", proficiency: 85 },
      { name: "TypeScript", category: "Programming Languages", proficiency: 80 },
      { name: "Python", category: "Programming Languages", proficiency: 75 },
      { name: "HTML/CSS", category: "Web Technologies", proficiency: 95 },
      { name: "React.js", category: "Web Technologies", proficiency: 90 },
      { name: "Next.js", category: "Web Technologies", proficiency: 85 },
      { name: "Node.js", category: "Web Technologies", proficiency: 85 },
      { name: "Tailwind CSS", category: "Web Technologies", proficiency: 90 },
      { name: "PostgreSQL", category: "Databases & Cloud", proficiency: 85 },
      { name: "MongoDB", category: "Databases & Cloud", proficiency: 80 },
      { name: "AWS", category: "Databases & Cloud", proficiency: 70 },
      { name: "Docker", category: "Databases & Cloud", proficiency: 75 },
      { name: "Git", category: "Developer Tools", proficiency: 90 },
      { name: "Postman", category: "Developer Tools", proficiency: 85 },
      { name: "DSA", category: "Core Concepts", proficiency: 85 },
      { name: "OOP", category: "Core Concepts", proficiency: 90 },
    ];

    for (const skill of skillsData) {
      await this.createSkill(skill);
    }

    // Seed Experience
    await this.createExperience({
      role: "Software Developer Intern",
      company: "Tech Solutions",
      duration: "2024 - Present",
      description: "Working on full-stack web applications and improving system performance."
    });

    // Seed Education
    const educationData: InsertEducation[] = [
      {
        degree: "Bachelor of Engineering – Computer Science & Engineering",
        institute: "Lokmanya Tilak College of Engineering, Navi Mumbai",
        year: "2023 – 2027",
      },
      {
        degree: "HSC – Higher Secondary Education (Science)",
        institute: "Presidency Junior College, Ulhasnagar",
        year: "2021 – 2023",
      },
      {
        degree: "SSC – Secondary School Certificate",
        institute: "Sai English High School, Kalyan",
        year: "2020 – 2021",
      }
    ];

    for (const edu of educationData) {
      await this.createEducation(edu);
    }
  }

  async getProjects(): Promise<Project[]> {
    await this.seed();
    return this.projects;
  }

  async getProject(id: number): Promise<Project | undefined> {
    await this.seed();
    return this.projects.find(p => p.id === id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const newProject: Project = {
      ...project,
      id: this.nextIds.project++,
      projectUrl: project.projectUrl ?? null,
      repoUrl: project.repoUrl ?? null,
      techStack: project.techStack ?? null,
      featured: project.featured ?? null,
    };
    this.projects.push(newProject);
    return newProject;
  }

  async getSkills(): Promise<Skill[]> {
    await this.seed();
    return this.skills;
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const newSkill: Skill = {
      ...skill,
      id: this.nextIds.skill++,
      proficiency: skill.proficiency ?? null,
      icon: skill.icon ?? null,
    };
    this.skills.push(newSkill);
    return newSkill;
  }

  async getExperience(): Promise<Experience[]> {
    await this.seed();
    return this.experiences;
  }

  async createExperience(exp: InsertExperience): Promise<Experience> {
    const newExp: Experience = {
      ...exp,
      id: this.nextIds.experience++,
    };
    this.experiences.push(newExp);
    return newExp;
  }

  async getEducation(): Promise<Education[]> {
    await this.seed();
    return this.educations;
  }

  async createEducation(edu: InsertEducation): Promise<Education> {
    const newEdu: Education = {
      ...edu,
      id: this.nextIds.education++,
      description: edu.description ?? null,
    };
    this.educations.push(newEdu);
    return newEdu;
  }

  async createContactMessage(msg: InsertContactMessage): Promise<ContactMessage> {
    const newMsg: ContactMessage = {
      ...msg,
      id: this.nextIds.contactMessage++,
      createdAt: new Date(),
    };
    this.contactMessages.push(newMsg);
    return newMsg;
  }
}

export const storage = new MemoryStorage();
