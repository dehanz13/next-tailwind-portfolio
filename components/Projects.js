import Image from "next/image";

import { ExternalLink } from "react-feather";

const projects = [
  {
    key: 0,
    title: "Crab Station & Oyster Bar",
    description:
      "A single-page-app for a seafood restaurant with online order feature.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Gatsby",
      "Bootstrap",
      "Git",
      "AWS",
    ],
    link: "https://www.crabstationodessatexas.com/",
    linkDisplay: "crabstationodessatexas.com",
    imgUrl: "/static/images/projects/crabstation.png",
  },
  {
    key: 1,
    title: "My Portfolio",
    description:
      "A simple, aesthetic, colorful portfolio built with GatsbyJs and Tailwind CSS.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Gatsby",
      "Git",
      "TailwindCSS",
    ],
    link: "https://dannielhansel.netlify.app/",
    linkDisplay: "dannielhansel.netlify.app",
    imgUrl: "/static/images/projects/portfolio.png",
  },
  {
    key: 2,
    title: "Blogger's World",
    description:
      "A blog website that lets users share ideas, thinking and stories.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Gatsby",
      "Bootstrap",
      "SASS",
      "Git",
    ],
    link: "https://blogwithdanniel.netlify.app/",
    linkDisplay: "blogwithdanniel.netlify.app",
    imgUrl: "/static/images/projects/blogsite.png",
  },
];

const Projects = () => {
  return (
    <div id="mywork" className="w-full container mx-auto">
      <h2 className="text-3xl mt-10 mb-6">Projects I&lsquo;ve worked on</h2>
      {/* <div className="grid grid-flow-row grid-cols auto-rows-auto gap-10 items-center justify-start md:justify-center md:grid-cols-2 lg:grid-cols-3"> */}
      <div className="p-6">
        {projects.map(
          ({ key, title, description, tools, link, linkDisplay, imgUrl }) => {
            return (
              <div
                key={key}
                className="p-8 mb-12 md:flex mx-auto justify-between shadow-md hover:shadow-2xl bg-white rounded-lg "
              >
                <div className="w-1/2 px-10">
                  <h3 className="text-3xl font-bold my-6">{title}</h3>
                  <p className="text-2xl mt-12">{description}</p>
                  <p className="uppercase mt-20 mb-4 font-bold">
                    Development Tools
                  </p>
                  <div className="text-bluegray flex flex-row flex-wrap mb-2">
                    {tools.map((tool, index) => {
                      return (
                        <span
                          key={index}
                          className="border-3/2 border-black px-3 py-1 rounded-lg bg-white mb-2 mr-2"
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                  <div className="mt-20">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center justify-start text-bluegray font-bold">
                        <ExternalLink />
                        <span className="pl-2">{linkDisplay}</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative  overflow-hidden">
                  <Image
                    src={imgUrl}
                    // layout="fill"
                    objectFit="cover"
                    alt="Projects"
                    priority={true}
                    height={800}
                    width={1200}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Projects;
