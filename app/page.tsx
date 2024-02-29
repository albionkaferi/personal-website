import { socials } from "./data";

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-2 tracking-tighter">
          albion kaferi
        </h1>
        <div className="flex space-x-2">
          {socials.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              className="rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 p-2"
            >
              {social.logo}
            </a>
          ))}
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a student at Stevens Institue of Technology studying Computer
        Science.
        <br />
        I'm interested in web development, machine learning, and app
        development.
        <br />
        In my free time, I enjoy going to the gym and playing soccer,
        basketball, or volleyball.
      </p>
    </section>
  );
}
