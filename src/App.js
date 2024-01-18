import AboutMe from './AboutMe';
import './App.css';
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
    </div>
  );
}

export default App;
