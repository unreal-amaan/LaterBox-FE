import Nav from "./Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-light dark:bg-gradient-dark theme-transition min-h-screen transition-colors">
      <Nav />
      <div className="px-4 pt-6 sm:px-6 lg:px-14">
        {children}
      </div>
    </div>
  );
};

export default Layout;
