import React, { useEffect, useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';


function App() {
  
  useEffect(() => {
    document.title = currentPage;
  })
  const menuItems = ['About', 'Portfolio', 'Contact', 'Resume' ];
  const [currentPage, setCurrentPage] = useState(menuItems[0]);
  // switch statement here 
  const renderPage = () => {
    console.log("CurrentPage:", currentPage);
    switch(currentPage) {
      
      case 'Portfolio':
        return <Portfolio></Portfolio>
        break;

      case 'Contact':
        return <Contact></Contact>
        break;

      case 'Resume':
        return <Resume></Resume>
        break;

      default:
        return <About></About>
        break;
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
