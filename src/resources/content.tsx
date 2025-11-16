import { About, Blog, Gallery, Home, Person, Social, Work } from "@/types";


const person: Person = {
  firstName: "Ashil",
  lastName: "Rahim",
  name: `Ashil Rahim`,
  role: "Web Developer",
  avatar: "/images/avatar.jpg",
  email: "ashilrahimck1@gmail.com",
  location: "kerala/India", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};


const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ashilrahim",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ashil-rahim-aa34a3305/",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "https://x.com/ashilrahimck",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];


const about: About = {
  path: "/",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a web developer focused on building functional, user-friendly digital experiences.
        I work across front-end and back-end technologies, blending clean design with efficient code.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Self-employed",
        timeframe: "2025 - Present",
        role: "Freelance Designer & Developer",
        achievements: [
          <>
            Designed and developed responsive websites using Next.js, HTML, CSS, and JavaScript, ensuring clean layouts and smooth performance across devices.
          </>,
          <>
            Built and customized WordPress sites for small businesses, implementing themes, plugins, and SEO-friendly structures.
          </>,
        ],

      },
      {
        company: "Softroniics",
        timeframe: "2024",
        role: "Full Stack Developer Intern",
        achievements: [
          <>
            Built and deployed full-stack web applications using the MERN stack, focusing on clean architecture and efficient data handling.
          </>,
          <>
            Implemented dynamic front-end features and RESTful APIs, improving application performance and user experience.
          </>,
        ],

      },
    ],
  },
  Education: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Calicut",
        description: <>Studied Computer Science</>,
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",

        tags: [
          { name: "HTML5", icon: "html" },
          { name: "CSS3", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
      {
        title: "Frameworks & Libraries",

        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React.js", icon: "react" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
        images: [],
      },
      {
        title: "Databases",

        tags: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Supabase", icon: "supabase" },
        ],
        images: [],
      },
      {
        title: "Tools",

        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "VS Code", icon: "vscode" },
          { name: "Wordpress", icon: "wordpress" },
          { name: "Postman", icon: "postman" },
          { name: "Vercel", icon: "vercel" },
          { name: "Cursor", icon: "cursor" },
        ],
        images: [],
      },
    ],
  },

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,

};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, about, blog, work, gallery };
