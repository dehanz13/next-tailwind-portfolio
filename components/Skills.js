import Image from "next/image";

const skills = [
  {
    name: "HTML",
    imgUrl: "/static/images/tools/html.svg",
  },
  {
    name: "CSS",
    imgUrl: "/static/images/tools/css.svg",
  },
  {
    name: "JavaScript",
    imgUrl: "/static/images/tools/javascript.svg",
  },
  {
    name: "SCSS",
    imgUrl: "/static/images/tools/sass.svg",
  },
  {
    name: "React",
    imgUrl: "/static/images/tools/react.svg",
  },
  {
    name: "NextJS",
    imgUrl: "/static/images/tools/nextjs.svg",
  },
  {
    name: "TailwindCSS",
    imgUrl: "/static/images/tools/tailwind.svg",
  },
  {
    name: "NodeJS",
    imgUrl: "/static/images/tools/node.svg",
  },
  {
    name: "NPM",
    imgUrl: "/static/images/tools/npm.svg",
  },
  {
    name: "Git",
    imgUrl: "/static/images/tools/git.svg",
  },
  {
    name: "Figma",
    imgUrl: "/static/images/tools/figma.svg",
  },
  {
    name: "Bootstrap 5",
    imgUrl: "/static/images/tools/bootstrap-5.svg",
  },
  {
    name: "Gatsby",
    imgUrl: "/static/images/tools/gatsby.svg",
  },
  {
    name: "jQuery",
    imgUrl: "/static/images/tools/jquery.svg",
  },
  {
    name: "Material UI",
    imgUrl: "/static/images/tools/material-ui.svg",
  },
  {
    name: "AWS",
    imgUrl: "/static/images/tools/aws.svg",
  },
  // {
  //   name: "Firebase",
  //   imgUrl: "/static/images/tools/firebase.svg",
  // },
];

const Skills = () => {
  return (
    <div id="myskills" className="container mx-auto">
      {/* <h3 className="titleafter text-bluegray">My Technical Skills</h3> */}
      <h3 className="text-3xl titleafter text-bluegray">My Technical Skills</h3>
      <div className="flex items-center justify-start flex-wrap py-10 ">
        {skills.map((item, index) => {
          return (
            <div
              key={index}
              className="mb-5 mr-5 md:mb-12 md:mr-12 w-28 h-28 md:w-36 md:h-36 shadow-2xl shadow-bluegray rounded-xl flex items-center justify-center flex-col"
            >
              <div className="hidden md:block">
                <Image
                  src={item.imgUrl}
                  width={40}
                  height={40}
                  alt="Tech Skills"
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src={item.imgUrl}
                  width={32}
                  height={32}
                  alt="Tech Skills"
                />
              </div>
              <br />
              <p className="text-xs md:text-sm font-display">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
