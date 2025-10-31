import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "David Josue",
  lastName: "Villegas Salas",
  name: `David Josue Villegas Salas`,
  role: "Software Engineer",
  avatar: "/Portfolio/images/avatar.jpg",
  email: "davidjosuevillegassalas@gmail.com",
  location: "America/Costa_Rica",
  languages: ["Spanish", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>My weekly newsletter about software development and technology</>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DavidSnake3",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/davidsnake-dev",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer Full-Stack</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projects</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Go featured projects
        </Text>
      </Row>
    ),
    href: "/work/software-development-projects",
  },
  subline: (
    <>
      Hello, I'm David, a software developer with over three years of experience
      focused on projecting my moral and ethical values ​​in every project to
      provide high-quality tools and meet your business expectations.
    </>
  ),
};

const about: About = {
  path: "/about",
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
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software developer with over three years of experience. Throughout my
        academic and professional career, I have developed numerous projects
        using both traditional and cutting-edge technologies. Through my
        projects, I have contributed to process optimization, which has
        increased productivity by up to 40% through workflow automation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "TechShop",
        timeframe: "June 2024 – Present",
        role: "App Developer",
        achievements: [
          <>
            Developed modules within the unified Power Apps platform with
            components and tools for different company products to technically
            converge and accelerate product delivery.
          </>,
          <>
            Implemented automated flows using Microsoft Power Automate for bonus
            payments to operators, creating modules and unifying automated flows
            with predefined calculations. Created PDF payment vouchers and
            financial reports sent directly via email.
          </>,
          <>
            Improved existing Power Apps modules by cleaning and optimizing code
            from previous developers, while documenting all bugs and
            improvements respectively.
          </>,
          <>
            Utilized GitHub with colleagues for project collaboration and
            implemented Scrum methodology to ensure better organization and
            efficiency.
          </>,
        ],
      },
      {
        company: "BN Vital",
        timeframe: "October 2022 – December 2022",
        role: "Administrative Assistant Intern",
        achievements: [
          <>
            Prepared physical and digital packages of legal stationery for the
            digitization department.
          </>,
          <>
            Tracked user request documents by creating a small database in
            Excel.
          </>,
          <>
            Performed various basic administrative tasks using the Microsoft
            Office suite.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universidad Técnica Nacional",
        description: <>Software Engineering - January 2023 to 2026</>,
      },
      {
        name: "CTP Rosario Naranjo",
        description: (
          <>Executive Technician for Service Center - Graduated 2022</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>
            Proficient and experienced with a variety of modern programming
            languages used in backend, frontend, and scripting development.
          </>
        ),
        tags: [
          { name: "C#", icon: "csharp" },
          { name: "Java", icon: "java" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Python", icon: "python" },
          { name: "PHP", icon: "php" },
          { name: "C++", icon: "cpp" },
          { name: "C", icon: "c" },
          { name: "SQL", icon: "database" },
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
        ],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <>
            Familiar with modern frameworks and libraries used to build
            scalable, responsive, and maintainable applications.
          </>
        ),
        tags: [
          { name: ".NET", icon: "dotnet" },
          { name: "ASP.NET Core", icon: "dotnet" },
          { name: "Entity Framework", icon: "dotnet" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Angular", icon: "angular" },
          { name: "Vue.js", icon: "vue" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "nodejs" },
          { name: "Laravel", icon: "php" },
          { name: "Bootstrap", icon: "bootstrap" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "jQuery", icon: "javascript" },
          { name: "Flutter", icon: "flutter" },
          { name: "React Native", icon: "react" },
        ],
      },
      {
        title: "Microsoft Power Platform",
        description: (
          <>
            Experienced with Microsoft low-code tools for automation, analytics,
            and business solutions.
          </>
        ),
        tags: [
          { name: "Power Apps", icon: "powerapps" },
          { name: "Power Automate", icon: "powerautomate" },
          { name: "Power BI", icon: "powerbi" },
          { name: "SharePoint", icon: "sharepoint" },
          { name: "Dataverse", icon: "dataverse" },
        ],
      },
      {
        title: "Databases & Cloud",
        description: (
          <>
            Knowledgeable in relational and non-relational databases, as well as
            cloud computing and deployment services.
          </>
        ),
        tags: [
          { name: "SQL", icon: "database" },
          { name: "MySQL", icon: "mysql" },
          { name: "SQLite", icon: "database" },
          { name: "Firebase", icon: "firebase" },
          { name: "Microsoft Azure", icon: "azure" },
          { name: "Google Cloud", icon: "gcp" },
        ],
      },
      {
        title: "Tools & Development Environments",
        description: (
          <>
            Skilled with version control, CI/CD, and modern development tools.
          </>
        ),
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "GitLab", icon: "gitlab" },
          { name: "Docker", icon: "docker" },
          { name: "Visual Studio Code", icon: "vscode" },
          { name: "Visual Studio", icon: "dotnet" },
          { name: "Postman", icon: "postman" },
        ],
      },
      {
        title: "Testing & Methodologies",
        description: (
          <>
            Experience applying testing frameworks and agile development
            methodologies.
          </>
        ),
        tags: [
          { name: "Selenium", icon: "selenium" },
          { name: "Scrum", icon: "agile" },
          { name: "Agile", icon: "agile" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software development and technology...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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

export { person, social, newsletter, home, about, blog, work, gallery };

//ESTE ES LA PLANTILLA ORIGINAL.
/*
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";
const person: Person = {
  firstName: "David Josue",
  lastName: "Villegas Salas",
  name: `David Josue Villegas Salas`,
  role: "Software Developer ",
  avatar: "/images/avatar.jpg",
  email: "davidjosuevillegassalas@gmail.com",
  location: "America/Costa_Rica", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};
const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};
const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DavidSnake3",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/davidsnake-dev",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building innovative software solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};
const about: About = {
  path: "/about",
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
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
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
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
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
export { person, social, newsletter, home, about, blog, work, gallery };
*/
