import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Lucas Kemper",
  logo: "/logo.webp",
  profile: "/profile.webp",
  email: "lucaskemper2000@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Over mij",
    url: "/about",
  },
  {
    title: "Projecten",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/Deruach",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/lucas-ruben-kemper/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:lucaskemper2000@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Lucas Kemper",
    description:
      "Ik ben een MBO 4-student aan Technova College met een passie voor programmeren. Ik leer graag door dingen te bouwen – van simpele tools tot creatieve projecten met code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description: `
    Ik ben een MBO 4-student aan Technova College met een passie voor programmeren. Ik leer graag door dingen te bouwen – van simpele tools tot creatieve projecten met code.`,
  socialLinks: socialLinks,
  links: [
    {
      title: "Projecten",
      url: "/projects",
    },
    {
      title: "Over Mij",
      url: "/about",
    },
    {
      title: "Mijn CV",
      url: "/cv-lucas-kemper.pdf",
      download: true,
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Over mij | Lucas Kemper",
    description:
      "Ik ben een fulltime student met een passie voor het bouwen van gave projecten met code.",
    image: identity.logo,
  },
  subtitle: "Wat informatie over mijzelf",
  about: {
    description: `
Ik ben Lucas, 19 jaar en vierdejaarsstudent aan het Technova College.  
<br/><br/>
Als leergierige en serieuze student bouw ik graag praktische en creatieve oplossingen met code. Ik werk zelfstandig en in teamverband, en zet door om problemen op te lossen.  
<br/><br/>
Naast mijn studie werk ik aan persoonlijke projecten en blijf ik nieuwe technologieën leren. Mijn doel is een technisch sterke en creatieve professional te worden.  
<br/><br/>
Ik leer het liefst door te doen en blijf mezelf zo continu verbeteren.`,
    // Markdown is supported
    image_l: {
      url: "/code.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/typing.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Dit zijn de bedrijven waar ik stage heb gelopen en ervaring heb opgedaan met verschillende technieken.`, // Markdown is supported
    items: [
      {
        title: "Software Developer Stage",
        company: {
          name: "Novimedia",
          image: "/novi-logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "Nov 2024 - Apr 2025",
      },
      {
        title: "Software Developer Stage",
        company: {
          name: "Crop",
          image: "/crop-logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "Feb 2024 - Jul 2024",
      },
    ],
  },
  connect: {
    description: `Ik ben altijd geïnteresseerd in het ontmoeten van nieuwe mensen en het leren van nieuwe dingen. Voel je vrij om contact met me op te nemen via een van de onderstaande platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projecten | Lucas Kemper",
    description: "Bekijk mijn recente werk.",
    image: identity.logo,
  },
  subtitle: "Bekijk mijn recente werk.",
  projects: [
    {
      title: "Omnifood",
      description: "project from Jonas S. Udemy course",
      image: "/project1.jpg",
      year: "2024",
      url: "https://github.com/Deruach/html-css-course-my",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Lucas Kemper",
    description: "Gedachten, verhalen en ideeën.",
    image: identity.logo,
  },
  subtitle: "Gedachten, verhalen en ideeën.",
};
