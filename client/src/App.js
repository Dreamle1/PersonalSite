import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [aboutData, setAboutData] = useState(null);
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch about data
    fetch('/api/about')
      .then(res => res.json())
      .then(data => setAboutData(data))
      .catch(err => console.error('Error fetching about data:', err));

    // Fetch projects data
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjectsData(data))
      .catch(err => console.error('Error fetching projects data:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About data={aboutData} />
      <Projects projects={projectsData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


