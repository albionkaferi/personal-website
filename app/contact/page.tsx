import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Find ways to contact me.',
};

export default async function ContactPage() {

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">contact me</h1>
      <p>coming soon</p>
   </section>
  );
}
