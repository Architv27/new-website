import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DevelopmentPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    backgroundColor: '#121212', 
    color: '#FFF', 
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
  };

  const quoteVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1.0 } } 
  };

  // Fetch quotes on component mount
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  // Function to transition to the next quote  
  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  // Update quote every few seconds
  useEffect(() => {
    const intervalId = setInterval(handleNextQuote, 5000); // Time in milliseconds

    return () => clearInterval(intervalId); 
  }, [quotes, handleNextQuote]); 

  return (
    <div style={pageStyle}>
      {quotes.length > 0 ? (
        <motion.p
          style={{ fontSize: '20px', fontStyle: 'italic' }}
          variants={quoteVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={quotes[currentQuoteIndex].text} 
        >
          "{quotes[currentQuoteIndex].text}" - 
          {quotes[currentQuoteIndex].author 
            ? quotes[currentQuoteIndex].author.replace(', type.fit', '').trim() 
            : null
          } 
        </motion.p>
      ) : (
        <p>Loading quotes...</p> 
      )}
    </div>
  );
};

export default DevelopmentPage;