import { IDetails } from "@/model/Contact";
import { IProjects } from "@/model/Projects";

export const Info = [
  {
    id: 1,
    icon: "fe.png",
    title: "Frontend Engineeer",
    description: `Coding and designing frontend is a big different ball game compared to backend technology. As someone who truly appreciates creating clean and intuitive UI's, I have dived into the npm hole and has appreciated all the things I learned in it.`,
  },
  {
    id: 2,
    icon: "be.png",
    title: "Backend Engineeer",
    description: `I didn't start web programming until I had my first job. Challenging at first but when I started to get the hang of it, it was fun to do and learn. There's so much you can do with Javascript or NodeJS. It became my main programming language for work and at the same time for my hobby.`,
  },
];

export const ContactDetails: IDetails = {
  name: "John Paeldin",
  headline: `Thank you for visiting my portfolio!`,
  contactTag: `I did my best in making this portfolio! If you have appreciated my portfolio and have some offers for me, please don't hesitate to email me in the provided email below, and we can discuss about it. You can also send me a message via LinkedIn.`,
};

export const Projects: IProjects[] = [
  {
    name: "Internal & Customer Portal",
    tag: [
      "NextJS",
      "NodeJS",
      "Azure DevOps",
      "ReactJS",
      "Material UI",
      "Styled Components",
      "Custom NPM Library",
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Rest API",
    ],
    details: `A portal built for the customers of Vesta to view and track their transactions and other details through the web.`,
    imgBackground: `/img/vnext.png`,
    url: 'https://vesta.io'
  },
  {
    name: "vNext Shopify Plugin",
    tag: [
      "Shopify Plugin",
      "NodeJS",
      "ExpressJS",
      "ReactJS",
      "Azure DevOps",
      "Rest API",
    ],
    details: `A shopify plugin to integrate Shopify e-commerce websites to vNext Fraud System.`,
    imgBackground: `/img/vnext.png`
  },
  {
    name: "vNext Data Collector",
    tag: [
      "NodeJS",
      "ExpressJS",
      "ReactJS",
      "Azure DevOps",
      "WebPack",
      "VanillaJS",
      "Rest API",
    ],
    details: `A javascript file that has been exposed for vNext customers to integrate. This script can be configured depending on who the user is. If the customer has their very own website and they want to integrate with Vesta Fraud detection and insights product, they can use this script.`,
    imgBackground: `/img/dc.png`,
  },
  {
    name: "vNext Demo Environment",
    tag: [
      "NextJS",
      "NodeJS",
      "Azure DevOps",
      "ReactJS",
      "Material UI",
      "Styled Components",
      "Custom NPM Library",
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Rest API",
    ],
    details: `A demo environment to be used for Vesta Customer Success Team for them to demo to prospective customers. This has all the functionalites of vNext including fraud detection and insights.`,
    imgBackground: `/img/vnext.png`,
    url: 'https://console.vesta.io'
  },
  {
    name: "vNext Custom Node Library",
    tag: [
      "NextJS",
      "NodeJS",
      "Azure DevOps",
      "ReactJS",
      "Material UI",
      "Styled Components",
      "Custom NPM Library",
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Storybook",
    ],
    details: `A npm library built for vNext project. This has been used for both Internal and Customer Portal of the vNext Project.`,
    imgBackground: `/img/custom.png`,
  },
  {
    name: "Bayan 911 Mobile App",
    tag: [
      "ReactJS",
      "ReactNative",
      "HTML",
      "CSS",
      "SCSS",
      "Javascript",
      "Rest API",
    ],
    details: `An emergency response mobile application that can be used to send emergencies. This will get the user's location and then the responder will proceed to the location to help the user.`,
    imgBackground: `/img/bayan911.png`,
    url: 'https://appadvice.com/app/bayan-911/1482734937'
  },
  {
    name: "Microbiz One Inc. Website",
    tag: [
      "Wordpress",
      "PHP Programming language",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Rest API",
    ],
    details: `The website of the company, Microbiz One Inc. Created using wordpress and PHP programming language.`,
    imgBackground: `/img/mbiz.png`,
    url:'https://microbizone.com/'
  },
  {
    name: "GP Express Web System",
    tag: [
      "PHP Programming language",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Rest API",
      "MVC",
    ],
    details: `GP Express internal system created for GP Express internal employees. They can track their drivers, has records of its customers, orders, transactions and other details.`,
    imgBackground: ``,
  },
  {
    name: "Groby Mobile Grocery App",
    tag: [
      "ReactJS",
      "ReactNative",
      "HTML",
      "CSS",
      "SCSS",
      "Javascript",
      "Rest API",
      "SCSS",
      "Material UI",
      "Styled Components",
    ],
    details: `A mobile application with ordering, cart system, inventory and store management system. This is a solo project in which I have created using ReactNative.`,
    imgBackground: `/img/groby.png`,
  },
  {
    name: "My Portfolio",
    tag: [
      "NextJS",
      "NodeJS",
      "Azure DevOps",
      "ReactJS",
      "Material UI",
      "Styled Components",
      "Custom NPM Library",
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Rest API",
    ],
    details: `My very own personal portfolio that has been created using NextJS framework of React.`,
    imgBackground: `/img/portfolio.png`,
    url: '/'
  },
  {
    name: "GP Express Mobile App",
    tag: ["JAVA", "Android Studio", "SQL", "SQLite", "Rest API",'PHP', 'Mapbox API','Google Maps API'],
    details: `A cargo tracking application that is for GP Express customers and its drivers. The users can book their boxes to let the drivers know that it is ready for pickup and to be shipped to its destination address.`,
    imgBackground: ``,
  },
  {
    name: "RSET Web Services Website",
    tag: ["Wordpress", "NextJS", "SQL", "Rest API"],
    details: `A website project for RSET Web-services. The website offers website creation, logo creation, mobile application development and other design factors.`,
    imgBackground: ``,
  },
];

