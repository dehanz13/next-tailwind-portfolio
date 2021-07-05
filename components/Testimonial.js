import Image from "next/image";

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="w-full bg-bluegray-light py-20 px-5 flex flex-col items-center justify-center flex-shrink-0 mt-10"
    >
      <p className="text-xl md:text-3xl text-center max-w-4xl">
        &ldquo;Danniel is quick to iterate on feedback and has a knack for
        understanding the genre you expect in design. I would highly recommend
        him to anyone who is looking to build a great website.&rdquo;
      </p>
      <div className="mt-10 flex flex-col-reverse md:flex-row items-center justify-center font-display text-bluegray flex-shrink-0">
        <div className="relative overflow-hidden rounded-full w-12 h-12 mt-4 md:mr-4 shadow-xl shadow-bluegray">
          <Image
            src="/static/images/headshot.png"
            layout="fill"
            objectFit="cover"
            alt="Author"
            priority={true}
          />
        </div>
        <p className="text-center mr-1">
          <a
            className="font-bold"
            href="https://twitter.com/dannielhansel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danniel Hansel
          </a>
        </p>
        Co-Founder of Twitter
      </div>
    </div>
  );
};
export default Testimonial;
