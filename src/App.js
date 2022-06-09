import Header from './components/Header/header';
import React, { useState, useEffect } from 'react';
import Presentation from './components/Presentation/presentation';
import Featured from './components/Featured/featured';
import PaySection from './components/PaySection/pay_section';
import Testimonials from './components/Testimonial/testimonials';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <div className='w-screen max-w-full bg-gray-100'>
      <Header windowWidth={windowWidth} />
      <Presentation />
      <Featured />
      <PaySection />
      <Testimonials />
      <Featured />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
