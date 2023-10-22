
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/socialLinks'
import About from './components/about'
import Portfolio from './components/portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
function App() {
  return (
    <div className="bg-gradient-to-b  from-black to-gray-800">
    
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
      
    </div>
  );
}

export default App;
