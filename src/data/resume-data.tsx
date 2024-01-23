
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Amith MS",
  initials: "MS",
  location: "Bangalore, India, IST",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Full Stack Engineer with a focus on frontend engineering.",
  summary:
    "As a Full Stack Engineer and Engineering lead, I have successfully built multiple projects across tech stacks. I strive to create an environment where engineers do their best work and grow within the organisation. <br /> <br /> I have over <b>9 years of experience</b> working as an engineer and leading teams of engineers in India and Germany. <br /> <br /> Currently, I work mostly with TypeScript, React, NextJs, Node.js, and AdonisJs.",
  avatarUrl: "https://avatars.githubusercontent.com/u/56049550?v=4",
  contact: {
    email: "amithms.92@gmail.com",
    tel: "+919980833738",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Amith2110",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amith-m-s-8b97683a/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "BNM Institure of Technology",
      degree: "Bachelor's Degree in Computer science and Engineering",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: 'Threls Ltd',
      link: 'https://www.threls.com/',
      badges: ["Remote", "Freelance"],
      title: "Freelance Consultant",
      start: "Aug 2023",
      end: "Present",
      description: "Refactored and modernizeed core libraries for a FinTech client based in the UK<a href='https://www.weavr.io/' class='underline'>(weavr).</a> Also improved the developer experience signinficantly by creating a system that reduces friction between developing and testing. <br /> <br /> Technologies Used: TypeScript, Vue/Nuxt, Taiwlind, Bootstrap"
    },
    {
      company: "Fitster",
      link: "https://www.fitster.io/",
      badges: ["Founder"],
      title: "Founder and Lead Engineer",
      start: "May 2023",
      end: "Dec 2023",
      description:
        "Took the product from 0-1. Was responsible for the entire product development phase, from ideation to launching the v1. Click <a href='https://daniel.fitster.coach/' class='underline'>here</a> for a live example <br /> <br /> Technologies used: TypeScript, React, NextJs, AdonisJs, NodeJs, AWS, Render, Flutter",
    },
    {
      company: "About You AG & Co. KG",
      link: "https://en.aboutyou.de/your-shop",
      title: "Senior Frontend Engineer",
      badges: [],
      start: "May 2021",
      end: "May 2023",
      description:
        "Worked on the main AY Shop and worked with clients of AY's SaaS tool - Scayle. Led the team that developed and launched their most important project - <a href='https://fcbayern.com/store/de-de' class='underline'> FC Bayern Munich's E-commerce shop</a> <br /> <br /> Technologies used: TypeScript, React, Nuxt, Vue, AWS",
    },
    {
      company: "GeekyAnts",
      link: "https://geekyants.com/",
      badges: [],
      title: "Software Engineer → Engineering Manager",
      start: "Dec 2014",
      end: "May 2021",
      description:
        "Joined the company as the third employee and helped scale it to a 100+ company. Built and launched multiple projects using various tech stacks. Later on, ran a team of 12 engineers and was responsible for everything from hiring, training new joinees, performance evaluation and helping out the tech leads with technical decisions. <br /> <br /> Technologies used: TypeScript, PHP, Dart, AngularJS, React.js, Laravel,Node, AWS and GCP.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue/Nuxt.js",
    "Tailwind",
    "Node.js",
    "AdonisJs",
    "AWS",
    "PHP",
    "0-1 Product Development",
  ],
  projects: [
    {
      title: "Fitster",
      techStack: [
        "TypeScript",
        "React/Next.js",
        "Node.js",
        "AdonisJs",
        "AWS",
        "Flutter"
      ],
      description: "A platform for online fitness coaches to run their business.",
      link: {
        label: "fitster.io",
        href: "https://www.fitster.io/",
      },
    },
    {
      title: "FC Bayern Munich",
      techStack: ["TypeScript", "Vue/Nuxt.js", "Team Lead"],
      description:
        "FC Bayern Munich's E-commerce shop",
      link: {
        label: "fcbayern.com",
        href: "https://fcbayern.com/store/de-de",
      },
    },
    {
      title: "About You",
      techStack: ["TypeScript", "React", "AWS"],
      description:
        "Worked on About You's E-commerce shop",
      link: {
        label: "aboutyou.de",
        href: "https://en.aboutyou.de/your-shop",
      },
    },
    {
      title: "Tellius",
      techStack: ["AngularJS", "Node.js", "D3.js", "HighCharts", "Puppeteer"],
      description:
        "An AI-powered business analytics platform",
      link: {
        label: "tellius.com",
        href: "https://www.tellius.com/",
      },
    },
    {
      title: "Sportsphotos",
      techStack: ["AngularJs", "Laravel", "PHP"],
      description:
        "Sports events management platform",
      link: {
        label: "sportsphotos.com",
        href: "https://www.sportsphotos.com",
      },
    },
    {
      title: "Flutter's Documentation",
      techStack: ["Documentation", "Open source", "Flutter", "React Native"],
      description:
        "Wrote a part of flutter's official documentation targeted towards devs with RN experience",
      link: {
        label: "docs.flutter.dev",
        href: "https://docs.flutter.dev/get-started/flutter-for/react-native-devs",
      },
    },
    {
      title: "Tech Talk",
      techStack: ["Side Project", "Machine Learning", "Python"],
      description: "Tried to introduce Machine Learning to the company back in 2018",
      link: {
        label: "youtube.com",
        href: "https://www.youtube.com/watch?v=uQUbtYPEjHU",
      },
    },
  ],
} as const;
