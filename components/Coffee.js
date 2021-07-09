import Image from "next/image";

function Coffee() {
  return (
    <a
      className="coffeeButton"
      href="https://www.buymeacoffee.com/dannielhansel"
      target="_blank"
      rel="noreferrer noopener"
    >
      {/* <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style="height: 60px !important;width: 217px !important;"
        style={{ height: "60px", width: "217px" }}
      /> */}
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        // style={{ height: "60px", width: "217px" }}
        layout="fill"
        objectFit="contain"
        priority={true}
        // placeholder="blur"
      />
    </a>
  );
}
export default Coffee;
