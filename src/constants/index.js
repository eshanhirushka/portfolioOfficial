import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vuejs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  mysql,
  bootstrap,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  me,
  CV_Duncan,
  github,
  instagram,
  facebook,
  linkedin,
  profile,
  team1,
} from "../assets";

const CVDuncan = CV_Duncan

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "cv",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Graphics Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const education = [
  {
    title: "Nalanda College",
    company_name: "Colombo 10",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2009 - Dec 2014",
    points: [
      "GCE Ordinary Level Examination",
    ],
  },
  {
    title: "DS Senanayaka National School",
    company_name: "Ampara",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Aug 2017",
    points: [
      "GCE Advanced Level Examination in Commerce",
    ],
  },
  {
    title: "General Sir John Kotelawala Defence University",
    company_name: "Rathmalana",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Feb 2022",
    points: [
      "BSc (Hons) in Information Technology",
    ],
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "SLT Digital Service",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Feb 2022",
    points: [
      "Development of visually applying websites.",
      "E-Commerce & Package web developments",
      "SEO & Google Analytics",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Skilled web designer who learns quickly, can work on multiple projects at once, and achieves goals. ",
    name: "Ajantha Lakmal",
    designation: "Senior Software Engineer",
    company: "CMS",
    image: "https://ajanthalakmal.tk/img/ajantha.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Eshan does.",
    name: "Rusiru Liyanage",
    designation: "Chairman",
    company: "Sea Lane",
    image: team1,
  },
  {
    testimonial:
      "It's easy to work with eshan. he can understand clients' needs, and then provide stunning websites.",
    name: "Dimantha Ranganath",
    designation: "QA Engineer",
    company: "Embla",
    image: "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-1/271562379_2052145314959739_3334042707408712869_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGD86OwM6S-7FReLExwU4OkTH-GV7D6PBxMf4ZXsPo8HFTMSbxi9-qIb2-6NPCWhmedQ1XjG09dqJkPC7Ry2kfi&_nc_ohc=dSxFbbegEDYAX_6Rg7z&_nc_ht=scontent.fcmb11-1.fna&oh=00_AfDFL-_dxkueDunZCJqMZg72nRIGo2zMwTLpXzyXbsUO4Q&oe=64178E99",
  },
];

const projects = [
  {
    name: "Reach Me",
    description:
      "Reach Me is a social media platform that enables users to create their profiles, share images, and connect with others through liking, and commenting. and also users can search, and discover their interested content areas. As example cars, animals. And Also the website can be accessed with computers, smartphones, and tablets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io(headless cms)",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/eshanhirushka/reachme.git",
    category: "React",
    project_link: "https://reachmeeh.netlify.app",
  },
  {
    name: "Yariga",
    description:
      "Yariga website is a comprehensive platform that allows users to manage their properties. With the Yariga, users can add, update, and delete properties. The website also automatically locates the location of properties. ongoing changes are adding booking or buying with a payment gateway and messaging.",
    tags: [
      {
        name: "refine",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/eshanhirushka/property_management_system.git",
    category: "React",
    project_link: "https://yarigaproperties.netlify.app",
  },
  {
    name: "TB Cloths",
    description:
      "TH Cloths' e-commerce platform offers a comprehensive shopping experience where users can select items, choose quantities, and add them to their cart. Users can adjust item quantities or remove items, through the cart. When ready to complete their purchase, users can proceed to the Stripe payment gateway to finalize their transactions.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "yello-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/eshanhirushka/ecommerce_sanity-stripe.git",
    category: "React",
    project_link: "https://ecommerce-eshan-projects.vercel.app",
  },
  {
    name: "Post Me",
    description:
      "Post Me is a social media platform that enables users to create their thoughts about a person as family, friends, or strangers anonymously or with identity. after adding a thought website will be created a nice random light color card to keep their thought and display it.",
    tags: [
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "yello-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/eshanhirushka/postme.git",
    category: "React",
    project_link: "https://posttme.netlify.app",
  },
  {
    name: "Freight Forwader",
    description:
      "A freight forwarder website is a platform that provides information and services related to the transportation of goods. It serves as a hub for businesses and individuals who need assistance in shipping products to various destinations. It provides a form to get details of who needs service.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yello-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/eshanhirushka/freight.git",
    category: "HTML",
    project_link: "https://vercel.com/eshanhirushka/freight",
  },
  {
    name: "Portfolio",
    description:
      "A portfolio website is a platform that showcases an individual or company's work, accomplishments, and skills to potential clients, employers, or collaborators. The website includes a collection of examples of past work, professional background details, education, and relevant experience.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yello-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/eshanhirushka/freight.git",
    category: "HTML",
    project_link: "https://portfolioeh.vercel.app",
  },
];

const cvDescription = [
  {
    name: "ID Eshan Hirushka de Silva",
    tel: "+94714913396",
    gmail: "eshanhirushka@gmail.com",
    address: "B/L, 53/1, 5th Avenue, Ampara",
    image: profile,
  },
]

const socialLinks = [
  {
    name: "git",
    url: "https://github.com/eshanhirushka",
    icon: github,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/eshan-hirushka-0a313795/",
    icon: linkedin,
  },
  {
    name: "facebook",
    url: "https://web.facebook.com/eshan.hirushka",
    icon: facebook,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/eshan_hirushka/",
    icon: instagram,
  },
]

export { navLinks, services, technologies, education, experiences, testimonials, projects, cvDescription, CVDuncan, socialLinks };
