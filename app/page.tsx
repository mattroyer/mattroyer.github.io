import { Button } from "@/components/button"
import { ProjectCard, type Project } from "@/components/project-card"
import { Github, Linkedin, Download } from "lucide-react"

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "Movie Reactor",
      description:
        "React to movies, get recommendations. Find hidden gems you'll love.",
      image: "/movie-reactor-1280.png",
      tags: ["Next.js", "React", "TypeScript", "Tailwind"],
      liveUrl: "https://movie-reactor.vercel.app",
      githubUrl: "https://github.com/mattroyer/movie-reactor",
      isPrivate: false,
    },
  ]
  const currentYear = new Date().getFullYear()
  const copyrightYear =
    currentYear >= 2026 ? `2020-${currentYear}` : "2025"

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Matt Royer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6">Senior Software Engineer</p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Senior Software Engineer with over a decade of experience building data pipelines, automation tools, and
              modern web applications. I specialize in Python, Ruby, and JavaScript, with a focus on eliminating manual
              workflows and creating intelligent automation systems. Early adopter of AI-augmented engineering,
              leveraging LLMs and automation to build more efficient, scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button asChild variant="default" size="default">
                <a href="/Matt-Royer-Resume.pdf" download className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/mattroyer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/mroyer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-6 py-8">
          <p className="text-sm text-muted-foreground text-center">
            © {copyrightYear} Matt Royer.
          </p>
        </div>
      </footer>
    </div>
  )
}
