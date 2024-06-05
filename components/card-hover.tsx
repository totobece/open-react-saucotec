import { HoverEffect } from "@/components/ui/card-hover-effect";
import DUORINGS from '@/public/images/logoduo-svg.svg'
import EG from '@/public/images/eg-logo (1).png'
import ERGONOMIA from '@/public/images/ERGO-LOGO.svg'
import METALUX from '@/public/images/meta-logo.svg'
import POLITAT from '@/public/images/polipatlogo-svg.svg'
import NORT from '@/public/images/nort-logo.svg'


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl  mx-auto px-8" data-aos="fade-up">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Duorings",
    description:
      "We design and develop the new Duorings comprehensive platform, combining technology with sport.",
    link: "/portfolio/duorings",
    logo: DUORINGS
  },
  {
    title: "Energia Global",
    description:
      "Texto EG",
    link: "/portfolio/energia-global",
    logo:EG
  },
  {
    title: "Nort Revestimientos",
    description:
      "Texto Nort",
    link: "/portfolio/nort-revestimientos",
    logo:NORT
  },
  {
    title: "Metalux",
    description:
      "Texto metalux",
    logo:METALUX
  },
  {
    title: "Ergonomia Global",
    description:
      "Texto Ergonomia",

    logo: ERGONOMIA
  },
  {
    title: "Polipat",
    description:
      "Texto politap",
  
    logo:POLITAT
  },
];
