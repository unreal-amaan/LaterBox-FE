import Main from "./Main";
import Nav from "./Nav";
import Top from "./Top";
const Home = () => {
  return (
    <div className="bg-gradient-light dark:bg-gradient-dark theme-transition min-h-screen transition-colors">
      <Nav />
      <div className="px-6 pt-6 sm:px-10 md:px-18">
        <Top />
      </div>
      <section className="h-full w-full px-6 py-6 sm:px-10 md:px-18">
        <Main />
      </section>
    </div>
  );
};

export default Home;
