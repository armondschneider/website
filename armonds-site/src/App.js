import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (imageUrl) => {
    setHoveredImage(imageUrl);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <header className="header">
        <div className="header-content">
          <p className="opening-p">
            <span className="name">Armond Schneider</span> is a product designer and design engineer living in Phoenix, AZ. <br />
            He is most interested in ideas that help understand and improve the human digital experience.
          </p>
          <time className="timestamp">Updated December 4th, 2024</time>
        </div>
      </header>

      <section className="work-section">
        <p className="section-title">Work</p>

        <div
          className="work-item"
          onMouseEnter={() => handleMouseEnter('./assets/images/paradox-logo.png')}
          onMouseLeave={handleMouseLeave}
        >
          <p className="date">Current</p>
          <p className="role">Web UI Designer at Paradox</p>
        </div>

        <div
          className="work-item"
          onMouseEnter={() => handleMouseEnter('./assets/images/dump.jpg')}
          onMouseLeave={handleMouseLeave}
        >
          <p className="date">2023 - 2024</p>
          <p className="role">Product Designer, Design Engineer at Dump</p>
        </div>

        <div
          className="work-item"
          onMouseEnter={() => handleMouseEnter('./assets/images/hause.jpeg')}
          onMouseLeave={handleMouseLeave}
        >
          <p className="date">2022 - 2023</p>
          <p className="role">Founding Product Designer at Hause</p>
        </div>
      </section>

      {hoveredImage && (
        <motion.div
          className="hover-image"
          style={{
            top: cursorPosition.y + 10,
            left: cursorPosition.x + 10,
            backgroundImage: `url(${hoveredImage})`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        />
      )}
    </div>
  );
}

export default App;