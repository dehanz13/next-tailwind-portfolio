const Container = ({ children }) => {
  return (
    <div class="bg-grey-100">
      {/* Nav */}
      <main
        id="skip"
        className="flex flex-col justiy-center bg-grey-100 dark: bg-grey-900"
      >
        {children}
      </main>
    </div>
  );
};
