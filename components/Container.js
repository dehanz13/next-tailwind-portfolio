import Navbar from "../components/Navbar";

const Container = ({ children }) => {
  return (
    <div class="bg-grey-100">
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-grey-100 dark: bg-grey-900"
      >
        {children}
      </main>
    </div>
  );
};

export default Container;
