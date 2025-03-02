import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import projectImage1 from "../assets/portfolio.png";
import projectImage2 from "../assets/flight.png";
import projectImage3 from "../assets/porsche.png";
import projectImage4 from "../assets/shoe.png";
import projectImage5 from "../assets/netflix.png";
import projectImage6 from "../assets/doctor.png";

import hobbies1 from "../assets/hob1.png";
import hobbies2 from "../assets/hob2.png";
import hobbies3 from "../assets/hob3.png";
import hobbies4 from "../assets/hob4.png";
import hobbies5 from "../assets/hob5.png";
import hobbies6 from "../assets/hob6.png";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { HiBattery100 } from "react-icons/hi2";
import { HiBattery50 } from "react-icons/hi2";
import { SiJest } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SHIVAKUMAR",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Full stack developer with a strong focus on building robust backend systems and intuitive, responsive user interfaces. I enjoy transforming ideas into seamless web applications, delivering engaging and functional experiences using the power of MongoDB, Express, React, and Node.js.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Job Portal",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://nex-gen-pdzn.vercel.app/",
  },
  {
    id: 2,
    name: "Flight Booking Landing Page",
    description:
      "Developed a responsive flight booking landing page using HTML , CSS, showcasing a modern and user-friendly interface. The page is optimized for various devices and ensures a seamless user experience.",
    image: projectImage2,
    githubLink: "https://flyhighly.netlify.app/#",
  },
  {
    id: 3,
    name: "Porsche Online Experience Website",
    description:
      "Developed an interactive web application titled Porsche Online Experience utilizing HTML and Bootstrap. This project showcases a visually appealing and responsive design.",
    image: projectImage3,
    githubLink: "https://porscheonline.netlify.app",
  },
  {
    id: 4,
    name: "Nike Website",
    description:
      "Designed and developed a responsive Nike landing page using React and Tailwind CSS. Focused on modern UI design principles to create an engaging and visually appealing user experience.",
    image: projectImage4,
    githubLink: "https://nikewebsites.netlify.app",
  },
  {
    id: 5,
    name: "Netflix Landing Page",
    description:
      "This project showcases a visually appealing replica of the Netflix landing page, designed using HTML and CSS. The page features a sleek and modern layout, capturing the essence of Netflix's brand identity with its dark theme, bold typography, and vibrant call-to-action buttons.",
    image: projectImage5,
    githubLink: "https://github.com/shivaskn/Netflix-landing-page",
  },
  {
    id: 6,
    name: "Doctor Appointment Booking System",
    description:
      "Developed a full-stack online doctor appointment booking system using React for the frontend, Node.js and Express for the backend, and MongoDB for database management. Integrated authentication, role-based access control, and real-time appointment scheduling features",
    image: projectImage6,
    githubLink: "https://carelys.netlify.app/",
  },
];

export const BIO = [
  "Shivakumar graduated in 2024 with a B.Com in Computer Applications from Vivekananda College, Mylapore, where he developed a strong passion for MERN stack development.",
  "As a versatile MERN stack developer, Shivakumar brings a diverse skill set and in-depth expertise to his projects. His technical prowess spans foundational web technologies like HTML, CSS, and JavaScript, alongside backend tools such as Node.js and Express. He is also highly proficient in modern frameworks like React, enabling him to build dynamic and user-friendly applications.",
];

export const SKILLS = [
  {
    icon: <IoLogoHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    experience: (
      <HiBattery100 className="text-4xl text-green-500 lg:text-5xl"></HiBattery100>
    ),
    role: "Experienced",
  },
  {
    icon: <IoLogoCss3 className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "CSS",
    experience: (
      <HiBattery100 className="text-4xl text-green-500 lg:text-5xl"></HiBattery100>
    ),
    role: "Experienced",
  },
  {
    icon: <FaJs className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },
  {
    icon: <FaBootstrap className="text-4xl text-violet-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: (
      <HiBattery100 className="text-4xl text-green-500 lg:text-5xl"></HiBattery100>
    ),
    role: "Experienced",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-cyan-600 lg:text-5xl" />,
    name: "Tailwind",
    experience: (
      <HiBattery100 className="text-4xl text-green-500 lg:text-5xl"></HiBattery100>
    ),
    role: "Experienced",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Node",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-5xl" />,
    name: "MySQL",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },
  {
    icon: <IoLogoPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },
  {
    icon: <IoLogoFigma className="text-4xl text-pink-600 lg:text-5xl" />,
    name: "Figma",
    experience: (
      <HiBattery100 className="text-4xl text-green-500 lg:text-5xl"></HiBattery100>
    ),
    role: "Experienced",
  },
  {
    icon: <SiJest className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Jest",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },

  {
    icon: <FaDocker className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Docker",
    experience: (
      <HiBattery50 className="text-4xl text-yellow-500 lg:text-5xl" />
    ),
    role: "Intermediate",
  },
  {
    icon: <FaVideo className="text-4xl text-orange-300 lg:text-5xl" />,
    name: "Video Editing",
    experience: (
      <HiBattery100 className="text-4xl text-green-500 lg:text-5xl"></HiBattery100>
    ),
    role: "Experienced",
  },
];

export const EXPERIENCES = [
  {
    title: "Full Stack Development Intern",
    company: "Why Global Services",
    duration: "July 2024 - Present",
    description: [
      "Developed a responsive web application, resulting in a 40% increase in user engagement.",
      "Designed and integrated APIs, significantly enhancing the application's overall functionality.",
      "Leveraged modern JavaScript frameworks, such as React, to build dynamic user interfaces, improving interactivity and user experience.",
      "Led a cross-functional team in agile development sprints, boosting project completion rates by 20%.",
      "Managed version control and continuous integration processes using GitHub, ensuring seamless and efficient team collaboration.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Com Computer Applications",
    institution: "Ramakrishna Mission Vivekananda College",
    duration: "July 2021 - May 2024",
    percentage: "The overall percentage stands at 74%",
    description:
      "Focused on the integration of commerce and computer applications, gaining a solid foundation in programming and database management. Developed projects combining business concepts with Customer Buying perference towards hyundai cars, Acquired skills in accounting software and data analysis. Graduated with a strong academic record.",
  },
  {
    degree: "Commerce with Computer Applications (HSC)",
    institution: "R.P.C Matriculation Higher Secondary School",
    duration: "June 2018 - April 2021",
    percentage: "The overall percentage stands at 84%",
    description:
      "Studied the integration of commerce principles with computer applications, focusing on areas such as accounting software, office tools, and basic programming concepts. Gained practical knowledge in business technologies and data management. Actively participated in academic projects and extracurricular activities, strengthening my foundation in both commerce and technology. Graduated with excellent academic performance.",
  },
];

export const HOBBIES = [
  {
    id: 1,
    name: "Formula 1 Enthusiast",
    image: hobbies1,
  },
  {
    id: 2,
    name: "Passionate Home Chef",
    image: hobbies2,
  },
  {
    id: 3,
    name: "Tech Explorer",
    image: hobbies3,
  },
  {
    id: 4,
    name: "Adventure Seeker",
    image: hobbies4,
  },
  {
    id: 5,
    name: "Fitness Fanatic",
    image: hobbies5,
  },
  {
    id: 6,
    name: "Diecast Car Collector",
    image: hobbies6,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/shivaskn",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/shivakumar11/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
