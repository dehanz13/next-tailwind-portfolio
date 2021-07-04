import Navbar from "../components/Navbar";

const Container = ({ children }) => {
  return (
    <div
      className="bg-gray-100"
      // style={{
      //   gridTemplateRows: "auto 1fr auto auto",
      // }}
    >
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-gray-100 dark:bg-gray-900"
      >
        {children}
      </main>
    </div>
  );
};

export default Container;
