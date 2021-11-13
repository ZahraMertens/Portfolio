import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body">
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    <Footer />
  </div>
  );
}

export default App;
