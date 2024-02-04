import type { Metadata } from "next";
import { projects } from "app/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore projects I have worked on and continue to work on.",
};

export default async function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">projects</h1>
      <ul className="mb-8 list-none">
        {projects.map((project) => (
          <li key={project.href} className="mb-4">
            <a href={project.href} target="_blank">
              <div>
                <div className="text-lg text-black dark:text-white underline underline-offset-2">
                  {project.title}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
