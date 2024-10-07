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
  project7,
  project8,
  CV_Duncan,
  github,
  instagram,
  facebook,
  linkedin,
  profile,
  team1,
  team2,
  nyc,
  sltc,
  tharaka,
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
    name: "MongoDB",
    icon: mongodb,
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
  },/* 
  {
    name: "Vue JS",
    icon: vuejs,
  }, */
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    date: "Jan 2014 - Aug 2017",
    points: [
      "GCE Advanced Level Examination in Commerce",
    ],
  },
  {
    title: "General Sir John Kotelawala Defence University",
    company_name: "Rathmalana",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Dec 2021",
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
  {
    title: "Manager",
    company_name: "Tharaka Wine Stores",
    icon: tharaka,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - June 2023",
    points: [
      "Involved in managing our family business.",
    ],
  },
  {
    title: "Information Technology Instuctor",
    company_name: "National Youth Corps",
    icon: nyc,
    iconBg: "#E6DEDD",
    date: "June 2023 - Oct 2024",
    points: [
      "Basic concepts of IT",
      "Office Suite",
      "Photoshop, CoralDRAW, Flash, Wordpress",
    ],
  },
  {
    title: "Teaching Assistant - Part Time",
    company_name: "SLTC Research University",
    icon: sltc,
    iconBg: "#E6DEDD",
    date: "June 2022 - Oct 2024",
    points: [
      "Providing support for students' academic activities",
      "Invigilating Exams",
      "Managing documents",
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
    image: "https://bkdevops.lk/wp-content/uploads/2022/09/176835786_1119769988450278_8619451661225816387_n_edited.jpg.webp",
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
    image: team2,
  },
];

const projects = [
  {
    name: "TshirtMaven",
    description:
      "TshirtMaven is a versatile 3D platform that empowers users to customize their t-shirt designs to their liking. Users have the option to either create their own design or request assistance from an AI algorithm that can generate designs according to their specifications. Once the design is complete, users can rotate and zoom in/out to view the design from various angles. To further customize their experience, users can download the design as a PNG file and choose any angle or name they desire.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind.CSS",
        color: "green-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/eshanhirushka/TshirtMaven.git",
    category: "React",
    project_link: "https://tshirtmaven.netlify.app/",
  },
  {
    name: "Reach Me",
    description:
      "Reach Me is a social media platform that empowers users to create personalized profiles, share captivating images, and interact with others through likes and comments. Additionally, users can explore and discover content that piques their interests, such as images related to cars and animals. Whether you're using a computer, smartphone, or tablet, Reach Me is easily accessible and optimized for all devices. Join the community of users today and unlock a world of social connectivity and discovery.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io(cms)",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind.CSS",
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
      "Yariga is website that simplifies the management of properties. With Yariga, users can easily add, update, and delete properties, while the website automatically locates the location of each property for effortless tracking. Ongoing developments include the addition of booking and buying functionality, which will enable users to easily secure properties with a secure payment gateway. Stay tuned for these exciting new features, and take control of your property management with Yariga.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
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
      "TH Cloths' e-commerce platform provides a seamless shopping experience for users, allowing them to easily browse through various items and add their desired products to the cart. The platform enables users to modify their cart by adjusting the quantities or removing any items before proceeding to checkout. To complete their purchase, users can securely make their payment through the Stripe payment gateway, ensuring a smooth and hassle-free transaction process.",
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
      "Post Me is a unique social media platform that allows users to share their thoughts about me in a creative and anonymous way. Users can express their feelings about me as family, friend, or even stranger, with the option to reveal their identity if they choose to do so. Once a thought is submitted, the website generates a beautiful and random light-colored card to preserve and display the thought. This creates a engaging way for users to share their thoughts about me.",
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
    category: "Vue",
    project_link: "https://posttme.netlify.app",
  },
  {
    name: "Freight Forwader",
    description:
      "A freight forwarder website is a one-stop-shop platform that caters to businesses and individuals seeking assistance in transporting their goods to different destinations. The website serves as a hub for information and services related to the shipping process, making it easier for customers to navigate through the complexities of the logistics industry. Additionally, the website provides an easy-to-use form where users can input their details to request shipping services tailored to their needs.",
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
    project_link: "https://freight-dun.vercel.app",
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
