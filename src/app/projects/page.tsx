import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoLumi from '@/images/logos/lumi.svg'
// import logoDecibel from '@/images/logos/decibel.svg'
import logoPortfolio from '@/images/logos/portfolio.svg'
import logoCinnamonLane from '@/images/logos/cinnamonLane.svg'
import logoAcademix from '@/images/logos/academix.svg'
import logoEduJourney from '@/images/logos/edujourney.svg'
import { GitHubIcon } from '@/components/SocialIcons'

const projectData = [
  {
    name: 'Lumi',
    description:
      'Lumi is a household task management app to make organising your home a breeze',
    technologies: [
      'Full stack MERN',
      'TypeScript',
      'React',
      'Redux',
      'GraphQL',
      'Apollo',
      'Render',
      'Motion',
      'Notistack',
    ],
    deployedLink: 'https://lumi-0vvm.onrender.com/',
    githubLink: 'https://github.com/Mjoel54/cleanly',
    logo: logoLumi,
  },
  {
    name: 'Cinnamon Lane',
    description:
      'A front end e-commerce platform for home decor and lifestyle products. Redux handles type safe state management',
    technologies: [
      'Front end',
      'TypeScript',
      'React',
      'Redux',
      'Tailwind CSS',
      'Next.js',
      'Netlify',
    ],
    deployedLink: 'https://cinnamonlane.netlify.app/',
    githubLink: 'https://github.com/Mjoel54/ecommerce-website',
    logo: logoCinnamonLane,
  },
  {
    name: 'Academix',
    description:
      'A modern Learning Management System (LMS) API built with Express.js, Mongoose and MongoDB. The application provides a robust backend for managing educational resources including courses, assignments, students, and teachers.',
    technologies: [
      'Back end',
      'TypeScript',
      'Express',
      'Node.js',
      'MongoDB',
      'Mongoose',
      'Jest',
    ],
    deployedLink: 'https://github.com/Mjoel54/academix',
    githubLink: 'https://github.com/Mjoel54/academix',
    logo: logoAcademix,
  },
  {
    name: 'EduJourney',
    description:
      'EduJourney is a back end application built with Express, SQL, and PostgreSQL that lays the foundation for a digital badge and certification tracking system to be used in educational environments.',
    technologies: ['Back end', 'TypeScript', 'Express', 'SQL', 'PostgreSQL'],
    deployedLink: 'https://github.com/Mjoel54/edujourney',
    githubLink: 'https://github.com/Mjoel54/edujourney',
    logo: logoEduJourney,
  },

  {
    name: 'Personal Portfolio Website',
    description: 'A showcase of my design and development journey',
    technologies: [
      'Front end',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Next.js',
      'Netlify',
    ],
    deployedLink: 'https://mitchellklein.netlify.app/',
    githubLink: 'https://github.com/Mjoel54/klein-portfolio',
    logo: logoPortfolio,
  },
]

// Isolate project data objects for React components from the original mutable source
const projectDataObjects = projectData.map((project, i) => ({
  id: i,
  name: project.name,
  description: project.description,
  technologies: project.technologies,
  deployedLink: project.deployedLink,
  githubLink: project.githubLink,
  logo: project.logo,
}))

function ProjectLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <p className={clsx(className, 'flex')}>
      <a
        href={href}
        className="group/link flex text-sm font-medium text-zinc-800 transition dark:text-zinc-200"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover/link:fill-orange-900 dark:group-hover/link:fill-orange-200" />
        <span className="ml-4 text-zinc-500 transition group-hover/link:text-orange-900 dark:group-hover/link:text-orange-200">
          {children}
        </span>
      </a>
    </p>
  )
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I'm excited to share a few projects that represent my ongoing journey of growth and learning. Many of these projects are open-source—if something catches your eye, feel free to dive into the code and offer your ideas for improvement."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projectDataObjects.map((project) => (
          <Card as="li" key={project.id} className="group relative">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 rounded-2xl bg-zinc-100/50 sm:-inset-x-6 dark:bg-zinc-800/50" />

            <div className="relative z-10 flex h-full w-full flex-col items-center px-4 py-2 sm:items-start">
              <a href={project.deployedLink}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 sm:h-12 sm:w-12 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-12 w-12 sm:h-8 sm:w-8"
                    unoptimized
                  />
                </div>
              </a>
              <h2 className="mt-6 text-center text-base font-semibold text-zinc-800 sm:text-left dark:text-zinc-100">
                {project.name}
              </h2>

              {/* Container that grows to push the technologies section to the bottom */}
              <div className="mb-5 flex-grow overflow-y-auto text-center sm:text-left">
                <Card.Description>{project.description}</Card.Description>
              </div>

              {/* Technologies div */}
              <div className="mb-3 flex flex-wrap gap-x-2 gap-y-3">
                {project.technologies.map((tech, i) => {
                  return (
                    <div
                      key={i}
                      className="rounded-md bg-zinc-200 px-2 py-1 text-sm dark:bg-zinc-800"
                    >
                      {tech}
                    </div>
                  )
                })}
              </div>
              <ProjectLink
                href={project.githubLink}
                icon={GitHubIcon}
                className="mt-auto"
              >
                github
              </ProjectLink>
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
