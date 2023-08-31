import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore projects I have worked on and continue to work on.',
};

const projects = [
  {
    title: 'App Tracker',
    description: 'Desktop application that allows users to set limits on applications.',
    href: 'https://github.com/albionkaferi/app-tracker'
  },
  {
    title: 'LibreLearn',
    description: 'A free alternative for students to create, share, and study flashcards.',
    href: 'https://github.com/albionkaferi/LibreLearn'
  },
  {
    title: 'Overwatch PUG Bot',
    description: 'Discord matchmaking bot for Overwatch custom games.',
    href: 'https://github.com/albionkaferi/pug-bot'
  },
  {
    title: 'Stevens Forum',
    description: 'An academic forum for Steven\'s students to discuss topics and ask questions.',
    href: 'https://github.com/cloh54/StevensForum'
  },
  {
    title: 'Personal Website',
    description: 'This website.',
    href: 'https://github.com/albionkaferi/personal-website'
  }
]

export default async function ProjectsPage() {

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">projects</h1>
      <ul className="mb-8 list-none">
        {projects.map((project) => (
          <li key={project.href} className="mb-4">
            <a href={project.href}>
              <div> 
              <div className="text-lg text-black dark:text-white underline underline-offset-2">{project.title}</div>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div> 
            </a> 
          </li>
        ))}
      </ul> 
    </section>
  );
}
