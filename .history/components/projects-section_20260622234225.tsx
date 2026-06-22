"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Home, ListTodo, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import taskforgeImage from "@/public/taskforge.png"
import A

const projects = [
  {
    id: 1,
    title: "Wanderlust - Property Listing App",
    description:
      "A full-stack web application to create, manage, and browse property listings. Features user authentication, RESTful APIs with MongoDB, image uploads, interactive Leaflet maps for location visualization, and responsive UI across devices.",
    image: null,
    icon: Home,
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Leaflet", "Bootstrap"],
    github: "https://github.com/Vanshi-alt/Major-Project",
    live: "https://wanderlust-practice-project.onrender.com",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "TaskForge - AI Task Platform",
    description:
      "A full-stack web app for creating and managing asynchronous AI-like tasks with real-time status tracking. Implemented JWT authentication with OTP-based password reset, bcrypt encryption, and Docker containerization with CI/CD pipeline using GitHub Actions.",
    image: taskforgeImage,
    icon: ListTodo,
    tags: ["React", "Vite", "Node.js", "MongoDB", "Docker", "GitHub Actions"],
    github: "https://github.com/Vanshi-alt/TaskForge",
    live: "https://taskforge-frontend-mlvm.onrender.com",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "AI-Resume Builder",
    description:
      "A web application that leverages AI to generate professional resumes based on user input. Users can customize templates, download resumes in PDF format, and share them online. The app uses GROQ API for content generation and features a responsive design.",
    image: null,
    icon: FileText,
    tags: ["React", "Vite", "Node.js", "GROQ API" , "Tailwind CSS" , "MongoDB"],
    github: "https://github.com/Vanshi-alt/AI_Resume_Builder",
    live: "https://ai-resume-builder-phi-lyart.vercel.app/",
    category: "Full Stack + GEN AI",
  },
   {
    id: 4,
    title: "ProfileForge - AI",
    description:
      "I built ProfileForge-AI, an AI-powered LinkedIn Summary Generator that helps users generate professional LinkedIn profile summaries based on their skills, experience, and background. I chose this idea because while building my own professional online presence, I realized writing a strong LinkedIn summary manually is time-consuming, and I wanted to create a faster free solution for it.",
    image: null,
    icon: FileText,
    tags: ["React", "Vite", "Node.js", "GROQ API", "Tailwind CSS" ],
    github: "https://github.com/Vanshi-alt/ProfileForge-AI",
    live: "https://profile-forge-ai-seven.vercel.app/",
    category: "Full Stack + GEN AI",
  }

]

const categories = ["All", "Full Stack"]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = project.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Project Image/Icon Area */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="h-16 w-16 text-primary/50" />
          </motion.div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" className="flex-1 gap-2" asChild>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium">My Work</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion 
            for building impactful applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
