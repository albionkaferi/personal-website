import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore projects I have worked on and continue to work on.',
};

export default async function ProjectsPage() {

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">projects</h1>
      <p>coming soon</p>
    </section>
  );
}
