import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhinandan Prajapati",
  initials: "sdeabhi",
  url: "https://sdeabhi.netlify.app",
  location: "Gorakhpur, UP",
  locationLink: "https://www.google.com/maps/place/gorakhpur",
  description:
    "Full Stack Developer | MERN Stack | Node.Js Developer | AWS | Immediate Joiner",
  summary:
    "Immediate Joiner > Software Developer with almost 2.5 years of experience in Node.js, Express.js, MongoDB, ReactJs, Javascript, AI TOOLS and AWS. Skilled in RESTful API development and database optimization for scalable applications. Experienced with AWS (S3, EC2, IAM) and third-party integrations to enhance app functionality. Passionate about writing clean, secure, and maintainable code with a focus on performance and scalability.",
  avatarUrl: "/sdeabhi1.jpg",
  skills: [
   "MERN Stack", "Node js", "MongoDB", "Express.js", "React.Js", "React Native", "JavaScript", "HTML5 & CSS", "TailwindCSS","Redux, Context API", "Zustan", "AWS (EC2, S3 Buckets, Route53)", "REST APIs", "Postman", "Github", "GitLab", "FIREBASE (Push Notifications)","AI Tools",
    "Google Play Console", "Google Admob", "Google Search Console Console"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        url: "https://x.com/Abhinan93476449",
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
      end: "Oct 2025",
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
    // {
    //   school: "B.Tech Computer Science & Engineering",
    //   href: "https://aktu.ac.in/",
    //   degree: "Sagar Institute of Technology and Management",
    //   logoUrl: "https://aktu.ac.in/images/logo.png",
    //   start: "",
    //   end: "Barabanki, India",
    // },
    {
      school: "Diploma in Information Technology",
      href: "https://urise.up.gov.in/poly/2201",
      degree: "Government Polytechnic Lucknow",
      logoUrl: "https://urise.up.gov.in/resources/profile_image/2201_IMG-20211211-WA0000.jpg",
      start: "Oct 2020 - May 2023",
      end: "",
    },
    {
      school: "Intermediate",
      href: "https://upmsp.edu.in/",
      degree: "Pawanagar Mahaveer Inter College, Kushinagar",
      logoUrl: "https://upmsp.edu.in/images/logonamebig.png",
      start: "April 2019 - April 2020",
      end: "",
    },
    {
      school: "High School",
      href: "https://upmsp.edu.in/",
      degree: "Anand Mission Intermediate College, Kushinagar",
      logoUrl: "https://upmsp.edu.in/images/logonamebig.png",
      start: "April 2019 - April 2020",
      end: "",
    },
    
  ],
  projects: [
    {
      title: " Tricky Explore (Founder & Developer)",
      href: "https://trickyexplore.com/",
      active: true,
      description:
        "Users across India, USA, UK and Europe with 70+ specialized financial calculators. 70+ free calculators for loans, investments, taxes, and budgeting. Interactive Data Visualization: Implemented responsive, animated graphs for detailed data analysis. Comprehensive Calculation Engine: Engineered complex algorithms for precise, real-time calculations.PDF Export Functionality: Integrated dynamic PDF generation for reports, including embedded graphs. User Interface Customization: Developed light and dark mode themes for enhanced user experience.Geolocation-Based Content: Implemented IP-based landing pages to deliver region-specific content.",
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
          href: "https://trickyexplore.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/trickyexplore2.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
     {
      title: "Loop and Cut (Ecommerce)",
      href: "https://www.loopandcut.in/",
      active: true,
      description:
        "Implemented user authentication with JWT-based login and Bcrypt for password hashing. Wishlist Functionality – Developed a wishlist feature allowing users to save their favorite rugs for future purchases. Implemented a dynamic cart system that enables users to add, update, and remove items before checkout.",
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
          type: "Website & Android App",
          href: "https://www.loopandcut.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/loop.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    
    {
      title: "Sarkari Private Jobs",
      href: "https://play.google.com/store/apps/details?id=com.sarkariprivatejobs&pcampaignid=web_share",
      active: true,
      description:
        "From Scratch to 4500+ Downloads on Google PlayStore.Designed and developed a scalable backend and Frontend to support seamless interaction between employers and candidates.Ensured secure authentication using JWT & bcrypt.Implemented Google Admob Service.Implemented an inShorts-style feature for Latest Job News, delivering concise, and engaging updates to users.Implemented Firebase Push Notifications.",
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
          type: "Website & Android App",
          href: "https://play.google.com/store/apps/details?id=com.sarkariprivatejobs&pcampaignid=web_share",
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
      title: "3+ Live Android APP (Founder & Developer)",
      href: "https://play.google.com/store/apps/dev?id=7832001472181409593",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "Explore All World Facts App, Uttar Pradesh GK App, Competetive Hindi Grammar App, Full Forms, and more! Access valuable educational content, and knowledge at one place.",
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
          type: "Google Play Console Account",
          href: "https://play.google.com/store/apps/dev?id=7832001472181409593",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/play.png",
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
