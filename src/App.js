import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Box } from '@chakra-ui/react';
import { Contact } from './components/Contact';
import { GitHubStat } from './components/GitHubStat';


function App() {
 

  return (
    <div className="App" id='home' style={{ color: "white", minHeight: "100vh", backgroundColor: "#659DBD" }}>
      <Navbar />
      <Box id="section2">
        <About  />
      </Box>
      <Box id="section3">
        <Skills />
      </Box>
      <Box id="section4">
        <Project />
        <GitHubStat />
      </Box>
      <Box id="section5">
        <Contact />
      </Box>
    </div>
  );
}

export default App;
