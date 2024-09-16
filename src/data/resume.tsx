import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhinandan Prajapati",
  initials: "sdeabhi",
  url: "https://dillion.io",
  location: "Gorakhpur, UP",
  locationLink: "https://www.google.com/maps/place/gorakhpur",
  description:
    "Software Development Engineer",
  summary:
    "Software Developer with expertise in Backend and AWS Cloud Services. Proven track record of building scalable applications and optimizing cloud infrastructure to drive business transformation. Strong problem-solving abilities and experience in delivering secure, high-performance solutions. Eager to contribute to innovative projects and enhance technical proficiency.",
  avatarUrl: "/sdeabhi1.jpg",
  skills: [
    "Node js", "MongoDB", "Express.js", "React.Js", "JavaScript", "AWS", "EC2",
    "S3 Buckets", "REST APIs", "Postman", "Github", "GitLab",
    "Google Play Console", "C++"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sdeabhinandan@gmail.com",
    tel: "+917408331278",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sdeabhi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sdeabhinandan",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "sdeabhinandan@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Kinda Solutions Pvt Ltd.",
      href: "https://kindasolutions.com",
      badges: [],
      location: "Remote",
      title: "Software Development Engineer",
      logoUrl: "https://kindasolutions.com/content/assets/img/kindalogo.png",
      start: "May 2024",
      end: "Present",
      description:
        "💼 In my current role at Kinda Solutions Pvt Ltd, I have successfully delivered complex projects, integrating third-party APIs and crafting user-friendly, secure solutions. My prior experience at KIASH INFOTECH PVT LTD has honed my problem-solving skills, enabling me to transform innovative ideas into practical, high-quality applications.",
    },
    {
      company: "Kiash Infotech Pvt Ltd.",
      badges: [],
      href: "https://www.kiashinfotech.com/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "https://www.kiashinfotech.com/images/Kiash-infotech-logo.png",
      start: "June 2023",
      end: "May 2024",
      description:
        "💼 I have had the privilege of working on a wide range of projects that have honed my skills in both front-end and back-end development.",
    },
    
  ],
  education: [
    {
      school: "Diploma in Information Technology",
      href: "https://urise.up.gov.in/poly/2201",
      degree: "Government Polytechnic Lucknow",
      logoUrl: "https://urise.up.gov.in/resources/profile_image/2201_IMG-20211211-WA0000.jpg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Intermediate",
      href: "https://upmsp.edu.in/",
      degree: "Pawanagar Mahaveer Inter College, Kushinagar",
      logoUrl: "https://upmsp.edu.in/images/logonamebig.png",
      start: "2018",
      end: "2020",
    },
    
  ],
  projects: [
    {
      title: "Sarkari Private Jobs",
      href: "https://sarkariprivatejobs.com/",
      active: true,
      description:
        "One stop plateform for Government and Privatejobs, Handled overall backend and colaborated with frontend team, Plateform for employers and employees both.",
      // technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      // ],
      links: [
        {
          type: "Website",
          href: "https://sarkariprivatejobs.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/spjweb.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "{Ruut} Ecommerce Application",
      href: "https://ruutlabs.co.in/",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "This is company's project I contributed in various part like Integrated secure user authentication, authorization, and data protection features with Admin Dashboard. Spearheaded the development of Ruut, a multifaceted application providing a comprehensive suite of services within the ONDC platform. Played a key role in crafting the Admin Panel, contributing to both the backend and frontend development to create a cohesive and user-friendly interface.",
      // technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      // ],
      links: [
        {
          type: "Website",
          href: "https://ruutlabs.co.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ruut.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Divyang Career",
      href: "https://divyangcareer.com/",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "Fully functional job portal including all necessary functionality. Candidate, Employer, Admin dashboards including all data monitoring and functionality.",
      // technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      // ],
      links: [
        {
          type: "Website",
          href: "https://divyangcareer.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/divyang.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    }
  ],


  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
