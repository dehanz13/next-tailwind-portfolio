import Link from "next/link";
import { ArrowDown } from "react-feather";

const Hero = () => {
  return (
    <div className="w-full mt-28 mb-24 md:my-0 flex flex-col md:min-h-screen items-start justify-start md:justify-center container mx-auto">
      <p className="text-2xl md:text-4xl leading-10 md:leading-tight max-w-2xl">
        Hi, I&lsquo;m Danniel - a <strong>Frontend Developer</strong> and{" "}
        <strong>Designer</strong> who loves React.js, the world of open source
        and solving developers&quot; everyday problems.
      </p>
      <Link href="#mywork">
        <span className="mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3">Check out my work</span>
            <ArrowDown color="white" size={30} strokeWidth={3} />
          </div>
        </span>
      </Link>
    </div>
  );
};
export default Hero;
