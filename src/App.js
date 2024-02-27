import AboutMe from './AboutMe';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Projects from './Projects';
import TechStack from './TechStack';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <TechStack />
      <Projects />
      <AboutMe />
      <Footer/>
    </div>
  );
}

export default App;
