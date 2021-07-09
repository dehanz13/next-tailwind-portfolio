import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "react-feather";

const Hero = () => {
  return (
    <div className="bg-gray-200 flex mt-0 mb-24 w-full h-2/4">
      {/* <div className="w-full mt-28 mb-24 md:my-0 flex flex-col md:min-h-screen items-start justify-start md:justify-center container mx-auto">
        <p className="text-2xl md:text-4xl leading-10 md:leading-tight max-w-2xl">
          Hi, I&lsquo;m Danniel - a <strong>Frontend Developer</strong> and{" "}
          <strong>Designer</strong> who loves React.js, the world of open source
          and solving developers&quot; everyday problems.
        </p>
        <div>
          <Link href="#mywork">
            <span className="mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
              <div className="flex flex-row items-center">
                <span className="mr-3">Check out my work</span>
                <ArrowDown color="white" size={30} strokeWidth={3} />
              </div>
            </span>
          </Link>
        </div>
      </div> */}
      <div className="px-8 py-32 max-w-md mx-auto sm:max-w-xl justify-center self-center ">
        <div className="xl:max-w-lg xl:ml-auto">
          <p className="text-2xl md:text-4xl leading-10 md:leading-tight max-w-2xl">
            Hi, I&lsquo;m Danniel - a <strong>Frontend Developer</strong> and{" "}
            <strong>Designer</strong> who loves React.js, the world of open
            source and solving developers&quot; everyday problems.
          </p>
          <div>
            <Link href="#mywork">
              <span className="mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
                <div className="flex flex-row items-center">
                  <span className="mr-3">Check out my work</span>
                  <ArrowDown color="white" size={30} strokeWidth={3} />
                </div>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <Image
          src="/static/images/headshot.png"
          layout="fill"
          objectFit="contain"
          alt="Developer"
          priority={true}
        />
        <svg
          className="absolute inset-y-0 h-full fill-current text-gray-100 w-32 -ml-16"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>
  );
};
export default Hero;
