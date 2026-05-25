"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = {
  frontend: {
    title: "Frontend",
    color: "from-primary to-primary/50",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  backend: {
    title: "Backend",
    color: "from-accent to-accent/50",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Authentication", level: 85 },
    ],
  },
  database: {
    title: "Database",
    color: "from-chart-3 to-chart-3/50",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 80 },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    color: "from-chart-4 to-chart-4/50",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 80 },
      { name: "GitHub Actions CI/CD", level: 80 },
      { name: "Postman", level: 85 },
    ],
  },
}

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
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
            <span className="text-primary font-medium">My Skills</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I&apos;m constantly learning and expanding my skill set. Here are the technologies 
            and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
