import Navbar from "../components/Navbar";

const Container = ({ children }) => {
  return (
    <div
      className="flex flex-col flex-grow bg-gray-100 min-h-screen"
      // style={{
      //   gridTemplateRows: "auto 1fr auto auto",
      // }}
    >
      <Navbar />
      {children}
      {/* <main
        id="skip"
        className="flex flex-col justify-center bg-gray-100 dark:bg-gray-900"
      >
        {children}
      </main> */}
    </div>
  );
};

export default Container;
