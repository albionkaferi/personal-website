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
          <li key={project.title} className="mb-4">
            <div>
              <div className="text-lg font-medium underline underline-offset-2">
                {project.title}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex space-x-4 mt-1">
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    className="inline-flex items-center text-gray-400 hover:text-white hover:translate-x-0.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="ml-2">{link.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
