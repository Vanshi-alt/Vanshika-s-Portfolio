"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Code, Award } from "lucide-react"

const experiences = [
  {
    id: 1,
    icon: GraduationCap,
    title: "B.Tech CSE",
    subtitle: "MIET, Meerut | 2023 - 2027",
    description:
      "Pursuing Computer Science Engineering with a CGPA of 7.5. Focused on Data Structures, Algorithms, OOP, DBMS, Computer Networks, and Operating Systems.",
    highlights: ["DSA", "OOP", "DBMS", "Computer Networks"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    icon: Award,
    title: "MongoDB Certified",
    subtitle: "MongoDB Atlas Certification",
    description:
      "Completed MongoDB certification demonstrating proficiency in MongoDB Atlas, database design, and NoSQL data management.",
    highlights: ["MongoDB Atlas", "NoSQL", "Database Design"],
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    id: 3,
    icon: Code,
    title: "Full Stack Projects",
    subtitle: "Production-Ready Apps",
    description:
      "Built and deployed multiple full-stack applications with secure authentication, RESTful APIs, Docker containerization, and CI/CD pipelines using GitHub Actions.",
    highlights: ["Docker", "CI/CD", "GitHub Actions", "Render"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Open for Opportunities",
    subtitle: "Seeking Internships",
    description:
      "Actively preparing for internship opportunities by building real-world projects, enhancing technical skills, and learning industry best practices.",
    highlights: ["MERN Stack", "REST APIs", "Clean Architecture"],
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = experience.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-border hidden md:block" />
      )}

      <div className="flex gap-4 md:gap-6">
        {/* Icon */}
        <div className={`shrink-0 w-12 h-12 rounded-xl ${experience.bgColor} flex items-center justify-center relative z-10`}>
          <Icon className={`h-6 w-6 ${experience.color}`} />
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-6 flex-1 hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <span className="text-sm text-muted-foreground">{experience.subtitle}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((highlight) => (
              <span
                key={highlight}
                className={`px-3 py-1 text-xs rounded-full ${experience.bgColor} ${experience.color}`}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium">My Journey</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My journey in tech has been filled with learning, building, and growing. 
            Here are some highlights along the way.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
