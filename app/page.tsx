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
              href={social.href}
              className="rounded-md hover:bg-neutral-800 p-2"
            >
              {social.logo}
            </a>
          ))}
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a student at Stevens Institue of Technology studying Computer
        Science. I'm interested in web development, machine learning, and app
        development. In my free time, I enjoy going to the gym and playing
        soccer, basketball, or volleyball. I also enjoy watching good movies and
        playing chess.
      </p>
    </section>
  );
}
