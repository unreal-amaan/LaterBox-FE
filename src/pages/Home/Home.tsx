import Main from "./Main";
import Nav from "./Nav";
import Top from "./Top";
const Home = () => {
  return (
    <div className="bg-gradient-light dark:bg-gradient-dark theme-transition min-h-screen transition-colors">
      <Nav />
      <div className="px-4 pt-6 sm:px-6 lg:px-14">
        <Top />
      </div>
      <section className="h-full w-full px-4 py-6 sm:px-6 lg:px-14">
        <Main />
      </section>
    </div>
  );
};

export default Home;
