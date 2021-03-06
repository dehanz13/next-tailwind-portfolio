import Image from "next/image";

import Coffee from "./Coffee";

import {
  GitHub as GithubIcon,
  Linkedin as LinkedinIcon,
  Dribbble as DribbleIcon,
  Mail as MailIcon,
} from "react-feather";

const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center items-center mb-5 flex-shrink-0">
        <Image
          src="/static/images/logo2.svg"
          alt="Picture of the author"
          width={45}
          height={45}
        />
        <div className="ml-3 text-bluegray text-sm font-display leading-4">
          Danniel
          <div className="font-bold">Hansel</div>
        </div>
      </div>
      {/* <div className="flex items-center text-center justify-center mx-auto mb-5">
        <Coffee />
      </div> */}
      <div className="flex flex-grow items-center justify-center">
        <a className="mr-5" href="https://github.com/dehanz13">
          <GithubIcon color="#9499a2" size={18} />
        </a>
        <a className="mr-5" href="https://github.com/dehanz13">
          <LinkedinIcon color="#9499a2" size={18} />
        </a>
        <a className="mr-5" href="https://github.com/dehanz13">
          <DribbleIcon color="#9499a2" size={18} />
        </a>
        <a href="https://github.com/dehanz13">
          <MailIcon color="#9499a2" size={18} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
