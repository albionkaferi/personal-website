import type { Metadata } from 'next';
import Image from 'next/image';
import GitHubDark from '../../public/GitHubDark.svg'
import GitHubLight from '../../public/GitHubLight.svg'
import Gmail from '../../public/Gmail.svg'
import Twitter from '../../public/Twitter.svg'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Find ways to contact me.',
};

const socials = [
  {
    logo: Gmail,
    alt: "Mail",
    href: "mailto:albionkaferi02@gmail.com",
    text: "albionkaferi02@gmail.com"
  },
  {
    logo: GitHubDark,
    alt: "GitHub",
    href: "https://github.com/albionkaferi",
    text: "github.com/albionkaferi"
  },
  {
    logo: Twitter,
    alt: "Twitter",
    href: "https://twitter.com/albionkaferi",
    text: "twitter.com/albionkaferi"
  },
]

export default async function ContactPage() {

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">contact me</h1>
      <ul className="space-y-2">
      {socials.map((social) => (
        <li key={social.href}>
        <a href={social.href} target="_blank" className='inline-flex space-x-3 p-2'>
          <Image src={social.logo} alt={social.alt} height={24} width={24} />
          <h2>{social.text}</h2>
        </a>
        </li>
      )
      )}
      </ul> 
   
   </section>
  );
}