export const ProjectsGallery = [
  {
    img: '/img/projects/internal/internal1.png',
    title: 'vNext Internal Portal',
    author: '',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/img/projects/internal/internal2.png',
    title: 'vNext Internal Portal',
    author: '',
  },
  {
    img: '/img/projects/internal/internal3.png',
    title: 'vNext Internal Portal',
    author: '',
  },
  {
    img: '/img/projects/demostore/demostore.png',
    title: 'vNext Demo Store',
    author: '',
    cols: 2,
  },
  {
    img: '/img/projects/demostore/demostore2.png',
    title: 'vNext Demo Store',
    author: '',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/img/projects/demostore/demostore3.png',
    title: 'vNext Demo Store',
    author: '',
  },
  {
    img: '/img/projects/demostore/demostore4.png',
    title: 'vNext Demo Store',
    author: '',
  },
  {
    img: '/img/projects/demostore/demostore5.png',
    title: 'vNext Demo Store',
    author: '',
  },
  {
    img: '/img/projects/external/external.png',
    title: 'vNext Customer Portal',
    author: '',
  },
  {
    img: '/img/projects/external/external1.png',
    title: 'vNext Customer Portal',
    author: '',
  },
  {
    img: '/img/projects/external/external2.png',
    title: 'vNext Customer Portal',
    author: '',
  },
  {
    img: '/img/projects/external/external3.png',
    title: 'vNext Customer Portal',
    author: '',
  },
  {
    img: '/img/projects/external/external4.png',
    title: 'vNext Customer Portal',
    author: '',
  },
  {
    img: '/img/projects/external/external5.png',
    title: 'vNext Customer Portal',
    author: '',
  },
  {
    img: '/img/projects/external/external6.png',
    title: 'vNext Customer Portal',
    author: '',
  },
  {
    img: '/img/projects/external/external7.png',
    title: 'vNext Customer Portal',
    author: '',
  },
  {
    img: '/img/projects/rset/rset.png',
    title: 'RSET Web Services',
    author: '',
  },
  {
    img: '/img/projects/groby/groby1.png',
    title: 'Groby Mobile Application',
    author: '',
  },
  {
    img: '/img/projects/groby/groby2.png',
    title: 'Groby Mobile Application',
    author: '',
  },
  {
    img: '/img/projects/groby/groby3.png',
    title: 'Groby Mobile Application',
    author: '',
  },
  {
    img: '/img/projects/groby/groby4.png',
    title: 'Groby Mobile Application',
    author: '',
  },
  {
    img: '/img/projects/groby/groby5.webp',
    title: 'Groby Mobile Application',
    author: '',
  },
  {
    img: '/img/projects/bayan911/bayan911.png',
    title: 'Bayan911 Emergency Response App',
    author: '',
  },
  {
    img: '/img/projects/bayan911/bayan911_2.png',
    title: 'Bayan911 Emergency Response App',
    author: '',
  },
  {
    img: '/img/projects/bayan911/m1.png',
    title: 'Microbiz One Inc. Website',
    author: '',
  },
  {
    img: '/img/projects/shoeshop/shoeshop.png',
    title: 'Shoe Shop Project',
    author: '',
  },
  {
    img: '/img/projects/shoeshop/milkteashop.png',
    title: 'Milk Tea Ordering Project',
    author: '',
  },
];
