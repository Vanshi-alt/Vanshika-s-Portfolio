"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Sparkles } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl glass overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Code2 className="h-20 w-20 mx-auto mb-4 text-primary" />
                  <p className="text-2xl font-bold gradient-text">Building the Future</p>
                  <p className="text-muted-foreground mt-2">One line at a time</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary/30 rounded-lg" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-accent/30 rounded-full" />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-medium">About Me</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passionate about creating{" "}
                <span className="gradient-text">impactful solutions</span>
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  I&apos;m a CSE student at Meerut Institute of Engineering and Technology with a deep passion 
                  for full-stack development. My journey in tech has been driven by a desire to build 
                  scalable, production-ready applications with clean architecture.
                </p>
                <p>
                  Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I develop 
                  secure authentication systems, RESTful APIs, and asynchronous backend workflows. 
                  I&apos;m proficient in Docker-based containerization and CI/CD pipelines using GitHub Actions 
                  for automated deployment.
                </p>
                <p>
                  I&apos;m passionate about building efficient applications with a strong focus on 
                  performance, security, and user experience. Currently seeking opportunities to grow 
                  and contribute to impactful projects.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <div className="glass rounded-lg px-4 py-3 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">MERN Stack</span>
                </div>
                <div className="glass rounded-lg px-4 py-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Docker & CI/CD</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
