// import images
import Hero_person from "./assets/images/Hero/ghouma-mohamed-developper-web.png";

import php from "./assets/images/Skills/PHP.svg";
import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import symfony from "./assets/images/Skills/symfony.svg";
import prestashop from "./assets/images/Skills/prestashop.png";
import git from "./assets/images/Skills/git.png";

// import services_logo1 from "./assets/images/Services/logo1.png";
// import services_logo2 from "./assets/images/Services/logo2.png";
// import services_logo3 from "./assets/images/Services/logo3.png";

// import project1 from "./assets/images/projects/img1.png";
// import project2 from "./assets/images/projects/img2.png";
// import project3 from "./assets/images/projects/img3.png";
// import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/ghouma-mohamed.png";
import Hireme_person2 from "./assets/images/Hireme/ghouma-mohamed.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall, MdDesignServices } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { BiDevices } from "react-icons/bi";
import { HiServer } from "react-icons/hi";
import { BsLinkedin, BsGithub, BsFillDatabaseFill } from "react-icons/bs";
import { TbSmartHome, TbApi } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
      arealabel: "home"
    },
    {
      link: "#skills",
      icon: BiUser,
      arealabel: "my skills"
    },
    {
      link: "#services",
      icon: RiServiceLine,
      arealabel: "my services"
    },
    // {
    //   link: "#projects",
    //   icon: RiProjectorLine,
    //   arealabel: "home"
    // },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
      arealabel: "contact me"
    },
  ],
  hero: {
    title: "Hello 👋",
    firstName: "MOHAMED",
    LastName: "GHOUMA",
    btnText: "Hire Me",
    image: Hero_person,
    shortDescription: "Hello and welcome to my portfolio! I'm Ghouma Mohamed, a Full Stack Web Developer based in Sousse, Tunisia. With a passion for creating engaging and intuitive user experiences, I specialize in technologies such as PHP, Symfony, React, and more. Whether you're looking to build a dynamic web application, optimize an existing site, or simply chat about all things web development, I'd love to connect and discuss how I can help bring your ideas to life.",
    downloadText: "Download & fetch My CV 👇",
    downloadBtn: "📄 Download My CV",
    downloadBtnFr: "📄 Download My CV (In French)",
    hero_content: [
      {
        count: "7+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "50+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "PHP",
        para: "Hypertext Preprocessor",
        logo: php,
      },
      {
        name: "Node js",
        para: "open-source JavaScript runtime environment",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Open-source front-end JavaScript library",
        logo: reactjs,
      },
      {
        name: "Symfony",
        para: "Open-source PHP web application framework",
        logo: symfony,
      },
      {
        name: "Prestashop",
        para: "Open source e-commerce platform",
        logo: prestashop,
      },
      {
        name: "Git",
        para: "Distributed version control system",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Front-end Development",
    service_content: [
      {
        title: "Responsive Design",
        para: "I specialize in creating visually appealing websites that look great on any device. I use modern front-end technologies such as ReactJS and Bootstrap to create responsive, user-friendly designs that are optimized for speed and performance.",
        logo: BiDevices,
      },
      {
        title: "UI/UX Design",
        para: "I believe that user experience is one of the most important aspects of web development. I create intuitive, user-friendly interfaces that are easy to navigate and provide a seamless experience for visitors.",
        logo: MdDesignServices,
      },
      {
        title: "Performance Optimization",
        para: "I understand that website speed is a critical factor in user engagement and search engine rankings. I optimize websites for fast load times by minimizing file sizes, using caching techniques, and implementing other performance optimizations.",
        logo: CgPerformance,
      },
    ],
  },
  servicestow: {
    title: "Services",
    subtitle: "Back-end Development",
    service_content: [
      {
        title: "PHP Development",
        para: "I have extensive experience working with PHP frameworks such as Symfony. I use these frameworks to build secure, scalable web applications with complex functionality.",
        logo: HiServer,
      },
      {
        title: "Database Management",
        para: "I am proficient in database design and management, using technologies such as MySQL and PostgreSQL. I create efficient database schemas and implement optimized queries to ensure high performance and reliability.",
        logo: BsFillDatabaseFill,
      },
      {
        title: "API Development",
        para: "I have experience developing RESTful APIs using frameworks such as Symfony and ExpressJS. I use best practices such as versioning, rate limiting, and authentication to create secure, scalable APIs.",
        logo: TbApi,
      },
    ],
  },
  // Projects: {
  //   title: "Projects",
  //   subtitle: "MY CREATION",
  //   image: person_project,
  //   project_content: [
  //     {
  //       title: "Gym Website",
  //       image: project1,
  //     },
  //     {
  //       title: "Social Media web",
  //       image: project2,
  //     },
  //     {
  //       title: "Creative Website",
  //       image: project3,
  //     },
  //   ],
  // },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: `<h3 class="title">Open to New Opportunities</h3>
    <p>I'm currently seeking new opportunities in web development, including both full-time job opportunities and project-based work. With 7 years of experience in Symfony PHP, ReactJS, jQuery, and more, I'm confident that I can provide the skills and expertise you need to achieve your goals.
    <p>&nbsp;</p>
    <h3 class="title">What I Can Offer</h3>
    <p>Custom web development services tailored to your needs</p>
    <p>Expertise in Symfony PHP, ReactJS, jQuery, and more</p>
    <p>High-quality work delivered on time and within budget</p>
    <p>A commitment to open communication and collaboration throughout the project lifecycle</p>
    <p>&nbsp;</p>
    <h3 class="title">Get in Touch 🤝</h3>
    <p>If you're interested in discussing a full-time job opportunity or a web development project, please feel free to contact me at contact@ghoumamohamed.com. I'm happy to discuss your requirements and provide a detailed quote or discuss potential employment. Let's create something great together!</p>`,
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "contact@ghoumamohamed.com",
        icon: GrMail,
        link: "mailto:contact@ghoumamohamed.com",
      },
      {
        text: "+216 53 63 17 96",
        icon: MdCall,
        link: "https://wa.me/0021653631796",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/mohamed-ghouma-a4707b7b",
      },
      {
        text: "Github",
        icon: BsGithub,
        link: "https://github.com/ghoumatn",
      },
    ],
  },
  Footer: {
    text: "Created with ❤️ " + (new Date().getFullYear()	),
  },
};
