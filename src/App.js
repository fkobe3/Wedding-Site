import React, { useEffect, useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Registries from "./components/Registries";
import Footer from './components/Footer';
import './App.css';


function App() {
  
  useEffect(() => {
    document.title = currentPage;
  })
  const menuItems = ['About', 'Registries'];
  const [currentPage, setCurrentPage] = useState(menuItems[0]);
  // switch statement here 
  const renderPage = () => {
    console.log("CurrentPage:", currentPage);
    switch(currentPage) {
      
      case 'Registries':
        return <Registries></Registries>

      default:
        return <About></About>
        
    }
  }

  return (
        
    <div>
      <Nav 
      menuItems={menuItems}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        {/* <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <Resume></Resume> */
        renderPage()
        }
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
