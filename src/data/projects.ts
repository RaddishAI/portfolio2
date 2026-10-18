export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string;
  image: string;
  imageCaption: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    slug: "css-frameworks",
    title: "Social App",
    category: "CSS Frameworks",
    description:
      "A responsive social application created for the CSS Frameworks course assignment, with a focus on structured layout and consistent UI styling.",
    content:
      "Social App was developed as part of the CSS Frameworks course assignment at Noroff. The project focuses on building a responsive user interface using a CSS framework.",
    image: "/assets/projects/socialapp.webp",
    imageCaption:
      "Screenshot of Social App, developed for the CSS Frameworks course assignment.",
    liveUrl: "https://socialpageraddish.netlify.app/",
    githubUrl: "https://github.com/RaddishAI/css2.0",
  },
  {
    slug: "javascript-frameworks",
    title: "JSWS",
    category: "JavaScript Frameworks",
    description:
      "A web application developed for the JavaScript Frameworks course assignment at Noroff, focusing on component-based development with React.",
    content:
      "JSWS was developed as part of the JavaScript Frameworks course assignment at Noroff. The project focuses on building a responsive web application using React, reusable components, and modern front-end development practices.",
    image: "/assets/projects/JSWS.webp",
    imageCaption:
      "Screenshot of JSWS, developed for the JavaScript Frameworks course assignment at Noroff.",
    liveUrl: "https://dancing-duckanoo-731a9d.netlify.app/",
    githubUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-raddishai-jsf",
  },
  {
    slug: "semester-project-2",
    title: "Prasis",
    category: "Semester Project 2",
    description:
      "An auction platform built with JavaScript, SCSS, and the Noroff Auction API, featuring auction listings, detailed product views, and user profiles.",
    content:
      "Prasis is an online auction platform developed for Semester Project 2 at Noroff. Registered users can create auction listings, place bids, and manage their profiles, while visitors can browse and search for available auctions. The application integrates with the Noroff Auction API to manage listings, bids, and user data.",
    image: "/assets/projects/prasis.webp",
    imageCaption:
      "Screenshot of Prasis, an online auction platform developed for Semester Project 2 at Noroff.",
    liveUrl: "https://prasis.netlify.app/",
    githubUrl: "https://github.com/RaddishAI/prasis",
  },
];
