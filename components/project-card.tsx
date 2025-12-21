import { ExternalLink, Github } from 'lucide-react'

import { Button } from '@/components/button'
import { Card, CardContent } from '@/components/card'

type Project = {
  title: string
  description: string
  image?: string
  tags: string[]
  liveUrl: string
  githubUrl?: string
  isPrivate?: boolean
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  isPrivate,
}: Project) {
  const imageSrc = image || '/placeholder.svg'

  return (
    <Card className="group overflow-hidden border-border hover:border-foreground/20 transition-colors flex flex-col">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          <Button asChild variant="default" size="sm" className="flex-1">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          </Button>
          {!isPrivate && githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export { ProjectCard }
export type { Project }
